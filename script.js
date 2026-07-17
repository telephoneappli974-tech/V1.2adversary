"use strict";
const TRANSLATIONS={"fr": {"appTitle": "Gestionnaire de combat — Daggerheart", "language": "Langue", "fear": "Fear", "shortRest": "Repos court +1d4", "longRest": "Repos long", "addAdversary": "+ Ajouter un adversaire", "addAlly": "+ Ajouter un allié", "database": "Base de données", "export": "Exporter", "import": "Importer", "autosaveActive": "Sauvegarde automatique active", "saved": "Sauvegardé", "saveError": "Erreur de sauvegarde", "allies": "Alliés", "alliesNote": "Même fiche qu’un adversaire. Un allié sélectionné peut attaquer un adversaire.", "adversaries": "Adversaires", "distanceMap": "Carte des distances", "mapHelp": "Clique sur la carte pour l’activer. Molette : zoom. Déplace les points à la souris.", "lock": "Verrouiller", "unlock": "Déverrouiller", "center": "Centrer", "measure": "Mesurer", "ranges": "Portées", "rangesSelection": "Portées : sélection", "reset": "Réinitialiser", "meleeLegend": "Mêlée : 1,5 m", "veryCloseLegend": "Très proche : 3 m", "closeLegend": "Proche : 9 m", "farLegend": "Loin : 30 m", "mapEmpty": "Ajoute au moins un PJ, allié ou adversaire enregistré.", "ally": "Allié", "adversary": "Adversaire", "player": "PJ", "noAlly": "Aucun allié.", "noAdversary": "Aucun adversaire.", "noPlayer": "Aucun PJ enregistré.", "noEnemy": "Aucun adversaire enregistré.", "chooseAction": "Choisis une action.", "attackNoTarget": "Attaque sans cible", "rollDamage": "Lancer les dégâts", "apply": "Appliquer", "incomingDamage": "Dégâts subis", "difficulty": "Difficulté", "thresholds": "Seuils", "condition": "État", "hidden": "Caché", "vulnerable": "Vulnérable", "restrained": "Entravé", "normalRoll": "Jet normal", "advantage": "Av. ×{n}", "disadvantage": "Désav. ×{n}", "attack": "Attaque", "damage": "Dégâts", "retained": "retenu", "modifier": "mod.", "againstEvasion": "contre Évasion", "againstDifficulty": "contre Difficulté", "success": "RÉUSSIE", "failure": "ÉCHOUÉE", "attackTarget": "Attaquer {name}", "chooseFirst": "Choisis un premier point", "chooseSecond": "Choisis un second point", "clickPin": "Clique sur les points dont tu veux garder les portées.", "melee": "Mêlée", "veryClose": "Très proche", "close": "Proche", "far": "Loin", "outOfRange": "Hors portée", "newAlly": "Nouvel allié", "newAdversary": "Nouvel adversaire", "newPlayer": "Nouveau PJ", "edit": "Modifier", "duplicate": "Dupliquer", "delete": "Supprimer", "save": "Enregistrer", "name": "Nom", "evasion": "Évasion", "cancel": "Annuler", "confirm": "Confirmer", "longRestTitle": "Repos long", "registeredPlayers": "PJ enregistrés et évasion :", "playerCount": "Nombre de PJ", "enterInteger": "Entre un nombre entier de PJ.", "databaseTitle": "Base de données des adversaires", "addEnemyTitle": "Ajouter un adversaire", "newEnemy": "+ Nouvel adversaire", "searchDatabase": "Rechercher dans la base de données", "createInDatabase": "+ Créer dans la base", "searchEnemy": "Rechercher un adversaire", "databaseNote": "Les modifications faites ici n’ajoutent rien à la page de jeu. Les adversaires déjà présents conservent leurs HP, leur stress et leurs états actuels.", "databaseEnemy": "Adversaire de la base", "createEnemyDatabase": "Créer un adversaire dans la base", "saveDatabase": "Enregistrer dans la base", "noDatabase": "La base de données est vide.", "noSearchResult": "Aucun adversaire ne correspond à la recherche.", "add": "Ajouter", "addToGame": "Ajouter au jeu", "copySuffix": " — copie", "invalidFile": "Fichier invalide", "invalidNumber": "Entre un nombre valide.", "noRoll": "Aucun jet.", "noDamageReceived": "Aucun dégât reçu.", "attackModifier": "Modificateur d’attaque", "majorThreshold": "Seuil majeur", "severeThreshold": "Seuil sévère", "hpMax": "HP max", "stressMax": "Stress max", "damageDice": "Dés de dégâts", "advDisadv": "Avantage / désavantage", "diceCount": "Nombre de dés", "diceSides": "Faces des dés", "damageModifier": "Modificateur de dégâts", "editEnemy": "Modifier", "duplicateEnemy": "Dupliquer"}, "en": {"appTitle": "Daggerheart Combat Manager", "language": "Language", "fear": "Fear", "shortRest": "Short Rest +1d4", "longRest": "Long Rest", "addAdversary": "+ Add Adversary", "addAlly": "+ Add Ally", "database": "Database", "export": "Export", "import": "Import", "autosaveActive": "Autosave active", "saved": "Saved", "saveError": "Save error", "allies": "Allies", "alliesNote": "Same sheet as an adversary. A selected ally can attack an adversary.", "adversaries": "Adversaries", "distanceMap": "Distance Map", "mapHelp": "Click the map to activate it. Mouse wheel: zoom. Drag tokens with the mouse.", "lock": "Lock", "unlock": "Unlock", "center": "Center", "measure": "Measure", "ranges": "Ranges", "rangesSelection": "Ranges: select", "reset": "Reset", "meleeLegend": "Melee: 1.5 m", "veryCloseLegend": "Very Close: 3 m", "closeLegend": "Close: 9 m", "farLegend": "Far: 30 m", "mapEmpty": "Add at least one saved PC, ally, or adversary.", "ally": "Ally", "adversary": "Adversary", "player": "PC", "noAlly": "No allies.", "noAdversary": "No adversaries.", "noPlayer": "No saved PCs.", "noEnemy": "No saved adversaries.", "chooseAction": "Choose an action.", "attackNoTarget": "Attack without target", "rollDamage": "Roll Damage", "apply": "Apply", "incomingDamage": "Incoming Damage", "difficulty": "Difficulty", "thresholds": "Thresholds", "condition": "Condition", "hidden": "Hidden", "vulnerable": "Vulnerable", "restrained": "Restrained", "normalRoll": "Normal roll", "advantage": "Adv. ×{n}", "disadvantage": "Disadv. ×{n}", "attack": "Attack", "damage": "Damage", "retained": "kept", "modifier": "mod.", "againstEvasion": "against Evasion", "againstDifficulty": "against Difficulty", "success": "SUCCESS", "failure": "FAILURE", "attackTarget": "Attack {name}", "chooseFirst": "Choose a first token", "chooseSecond": "Choose a second token", "clickPin": "Click tokens whose ranges you want to keep visible.", "melee": "Melee", "veryClose": "Very Close", "close": "Close", "far": "Far", "outOfRange": "Out of range", "newAlly": "New Ally", "newAdversary": "New Adversary", "newPlayer": "New PC", "edit": "Edit", "duplicate": "Duplicate", "delete": "Delete", "save": "Save", "name": "Name", "evasion": "Evasion", "cancel": "Cancel", "confirm": "Confirm", "longRestTitle": "Long Rest", "registeredPlayers": "Saved PCs and Evasion:", "playerCount": "Number of PCs", "enterInteger": "Enter a whole number of PCs.", "databaseTitle": "Adversary Database", "addEnemyTitle": "Add an Adversary", "newEnemy": "+ New Adversary", "searchDatabase": "Search the database", "createInDatabase": "+ Create in database", "searchEnemy": "Search an adversary", "databaseNote": "Changes made here do not add anything to the game page. Adversaries already in play keep their current HP, Stress, and conditions.", "databaseEnemy": "Database Adversary", "createEnemyDatabase": "Create an adversary in the database", "saveDatabase": "Save to database", "noDatabase": "The database is empty.", "noSearchResult": "No adversary matches the search.", "add": "Add", "addToGame": "Add to game", "copySuffix": " — copy", "invalidFile": "Invalid file", "invalidNumber": "Enter a valid number.", "noRoll": "No roll.", "noDamageReceived": "No damage received.", "attackModifier": "Attack Modifier", "majorThreshold": "Major Threshold", "severeThreshold": "Severe Threshold", "hpMax": "Max HP", "stressMax": "Max Stress", "damageDice": "Damage Dice", "advDisadv": "Advantage / Disadvantage", "diceCount": "Number of Dice", "diceSides": "Die Sides", "damageModifier": "Damage Modifier", "editEnemy": "Edit", "duplicateEnemy": "Duplicate"}};
let currentLanguage=localStorage.getItem("daggerheart-language")||"fr";
function t(key,vars={}){
  let text=TRANSLATIONS[currentLanguage]?.[key]??TRANSLATIONS.fr[key]??key;
  Object.entries(vars).forEach(([name,value])=>text=text.replaceAll(`{${name}}`,String(value)));
  return text;
}
function translateDefaultNames(previous,next){
  const oldT=TRANSLATIONS[previous],newT=TRANSLATIONS[next];
  state?.targets?.forEach(x=>{if(x.name===oldT.newPlayer)x.name=newT.newPlayer});
  state?.adversaries?.forEach(x=>{if(x.name===oldT.newAdversary)x.name=newT.newAdversary});
  state?.allies?.forEach(x=>{if(x.name===oldT.newAlly)x.name=newT.newAlly});
}
function applyLanguage(){
  document.documentElement.lang=currentLanguage;
  const select=document.getElementById("languageSelect"); if(select)select.value=currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  document.title=t("appTitle");
  if(typeof updateInstallButton==="function")updateInstallButton();
  if(typeof renderTargets==="function")renderTargets();
  if(typeof renderCards==="function")renderCards();
  if(typeof renderDatabase==="function")renderDatabase();
  if(typeof renderAddAdversaryList==="function")renderAddAdversaryList();
}
function clearDefaultOnFocus(input,entity,type){
  input.addEventListener("focus",()=>{
    const keys=type==="player"?["newPlayer"]:type==="ally"?["newAlly"]:["newAdversary"];
    const defaults=keys.flatMap(k=>[TRANSLATIONS.fr[k],TRANSLATIONS.en[k]]);
    if(defaults.includes(String(entity.name||"").trim())){entity.name="";input.value="";save();}
  },{once:true});
}

