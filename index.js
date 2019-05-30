
  let who = ['the dog','my granma','his turtle','my bird'];
  let what = ['eat','pissed','crushed','broked'];
  let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let whosecond = who[Math.round(Math.random()*(who.length-1))];
let did = what[Math.round(Math.random()*(what.length-1))];
let whatsecond = when[Math.round(Math.random()*(when.length-1))];

document.getElementById('excuses').innerHTML =  whosecond + ' ' + did + ' my ' + whatsecond
