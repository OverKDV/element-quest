"use strict";

/** Pure learning rules, shared by the browser and dependency-free Node tests. */
const QuestEngine = (() => {
  const DAY = 86400000;
  const MISSIONS = Object.freeze([
    { id: "life", title: "Остров жизни", subtitle: "Из чего состоят вода и живой мир", symbols: ["H", "O", "C", "N", "P"], color: "mint", reward: "Исследователь жизни", x: 24, y: 64 },
    { id: "matter", title: "Кристальные горы", subtitle: "Материалы, которые нас окружают", symbols: ["Si", "Al", "Ca", "Mg", "S"], color: "cyan", reward: "Знаток материалов", x: 64, y: 55 },
    { id: "energy", title: "Долина энергии", subtitle: "Батареи, свет и сигналы", symbols: ["Li", "Na", "K", "Ne", "Ar"], color: "gold", reward: "Ловец энергии", x: 37, y: 26 },
    { id: "lab", title: "Небесная лаборатория", subtitle: "Необычные свойства знакомых элементов", symbols: ["He", "Be", "B", "F", "Cl"], color: "violet", reward: "Друг лаборатории", x: 80, y: 22 }
  ]);
  const RECIPES = Object.freeze([
    { id:"water", name:"Вода", formula:"H₂O", target:{H:2,O:1}, focus:"O", icon:"water", explanation:"В одной молекуле воды два атома водорода и один атом кислорода. H₂O — соединение двух элементов, а O₂ — простое вещество кислород." },
    { id:"carbon-dioxide", name:"Углекислый газ", formula:"CO₂", target:{C:1,O:2}, focus:"C", icon:"air", explanation:"В одной молекуле CO₂ один атом углерода и два атома кислорода. Маленькая 2 относится только к O; отсутствие индекса означает один атом." },
    { id:"oxygen", name:"Кислород", formula:"O₂", target:{O:2}, focus:"O", icon:"leaf", explanation:"Молекула O₂ состоит из двух атомов одного элемента. Символ O обозначает элемент, а формула O₂ — двухатомную молекулу кислорода." }
  ]);
  const integer = (value) => Number.isSafeInteger(value) && value >= 0 ? value : 0;
  function dayKey(time = Date.now()) {
    const date = new Date(time);
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,"0")}-${String(date.getDate()).padStart(2,"0")}`;
  }
  function freshStats() { return {xp:0,attempts:0,correct:0,lessons:0,daily:{},elements:{}}; }
  const THEMES = Object.freeze([
    {id:"aurora",name:"Северное сияние",price:0,color:"#5fe7ff"},
    {id:"sunrise",name:"Солнечный янтарь",price:30,color:"#ffb45f"},
    {id:"orchid",name:"Аметистовый свет",price:50,color:"#eb9cff"}
  ]);
  const CHESTS = Object.freeze([
    {id:"life",title:"Сундук жизни",artifact:"Капля жизни",icon:"water",crystals:30,condition:"Получи хотя бы 1 звезду на Острове жизни"},
    {id:"matter",title:"Сундук мастера",artifact:"Сердце кристалла",icon:"earth",crystals:30,condition:"Получи хотя бы 1 звезду в Кристальных горах"},
    {id:"energy",title:"Сундук изобретателя",artifact:"Искра открытия",icon:"battery",crystals:30,condition:"Получи хотя бы 1 звезду в Долине энергии"},
    {id:"lab",title:"Сундук лаборатории",artifact:"Ключ исследователя",icon:"flask",crystals:40,condition:"Получи хотя бы 1 звезду в Небесной лаборатории"}
  ]);
  function freshJourney() { return {missions:{},study:{},credits:{},badges:[],daily:{},sound:false,speech:true,motion:false,treasure:{claimed:[],crystals:0,themes:["aurora"],equipped:"aurora"}}; }
  function cleanStats(raw, symbols) {
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw new Error("Invalid saved progress");
    const state = freshStats();
    for (const key of ["xp","attempts","correct","lessons"]) state[key] = integer(raw[key]);
    state.correct = Math.min(state.correct,state.attempts);
    for (const [key,value] of Object.entries(raw.daily || {}).slice(-90)) if (/^\d{4}-\d{2}-\d{2}$/.test(key)) state.daily[key]=integer(value);
    for (const symbol of symbols) {
      const entry=raw.elements?.[symbol];
      if (entry && typeof entry==="object") state.elements[symbol]={streak:Math.min(3,integer(entry.streak)),attempts:integer(entry.attempts),correct:Math.min(integer(entry.correct),integer(entry.attempts)),wrong:entry.wrong===true,due:Number.isFinite(entry.due)&&entry.due>=0?entry.due:0};
    }
    return state;
  }
  function cleanJourney(raw, symbols) {
    if (!raw || typeof raw!=="object" || Array.isArray(raw)) throw new Error("Invalid expedition progress");
    const data=freshJourney();
    for (const mission of MISSIONS) {
      const item=raw.missions?.[mission.id];
      if(item&&typeof item==="object") data.missions[mission.id]={stars:Math.min(3,integer(item.stars)),completed:item.completed===true,best:Math.min(100,integer(item.best))};
    }
    for (const symbol of symbols) {
      const item=raw.study?.[symbol];
      if(item&&typeof item==="object") data.study[symbol]={days:Array.isArray(item.days)?[...new Set(item.days.filter(day=>typeof day==="string"&&/^\d{4}-\d{2}-\d{2}$/.test(day)))].slice(-30):[],types:Array.isArray(item.types)?[...new Set(item.types.filter(type=>["symbol","name","typing","audio","application","pairs","table"].includes(type)))]:[]};
    }
    for(const [key,value] of Object.entries(raw.credits||{}).slice(-2000)) if(typeof key==="string"&&key.length<90&&value===true)data.credits[key]=true;
    for(const [key,value] of Object.entries(raw.daily||{}).slice(-90)) if(/^\d{4}-\d{2}-\d{2}$/.test(key)&&value&&typeof value==="object")data.daily[key]={lessons:integer(value.lessons),pairs:integer(value.pairs),models:integer(value.models)};
    data.badges=Array.isArray(raw.badges)?[...new Set(raw.badges.filter(id=>["first","pairs","builder","explorer"].includes(id)))]:[];
    data.sound=raw.sound===true;
    data.speech=raw.speech!==false;data.motion=raw.motion===true;
    if(raw.treasure&&typeof raw.treasure==="object"){
      const source=raw.treasure;
      data.treasure.claimed=Array.isArray(source.claimed)?[...new Set(source.claimed.filter(id=>typeof id==="string"&&(CHESTS.some(chest=>chest.id===id)||/^daily:\d{4}-\d{2}-\d{2}$/.test(id))))]:[];
      data.treasure.crystals=integer(source.crystals);
      data.treasure.themes=Array.isArray(source.themes)?[...new Set(["aurora",...source.themes.filter(id=>THEMES.some(theme=>theme.id===id))])]:["aurora"];
      data.treasure.equipped=data.treasure.themes.includes(source.equipped)?source.equipped:"aurora";
    }
    return data;
  }
  function shuffle(items, random=Math.random) {
    const copy=[...items];
    for(let i=copy.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[copy[i],copy[j]]=[copy[j],copy[i]];}
    return copy;
  }
  function questionPlan(pool, mode="mixed", count=8, audio=false, random=Math.random) {
    if(!pool.length) return [];
    const order=[];
    while(order.length<count){const part=shuffle(pool,random);if(part.length>1&&part[0]===order.at(-1))[part[0],part[1]]=[part[1],part[0]];order.push(...part);}
    const kinds=["symbol","name","application","typing","symbol","application",audio?"audio":"name","typing"];
    const used=new Set();
    return order.slice(0,count).map((symbol,index)=>{
      let kind=mode==="mixed"?kinds[index%kinds.length]:mode;
      if(mode==="mixed"&&used.has(`${symbol}:${kind}`))kind=kinds.find(candidate=>!used.has(`${symbol}:${candidate}`))||kind;
      used.add(`${symbol}:${kind}`);
      return {symbol,kind,retry:false};
    });
  }
  function mastery(journey,symbol) {
    const record=journey.study[symbol];
    if(!record||!record.days.length)return 0;
    if(record.days.length>=2&&record.types.length>=2)return 3;
    return record.types.length>=2?2:1;
  }
  function isDue(stats,symbol,now=Date.now()) {
    const record=stats.elements[symbol];
    return Boolean(record&&(record.wrong||(record.attempts>0&&record.due<=now)));
  }
  function recordAnswer(stats,journey,{symbol,kind,correct,assisted=false,retry=false,id=symbol,now=Date.now()}) {
    const today=dayKey(now);
    const entry={...(stats.elements[symbol]||{streak:0,attempts:0,correct:0,wrong:false,due:0})};
    entry.attempts++;stats.attempts++;stats.daily[today]=(stats.daily[today]||0)+1;
    const daily=journey.daily[today]||(journey.daily[today]={lessons:0,pairs:0,models:0});
    let xp=0;
    if(correct){
      entry.correct++;stats.correct++;if(!assisted)entry.wrong=false;
      const key=`${today}:${kind}:${id}`;
      if(!assisted&&!journey.credits[key]){xp=retry?5:10;journey.credits[key]=true;stats.xp+=xp;}
      if(!assisted&&!retry&&kind!=="build"){
        const study=journey.study[symbol]||(journey.study[symbol]={days:[],types:[]});
        if(!study.days.includes(today))study.days.push(today);
        if(!study.types.includes(kind))study.types.push(kind);
        entry.streak=Math.min(3,study.days.length);
        entry.due=now+[1,3,7][Math.min(2,study.days.length-1)]*DAY;
      }else if(!entry.due||entry.due<=now)entry.due=now+DAY;
      if(kind==="pairs")daily.pairs++;
      if(kind==="build")daily.models++;
    }else{entry.wrong=true;entry.due=now;entry.streak=0;}
    if(kind!=="build")stats.elements[symbol]=entry;
    return xp;
  }
  function finishMission(stats,journey,missionId,correct,total,now=Date.now()) {
    const score=total?Math.round(correct/total*100):0;
    const stars=score>=95?3:score>=75?2:score>=50?1:0;
    const previous=journey.missions[missionId];
    const bonus=previous?.completed?0:25;
    journey.missions[missionId]={stars:Math.max(previous?.stars||0,stars),best:Math.max(previous?.best||0,score),completed:true};
    stats.xp+=bonus;
    const today=dayKey(now);const daily=journey.daily[today]||(journey.daily[today]={lessons:0,pairs:0,models:0});daily.lessons++;
    return {stars,bonus,score};
  }
  function recipeMatches(target,atoms) {
    const counts={};for(const symbol of atoms)counts[symbol]=(counts[symbol]||0)+1;
    return Object.keys(counts).length===Object.keys(target).length&&Object.entries(target).every(([symbol,count])=>counts[symbol]===count);
  }
  function validateSymbol(input,expected) {
    const value=input.trim();
    return {correct:value===expected,reason:/[а-яё]/i.test(value)?"latin":value!==expected&&value.toLowerCase()===expected.toLowerCase()?"case":"answer"};
  }
  function chestStatus(journey,id,now=Date.now()) {
    const dailyId=`daily:${dayKey(now)}`;
    const chest=CHESTS.find(item=>item.id===id)||(id===dailyId?{id:dailyId,title:"Сундук дня",artifact:"Звезда сегодняшнего дня",icon:"spark",crystals:20,condition:"Выполни три цели дня"}:null);
    if(!chest)return null;
    const daily=journey.daily[dayKey(now)]||{};
    const eligible=id===dailyId?daily.lessons>=1&&daily.pairs>=3&&daily.models>=1:(journey.missions[id]?.stars||0)>=1;
    return {...chest,eligible,claimed:journey.treasure.claimed.includes(id)};
  }
  function claimChest(journey,id,now=Date.now()) {
    const chest=chestStatus(journey,id,now);
    if(!chest||!chest.eligible||chest.claimed)return {ok:false,reason:chest?.claimed?"claimed":"locked"};
    journey.treasure.claimed.push(id);journey.treasure.crystals+=chest.crystals;
    return {ok:true,...chest,balance:journey.treasure.crystals};
  }
  function equipTheme(journey,id) {
    const theme=THEMES.find(item=>item.id===id);
    if(!theme)return {ok:false,reason:"unknown"};
    let spent=0;
    if(!journey.treasure.themes.includes(id)){
      if(journey.treasure.crystals<theme.price)return {ok:false,reason:"balance"};
      journey.treasure.crystals-=theme.price;journey.treasure.themes.push(id);spent=theme.price;
    }
    journey.treasure.equipped=id;return {ok:true,spent};
  }
  return Object.freeze({DAY,MISSIONS,RECIPES,CHESTS,THEMES,dayKey,freshStats,freshJourney,cleanStats,cleanJourney,shuffle,questionPlan,mastery,isDue,recordAnswer,finishMission,recipeMatches,validateSymbol,chestStatus,claimChest,equipTheme});
})();
if(typeof module!=="undefined"&&module.exports)module.exports=QuestEngine;