const STORAGE_KEY="daggerheart-adversary-manager-v7",MAX_FEAR=12;
let selectedId=null;
let selectedType="adversary";
let editingLibraryId=null;

function id(){return crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random())}
function clamp(v,min,max){return Math.min(max,Math.max(min,v))}
function rollDie(s){return Math.floor(Math.random()*s)+1}
function signed(n){return n>=0?`+${n}`:String(n)}
function esc(v){return String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}
function numberOr(value,fallback=0){const n=Number(value);return Number.isFinite(n)?n:fallback}

function freshTarget(){return{id:id(),name:t("newPlayer"),evasion:10,saved:false}}
function defaultAdversaryValues(){return{
  name:t("newAdversary"),difficulty:12,major:5,severe:10,hpMax:5,stressMax:3,
  attackMod:0,damageCount:1,damageSides:6,damageMod:1,advantage:0
}}
function freshAdversary(){return{
  id:id(),libraryId:null,...defaultAdversaryValues(),hpMarked:0,stressMarked:0,
  conditions:{hidden:false,vulnerable:false,restrained:false},tier:1,adversaryType:"",weaponType:"",damageType:"",detailVisibility:{role:true,name:true,difficulty:true,thresholds:true,hpStress:true,attack:true,damage:true,conditions:true,rollType:true,stats:true,tier:true,type:true,weapon:true,damageType:true,experiences:true,features:true},extraStats:[],experiences:[],features:[],selectedExperiences:[],pendingAttackBonus:0,pendingRollBonus:0,lastRoll:"",lastDamage:"",saved:false
}}
function freshAlly(){
  return{...freshAdversary(),id:id(),name:t("newAlly"),libraryId:null}
}
function normalizeLibraryRecord(record={}){
  const defaults=defaultAdversaryValues();
  return{
    id:record.id||id(),
    name:String(record.name??defaults.name),
    difficulty:numberOr(record.difficulty,defaults.difficulty),
    major:numberOr(record.major,defaults.major),
    severe:numberOr(record.severe,defaults.severe),
    hpMax:Math.max(0,numberOr(record.hpMax,defaults.hpMax)),
    stressMax:Math.max(0,numberOr(record.stressMax,defaults.stressMax)),
    attackMod:numberOr(record.attackMod,defaults.attackMod),
    damageCount:Math.max(1,numberOr(record.damageCount,defaults.damageCount)),
    damageSides:Math.max(2,numberOr(record.damageSides,defaults.damageSides)),
    damageMod:numberOr(record.damageMod,defaults.damageMod),
    advantage:clamp(numberOr(record.advantage,defaults.advantage),-10,10),
    group:String(record.group||""),tier:String(record.tier||""),weaponType:String(record.weaponType||""),damageType:String(record.damageType||""),
    detailVisibility:{
      role:record.detailVisibility?.role!==false,name:record.detailVisibility?.name!==false,
      difficulty:record.detailVisibility?.difficulty!==false,thresholds:record.detailVisibility?.thresholds!==false,
      hpStress:record.detailVisibility?.hpStress!==false,attack:record.detailVisibility?.attack!==false,
      damage:record.detailVisibility?.damage!==false,conditions:record.detailVisibility?.conditions!==false,
      rollType:record.detailVisibility?.rollType!==false,stats:record.detailVisibility?.stats!==false,
      tier:record.detailVisibility?.tier!==false,type:record.detailVisibility?.type!==false,
      weapon:record.detailVisibility?.weapon!==false,damageType:record.detailVisibility?.damageType!==false,
      experiences:record.detailVisibility?.experiences!==false,features:record.detailVisibility?.features!==false
    },
    extraStats:Array.isArray(record.extraStats)?record.extraStats.map(stat=>({id:stat.id||id(),name:String(stat.name||""),value:String(stat.value||"")})):[],
    experiences:Array.isArray(record.experiences)?record.experiences.map(exp=>({id:exp.id||id(),name:String(exp.name||""),bonus:numberOr(exp.bonus,0)})):[],
    features:Array.isArray(record.features)?record.features.map(feature=>({
      id:feature.id||id(),name:String(feature.name||""),description:String(feature.description||""),
      effects:Array.isArray(feature.effects)?feature.effects.map(effect=>({
        id:effect.id||id(),type:String(effect.type||"none"),amount:numberOr(effect.amount,0),label:String(effect.label||"")
      })):[{id:id(),type:String(feature.effect||"none"),amount:numberOr(feature.amount,0),label:""}]
    })):[],
    updatedAt:record.updatedAt||new Date().toISOString()
  }
}
function normalizeCombatAdversary(adversary={}){
  const record=normalizeLibraryRecord(adversary);
  return{
    ...record,
    id:adversary.id||id(),
    libraryId:adversary.libraryId||null,
    hpMarked:clamp(numberOr(adversary.hpMarked,0),0,record.hpMax),
    stressMarked:clamp(numberOr(adversary.stressMarked,0),0,record.stressMax),
    conditions:{
      hidden:adversary.conditions?.hidden===true,
      vulnerable:adversary.conditions?.vulnerable===true,
      restrained:adversary.conditions?.restrained===true
    },
    lastRoll:String(adversary.lastRoll||""),
    lastDamage:String(adversary.lastDamage||""),
    selectedExperiences:Array.isArray(adversary.selectedExperiences)?adversary.selectedExperiences.filter(value=>typeof value==="string"):[],
    pendingAttackBonus:numberOr(adversary.pendingAttackBonus,0),pendingRollBonus:numberOr(adversary.pendingRollBonus,0),
    saved:adversary.saved===true
  }
}
function libraryRecordFromAdversary(adversary,recordId=null){
  return normalizeLibraryRecord({...adversary,id:recordId||id(),updatedAt:new Date().toISOString()})
}
function adversaryFromLibrary(record){
  const clean=normalizeLibraryRecord(record);
  return{
    ...clean,id:id(),libraryId:clean.id,hpMarked:0,stressMarked:0,
    conditions:{hidden:false,vulnerable:false,restrained:false},selectedExperiences:[],pendingAttackBonus:0,pendingRollBonus:0,
    lastRoll:"",lastDamage:"",saved:true
  }
}
function librarySignature(record){
  return ["name","difficulty","major","severe","hpMax","stressMax","attackMod","damageCount","damageSides","damageMod","advantage"]
    .map(key=>String(record[key]??"")).join("|");
}
function normalizeState(raw={}){
  const normalized={
    fear:clamp(numberOr(raw.fear,0),0,MAX_FEAR),
    targets:Array.isArray(raw.targets)?raw.targets.map(target=>({
      id:target.id||id(),name:String(target.name||t("newPlayer")),evasion:numberOr(target.evasion,10),saved:target.saved!==false
    })):[],
    adversaries:Array.isArray(raw.adversaries)?raw.adversaries.map(normalizeCombatAdversary):[],
    allies:Array.isArray(raw.allies)?raw.allies.map(normalizeCombatAdversary):[],
    library:Array.isArray(raw.library)?raw.library.map(normalizeLibraryRecord):[],
    mapPositions:raw.mapPositions&&typeof raw.mapPositions==="object"?raw.mapPositions:{},
    mapView:{
      scale:clamp(numberOr(raw.mapView?.scale,12),1.5,80),
      panX:numberOr(raw.mapView?.panX,60),
      panY:numberOr(raw.mapView?.panY,60)
    },
    selectedMapToken:typeof raw.selectedMapToken==="string"?raw.selectedMapToken:null,
    mapLocked:raw.mapLocked===true,
    mapRangesVisible:raw.mapRangesVisible!==false,
    pinnedRangeTokens:Array.isArray(raw.pinnedRangeTokens)?raw.pinnedRangeTokens.filter(key=>typeof key==="string"):[]
  };

  const libraryById=new Map(normalized.library.map(record=>[record.id,record]));
  const libraryBySignature=new Map(normalized.library.map(record=>[librarySignature(record),record]));
  normalized.adversaries.forEach(adversary=>{
    if(!adversary.saved)return;
    if(adversary.libraryId&&libraryById.has(adversary.libraryId))return;
    const signature=librarySignature(adversary);
    let record=libraryBySignature.get(signature);
    if(!record){
      record=libraryRecordFromAdversary(adversary);
      normalized.library.push(record);
      libraryById.set(record.id,record);
      libraryBySignature.set(signature,record);
    }
    adversary.libraryId=record.id;
  });
  return normalized;
}
function loadState(){
  try{
    const parsed=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(parsed&&typeof parsed==="object")return normalizeState(parsed);
  }catch(_){}
  return normalizeState({});
}
let state=loadState();
let saveStatusTimer=null;
function save(){
  try{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(state));
    const status=document.getElementById("saveStatus");
    if(status){
      status.textContent=t("saved");
      clearTimeout(saveStatusTimer);
      saveStatusTimer=setTimeout(()=>{status.textContent=t("autosaveActive")},1200);
    }
  }catch(error){
    const status=document.getElementById("saveStatus");
    if(status)status.textContent=t("saveError");
    console.error("Sauvegarde impossible",error);
  }
}
function saveAdversaryToLibrary(adversary){
  const index=state.library.findIndex(record=>record.id===adversary.libraryId);
  if(index>=0){
    const updated=libraryRecordFromAdversary(adversary,state.library[index].id);
    state.library[index]=updated;
    adversary.libraryId=updated.id;
    return updated;
  }
  const created=libraryRecordFromAdversary(adversary);
  state.library.push(created);
  adversary.libraryId=created.id;
  return created;
}
function commitEditingAdversaries(){
  let changed=false;
  state.adversaries.forEach(adversary=>{
    if(adversary.saved)return;
    adversary.saved=true;
    saveAdversaryToLibrary(adversary);
    changed=true;
  });
  state.allies.forEach(ally=>{
    if(ally.saved)return;
    ally.saved=true;
    changed=true;
  });
  if(changed)save();
  return changed;
}

