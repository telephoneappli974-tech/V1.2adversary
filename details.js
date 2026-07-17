"use strict";
const STORAGE_KEY="daggerheart-adversary-manager-v7";
const LANGUAGE_KEY="daggerheart-language";
const language=localStorage.getItem(LANGUAGE_KEY)==="en"?"en":"fr";
const text={
  fr:{
    details:"Détails",back:"Retour",save:"Enregistrer",notFound:"Élément introuvable.",
    adversary:"Adversaire",ally:"Allié",library:"Adversaire de la base",
    currentStats:"Statistiques actuelles",classification:"Classification",tier:"Tier",type:"Type",weapon:"Type d’arme",
    damageType:"Type de dégâts",display:"Affichage dans le panneau de combat",
    extraStats:"Stats supplémentaires",experiences:"Expériences",features:"Features",
    add:"+ Ajouter",delete:"Supprimer",statName:"Nom de la stat",value:"Valeur",
    experienceName:"Nom de l’expérience",bonus:"Bonus",featureName:"Nom de la feature",
    description:"Description",noEffect:"Aucun effet automatique",fearRemove:"Retirer de la Fear",
    fearAdd:"Ajouter de la Fear",stressRemove:"Retirer du Stress",nextAttack:"Bonus à la prochaine attaque",
    nextRoll:"Bonus au prochain jet",specialRoll:"Jet spécial",effect:"Effet",addEffect:"+ Ajouter un effet",specialRollName:"Nom du jet",specialRollDiceCount:"Nombre de dés",specialRollDiceSides:"Type de dé",specialRollModifier:"Modificateur",specialRollAdvantage:"Avantage / désavantage",specialRollDamageType:"Catégorie / type",experiencesHelp:"Une expérience cochée pendant le combat ajoute son bonus au prochain jet et retire 1 Fear.",
    difficulty:"Difficulté",thresholds:"Seuils",hp:"HP",stress:"Stress",attack:"Attaque",damage:"Dégâts",
    rollType:"Type de jet",normal:"Jet normal",conditions:"États",hidden:"Caché",vulnerable:"Vulnérable",restrained:"Entravé",none:"Aucun",
    showRole:"Adversary / Ally",showName:"Nom",showDifficulty:"Difficulté",showThresholds:"Seuils",showHpStress:"HP / Stress",showAttack:"Attaque",showDamage:"Dégâts",showConditions:"États",showRollType:"Type de jet",showStats:"Stats supplémentaires",showTier:"Tier",showType:"Type",showWeapon:"Type d’arme",showDamageType:"Type de dégâts",showExperiences:"Expériences",showFeatures:"Features"
  },
  en:{
    details:"Details",back:"Back",save:"Save",notFound:"Item not found.",
    adversary:"Adversary",ally:"Ally",library:"Database Adversary",
    currentStats:"Current Statistics",classification:"Classification",tier:"Tier",type:"Type",weapon:"Weapon Type",
    damageType:"Damage Type",display:"Show in Combat Panel",
    extraStats:"Additional Statistics",experiences:"Experiences",features:"Features",
    add:"+ Add",delete:"Delete",statName:"Statistic name",value:"Value",
    experienceName:"Experience name",bonus:"Bonus",featureName:"Feature name",
    description:"Description",noEffect:"No automatic effect",fearRemove:"Remove Fear",
    fearAdd:"Add Fear",stressRemove:"Remove Stress",nextAttack:"Bonus to next attack",
    nextRoll:"Bonus to next roll",specialRoll:"Special roll",effect:"Effect",addEffect:"+ Add effect",specialRollName:"Roll name",specialRollDiceCount:"Dice count",specialRollDiceSides:"Die type",specialRollModifier:"Modifier",specialRollAdvantage:"Advantage / disadvantage",specialRollDamageType:"Category / type",experiencesHelp:"A checked experience adds its bonus to the next roll and spends 1 Fear.",
    difficulty:"Difficulty",thresholds:"Thresholds",hp:"HP",stress:"Stress",attack:"Attack",damage:"Damage",
    rollType:"Roll Type",normal:"Normal roll",conditions:"Conditions",hidden:"Hidden",vulnerable:"Vulnerable",restrained:"Restrained",none:"None",
    showRole:"Adversary / Ally",showName:"Name",showDifficulty:"Difficulty",showThresholds:"Thresholds",showHpStress:"HP / Stress",showAttack:"Attack",showDamage:"Damage",showConditions:"Conditions",showRollType:"Roll Type",showStats:"Additional Statistics",showTier:"Tier",showType:"Type",showWeapon:"Weapon Type",showDamageType:"Damage Type",showExperiences:"Experiences",showFeatures:"Features"
  }
}[language];

