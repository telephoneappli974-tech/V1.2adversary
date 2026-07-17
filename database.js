"use strict";
const STORAGE_KEY="daggerheart-adversary-manager-v7";
let state;
try{state=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}catch{state={}}
state.library=Array.isArray(state.library)?state.library:[];
state.adversaries=Array.isArray(state.adversaries)?state.adversaries:[];
const root=document.getElementById("databaseGroups");
const search=document.getElementById("searchInput");
const typeFilter=document.getElementById("typeFilter");
function uid(){return crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random())}
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function signature(item){
  return ["name","difficulty","major","severe","hpMax","stressMax","attackMod","damageCount","damageSides","damageMod","advantage"]
    .map(key=>String(item[key]??"")).join("|");
}
function syncExistingAdversaries(){
  const byId=new Map(state.library.map(item=>[item.id,item]));
  const bySignature=new Map(state.library.map(item=>[signature(item),item]));
  state.adversaries.filter(item=>item.saved!==false).forEach(adversary=>{
    if(adversary.libraryId&&byId.has(adversary.libraryId))return;
    const key=signature(adversary);
    let record=bySignature.get(key);
    if(!record){
      record=structuredClone(adversary);
      record.id=uid();
      delete record.libraryId;
      record.updatedAt=new Date().toISOString();
      state.library.push(record);
      byId.set(record.id,record);
      bySignature.set(key,record);
    }
    adversary.libraryId=record.id;
  });
  save();
}
function cloneToGame(record){
  const copy=structuredClone(record);
  copy.id=uid();copy.libraryId=record.id;copy.saved=true;copy.hpMarked=0;copy.stressMarked=0;
  copy.conditions={hidden:false,vulnerable:false,restrained:false};
  copy.selectedExperiences=[];copy.pendingAttackBonus=0;copy.pendingRollBonus=0;
  state.adversaries.push(copy);save();
}
function updateTypes(){
  const current=typeFilter.value;
  const types=[...new Set(state.library.map(item=>item.adversaryType||"Sans type"))].sort((a,b)=>a.localeCompare(b,"fr"));
  typeFilter.innerHTML='<option value="">Tous les types</option>';
  types.forEach(type=>{const option=document.createElement("option");option.value=type;option.textContent=type;typeFilter.appendChild(option)});
  typeFilter.value=types.includes(current)?current:"";
}
function render(){
  updateTypes();root.innerHTML="";
  const query=search.value.trim().toLocaleLowerCase("fr");
  const selectedType=typeFilter.value;
  const records=state.library.filter(item=>{
    const type=item.adversaryType||"Sans type";
    return(!query||String(item.name||"").toLocaleLowerCase("fr").includes(query))&&(!selectedType||type===selectedType);
  });
  const groups=new Map();
  records.forEach(record=>{
    const type=record.adversaryType||"Sans type";
    if(!groups.has(type))groups.set(type,[]);
    groups.get(type).push(record);
  });
  if(!records.length){root.innerHTML='<div class="result">Aucun adversaire.</div>';return}
  [...groups.entries()].sort(([a],[b])=>a.localeCompare(b,"fr")).forEach(([type,items])=>{
    const section=document.createElement("section");section.className="database-group";
    section.innerHTML=`<h2>${type}</h2>`;
    const list=document.createElement("div");list.className="library-list";
    items.sort((a,b)=>String(a.name).localeCompare(String(b.name),"fr")).forEach(record=>{
      const row=document.createElement("div");row.className="library-row";
      row.innerHTML=`<div class="library-main"><strong>${record.name||"Sans nom"}</strong><div class="library-meta">Difficulté ${record.difficulty} · Seuils ${record.major}/${record.severe} · HP ${record.hpMax} · Stress ${record.stressMax}${record.tier?` · Tier ${record.tier}`:""}${record.damageType?` · ${record.damageType}`:""}</div></div><div class="library-actions"></div>`;
      const actions=row.querySelector(".library-actions");
      const add=document.createElement("button");add.textContent="Ajouter au jeu";add.onclick=()=>cloneToGame(record);
      const edit=document.createElement("button");edit.textContent="Détails";edit.onclick=()=>location.href=`details.html?type=library&id=${encodeURIComponent(record.id)}`;
      const duplicate=document.createElement("button");duplicate.textContent="Dupliquer";duplicate.onclick=()=>{const copy=structuredClone(record);copy.id=uid();copy.name=`${record.name} — copie`;state.library.push(copy);save();render()};
      const remove=document.createElement("button");remove.textContent="Supprimer";remove.className="danger-btn";remove.onclick=()=>{if(confirm(`Supprimer « ${record.name} » ?`)){state.library=state.library.filter(item=>item.id!==record.id);save();render()}};
      actions.append(add,edit,duplicate,remove);list.appendChild(row);
    });
    section.appendChild(list);root.appendChild(section);
  });
}
document.getElementById("newBtn").onclick=()=>{
  const record={id:uid(),name:"Nouvel adversaire",difficulty:12,major:5,severe:10,hpMax:5,stressMax:3,attackMod:0,damageCount:1,damageSides:6,damageMod:1,advantage:0,tier:1,adversaryType:"Standard",weaponType:"",damageType:"physical",detailVisibility:{role:true,name:true,difficulty:true,thresholds:true,hpStress:true,attack:true,damage:true,conditions:true,rollType:true,stats:true,tier:true,type:true,weapon:true,damageType:true,experiences:true,features:true},extraStats:[],experiences:[],features:[],updatedAt:new Date().toISOString()};
  state.library.push(record);save();location.href=`details.html?type=library&id=${encodeURIComponent(record.id)}`;
};
document.getElementById("backBtn").onclick=()=>location.href="index.html";
search.oninput=render;typeFilter.onchange=render;
syncExistingAdversaries();render();
