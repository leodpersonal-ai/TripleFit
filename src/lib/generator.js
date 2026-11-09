import {exercises} from '../data/exercises.js';
const splits={2:['Full body A','Full body B'],3:['Full body A','Full body B','Full body C'],4:['Superiores A','Inferiores A','Superiores B','Inferiores B'],5:['Peito e tríceps','Costas e bíceps','Pernas A','Ombros e braços','Pernas B'],6:['Empurrar A','Puxar A','Pernas A','Empurrar B','Puxar B','Pernas B']};
const buckets={
'Full body A':['Quadríceps','Peitoral','Costas','Posteriores','Core'],'Full body B':['Glúteos','Costas','Peitoral','Ombros','Core'],'Full body C':['Quadríceps','Costas','Peitoral','Glúteos','Panturrilhas'],
'Superiores A':['Peitoral','Costas','Ombros','Bíceps','Tríceps'],'Superiores B':['Costas','Peitoral','Ombros','Tríceps','Bíceps'],
'Inferiores A':['Quadríceps','Posteriores','Glúteos','Panturrilhas','Core'],'Inferiores B':['Glúteos','Posteriores','Quadríceps','Panturrilhas','Core'],
'Peito e tríceps':['Peitoral','Peitoral','Peitoral','Tríceps','Tríceps'],'Costas e bíceps':['Costas','Costas','Costas','Bíceps','Bíceps'],'Pernas A':['Quadríceps','Quadríceps','Posteriores','Glúteos','Panturrilhas'],'Pernas B':['Posteriores','Glúteos','Quadríceps','Adutores','Panturrilhas'],'Ombros e braços':['Ombros','Ombros','Bíceps','Tríceps','Core'],
'Empurrar A':['Peitoral','Peitoral','Ombros','Tríceps','Tríceps'],'Empurrar B':['Ombros','Peitoral','Peitoral','Tríceps','Core'],'Puxar A':['Costas','Costas','Costas','Bíceps','Bíceps'],'Puxar B':['Costas','Costas','Ombros','Bíceps','Core']};
export function generatePlan(input){
 const days=Number(input.days)||3,novice=input.level==='iniciante',allotted=Number(input.minutes)||50,maxExercises=allotted<40?4:allotted<55?5:6;
 return {id:'plano-'+Date.now(),createdAt:new Date().toISOString(),profile:input,days:(splits[days]||splits[3]).map((title,idx)=>{
 const used=new Set();const items=(buckets[title]||buckets['Full body A']).slice(0,maxExercises).map((group,j)=>{
 const pool=exercises.filter(e=>e.group===group&&(!novice||e.level==='iniciante')&&(!input.equipment||input.equipment==='completa'||e.equipment===input.equipment||e.equipment==='peso-corporal'));
 const unused=pool.filter(e=>!used.has(e.id));const list=unused.length?unused:pool;const e=list[(idx+j)%list.length];if(!e)return null;used.add(e.id);
 return {exerciseId:e.id,sets:group==='Core'?2:novice?2:3,reps:group==='Core'?'20–30 s':input.goal==='forca'?'5–8':'8–12',rest:group==='Core'?45:input.goal==='forca'?120:90};
 }).filter(Boolean);return {id:'dia-'+(idx+1),title,items};})};}