document.documentElement.lang=language;
const params=new URLSearchParams(location.search);
const type=params.get("type")||"adversary";
const itemId=params.get("id");
let state;
try{state=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}")}catch{state={}}
state.adversaries=Array.isArray(state.adversaries)?state.adversaries:[];
state.allies=Array.isArray(state.allies)?state.allies:[];
state.library=Array.isArray(state.library)?state.library:[];
const collection=type==="ally"?state.allies:type==="library"?state.library:state.adversaries;
const item=collection.find(entry=>entry.id===itemId);
const form=document.getElementById("detailsForm");
const notFound=document.getElementById("notFound");
const statsList=document.getElementById("statsList");
const experiencesList=document.getElementById("experiencesList");
const featuresList=document.getElementById("featuresList");

function uid(){return crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random())}
function esc(value){return String(value??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}
function signed(value){const n=Number(value)||0;return n>=0?`+${n}`:String(n)}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
function ensure(){
  item.detailVisibility=item.detailVisibility||{};
  item.extraStats=Array.isArray(item.extraStats)?item.extraStats:[];
  item.experiences=Array.isArray(item.experiences)?item.experiences:[];
  item.features=Array.isArray(item.features)?item.features.map(feature=>({
    id:feature.id||uid(),name:String(feature.name||""),description:String(feature.description||""),
    effects:Array.isArray(feature.effects)?feature.effects.map(effect=>({
      id:effect.id||uid(),type:String(effect.type||"none"),amount:Number(effect.amount)||0,label:String(effect.label||"")
    })):[{id:uid(),type:String(feature.effect||"none"),amount:Number(feature.amount)||0,label:""}]
  })):[];
  item.conditions=item.conditions||{hidden:false,vulnerable:false,restrained:false};
  item.tier=Math.min(4,Math.max(1,Number(item.tier)||1));
  item.adversaryType=String(item.adversaryType||"");
  item.damageType=["magic","physical","tech"].includes(item.damageType)?item.damageType:"";
}
function roleLabel(){return type==="ally"?text.ally:type==="library"?text.library:text.adversary}
function setText(id,value){const el=document.getElementById(id);if(el)el.textContent=value}
function applyLanguage(){
  document.title=`${text.details} — Daggerheart`;
  setText("backText",text.back);setText("saveBtn",text.save);setText("notFound",text.notFound);
  setText("currentStatsTitle",text.currentStats);setText("classificationTitle",text.classification);
  setText("tierLabel",text.tier);setText("typeLabel",text.type);
  setText("weaponLabel",text.weapon);setText("damageTypeLabel",text.damageType);setText("displayTitle",text.display);
  setText("showRoleLabel",text.showRole);setText("showNameLabel",text.showName);
  setText("showDifficultyLabel",text.showDifficulty);setText("showThresholdsLabel",text.showThresholds);
  setText("showHpStressLabel",text.showHpStress);setText("showAttackLabel",text.showAttack);
  setText("showDamageLabel",text.showDamage);setText("showConditionsLabel",text.showConditions);
  setText("showRollTypeLabel",text.showRollType);
  setText("showStatsLabel",text.showStats);setText("showTierLabel",text.showTier);setText("showTypeLabel",text.showType);
  setText("showWeaponLabel",text.showWeapon);setText("showDamageTypeLabel",text.showDamageType);
  setText("showExperiencesLabel",text.showExperiences);setText("showFeaturesLabel",text.showFeatures);
  setText("extraStatsTitle",text.extraStats);setText("experiencesTitle",text.experiences);setText("featuresTitle",text.features);
  setText("addStat",text.add);setText("addExperience",text.add);setText("addFeature",text.add);setText("experiencesHelp",text.experiencesHelp);
}
function renderIdentity(){
  setText("identityRole",roleLabel());setText("identityName",item.name||"—");
  setText("pageTitle",`${text.details} — ${item.name||roleLabel()}`);
  const labels=[];
  if(item.conditions.hidden)labels.push(text.hidden);
  if(item.conditions.vulnerable)labels.push(text.vulnerable);
  if(item.conditions.restrained)labels.push(text.restrained);
  const root=document.getElementById("identityConditions");root.innerHTML=`<strong>${text.conditions}:</strong> ${labels.length?labels.map(esc).join(" · "):text.none}`;
}
function renderCurrentStats(){
  const stats=[
    [text.difficulty,item.difficulty??0],
    [text.thresholds,`${item.major??0} / ${item.severe??0}`],
    [text.hp,`${Math.max(0,(Number(item.hpMax)||0)-(Number(item.hpMarked)||0))} / ${Number(item.hpMax)||0}`],
    [text.stress,`${Math.max(0,(Number(item.stressMax)||0)-(Number(item.stressMarked)||0))} / ${Number(item.stressMax)||0}`],
    [text.attack,signed(item.attackMod)],
    [text.damage,`${Math.max(1,Number(item.damageCount)||1)}d${Math.max(2,Number(item.damageSides)||2)}${signed(item.damageMod)}`],
    [text.rollType,item.advantage>0?`Adv. ×${item.advantage}`:item.advantage<0?`Disadv. ×${Math.abs(item.advantage)}`:text.normal]
  ];
  document.getElementById("currentStats").innerHTML=stats.map(([label,value])=>`<div class="current-stat"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join("");
}
function removeButton(handler){const button=document.createElement("button");button.type="button";button.textContent=text.delete;button.className="danger-btn";button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();handler(event)});return button}
function renderStats(){
  statsList.innerHTML="";
  item.extraStats.forEach(stat=>{
    const row=document.createElement("div");row.className="detail-row";
    row.innerHTML=`<input class="stat-name" placeholder="${esc(text.statName)}" value="${esc(stat.name)}"><input class="stat-value" placeholder="${esc(text.value)}" value="${esc(stat.value)}">`;
    row.querySelector(".stat-name").addEventListener("input",event=>{stat.name=event.target.value;saveState()});
    row.querySelector(".stat-value").addEventListener("input",event=>{stat.value=event.target.value;saveState()});
    row.appendChild(removeButton(()=>{item.extraStats=item.extraStats.filter(entry=>entry.id!==stat.id);saveState();renderStats()}));statsList.appendChild(row);
  });
}
function renderExperiences(){
  experiencesList.innerHTML="";
  item.experiences.forEach(exp=>{
    const row=document.createElement("div");row.className="detail-row experience-row";
    row.innerHTML=`<input class="exp-name" placeholder="${esc(text.experienceName)}" value="${esc(exp.name)}"><input class="exp-bonus" type="number" placeholder="${esc(text.bonus)}" value="${Number(exp.bonus)||0}">`;
    row.querySelector(".exp-name").addEventListener("input",event=>{exp.name=event.target.value;saveState()});
    row.querySelector(".exp-bonus").addEventListener("input",event=>{exp.bonus=Number(event.target.value)||0;saveState()});
    row.appendChild(removeButton(()=>{item.experiences=item.experiences.filter(entry=>entry.id!==exp.id);saveState();renderExperiences()}));experiencesList.appendChild(row);
  });
}
function effectOptions(selected){
  const options=[
    ["none",text.noEffect],["fear-remove",text.fearRemove],["fear-add",text.fearAdd],
    ["stress-remove",text.stressRemove],["next-attack",text.nextAttack],["next-roll",text.nextRoll],
    ["special-roll",text.specialRoll]
  ];
  return options.map(([value,label])=>`<option value="${value}" ${value===selected?"selected":""}>${esc(label)}</option>`).join("");
}
function renderFeatureEffects(feature,container){
  container.innerHTML="";
  feature.effects.forEach(effect=>{
    effect.roll=effect.roll||{name:effect.label||"",diceCount:1,diceSides:20,modifier:Number(effect.amount)||0,advantage:0,damageType:""};
    const row=document.createElement("div");row.className="feature-effect-row";
    row.innerHTML=`<select class="feature-effect">${effectOptions(effect.type)}</select>
      <input class="feature-amount" type="number" value="${Number(effect.amount)||0}" placeholder="${esc(text.value)}">
      <div class="special-roll-editor" ${effect.type==="special-roll"?"":"hidden"}>
        <label><span>${esc(text.specialRollName)}</span><input class="special-name" value="${esc(effect.roll.name||"")}" placeholder="${esc(text.specialRollName)}"></label>
        <label><span>${esc(text.specialRollDiceCount)}</span><input class="special-count" type="number" min="1" max="50" value="${Number(effect.roll.diceCount)||1}"></label>
        <label><span>${esc(text.specialRollDiceSides)}</span><select class="special-sides">${[4,6,8,10,12,20,100].map(side=>`<option value="${side}" ${Number(effect.roll.diceSides)===side?"selected":""}>d${side}</option>`).join("")}</select></label>
        <label><span>${esc(text.specialRollModifier)}</span><input class="special-modifier" type="number" value="${Number(effect.roll.modifier)||0}"></label>
        <label><span>${esc(text.specialRollAdvantage)}</span><input class="special-advantage" type="number" min="-10" max="10" value="${Number(effect.roll.advantage)||0}"></label>
        <label><span>${esc(text.specialRollDamageType)}</span><select class="special-damage-type">
          <option value="" ${!effect.roll.damageType?"selected":""}>—</option>
          <option value="physical" ${effect.roll.damageType==="physical"?"selected":""}>Physical</option>
          <option value="magic" ${effect.roll.damageType==="magic"?"selected":""}>Magic</option>
          <option value="tech" ${effect.roll.damageType==="tech"?"selected":""}>Tech</option>
        </select></label>
      </div>`;
    const select=row.querySelector(".feature-effect");
    const amount=row.querySelector(".feature-amount");
    const specialEditor=row.querySelector(".special-roll-editor");
    function updateMode(){
      const special=effect.type==="special-roll";
      specialEditor.hidden=!special;
      amount.hidden=special;
    }
    select.addEventListener("change",event=>{effect.type=event.target.value;updateMode();saveState()});
    amount.addEventListener("input",event=>{effect.amount=Number(event.target.value)||0;saveState()});
    row.querySelector(".special-name").addEventListener("input",event=>{effect.roll.name=event.target.value;effect.label=event.target.value;saveState()});
    row.querySelector(".special-count").addEventListener("input",event=>{effect.roll.diceCount=Math.max(1,Number(event.target.value)||1);saveState()});
    row.querySelector(".special-sides").addEventListener("change",event=>{effect.roll.diceSides=Number(event.target.value)||20;saveState()});
    row.querySelector(".special-modifier").addEventListener("input",event=>{effect.roll.modifier=Number(event.target.value)||0;saveState()});
    row.querySelector(".special-advantage").addEventListener("input",event=>{effect.roll.advantage=Math.max(-10,Math.min(10,Number(event.target.value)||0));saveState()});
    row.querySelector(".special-damage-type").addEventListener("change",event=>{effect.roll.damageType=event.target.value;saveState()});
    updateMode();
    row.appendChild(removeButton(()=>{feature.effects=feature.effects.filter(entry=>entry.id!==effect.id);saveState();renderFeatureEffects(feature,container)}));
    container.appendChild(row);
  });
}
function renderFeatures(){
  featuresList.innerHTML="";
  item.features.forEach(feature=>{
    const row=document.createElement("div");row.className="detail-row feature-card";
    row.innerHTML=`<input class="feature-name" placeholder="${esc(text.featureName)}" value="${esc(feature.name)}">
      <textarea class="feature-description" placeholder="${esc(text.description)}">${esc(feature.description)}</textarea>
      <div class="feature-effects"></div>
      <button class="add-effect" type="button">${esc(text.addEffect)}</button>`;
    row.querySelector(".feature-name").addEventListener("input",event=>{feature.name=event.target.value;saveState()});
    row.querySelector(".feature-description").addEventListener("input",event=>{feature.description=event.target.value;saveState()});
    const effectsRoot=row.querySelector(".feature-effects");
    renderFeatureEffects(feature,effectsRoot);
    row.querySelector(".add-effect").addEventListener("click",event=>{event.preventDefault();event.stopPropagation();feature.effects.push({id:uid(),type:"none",amount:0,label:"",roll:{name:"",diceCount:1,diceSides:20,modifier:0,advantage:0,damageType:""}});saveState();renderFeatureEffects(feature,effectsRoot)});
    row.appendChild(removeButton(event=>{item.features=item.features.filter(entry=>entry.id!==feature.id);saveState();renderFeatures()}));
    featuresList.appendChild(row);
  });
}
function writeForm(){
  form.elements.tier.value=item.tier||1;
  form.elements.adversaryType.value=item.adversaryType||"";form.elements.weaponType.value=item.weaponType||"";form.elements.damageType.value=item.damageType||"";
  const visibility=item.detailVisibility||{};
  ["role","name","difficulty","thresholds","hpStress","attack","damage","conditions","rollType","stats","tier","type","weapon","damageType","experiences","features"].forEach(key=>{
    const formName=`show${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    if(form.elements[formName])form.elements[formName].checked=visibility[key]!==false;
  });
}
function readForm(){
  item.tier=Math.min(4,Math.max(1,Number(form.elements.tier.value)||1));
  item.adversaryType=form.elements.adversaryType.value;item.weaponType=form.elements.weaponType.value.trim();item.damageType=form.elements.damageType.value;
  item.detailVisibility={
    role:form.elements.showRole.checked,name:form.elements.showName.checked,
    difficulty:form.elements.showDifficulty.checked,thresholds:form.elements.showThresholds.checked,
    hpStress:form.elements.showHpStress.checked,attack:form.elements.showAttack.checked,
    damage:form.elements.showDamage.checked,conditions:form.elements.showConditions.checked,
    rollType:form.elements.showRollType.checked,stats:form.elements.showStats.checked,
    tier:form.elements.showTier.checked,type:form.elements.showType.checked,
    weapon:form.elements.showWeapon.checked,damageType:form.elements.showDamageType.checked,
    experiences:form.elements.showExperiences.checked,features:form.elements.showFeatures.checked
  };
  item.updatedAt=new Date().toISOString();saveState();
}
function bindAutosave(){form.addEventListener("input",readForm);form.addEventListener("change",readForm)}

applyLanguage();
if(!item){form.hidden=true;notFound.hidden=false}
else{
  ensure();renderIdentity();renderCurrentStats();writeForm();renderStats();renderExperiences();renderFeatures();bindAutosave();
  document.getElementById("addStat").addEventListener("click",()=>{item.extraStats.push({id:uid(),name:"",value:""});saveState();renderStats()});
  document.getElementById("addExperience").addEventListener("click",()=>{item.experiences.push({id:uid(),name:"",bonus:1});saveState();renderExperiences()});
  document.getElementById("addFeature").addEventListener("click",()=>{item.features.push({id:uid(),name:"",description:"",effects:[{id:uid(),type:"none",amount:0,label:""}]});saveState();renderFeatures()});
}
document.getElementById("saveBtn").addEventListener("click",()=>{if(item)readForm();location.href=type==="library"?"database.html":"index.html"});
document.getElementById("backBtn").addEventListener("click",()=>{if(item)readForm();location.href=type==="library"?"database.html":"index.html"});
window.addEventListener("pagehide",()=>{if(item)readForm()});
