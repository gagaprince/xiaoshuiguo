const parser=require('/tmp/gjs/tools/node_modules/@babel/parser');
const traverse=require('/tmp/gjs/tools/node_modules/@babel/traverse').default;
const t=require('/tmp/gjs/tools/node_modules/@babel/types');
const generate=require('/tmp/gjs/tools/node_modules/@babel/generator').default;
const fs=require('fs'), path=require('path');

const TO=JSON.parse(fs.readFileSync('/tmp/gjs/to_table.json','utf8'));
const RO=new Array(274);
for(const [i,v] of JSON.parse(fs.readFileSync('/tmp/gjs/ro_entries.json','utf8'))) RO[i]=v;

function numKey(node){
  if(t.isNumericLiteral(node)) return node.value;
  if(t.isStringLiteral(node) && /^\d+$/.test(node.value)) return +node.value;
  return null;
}
function resolve(expr, scope, depth=0){
  if(depth>10) return null;
  if(t.isStringLiteral(expr)) return {kind:'str',value:expr.value};
  if(t.isNumericLiteral(expr)) return {kind:'num',value:expr.value};
  if(t.isMemberExpression(expr) && expr.computed){
    const k=numKey(expr.property);
    if(k==null)return null;
    const b=resolve(expr.object,scope,depth+1);
    if(!b)return null;
    if(b.kind==='toTable'){ const row=TO[k]; return Array.isArray(row)?{kind:'toRow',value:row}:null; }
    if(b.kind==='toRow'){ const v=b.value[k]; return typeof v==='string'?{kind:'str',value:v}:null; }
    if(b.kind==='roArr'){ const v=b.value[k]; if(v==null)return null; const n=Number(v); return Number.isFinite(n)?{kind:'num',value:n}:{kind:'str',value:String(v)}; }
    return null;
  }
  if(t.isIdentifier(expr)){
    const binding=scope.getBinding(expr.name);
    if(!binding){
      if(expr.name==='to')return {kind:'toTable'};
      if(expr.name==='ro')return {kind:'roArr',value:RO};
      return null;
    }
    if(binding.path.isVariableDeclarator() && binding.constant) return resolve(binding.path.node.init,binding.scope,depth+1);
    return null;
  }
  return null;
}
function transform(code){
  const ast=parser.parse('('+code+')',{sourceType:'script'});
  for(let iter=0;iter<10;iter++){
    let changed=false;
    traverse(ast,{
      MemberExpression(p){
        if(!p.node.computed)return;
        const r=resolve(p.node,p.scope);
        if(r&&(r.kind==='str'||r.kind==='num')){
          p.replaceWith(r.kind==='str'?t.stringLiteral(r.value):t.numericLiteral(r.value));
          changed=true;
        }
      },
      Identifier(p){
        const binding=p.scope.getBinding(p.node.name);
        if(!binding||!binding.constant||!binding.path.isVariableDeclarator())return;
        const init=binding.path.node.init; if(!init)return;
        if(binding.path.node.id===p.node)return;
        if(t.isMemberExpression(p.parent)&&p.parent.property===p.node&&!p.parent.computed)return;
        const r=resolve(init,binding.scope);
        if(r&&(r.kind==='str'||r.kind==='num')){
          p.replaceWith(r.kind==='str'?t.stringLiteral(r.value):t.numericLiteral(r.value));
          changed=true;
        }
      }
    });
    traverse(ast,{
      VariableDeclaration(p){
        const keep=[];
        for(const d of p.node.declarations){
          if(t.isIdentifier(d.id)&&d.init){
            const b=p.scope.getBinding(d.id.name);
            if(b&&b.constant&&b.references===0&&(t.isMemberExpression(d.init)||t.isIdentifier(d.init)||t.isStringLiteral(d.init)||t.isNumericLiteral(d.init))){changed=true;continue;}
          }
          keep.push(d);
        }
        if(keep.length===0)p.remove();
        else if(keep.length!==p.node.declarations.length)p.node.declarations=keep;
      }
    });
    if(!changed)break;
  }
  return generate(ast,{compact:false,comments:false,jsescOption:{minimal:true}}).code;
}
exports.transform=transform;
if(require.main===module){
  const inDir='/tmp/gjs/mods',outDir='/tmp/gjs/readable';
  fs.mkdirSync(outDir,{recursive:true});
  let fail=0;
  for(const f of fs.readdirSync(inDir)){
    if(!f.endsWith('.js'))continue;
    try{fs.writeFileSync(path.join(outDir,f),transform(fs.readFileSync(path.join(inDir,f),'utf8')));}
    catch(e){fail++;console.log('FAIL',f,e.message);}
  }
  console.log('done fails=',fail);
}