function rollAttack(a){
  const extra=Math.abs(a.advantage),rolls=Array.from({length:1+extra},()=>rollDie(20));
  const kept=a.advantage>0?Math.max(...rolls):a.advantage<0?Math.min(...rolls):rolls[0];
  return{rolls,kept,total:kept+(Number(a.attackMod)||0)}
}
function rollDamage(a){
  const count=Math.max(1,Number(a.damageCount)||1),sides=Math.max(2,Number(a.damageSides)||2),mod=Number(a.damageMod)||0;
  const rolls=Array.from({length:Math.min(count,50)},()=>rollDie(sides));
  return{count,sides,mod,rolls,total:rolls.reduce((x,y)=>x+y,0)+mod}
}
function hpRemaining(a){return Math.max(0,a.hpMax-a.hpMarked)}
function stressRemaining(a){return Math.max(0,a.stressMax-a.stressMarked)}
function advText(a){return a.advantage>0?t("advantage",{n:a.advantage}):a.advantage<0?t("disadvantage",{n:Math.abs(a.advantage)}):t("normalRoll")}

function renderFear(){
  document.getElementById("fearValue").textContent=state.fear;
  save();
}

const fearMinusButton=document.getElementById("fearMinus");
const fearPlusButton=document.getElementById("fearPlus");
const shortRestButton=document.getElementById("shortRest");
const longRestButton=document.getElementById("longRest");
const restFeedback=document.getElementById("restFeedback");
const longRestModal=document.getElementById("longRestModal");
const longRestPlayerList=document.getElementById("longRestPlayerList");
const longRestPlayerCount=document.getElementById("longRestPlayerCount");
const longRestError=document.getElementById("longRestError");
const closeLongRestModalButton=document.getElementById("closeLongRestModal");
const cancelLongRestButton=document.getElementById("cancelLongRest");
const confirmLongRestButton=document.getElementById("confirmLongRest");
const addAdversaryModal=document.getElementById("addAdversaryModal");
const closeAddAdversaryModalButton=document.getElementById("closeAddAdversaryModal");
const newCombatAdversaryButton=document.getElementById("newCombatAdversary");
const addAdversarySearch=document.getElementById("addAdversarySearch");
const addAdversaryList=document.getElementById("addAdversaryList");
const databaseModal=document.getElementById("databaseModal");
const closeDatabaseModalButton=document.getElementById("closeDatabaseModal");
const newLibraryAdversaryButton=document.getElementById("newLibraryAdversary");
const databaseSearch=document.getElementById("databaseSearch");
const databaseList=document.getElementById("databaseList");
const libraryEditorModal=document.getElementById("libraryEditorModal");
const libraryEditorForm=document.getElementById("libraryEditorForm");
const libraryEditorTitle=document.getElementById("libraryEditorTitle");
const closeLibraryEditorButton=document.getElementById("closeLibraryEditor");
const cancelLibraryEditorButton=document.getElementById("cancelLibraryEditor");
const dockExperiences=document.getElementById("dockExperiences");
const dockFeatures=document.getElementById("dockFeatures");

function showRestCalculation(lines){
  restFeedback.hidden=false;
  restFeedback.innerHTML=lines.map(line=>esc(line)).join(" • ");
}

fearMinusButton.onclick=()=>{
  state.fear=clamp(state.fear-1,0,MAX_FEAR);
  renderFear();
};

fearPlusButton.onclick=()=>{
  state.fear=clamp(state.fear+1,0,MAX_FEAR);
  renderFear();
};

shortRestButton.onclick=()=>{
  const die=rollDie(4);
  const before=state.fear;
  const theoreticalGain=die;
  state.fear=clamp(before+theoreticalGain,0,MAX_FEAR);
  const actualGain=state.fear-before;
  renderFear();

  showRestCalculation([
    "Repos court",
    `1d4 = ${die}`,
    `Fear : ${before} + ${actualGain} = ${state.fear}`,
    actualGain!==theoreticalGain ? `Gain limité par le maximum de ${MAX_FEAR}` : `Total ${state.fear}/${MAX_FEAR}`
  ]);
};

function closeLongRestModal(){
  longRestModal.hidden=true;
  longRestError.textContent="";
}

function openLongRestModal(){
  const registeredPlayers=state.targets.filter(target=>target.saved);
  longRestPlayerList.innerHTML="";

  if(!registeredPlayers.length){
    const empty=document.createElement("div");
    empty.textContent="Aucun PJ enregistré.";
    longRestPlayerList.appendChild(empty);
  }else{
    registeredPlayers.forEach(target=>{
      const row=document.createElement("div");
      const name=document.createElement("strong");
      const evasion=document.createElement("span");
      name.textContent=target.name||"PJ sans nom";
      evasion.textContent=`Évasion ${Number(target.evasion)||0}`;
      row.append(name,evasion);
      longRestPlayerList.appendChild(row);
    });
  }

  longRestPlayerCount.value=registeredPlayers.length;
  longRestError.textContent="";
  longRestModal.hidden=false;
  requestAnimationFrame(()=>{
    longRestPlayerCount.focus();
    longRestPlayerCount.select();
  });
}

function applyLongRest(){
  const playerCount=Number(longRestPlayerCount.value);
  if(!Number.isInteger(playerCount)||playerCount<0){
    longRestError.textContent="Entre un nombre entier de PJ.";
    longRestPlayerCount.focus();
    return;
  }

  const die=rollDie(4);
  const before=state.fear;
  const theoreticalGain=die+playerCount;
  state.fear=clamp(before+theoreticalGain,0,MAX_FEAR);
  const actualGain=state.fear-before;
  renderFear();

  showRestCalculation([
    "Repos long",
    `1d4 = ${die}`,
    `PJ = ${playerCount}`,
    `Calcul : ${die} + ${playerCount} = ${theoreticalGain}`,
    `Fear : ${before} + ${actualGain} = ${state.fear}`,
    actualGain!==theoreticalGain ? `Gain limité par le maximum de ${MAX_FEAR}` : `Total ${state.fear}/${MAX_FEAR}`
  ]);

  closeLongRestModal();
}

longRestButton.onclick=openLongRestModal;
closeLongRestModalButton.onclick=closeLongRestModal;
cancelLongRestButton.onclick=closeLongRestModal;
confirmLongRestButton.onclick=applyLongRest;
longRestPlayerCount.onkeydown=event=>{
  if(event.key==="Enter")applyLongRest();
  if(event.key==="Escape")closeLongRestModal();
};
longRestModal.onclick=event=>{
  if(event.target===longRestModal)closeLongRestModal();
};

