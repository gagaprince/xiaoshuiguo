const fs=require('fs');
const vm=require('node:vm');
const code=fs.readFileSync('/tmp/gjs/full_body.js','utf8');
const registered=[];
const System={register(name,deps,factory){ if(typeof name==='string'){registered.push({name,deps,factory:factory&&factory.toString()});} return {}; }};
const stubs=require('/tmp/gjs/stubs.js');
const sandbox=Object.assign({}, stubs.make(System));
sandbox.define=function(name,factory){ try{ factory(sandbox.require,{exports:{}},{}); }catch(e){} };
vm.createContext(sandbox);
try{ vm.runInContext(code,sandbox,{filename:'body.js'}); }
catch(e){ console.log('ERR', e.message); const st=e.stack.split('\n'); st.forEach(l=>{if(l.includes('body.js'))console.log(l);}); }
console.log('registered', registered.length);
require('fs').mkdirSync('/tmp/gjs/mods',{recursive:true});
const list=[];
for(const m of registered){list.push(m.name); const safe=m.name.replace(/[^A-Za-z0-9_.-]/g,'_'); fs.writeFileSync('/tmp/gjs/mods/'+safe+'.js', m.factory);}
fs.writeFileSync('/tmp/gjs/mods/_list.json', JSON.stringify(list,null,1));
console.log(list.slice(0,80).join('\n'));
