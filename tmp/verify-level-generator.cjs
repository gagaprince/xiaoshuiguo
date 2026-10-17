#!/usr/bin/env node
/**
 * 第 3 步关卡生成器回归脚本：
 *   node tmp/verify-level-generator.cjs
 *
 * 1. 用 Cocos 自带 tsc 把 assets/scripts/level/generator 编译到临时目录；
 * 2. level 1/2（normal, seed=20261016）与 tmp/level-baselines 固化 JSON 做深度对比；
 * 3. level 1..120 × normal/easy/hard × 多组种子，TS 版与 tmp/gen.js 输出逐字段对比；
 * 4. 全部结果通过 validateLevel（偶数配对/类型/坐标/ID 等校验）。
 *
 * 任何一步不一致即非 0 退出。
 */
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const PROJECT = path.resolve(__dirname, '..');
const TSC = '/Applications/Cocos/Creator/3.8.8/CocosCreator.app/Contents/Resources/resources/3d/engine/node_modules/typescript/bin/tsc';
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), 'level-gen-'));

function fail(message) {
  console.error('FAIL: ' + message);
  process.exit(1);
}

const tsc = cp.spawnSync(process.execPath, [
  TSC,
  path.join(PROJECT, 'assets/scripts/level/generator/LevelTypes.ts'),
  path.join(PROJECT, 'assets/scripts/level/generator/LevelGenerator.ts'),
  '--outDir', OUT,
  '--module', 'commonjs',
  '--target', 'es2017',
  '--skipLibCheck',
], { encoding: 'utf8' });
if (tsc.status !== 0) fail('tsc compile failed:\n' + tsc.stdout + tsc.stderr);

const oldGen = require(path.join(PROJECT, 'tmp/gen.js'));
const newGen = require(path.join(OUT, 'LevelGenerator.js'));

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    const out = {};
    for (const key of Object.keys(value).sort()) out[key] = stable(value[key]);
    return out;
  }
  return value;
}

// 1. 基准 JSON
for (const level of [1, 2]) {
  const file = path.join(PROJECT, `tmp/level-baselines/level-${level}.normal.seed-20261016.json`);
  const baseline = JSON.parse(fs.readFileSync(file, 'utf8'));
  const fresh = newGen.generateLevel(level, { difficulty: 'normal', seed: 20261016 });
  if (JSON.stringify(stable(baseline)) !== JSON.stringify(stable(fresh))) {
    fail(`level ${level} does not match frozen baseline ${file}`);
  }
  const check = newGen.validateLevel(fresh);
  if (!check.valid) fail(`level ${level} baseline invalid: ${check.errors.join(';')}`);
  console.log(`baseline level ${level}: ${fresh.fruits.length} fruits OK`);
}

// 2. 新旧实现逐字段对比 + 3. 校验
let compared = 0;
const seeds = [20261016, 1, 99999, 'hello-level'];
for (const difficulty of ['normal', 'easy', 'hard']) {
  for (let level = 1; level <= 120; level += 1) {
    for (const seed of seeds) {
      const options = { difficulty, seed };
      const oldData = oldGen.generateLevel(level, options);
      const newData = newGen.generateLevel(level, options);
      if (JSON.stringify(stable(oldData)) !== JSON.stringify(stable(newData))) {
        fail(`output differs: ${difficulty} level ${level} seed ${seed}`);
      }
      const check = newGen.validateLevel(newData);
      if (!check.valid) fail(`validation failed: ${difficulty} level ${level}: ${check.errors.join(';')}`);
      compared += 1;
    }
  }
}
console.log(`equivalence + validation: ${compared} cases OK`);
console.log('ALL CHECKS PASSED');