function closeModal(modal){modal.hidden=true}
function openModal(modal){modal.hidden=false}
function libraryMeta(record){
  return `Difficulté ${record.difficulty} · Seuils ${record.major}/${record.severe} · HP ${record.hpMax} · Stress ${record.stressMax} · Attaque ${signed(record.attackMod)} · Dégâts ${record.damageCount}d${record.damageSides}${record.damageMod?signed(record.damageMod):""}`;
}
function filteredLibrary(query){
  const normalized=String(query||"").trim().toLocaleLowerCase("fr");
  return [...state.library]
    .filter(record=>!normalized||record.name.toLocaleLowerCase("fr").includes(normalized))
    .sort((a,b)=>a.name.localeCompare(b.name,"fr",{sensitivity:"base"}));
}
function makeLibraryRow(record,mode){
  const row=document.createElement("div");
  row.className="library-row";
  const main=document.createElement("div");
  main.className="library-main";
  const name=document.createElement("strong");
  name.textContent=record.name||"Adversaire sans nom";
  const meta=document.createElement("div");
  meta.className="library-meta";
  meta.textContent=libraryMeta(record);
  main.append(name,meta);
  const actions=document.createElement("div");
  actions.className="library-actions";

  const addButton=document.createElement("button");
  addButton.type="button";
  addButton.textContent=mode==="picker"?t("add"):t("addToGame");
  addButton.onclick=()=>addLibraryAdversaryToGame(record.id);
  actions.appendChild(addButton);

  if(mode==="database"){
    const editButton=document.createElement("button");
    editButton.type="button";
    editButton.textContent=t("edit");
    editButton.onclick=()=>openLibraryEditor(record.id);

    const duplicateButton=document.createElement("button");
    duplicateButton.type="button";
    duplicateButton.textContent=t("duplicate");
    duplicateButton.onclick=()=>{
      const copy=normalizeLibraryRecord({...record,id:id(),name:`${record.name}${t("copySuffix")}`,updatedAt:new Date().toISOString()});
      state.library.push(copy);
      save();
      renderDatabase();
      renderAddAdversaryList();
    };

    const deleteButton=document.createElement("button");
    deleteButton.type="button";
    deleteButton.className="danger-btn";
    deleteButton.textContent=t("delete");
    deleteButton.onclick=()=>{
      if(!confirm(`Supprimer « ${record.name} » de la base de données ? Les exemplaires déjà ajoutés à la page de jeu resteront présents.`))return;
      state.library=state.library.filter(item=>item.id!==record.id);
      state.adversaries.forEach(adversary=>{if(adversary.libraryId===record.id)adversary.libraryId=null});
      save();
      renderDatabase();
      renderAddAdversaryList();
    };
    actions.append(editButton,duplicateButton,deleteButton);
  }
  row.append(main,actions);
  return row;
}
function renderAddAdversaryList(){
  addAdversaryList.innerHTML="";
  const records=filteredLibrary(addAdversarySearch.value);
  if(!records.length){
    const empty=document.createElement("div");
    empty.className="library-empty";
    empty.textContent=state.library.length?t("noSearchResult"):t("noDatabase");
    addAdversaryList.appendChild(empty);
    return;
  }
  records.forEach(record=>addAdversaryList.appendChild(makeLibraryRow(record,"picker")));
}
function renderDatabase(){
  databaseList.innerHTML="";
  const records=filteredLibrary(databaseSearch.value);
  if(!records.length){
    const empty=document.createElement("div");
    empty.className="library-empty";
    empty.textContent=state.library.length?t("noSearchResult"):t("noDatabase");
    databaseList.appendChild(empty);
    return;
  }
  records.forEach(record=>databaseList.appendChild(makeLibraryRow(record,"database")));
}
function openAddAdversaryModal(){
  addAdversarySearch.value="";
  renderAddAdversaryList();
  openModal(addAdversaryModal);
  requestAnimationFrame(()=>addAdversarySearch.focus());
}
function openDatabaseModal(){
  databaseSearch.value="";
  renderDatabase();
  openModal(databaseModal);
  requestAnimationFrame(()=>databaseSearch.focus());
}
function addNewCombatAdversary(){
  commitEditingAdversaries();
  state.adversaries.push(freshAdversary());
  closeModal(addAdversaryModal);
  renderCards();
  save();
}
function addLibraryAdversaryToGame(recordId){
  const record=state.library.find(item=>item.id===recordId);
  if(!record)return;
  commitEditingAdversaries();
  state.adversaries.push(adversaryFromLibrary(record));
  closeModal(addAdversaryModal);
  renderCards();
  save();
}
function openLibraryEditor(recordId=null){
  editingLibraryId=recordId;
  const record=recordId?state.library.find(item=>item.id===recordId):normalizeLibraryRecord(defaultAdversaryValues());
  if(!record)return;
  libraryEditorTitle.textContent=recordId?`${t("edit")} — ${record.name}`:t("createEnemyDatabase");
  const elements=libraryEditorForm.elements;
  ["name","difficulty","major","severe","hpMax","stressMax","attackMod","damageCount","damageSides","damageMod","advantage"].forEach(key=>{
    elements[key].value=record[key];
  });
  openModal(libraryEditorModal);
  requestAnimationFrame(()=>{if([TRANSLATIONS.fr.newAdversary,TRANSLATIONS.en.newAdversary].includes(elements.name.value.trim()))elements.name.value="";elements.name.focus();});
}
function closeLibraryEditor(){
  editingLibraryId=null;
  closeModal(libraryEditorModal);
}
function saveLibraryEditor(event){
  event.preventDefault();
  const elements=libraryEditorForm.elements;
  const values=normalizeLibraryRecord({
    id:editingLibraryId||id(),
    name:elements.name.value.trim()||"Nouvel adversaire",
    difficulty:elements.difficulty.value,
    major:elements.major.value,
    severe:elements.severe.value,
    hpMax:elements.hpMax.value,
    stressMax:elements.stressMax.value,
    attackMod:elements.attackMod.value,
    damageCount:elements.damageCount.value,
    damageSides:elements.damageSides.value,
    damageMod:elements.damageMod.value,
    advantage:elements.advantage.value,
    updatedAt:new Date().toISOString()
  });
  const index=state.library.findIndex(record=>record.id===editingLibraryId);
  if(index>=0)state.library[index]=values;
  else state.library.push(values);
  save();
  closeLibraryEditor();
  renderDatabase();
  renderAddAdversaryList();
}

addAdversary.onclick=openAddAdversaryModal;
addAlly.onclick=()=>{
  commitEditingAdversaries();
  state.allies.push(freshAlly());
  renderCards();
  save();
};
closeAddAdversaryModalButton.onclick=()=>closeModal(addAdversaryModal);
newCombatAdversaryButton.onclick=addNewCombatAdversary;
addAdversarySearch.oninput=renderAddAdversaryList;
openDatabase.onclick=()=>{location.href="database.html"};
closeDatabaseModalButton.onclick=()=>closeModal(databaseModal);
newLibraryAdversaryButton.onclick=()=>openLibraryEditor();
databaseSearch.oninput=renderDatabase;
closeLibraryEditorButton.onclick=closeLibraryEditor;
cancelLibraryEditorButton.onclick=closeLibraryEditor;
libraryEditorForm.onsubmit=saveLibraryEditor;
[addAdversaryModal,databaseModal].forEach(modal=>{
  modal.addEventListener("click",event=>{if(event.target===modal)closeModal(modal)});
});
libraryEditorModal.addEventListener("click",event=>{
  if(event.target===libraryEditorModal)closeLibraryEditor();
});

document.addEventListener("keydown",event=>{
  if(event.key!=="Escape")return;
  if(!libraryEditorModal.hidden)closeLibraryEditor();
  else if(!addAdversaryModal.hidden)closeModal(addAdversaryModal);
  else if(!databaseModal.hidden)closeModal(databaseModal);
});

addTarget.onclick=()=>{state.targets.push(freshTarget());renderTargets();save()}

function renderTargets(){
  targetsList.innerHTML="";
  state.targets.forEach(target=>{
    const row=document.createElement("div");
    if(!target.saved){
      row.className="target-edit-row";
      row.innerHTML=`<input class="tn" placeholder="${t("name")}"><span class="small-note">${t("evasion")}</span><input class="te" type="number" min="0"><button class="ts">${t("save")}</button><button class="td danger-btn">${t("delete")}</button>`;
      const nameInput=row.querySelector(".tn");
      const evasionInput=row.querySelector(".te");
      nameInput.value=target.name;
      evasionInput.value=target.evasion;
      clearDefaultOnFocus(nameInput,target,"player");
      nameInput.oninput=event=>{target.name=event.target.value;save()};
      evasionInput.oninput=event=>{target.evasion=Number(event.target.value)||0;save()};
      row.querySelector(".ts").onclick=()=>{
        target.saved=true;
        renderTargets();
        renderCards();
        save();
      };
      row.querySelector(".td").onclick=()=>{
        state.targets=state.targets.filter(item=>item.id!==target.id);
        renderTargets();
        renderCards();
        save();
      };
    }else{
      row.className="target-saved-row";
      row.innerHTML=`<span class="target-name"></span><span class="target-evasion"></span><span class="target-saved-actions"><button class="tm icon-btn" title="${t("edit")}">✎</button><button class="deleteTarget icon-btn danger-btn" title="${t("delete")}">🗑</button></span>`;
      row.querySelector(".target-name").textContent=target.name;
      row.querySelector(".target-evasion").textContent=`${target.evasion}`;
      row.onclick=event=>{if(event.target.closest("button"))return;row.classList.toggle("open")};
      row.querySelector(".tm").onclick=event=>{event.stopPropagation();target.saved=false;renderTargets();save()};
      row.querySelector(".deleteTarget").onclick=event=>{
        event.stopPropagation();
        state.targets=state.targets.filter(item=>item.id!==target.id);
        renderTargets();
        renderCards();
        save();
      };
    }
    targetsList.appendChild(row);
  });
  renderDistanceMap();
}
function setRemaining(a,key,delta){
  if(key==="hp")a.hpMarked=clamp(a.hpMarked-delta,0,a.hpMax);
  else a.stressMarked=clamp(a.stressMarked-delta,0,a.stressMax);
}

function applyIncomingDamage(a,value){
  const damage=Number(value);
  if(!Number.isFinite(damage)||damage<0)return'<span class="danger">Entre un nombre valide.</span>';
  let loss=0,label="Aucun dégât";
  if(damage>0&&damage<a.major){loss=1;label="Mineurs"}
  else if(damage>=a.major&&damage<a.severe){loss=2;label="Majeurs"}
  else if(damage>=a.severe){loss=3;label="Sévères"}
  const before=a.hpMarked;a.hpMarked=clamp(a.hpMarked+loss,0,a.hpMax);
  const actual=a.hpMarked-before;
  a.lastDamage=`<b>${damage} dégâts :</b> ${label}, ${actual} HP marqué${actual>1?"s":""}. HP restants : ${hpRemaining(a)}.`;
  save();renderCards();renderDock();return a.lastDamage
}

function collectionFor(type){
  return type==="ally"?state.allies:state.adversaries;
}
function containerFor(type){
  return type==="ally"?allies:cards;
}
function labelFor(type){
  return type==="ally"?t("ally"):t("adversary");
}

