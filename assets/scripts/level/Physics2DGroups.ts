import { Collider2D, Node, PhysicsSystem2D, RigidBody2D } from 'cc';
import { FRUIT_PHYSICS_GROUP } from './fruit/FruitPrefabMap';

/**
 * settings/v2/packages/project.json 中 physics2d.collisionMatrix 的运行时镜像。
 *
 * 重建工程的 physics2d 工程设置不会被预览/运行时自动注入（实测
 * PhysicsSystem2D.instance.collisionMatrix 为引擎默认值，仅 DEFAULT 位掩码=1），
 * 这里在玩法启动时显式安装，保证分组过滤与原工程一致：
 *
 * 位(1<<index): 1 DEFAULT / 2 fruit / 4 wall / 8 obst / 16 clickFruit / 32 guardrail
 * 掩码: DEFAULT=19(0,1,4) fruit=31(0,1,2,3,4) wall=2(1) obst=18(1,4)
 *       clickFruit=59(0,1,3,4,5) guardrail=16(4)
 */
const RUNTIME_MATRIX = [19, 31, 2, 18, 59, 16];

let installed = false;

/** 幂等地把原工程碰撞矩阵安装到运行时物理系统（必须在任何 fixture 过滤生效前调用）。 */
export function ensurePhysics2DMatrix(): void {
    if (installed) return;
    installed = true;
    const matrix = PhysicsSystem2D.instance.collisionMatrix as unknown as Record<string, number>;
    for (let index = 0; index < RUNTIME_MATRIX.length; index += 1) {
        matrix[String(1 << index)] = RUNTIME_MATRIX[index];
    }
}

/**
 * 切换节点的物理分组（位值，见 FRUIT_PHYSICS_GROUP）。
 * 只写目标值：RigidBody2D.group 的 setter 在 3.8 box2d 后端不同步 fixture，
 * collider.group 的 setter 又会在同帧节点激活切换时让代理状态错乱。
 * 已创建的 fixture 需要在刚体 b2 body 就绪后再调 applyNodePhysicsGroup。
 */
export function setNodePhysicsGroup(node: Node, groupBit: number): void {
    const body = node.getComponent(RigidBody2D);
    if (body) body.group = groupBit;
    for (const collider of node.getComponents(Collider2D)) {
        (collider as unknown as { _group: number })._group = groupBit;
    }
}

/**
 * 在刚体 b2 body 已创建后重建节点全部碰撞体的 fixture（使 setNodePhysicsGroup
 * 写入的分组真正生效）。必须晚于节点激活后的第一个物理 step，否则 fixture 会被
 * 错误地挂到 groundBody 上；在节点未激活时跳过，激活后的延迟 _init 会读取 _group。
 */
export function applyNodePhysicsGroup(node: Node): void {
    for (const collider of node.getComponents(Collider2D)) {
        if (collider.enabledInHierarchy) collider.apply();
    }
}

/** 分组常量再导出，玩法层统一从此处取。 */
export { FRUIT_PHYSICS_GROUP };
