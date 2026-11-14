(function(){
'use strict';
const total=document.getElementById('liveTotal'), active=document.getElementById('liveStations'), state=document.getElementById('liveState');
const cfg=window.NEUNG_FIREBASE_CONFIG;
let counts={}, db=null, uid=null, ref=null, connected=false, desired=null, changing=Promise.resolve();
const session=(()=>{try{return crypto.randomUUID()}catch{return Date.now().toString(36)+Math.random().toString(36).slice(2)}})();
function status(s){state.textContent=s}
function refresh(){const vals=Object.values(counts);total.textContent=vals.reduce((a,b)=>a+b,0).toLocaleString('th-TH');active.textContent=vals.filter(v=>v>0).length.toLocaleString('th-TH');if(typeof render==='function')render()}
window.neungLiveLabel=id=>counts[id]===undefined?'👥 0 คนกำลังฟัง':'👥 '+counts[id].toLocaleString('th-TH')+' คนกำลังฟัง';
function update(){changing=changing.then(async()=>{
 if(!db||!uid)return;
 if(ref){const old=ref;ref=null;try{await old.remove()}catch(e){console.warn(e)}}
 if(!connected||!desired)return;
 const station=desired;
 const r=db.ref('presence/'+uid+'/'+session);
 // Register disconnect cleanup BEFORE writing presence
 await r.onDisconnect().remove();
 if(!connected||desired!==station)return;
 await r.set({stationId:station,startedAt:firebase.database.ServerValue.TIMESTAMP});ref=r;
}).catch(e=>{console.warn('Presence error',e);status('ระบบนับผู้ฟังมีปัญหา ตรวจสอบ Rules')})}
window.neungLivePlay=id=>{desired=id||null;update()};
window.neungLiveStop=()=>{desired=null;update()};
if(!cfg||!cfg.apiKey||cfg.apiKey.includes('PASTE')||!cfg.databaseURL||cfg.databaseURL.includes('PASTE')){status('ยังไม่ได้ตั้งค่า Firebase • ดูคู่มือใน ZIP');return}
if(!window.firebase){status('โหลด Firebase ไม่สำเร็จ ตรวจสอบอินเทอร์เน็ต');return}
try{
 firebase.initializeApp(cfg);db=firebase.database();
 firebase.auth().signInAnonymously().then(user=>{
 uid=user.user.uid;
 db.ref('presence').on('value',snapshot=>{
 const next={};snapshot.forEach(userSnap=>userSnap.forEach(sessionSnap=>{
 const s=sessionSnap.val();if(s&&typeof s.stationId==='string')next[s.stationId]=(next[s.stationId]||0)+1;
 }));counts=next;refresh();status(connected?'กำลังแสดงจำนวนผู้ฟังจาก Neung Radio':'กำลังเชื่อมต่อ...');
 },e=>status('อ่านข้อมูลไม่ได้: ตรวจสอบ Database Rules'));
 db.ref('.info/connected').on('value',snap=>{connected=snap.val()===true;status(connected?'เชื่อมต่อเรียลไทม์แล้ว':'กำลังเชื่อมต่อ Firebase...');if(connected)update();else ref=null});
 if(!document.getElementById('audio').paused&&current)window.neungLivePlay(current.id);
 }).catch(e=>{console.warn(e);status('เปิด Anonymous Authentication ก่อน: '+e.code)});
}catch(e){console.warn(e);status('ตั้งค่า Firebase ไม่ถูกต้อง')}
})();