function applyFeatureEffects(actor,feature){
  let specialResult=null;
  (feature.effects||[]).forEach(effect=>{
    const amount=Number(effect.amount)||0;
    switch(effect.type){
      case "fear-remove": state.fear=clamp(state.fear-Math.abs(amount||1),0,MAX_FEAR); break;
      case "fear-add": state.fear=clamp(state.fear+Math.abs(amount||1),0,MAX_FEAR); break;
      case "stress-remove": actor.stressMarked=clamp(actor.stressMarked-Math.abs(amount||1),0,actor.stressMax); break;
      case "next-attack": actor.pendingAttackBonus=(Number(actor.pendingAttackBonus)||0)+amount; break;
      case "next-roll": actor.pendingRollBonus=(Number(actor.pendingRollBonus)||0)+amount; break;
      case "special-roll": {
        const d20=rollDie(20);
        const experience=consumeRollBonuses(actor,"roll");
        const total=d20+amount+experience.total;
        specialResult={label:effect.label||feature.name||"Special Roll",roll:d20,modifier:amount+experience.total,total};
        actor.lastRoll=`<b>${esc(specialResult.label)}:</b> d20 [${d20}] ${signed(specialResult.modifier)} → <b>${total}</b>.`;
        break;
      }
    }
  });
  renderFear();save();renderCards();renderDock();
  if(specialResult&&dockResult)dockResult.innerHTML=actor.lastRoll;
}
function renderSavedSecondary(card,actor){
  const root=card.querySelector(".saved-secondary");
  const expRoot=card.querySelector(".saved-experiences");
  const featureRoot=card.querySelector(".saved-features");
  expRoot.innerHTML="";featureRoot.innerHTML="";
  const showExperiences=actor.detailVisibility?.experiences!==false&&(actor.experiences||[]).length>0;
  const showFeatures=actor.detailVisibility?.features!==false&&(actor.features||[]).length>0;
  expRoot.hidden=!showExperiences;featureRoot.hidden=!showFeatures;root.hidden=!(showExperiences||showFeatures);
  if(showExperiences){
    const title=document.createElement("span");title.className="saved-secondary-title";title.textContent=currentLanguage==="en"?"Experiences":"Expériences";expRoot.appendChild(title);
    actor.experiences.forEach(exp=>{
      const label=document.createElement("label");label.className="experience-chip";
      const checked=(actor.selectedExperiences||[]).includes(exp.id);
      label.innerHTML=`<input type="checkbox" ${checked?"checked":""}><span>${esc(exp.name)} (${signed(Number(exp.bonus)||0)})</span>`;
      label.addEventListener("click",event=>event.stopPropagation());
      label.querySelector("input").addEventListener("change",event=>{
        actor.selectedExperiences=actor.selectedExperiences||[];
        if(event.target.checked&&!actor.selectedExperiences.includes(exp.id))actor.selectedExperiences.push(exp.id);
        if(!event.target.checked)actor.selectedExperiences=actor.selectedExperiences.filter(value=>value!==exp.id);
        save();
      });
      expRoot.appendChild(label);
    });
  }
  if(showFeatures){
    const title=document.createElement("span");title.className="saved-secondary-title";title.textContent="Features";featureRoot.appendChild(title);
    actor.features.forEach(feature=>{
      const button=document.createElement("button");button.type="button";button.className="feature-inline-use";
      button.textContent=feature.name||"Feature";button.title=feature.description||feature.name||"Feature";
      button.addEventListener("click",event=>{event.preventDefault();event.stopPropagation();applyFeatureEffects(actor,feature)});
      featureRoot.appendChild(button);
    });
  }
}
function renderCombatantCollection(type){
  const collection=collectionFor(type);
  const container=containerFor(type);
  const selectedCombatant=collection.find(item=>item.id===selectedId&&selectedType===type);

  if(selectedCombatant&&!selectedCombatant.saved){
    selectedId=null;
    combatDock.classList.remove("open");
    document.body.classList.remove("dock-open");
  }

  container.innerHTML="";
  if(!collection.length){
    container.innerHTML=`<div class="result">${type==="ally"?t("noAlly"):t("noAdversary")}</div>`;
    return;
  }

  collection.forEach(a=>{
    const node=cardTemplate.content.cloneNode(true);
    const card=node.querySelector(".card");
    card.dataset.id=a.id;
    card.dataset.type=type;
    card.classList.toggle("ally-card",type==="ally");

    const role=card.querySelector(".combatant-role");
    role.textContent=labelFor(type);
    const visibility=a.detailVisibility||{};
    const setVisible=(element,visible)=>{element.hidden=!visible;element.style.display=visible?"":"none"};
    setVisible(role,visibility.role!==false);
    setVisible(card.querySelector(".saved-name"),visibility.name!==false);
    setVisible(card.querySelector(".saved-difficulty"),visibility.difficulty!==false);
    setVisible(card.querySelector(".saved-thresholds"),visibility.thresholds!==false);
    setVisible(card.querySelector(".saved-attack"),visibility.attack!==false);
    setVisible(card.querySelector(".saved-damage"),visibility.damage!==false);
    setVisible(card.querySelector(".hp-stress"),visibility.hpStress!==false);
    setVisible(card.querySelector(".conditions"),visibility.conditions!==false);
    setVisible(card.querySelector(".saved-rolltype"),visibility.rollType!==false);
    card.querySelector(".saved-difficulty .inline-label").textContent=t("difficulty");
    card.querySelector(".saved-thresholds .inline-label").textContent=t("thresholds");
    card.querySelector(".conditions .inline-label").textContent=t("condition");
    card.querySelector('[data-condition="hidden"]').textContent=t("hidden");
    card.querySelector('[data-condition="vulnerable"]').textContent=t("vulnerable");
    card.querySelector('[data-condition="restrained"]').textContent=t("restrained");
    card.querySelector(".saveAdversary").textContent=t("save");
    card.querySelector(".duplicate").textContent=t("duplicate");
    card.querySelector(".remove").textContent=t("delete");
    card.querySelector(".rollAttack").textContent=t("attackNoTarget");
    card.querySelector(".rollDamage").textContent=t("rollDamage");
    card.querySelector(".applyDamage").textContent=t("apply");
    card.querySelector(".damageTaken").placeholder=t("incomingDamage");

    card.querySelector(".name").placeholder=type==="ally"?t("newAlly"):t("newAdversary");clearDefaultOnFocus(card.querySelector(".name"),a,type);

    card.addEventListener("click",event=>{
      if(!a.saved)event.stopPropagation();
    });

    if(a.saved)card.classList.add("saved");
    if(a.id===selectedId&&selectedType===type)card.classList.add("selected");

    const fields={
      name:card.querySelector(".name"),
      difficulty:card.querySelector(".difficulty"),
      major:card.querySelector(".major"),
      severe:card.querySelector(".severe"),
      hpMax:card.querySelector(".hpMax"),
      stressMax:card.querySelector(".stressMax"),
      attackMod:card.querySelector(".attackMod"),
      damageCount:card.querySelector(".damageCount"),
      damageSides:card.querySelector(".damageSides"),
      damageMod:card.querySelector(".damageMod")
    };

    Object.entries(fields).forEach(([key,element])=>{
      element.value=a[key];
      element.oninput=()=>{
        a[key]=element.type==="number"?Number(element.value):element.value;
        save();
        update();
      };
    });

    const hpDisplay=card.querySelector(".hpDisplay");
    const stressDisplay=card.querySelector(".stressDisplay");
    const advDisplay=card.querySelector(".advDisplay");
    const rollResult=card.querySelector(".rollResult");
    const damageResult=card.querySelector(".damageResult");

    function update(){
      hpDisplay.textContent=`HP ${hpRemaining(a)} / ${a.hpMax}`;
      stressDisplay.textContent=`Stress ${stressRemaining(a)} / ${a.stressMax}`;
      advDisplay.textContent=advText(a);
      rollResult.innerHTML=a.lastRoll||t("noRoll");
      damageResult.innerHTML=a.lastDamage||t("noDamageReceived");
      card.querySelector(".saved-name").textContent=a.name;
      card.querySelector(".difficultyQuick").value=a.difficulty;
      card.querySelector(".thresholdsValue").textContent=`${a.major} / ${a.severe}`;
      card.querySelector(".savedAttackValue").textContent=`ATK : ${signed(Number(a.attackMod)||0)}`;
      card.querySelector(".savedDamageValue").textContent=`${Math.max(1,Number(a.damageCount)||1)}d${Math.max(2,Number(a.damageSides)||2)}${signed(Number(a.damageMod)||0)}`;
      card.querySelector(".savedHpValue").textContent=hpRemaining(a);
      card.querySelector(".savedStressValue").textContent=stressRemaining(a);
      card.querySelector(".savedAdvValue").textContent=advText(a);
      const extraDetails=card.querySelector(".saved-extra-details");
      const detailItems=[];
      if(a.detailVisibility?.tier!==false&&a.tier)detailItems.push(`Tier ${a.tier}`);
      if(a.detailVisibility?.type!==false&&a.adversaryType)detailItems.push(a.adversaryType);
      if(a.detailVisibility?.weapon!==false&&a.weaponType)detailItems.push(a.weaponType);
      if(a.detailVisibility?.damageType!==false&&a.damageType)detailItems.push(a.damageType);
      if(a.detailVisibility?.stats!==false)(a.extraStats||[]).forEach(stat=>{if(stat.name||stat.value)detailItems.push(`${stat.name}: ${stat.value}`)});
      extraDetails.innerHTML=detailItems.map(value=>`<span class="saved-detail-chip">${esc(value)}</span>`).join("");
      renderSavedSecondary(card,a);
      card.querySelectorAll(".condition").forEach(button=>{
        button.classList.toggle("active",!!a.conditions[button.dataset.condition]);
      });
      save();
    }

    card.querySelector(".hpMinus").onclick=()=>{a.hpMarked=clamp(a.hpMarked+1,0,a.hpMax);update()};
    card.querySelector(".hpPlus").onclick=()=>{a.hpMarked=clamp(a.hpMarked-1,0,a.hpMax);update()};
    card.querySelector(".stressMinus").onclick=()=>{a.stressMarked=clamp(a.stressMarked+1,0,a.stressMax);update()};
    card.querySelector(".stressPlus").onclick=()=>{a.stressMarked=clamp(a.stressMarked-1,0,a.stressMax);update()};
    card.querySelector(".advMinus").onclick=()=>{a.advantage=clamp(a.advantage-1,-10,10);update()};
    card.querySelector(".advPlus").onclick=()=>{a.advantage=clamp(a.advantage+1,-10,10);update()};

    function step(key,delta,min=null){
      a[key]=(Number(a[key])||0)+delta;
      if(min!==null)a[key]=Math.max(min,a[key]);
      fields[key].value=a[key];
      save();
    }

    card.querySelector(".damageCountUp").onclick=()=>step("damageCount",1,1);
    card.querySelector(".damageCountDown").onclick=()=>step("damageCount",-1,1);
    card.querySelector(".damageSidesUp").onclick=()=>step("damageSides",1,2);
    card.querySelector(".damageSidesDown").onclick=()=>step("damageSides",-1,2);
    card.querySelector(".damageModUp").onclick=()=>step("damageMod",1);
    card.querySelector(".damageModDown").onclick=()=>step("damageMod",-1);

    card.querySelector(".rollAttack").onclick=()=>{
      const result=rollAttack(a);const extra=consumeRollBonuses(a,"attack");result.total+=extra.total;
      a.lastRoll=`<b>Attaque :</b> [${result.rolls.join(", ")}], retenu ${result.kept}, mod. ${signed(a.attackMod)} → <b>${result.total}</b>.`;
      update();
    };

    card.querySelector(".rollDamage").onclick=()=>{
      const result=rollDamage(a);const extra=consumeRollBonuses(a,"roll");result.total+=extra.total;
      a.lastRoll=`<b>Dégâts :</b> ${result.count}d${result.sides} [${result.rolls.join(", ")}] ${result.mod?signed(result.mod):""} → <b>${result.total}</b>.`;
      update();
    };

    const applyEdit=()=>{
      damageResult.innerHTML=applyIncomingDamage(a,card.querySelector(".damageTaken").value);
      card.querySelector(".damageTaken").value="";
    };
    card.querySelector(".applyDamage").onclick=applyEdit;
    card.querySelector(".damageTaken").onkeydown=event=>{if(event.key==="Enter")applyEdit()};

    card.querySelector(".saveAdversary").onclick=()=>{
      a.saved=true;
      if(type==="adversary")saveAdversaryToLibrary(a);
      renderCards();
      renderDatabase();
      save();
    };

    card.querySelector(".editAdversary").onclick=event=>{
      event.preventDefault();
      event.stopPropagation();
      a.saved=false;
      if(selectedId===a.id&&selectedType===type)closeCombatDock();
      renderCards();
      save();
    };

    const duplicate=()=>{
      const copy=structuredClone(a);
      copy.id=id();
      copy.libraryId=null;
      copy.name+=t("copySuffix");
      if(copy.saved&&type==="adversary")saveAdversaryToLibrary(copy);
      collection.push(copy);
      renderCards();
      renderDatabase();
      save();
    };

    card.querySelector(".duplicate").onclick=duplicate;
    card.querySelector(".duplicateSaved").onclick=event=>{
      event.preventDefault();
      event.stopPropagation();
      duplicate();
    };
    card.querySelector(".detailsSaved").onclick=event=>{event.preventDefault();event.stopPropagation();location.href=`details.html?type=${encodeURIComponent(type)}&id=${encodeURIComponent(a.id)}`;};

    const remove=()=>{
      if(!confirm(`Supprimer « ${a.name} » ?`))return;
      if(type==="ally")state.allies=state.allies.filter(item=>item.id!==a.id);
      else state.adversaries=state.adversaries.filter(item=>item.id!==a.id);
      if(selectedId===a.id&&selectedType===type)closeCombatDock();
      renderCards();
      save();
    };

    card.querySelector(".remove").onclick=remove;
    card.querySelector(".card-close").onclick=event=>{event.stopPropagation();remove()};
    card.querySelector(".deleteSaved").onclick=event=>{event.preventDefault();event.stopPropagation();remove()};

    card.querySelector(".difficultyQuick").oninput=event=>{
      event.stopPropagation();
      a.difficulty=Number(event.target.value)||0;
      fields.difficulty.value=a.difficulty;
      save();
    };

    card.querySelector(".savedHpMinus").onclick=event=>{event.stopPropagation();a.hpMarked=clamp(a.hpMarked+1,0,a.hpMax);update()};
    card.querySelector(".savedHpPlus").onclick=event=>{event.stopPropagation();a.hpMarked=clamp(a.hpMarked-1,0,a.hpMax);update()};
    card.querySelector(".savedStressMinus").onclick=event=>{event.stopPropagation();a.stressMarked=clamp(a.stressMarked+1,0,a.stressMax);update()};
    card.querySelector(".savedStressPlus").onclick=event=>{event.stopPropagation();a.stressMarked=clamp(a.stressMarked-1,0,a.stressMax);update()};
    card.querySelector(".savedAdvMinus").onclick=event=>{event.stopPropagation();a.advantage=clamp(a.advantage-1,-10,10);update()};
    card.querySelector(".savedAdvPlus").onclick=event=>{event.stopPropagation();a.advantage=clamp(a.advantage+1,-10,10);update()};

    card.querySelectorAll(".condition").forEach(button=>{
      button.addEventListener("click",event=>{
        event.preventDefault();
        event.stopPropagation();
        const key=button.dataset.condition;
        a.conditions[key]=!a.conditions[key];
        update();
      });
    });

    card.onclick=event=>{
      if(!a.saved||event.target.closest("button")||event.target.closest("input"))return;
      event.stopPropagation();
      selectedId=a.id;
      selectedType=type;
      openCombatDock();
      renderCards();
    };

    update();
    container.appendChild(node);
  });
}

function renderCards(){
  renderCombatantCollection("ally");
  renderCombatantCollection("adversary");
  renderDistanceMap();
}

function selected(){return collectionFor(selectedType).find(item=>item.id===selectedId)}
function openCombatDock(){document.body.classList.add("dock-open");combatDock.classList.add("open");renderDock()}
function closeCombatDock(){selectedId=null;selectedType="adversary";document.body.classList.remove("dock-open");combatDock.classList.remove("open");renderCards()}
closeDock.onclick=closeCombatDock;

function consumeRollBonuses(actor,kind){const selected=(actor.experiences||[]).filter(exp=>(actor.selectedExperiences||[]).includes(exp.id));const experienceBonus=selected.reduce((sum,exp)=>sum+(Number(exp.bonus)||0),0);if(selected.length){state.fear=clamp(state.fear-selected.length,0,MAX_FEAR);actor.selectedExperiences=[];renderFear()}const general=Number(actor.pendingRollBonus)||0;const attack=kind==="attack"?(Number(actor.pendingAttackBonus)||0):0;actor.pendingRollBonus=0;if(kind==="attack")actor.pendingAttackBonus=0;return{total:experienceBonus+general+attack}}
function useFeature(actor,feature){applyFeatureEffects(actor,feature)}
function bonusDescription(actor){const parts=[];if(actor.pendingAttackBonus)parts.push(`prochaine attaque ${signed(actor.pendingAttackBonus)}`);if(actor.pendingRollBonus)parts.push(`prochain jet ${signed(actor.pendingRollBonus)}`);return parts.join(" · ")}

function renderDock(){
  const actor=selected();
  if(!actor){
    combatDock.classList.remove("open");
    document.body.classList.remove("dock-open");
    return;
  }

  dockTitle.textContent=`Actions — ${actor.name} (${labelFor(selectedType)})`;
  dockTargets.innerHTML="";dockExperiences.innerHTML="";dockFeatures.innerHTML="";dockExperiences.hidden=true;dockFeatures.hidden=true;

  if(selectedType==="ally"){
    const targets=state.adversaries.filter(target=>target.saved);
    if(!targets.length){
      dockTargets.innerHTML=`<span class="small-note">${t("noEnemy")}</span>`;
    }
    targets.forEach(target=>{
      const button=document.createElement("button");
      button.textContent=t("attackTarget",{name:target.name});
      button.onclick=()=>{
        const result=rollAttack(actor);const extra=consumeRollBonuses(actor,"attack");result.total+=extra.total;
        const hit=result.total>=target.difficulty;
        actor.lastRoll=`<b>${esc(actor.name)} attaque ${esc(target.name)} :</b> [${result.rolls.join(", ")}], retenu ${result.kept}, mod. ${signed(actor.attackMod)} → <b>${result.total}</b> contre Difficulté <b>${target.difficulty}</b> — <b class="${hit?"success":"danger"}">${hit?"RÉUSSIE":"ÉCHOUÉE"}</b>.`;
        dockResult.innerHTML=actor.lastRoll;
        save();
      };
      dockTargets.appendChild(button);
    });
  }else{
    const targets=state.targets.filter(target=>target.saved);
    if(!targets.length){
      dockTargets.innerHTML=`<span class="small-note">${t("noPlayer")}</span>`;
    }
    targets.forEach(target=>{
      const button=document.createElement("button");
      button.textContent=t("attackTarget",{name:target.name});
      button.onclick=()=>{
        const result=rollAttack(actor);const extra=consumeRollBonuses(actor,"attack");result.total+=extra.total;
        const hit=result.total>=target.evasion;
        actor.lastRoll=`<b>${esc(actor.name)} attaque ${esc(target.name)} :</b> [${result.rolls.join(", ")}], retenu ${result.kept}, mod. ${signed(actor.attackMod)} → <b>${result.total}</b> contre Évasion <b>${target.evasion}</b> — <b class="${hit?"success":"danger"}">${hit?"RÉUSSIE":"ÉCHOUÉE"}</b>.`;
        dockResult.innerHTML=actor.lastRoll;
        save();
      };
      dockTargets.appendChild(button);
    });
  }

  dockResult.innerHTML=actor.lastDamage||actor.lastRoll||t("chooseAction");
}
dockAttackNoTarget.onclick=()=>{const a=selected();if(!a)return;const r=rollAttack(a);const extra=consumeRollBonuses(a,"attack");r.total+=extra.total;a.lastRoll=`<b>Attaque :</b> [${r.rolls.join(", ")}], retenu ${r.kept}, mod. ${signed(a.attackMod)} → <b>${r.total}</b>.`;dockResult.innerHTML=a.lastRoll;save()}
dockRollDamage.onclick=()=>{const a=selected();if(!a)return;const r=rollDamage(a);const extra=consumeRollBonuses(a,"roll");r.total+=extra.total;a.lastRoll=`<b>Dégâts :</b> ${r.count}d${r.sides} [${r.rolls.join(", ")}] ${r.mod?signed(r.mod):""} → <b>${r.total}</b>.`;dockResult.innerHTML=a.lastRoll;save()}
function dockApply(){const a=selected();if(!a)return;dockResult.innerHTML=applyIncomingDamage(a,dockDamageTaken.value);dockDamageTaken.value=""}
dockApplyDamage.onclick=dockApply;dockDamageTaken.onkeydown=e=>{if(e.key==="Enter")dockApply()}


const distanceMap=document.getElementById("distanceMap");
const distanceWorld=document.getElementById("distanceWorld");
const distanceTokens=document.getElementById("distanceTokens");
const pinnedRanges=document.getElementById("pinnedRanges");
const distanceEmpty=document.getElementById("distanceEmpty");
const resetDistanceMapButton=document.getElementById("resetDistanceMap");
const lockDistanceMapButton=document.getElementById("lockDistanceMap");
const centerDistanceMapButton=document.getElementById("centerDistanceMap");
const measureDistanceButton=document.getElementById("measureDistance");
const toggleRangesButton=document.getElementById("toggleRanges");
const distanceMeasureResult=document.getElementById("distanceMeasureResult");
const distanceZoomLabel=document.getElementById("distanceZoomLabel");
let draggingMapToken=null;
let draggingMapView=null;
let mapActive=false;
let measureMode=false;
let measureStartKey=null;
let rangePinMode=false;

function mapEntities(){
  const players=state.targets
    .filter(target=>target.saved)
    .map(target=>({key:`pj:${target.id}`,name:target.name||"PJ",type:"player"}));

  const allies=state.allies
    .filter(ally=>ally.saved)
    .map(ally=>({key:`ally:${ally.id}`,name:ally.name||"Allié",type:"ally"}));

  const adversaries=state.adversaries
    .filter(adversary=>adversary.saved)
    .map(adversary=>({key:`adv:${adversary.id}`,name:adversary.name||"Adversaire",type:"adversary"}));

  return [...players,...allies,...adversaries];
}

function defaultMapPosition(index,total){
  const columns=Math.max(1,Math.ceil(Math.sqrt(total)));
  return{
    x:4+(index%columns)*6,
    y:4+Math.floor(index/columns)*6
  };
}

function mapScreenPosition(position){
  return{
    x:state.mapView.panX+position.x*state.mapView.scale,
    y:state.mapView.panY+position.y*state.mapView.scale
  };
}

function updateMapGrid(){
  const scale=state.mapView.scale;
  const tokenSize=Math.max(4,scale*0.5);
  distanceMap.style.setProperty("--grid-size",`${scale}px`);
  distanceMap.style.setProperty("--grid-x",`${state.mapView.panX}px`);
  distanceMap.style.setProperty("--grid-y",`${state.mapView.panY}px`);
  distanceMap.style.setProperty("--token-size",`${tokenSize}px`);
  distanceZoomLabel.textContent=`${scale.toFixed(scale<10?1:0)} px/m`;
}

function updateRangeCircles(position){
  const screen=mapScreenPosition(position);
  [
    [".range-melee",1.5],
    [".range-very-close",3],
    [".range-close",9],
    [".range-far",30]
  ].forEach(([selector,radius])=>{
    const circle=distanceWorld.querySelector(`:scope > ${selector}`);
    setCircleGeometry(circle,screen,radius);
  });
}


function rangeLabel(distance){
  if(distance<=1.5)return t("melee");
  if(distance<=3)return t("veryClose");
  if(distance<=9)return t("close");
  if(distance<=30)return t("far");
  return t("outOfRange");
}

function centerMapOnSelected(){
  const key=state.selectedMapToken;
  const position=key?state.mapPositions[key]:null;
  if(!position)return;
  const rect=distanceMap.getBoundingClientRect();
  state.mapView.panX=rect.width/2-position.x*state.mapView.scale;
  state.mapView.panY=rect.height/2-position.y*state.mapView.scale;
  renderDistanceMap();
  save();
}

function handleMeasureClick(key){
  if(!measureMode)return false;
  if(!measureStartKey){
    measureStartKey=key;
    distanceMeasureResult.textContent=t("chooseSecond");
    renderDistanceMap();
    return true;
  }
  if(measureStartKey===key){
    measureStartKey=null;
    distanceMeasureResult.textContent="";
    renderDistanceMap();
    return true;
  }
  const a=state.mapPositions[measureStartKey];
  const b=state.mapPositions[key];
  if(a&&b){
    const distance=Math.hypot(b.x-a.x,b.y-a.y);
    const entities=mapEntities();
    const nameA=entities.find(entity=>entity.key===measureStartKey)?.name||"Point 1";
    const nameB=entities.find(entity=>entity.key===key)?.name||"Point 2";
    distanceMeasureResult.textContent=`${nameA} → ${nameB} : ${distance.toFixed(1)} m — ${rangeLabel(distance)}`;
  }
  measureStartKey=null;
  renderDistanceMap();
  return true;
}


function setCircleGeometry(circle,screen,radius){
  const diameter=radius*2*state.mapView.scale;
  circle.style.left=`${screen.x}px`;
  circle.style.top=`${screen.y}px`;
  circle.style.width=`${diameter}px`;
  circle.style.height=`${diameter}px`;
}

function renderPinnedRanges(validKeys){
  pinnedRanges.innerHTML="";
  state.pinnedRangeTokens=state.pinnedRangeTokens.filter(key=>validKeys.has(key));

  state.pinnedRangeTokens.forEach(key=>{
    const position=state.mapPositions[key];
    if(!position)return;

    const screen=mapScreenPosition(position);
    const group=document.createElement("div");
    group.className="pinned-range-group";

    [
      ["range-far",30],
      ["range-close",9],
      ["range-very-close",3],
      ["range-melee",1.5]
    ].forEach(([className,radius])=>{
      const circle=document.createElement("div");
      circle.className=`range-circle ${className}`;
      setCircleGeometry(circle,screen,radius);
      group.appendChild(circle);
    });

    pinnedRanges.appendChild(group);
  });
}

function togglePinnedRanges(key){
  const index=state.pinnedRangeTokens.indexOf(key);
  if(index>=0)state.pinnedRangeTokens.splice(index,1);
  else state.pinnedRangeTokens.push(key);
  save();
  renderDistanceMap();
}

function renderDistanceMap(){
  const entities=mapEntities();
  const validKeys=new Set(entities.map(entity=>entity.key));

  Object.keys(state.mapPositions).forEach(key=>{
    if(!validKeys.has(key))delete state.mapPositions[key];
  });

  if(state.selectedMapToken&&!validKeys.has(state.selectedMapToken)){
    state.selectedMapToken=null;
  }

  distanceTokens.innerHTML="";
  if(entities.length>0){
    distanceEmpty.hidden=true;
  }else{
    distanceEmpty.hidden=false;
  }

  entities.forEach((entity,index)=>{
    if(!state.mapPositions[entity.key]){
      state.mapPositions[entity.key]=defaultMapPosition(index,entities.length);
    }

    const position=state.mapPositions[entity.key];
    const screen=mapScreenPosition(position);
    const token=document.createElement("button");

    token.type="button";
    token.className=`distance-token ${entity.type}`;
    token.dataset.key=entity.key;
    token.style.left=`${screen.x}px`;
    token.style.top=`${screen.y}px`;
    token.title=entity.name;
    token.setAttribute("aria-label",entity.name);
    token.innerHTML=`<span class="distance-token-label">${esc(entity.name)}</span>`;

    if(state.selectedMapToken===entity.key){
      token.classList.add("selected");
    }
    if(measureStartKey===entity.key){
      token.classList.add("measure-start");
    }
    if(state.pinnedRangeTokens.includes(entity.key)){
      token.classList.add("ranges-pinned");
    }

    token.addEventListener("pointerdown",event=>{
      event.preventDefault();
      event.stopPropagation();

      if(handleMeasureClick(entity.key))return;
      if(rangePinMode){
        togglePinnedRanges(entity.key);
        return;
      }
      if(state.mapLocked)return;

      mapActive=true;
      distanceMap.classList.add("active");
      distanceMap.focus();

      state.selectedMapToken=entity.key;
      distanceMap.classList.add("dragging-token");
      draggingMapToken={
        key:entity.key,
        pointerId:event.pointerId,
        startX:event.clientX,
        startY:event.clientY,
        originalX:position.x,
        originalY:position.y
      };

      token.setPointerCapture(event.pointerId);
      renderDistanceMap();
    });

    token.addEventListener("click",event=>{
      event.preventDefault();
      event.stopPropagation();
      if(handleMeasureClick(entity.key))return;
      if(rangePinMode)return;
      state.selectedMapToken=entity.key;
      renderDistanceMap();
      save();
    });

    distanceTokens.appendChild(token);
  });

  updateMapGrid();
  renderPinnedRanges(validKeys);

  distanceMap.classList.toggle("locked",state.mapLocked);
  lockDistanceMapButton.classList.toggle("active",state.mapLocked);
  toggleRangesButton.classList.toggle("active",rangePinMode);
  measureDistanceButton.classList.toggle("active",measureMode);
  lockDistanceMapButton.textContent=state.mapLocked?t("unlock"):t("lock");
  toggleRangesButton.textContent=rangePinMode?t("rangesSelection"):t("ranges");

  const selectedPosition=state.selectedMapToken
    ? state.mapPositions[state.selectedMapToken]
    : null;

  const draggedPosition=draggingMapToken?state.mapPositions[draggingMapToken.key]:null;
  const transientPosition=draggedPosition||selectedPosition;
  distanceMap.classList.toggle("has-selection",!!transientPosition);
  if(transientPosition)updateRangeCircles(transientPosition);

  save();
}

distanceMap.addEventListener("click",event=>{
  mapActive=true;
  distanceMap.classList.add("active");
  distanceMap.focus();

  if(draggingMapView?.moved)return;

  if(event.target===distanceMap||event.target===distanceWorld||event.target===distanceTokens){
    state.selectedMapToken=null;
    renderDistanceMap();
  }
});

distanceMap.addEventListener("blur",()=>{
  mapActive=false;
  distanceMap.classList.remove("active");
});


distanceMap.addEventListener("pointerdown",event=>{
  const clickedToken=event.target.closest(".distance-token");
  if(clickedToken||state.mapLocked)return;

  mapActive=true;
  distanceMap.classList.add("active","panning");
  distanceMap.focus();

  draggingMapView={
    pointerId:event.pointerId,
    startX:event.clientX,
    startY:event.clientY,
    originalPanX:state.mapView.panX,
    originalPanY:state.mapView.panY,
    moved:false
  };

  distanceMap.setPointerCapture(event.pointerId);
});

distanceMap.addEventListener("wheel",event=>{
  if(!mapActive)return;

  event.preventDefault();

  const rect=distanceMap.getBoundingClientRect();
  const mouseX=event.clientX-rect.left;
  const mouseY=event.clientY-rect.top;

  const oldScale=state.mapView.scale;
  const zoomFactor=event.deltaY<0?1.18:0.84;
  const newScale=clamp(oldScale*zoomFactor,1.5,80);

  const worldX=(mouseX-state.mapView.panX)/oldScale;
  const worldY=(mouseY-state.mapView.panY)/oldScale;

  state.mapView.scale=newScale;
  state.mapView.panX=mouseX-worldX*newScale;
  state.mapView.panY=mouseY-worldY*newScale;

  renderDistanceMap();
},{passive:false});

distanceMap.addEventListener("pointermove",event=>{
  if(draggingMapToken&&event.pointerId===draggingMapToken.pointerId){
    const dx=(event.clientX-draggingMapToken.startX)/state.mapView.scale;
    const dy=(event.clientY-draggingMapToken.startY)/state.mapView.scale;

    state.mapPositions[draggingMapToken.key]={
      x:draggingMapToken.originalX+dx,
      y:draggingMapToken.originalY+dy
    };

    renderDistanceMap();
    return;
  }

  if(draggingMapView&&event.pointerId===draggingMapView.pointerId){
    const dx=event.clientX-draggingMapView.startX;
    const dy=event.clientY-draggingMapView.startY;

    if(Math.abs(dx)>2||Math.abs(dy)>2){
      draggingMapView.moved=true;
    }

    state.mapView.panX=draggingMapView.originalPanX+dx;
    state.mapView.panY=draggingMapView.originalPanY+dy;
    renderDistanceMap();
  }
});

function stopMapDrag(event){
  if(draggingMapToken&&event.pointerId===draggingMapToken.pointerId){
    draggingMapToken=null;
    distanceMap.classList.remove("dragging-token");
    save();
    renderDistanceMap();
  }

  if(draggingMapView&&event.pointerId===draggingMapView.pointerId){
    const moved=draggingMapView.moved;
    draggingMapView=null;
    distanceMap.classList.remove("panning");
    save();

    if(moved){
      event.preventDefault();
      event.stopPropagation();
    }
  }
}

distanceMap.addEventListener("pointerup",stopMapDrag);
distanceMap.addEventListener("pointercancel",stopMapDrag);


lockDistanceMapButton.addEventListener("click",()=>{
  state.mapLocked=!state.mapLocked;
  draggingMapToken=null;
  draggingMapView=null;
  renderDistanceMap();
  save();
});

centerDistanceMapButton.addEventListener("click",centerMapOnSelected);

measureDistanceButton.addEventListener("click",()=>{
  measureMode=!measureMode;
  measureStartKey=null;
  distanceMeasureResult.textContent=measureMode?t("chooseFirst"):"";
  renderDistanceMap();
});

toggleRangesButton.addEventListener("click",()=>{
  rangePinMode=!rangePinMode;
  if(rangePinMode){
    measureMode=false;
    measureStartKey=null;
    distanceMeasureResult.textContent=t("clickPin");
  }else{
    distanceMeasureResult.textContent="";
  }
  renderDistanceMap();
});

resetDistanceMapButton.addEventListener("click",()=>{
  state.mapPositions={};
  state.selectedMapToken=null;
  state.pinnedRangeTokens=[];
  state.mapView={scale:12,panX:60,panY:60};
  measureStartKey=null;
  distanceMeasureResult.textContent="";
  renderDistanceMap();
  save();
});


exportBtn.onclick=()=>{const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="daggerheart-adversaires-et-base.json";a.click();URL.revokeObjectURL(a.href)}
importBtn.onclick=()=>importFile.click()
importFile.onchange=async e=>{
  try{
    const file=e.target.files?.[0];
    if(!file)return;
    const p=JSON.parse(await file.text());
    if(!Array.isArray(p.adversaries))throw 0;
    state=normalizeState(p);
    selectedId=null;
    selectedType="adversary";
    renderFear();
    renderTargets();
    renderCards();
    renderDatabase();
    save();
  }catch(_){
    alert(t("invalidFile"));
  }finally{
    e.target.value="";
  }
}


document.addEventListener("click", event => {
  const clickedCard = event.target.closest(".card");
  const clickedDock = event.target.closest("#combatDock");

  if (selectedId && !clickedCard && !clickedDock) {
    closeCombatDock();
  }

  const editingCards=[
    ...state.adversaries.map(item=>({item,type:"adversary"})),
    ...state.allies.map(item=>({item,type:"ally"}))
  ].filter(entry=>!entry.item.saved);
  const clickedInsideEditor=editingCards.some(entry=>{
    const editorElement=document.querySelector(`.card[data-id="${entry.item.id}"][data-type="${entry.type}"]`);
    return editorElement&&editorElement.contains(event.target);
  });
  const clickedModal=event.target.closest(".modal-overlay");
  if(editingCards.length&&!clickedInsideEditor&&!clickedModal&&!event.target.closest("#addAdversary")){
    commitEditingAdversaries();
    renderCards();
    renderDatabase();
  }
});



let deferredInstallPrompt=null;
const installAppBtn=document.getElementById("installAppBtn");

function isStandaloneMode(){
  return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===true;
}

function updateInstallButton(){
  if(!installAppBtn)return;
  if(isStandaloneMode()){
    installAppBtn.hidden=false;
    installAppBtn.disabled=true;
    installAppBtn.textContent=t("appInstalled");
    return;
  }
  installAppBtn.disabled=false;
  installAppBtn.textContent=t("installApp");
  installAppBtn.hidden=false;
}

window.addEventListener("beforeinstallprompt",event=>{
  event.preventDefault();
  deferredInstallPrompt=event;
  updateInstallButton();
});

window.addEventListener("appinstalled",()=>{
  deferredInstallPrompt=null;
  updateInstallButton();
});

if(installAppBtn){
  installAppBtn.addEventListener("click",async()=>{
    if(isStandaloneMode())return;
    if(deferredInstallPrompt){
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt=null;
      updateInstallButton();
      return;
    }
    const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
    alert(isiOS?t("iosInstall"):t("installUnavailable"));
  });
}

const languageSelect=document.getElementById("languageSelect");
if(languageSelect){languageSelect.value=currentLanguage;languageSelect.addEventListener("change",event=>{const previous=currentLanguage;currentLanguage=event.target.value==="en"?"en":"fr";translateDefaultNames(previous,currentLanguage);localStorage.setItem("daggerheart-language",currentLanguage);applyLanguage();save();});}
applyLanguage();renderDistanceMap();save();

if("serviceWorker" in navigator){
  window.addEventListener("load",async()=>{
    try{
      const registration=await navigator.serviceWorker.register("./service-worker.js",{updateViaCache:"none"});
      await registration.update();
    }catch(error){
      console.error("Service worker registration failed",error);
    }
  });
}
