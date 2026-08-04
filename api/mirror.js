// Boostan mirror of divangroup.ca — same team, same services & solutions,
// generalized for every industry. Colors + brand swapped in-flight.
const UPSTREAM = 'https://www.divangroup.ca';

const HEX = [
  // stock tailwind -> boostan ramps (purple/blue/cyan/sky/indigo/teal -> greens; pink/rose/fuchsia/amber/yellow -> saffron golds)
  ['A855F7','1F7A57'],['9333EA','155A40'],['7E22CE','0F412E'],['C084FC','2FA474'],['E9D5FF','B8E6CF'],
  ['D946EF','E3B22B'],['E879F9','F0C238'],['F0ABFC','F4D474'],
  ['6366F1','1F7A57'],['818CF8','2FA474'],['A5B4FC','8FD9B8'],['C7D2FE','B8E6CF'],
  ['3B82F6','1F7A57'],['60A5FA','2FA474'],['2563EB','155A40'],['93C5FD','8FD9B8'],['BAE6FD','B8E6CF'],
  ['06B6D4','1F7A57'],['22D3EE','2FA474'],['67E8F9','8FD9B8'],['0891B2','155A40'],
  ['0EA5E9','1F7A57'],['38BDF8','2FA474'],['7DD3FC','8FD9B8'],
  ['14B8A6','1F7A57'],['2DD4BF','2FA474'],['5EEAD4','8FD9B8'],['0D9488','155A40'],
  ['EC4899','E3B22B'],['F472B6','F0C238'],['F9A8D4','F4D474'],['DB2777','C99A1F'],
  ['F43F5E','C99A1F'],['FB7185','E3B22B'],['FDA4AF','F4D474'],['FECDD3','F8E4B0'],
  ['F59E0B','F0C238'],['FBBF24','F0C238'],['FCD34D','F4D474'],['D97706','D9A81F'],['B45309','B8862B'],['FDE68A','F8E4B0'],
  ['FACC15','F0C238'],['EAB308','E3B22B'],
  ['0B6B8C','155A40'],['1A87AC','1F7A57'],['6B1E5C','9C2A2A'],['892676','B83B3B'],
  ['C9A227','F0C238'],['993C1D','A85A28'],['1A1A1A','1C1A15'],['0A0A0A','0C0B08'],
];
const RGB = [
  ['168 85 247','31 122 87'],['168,85,247','31,122,87'],['147 51 234','21 90 64'],['147,51,234','21,90,64'],
  ['192 132 252','47 164 116'],['126 34 206','15 65 46'],['59 7 100','8 30 21'],['233 213 255','184 230 207'],
  ['217 70 239','227 178 43'],['232 121 249','240 194 56'],['240 171 252','244 212 116'],['245 208 254','248 228 176'],
  ['99 102 241','31 122 87'],['129 140 248','47 164 116'],['165 180 252','143 217 184'],['199 210 254','184 230 207'],
  ['59 130 246','31 122 87'],['96 165 250','47 164 116'],['37 99 235','21 90 64'],['23 37 84','10 35 25'],['186 230 253','184 230 207'],
  ['6 182 212','31 122 87'],['34 211 238','47 164 116'],['103 232 249','143 217 184'],['8 145 178','21 90 64'],
  ['14 165 233','31 122 87'],['56 189 248','47 164 116'],['125 211 252','143 217 184'],
  ['20 184 166','31 122 87'],['45 212 191','47 164 116'],['94 234 212','143 217 184'],['13 148 136','21 90 64'],
  ['236 72 153','227 178 43'],['244 114 182','240 194 56'],['249 168 212','244 212 116'],['219 39 119','201 154 31'],
  ['244 63 94','201 154 31'],['251 113 133','227 178 43'],['253 164 175','244 212 116'],['254 205 211','248 228 176'],
  ['245 158 11','240 194 56'],['251 191 36','240 194 56'],['252 211 77','244 212 116'],['253 230 138','248 228 176'],
  ['250 204 21','240 194 56'],['234 179 8','227 178 43'],['217 119 6','217 168 31'],['120 53 15','122 88 26'],
  ['11 107 140','21 90 64'],['11,107,140','21,90,64'],
  ['26 135 172','31 122 87'],['26,135,172','31,122,87'],
  ['107 30 92','156 42 42'],['107,30,92','156,42,42'],
  ['137 38 118','184 59 59'],['137,38,118','184,59,59'],
  ['201 162 39','240 194 56'],['201,162,39','240,194,56'],
  ['153 60 29','168 90 40'],['153,60,29','168,90,40'],
  ['26 26 26','28 26 21'],
];
// real client/case-study names must survive untouched
const PROTECT = ['Muchin Beauty Clinic','Muchin Beauty'];
const STR = [
  // slogan
  ['Discipline. Consistency. Creativity.','Plant. Nurture. Flourish.'],
  ['Discipline. Consistency. Creativity','Plant. Nurture. Flourish'],
  ['Discipline · Consistency · Creativity','Plant · Nurture · Flourish'],
  ['Discipline, Consistency, Creativity','Plant, Nurture, Flourish'],
  ['Discipline &middot; Consistency &middot; Creativity','Plant &middot; Nurture &middot; Flourish'],
  // urls & handles
  ['www.divangroup.ca','www.boostangroup.com'],
  ['divangroup.ca','boostangroup.com'],
  ['instagram.com/divan.group','instagram.com/boostan.group'],
  ['youtube.com/@divan.group','youtube.com/@boostan.group'],
  ['@divan.group','@boostan.group'],
  // brand (capitalized only; lowercase divan-* class names must keep matching CSS)
  ['Divan','Boostan'],['DIVAN','BOOSTAN'],
  // founding: truthful sister-brand framing
  ['"foundingDate": "2015"','"foundingDate": "2026"'],
  ['Founded 2015','Est. 2026 — same senior team serving clients since 2015'],
  ['**Founded**: 2015','**Founded**: 2026 (same team since 2015)'],
  ['founded 2015','est. 2026 — same team since 2015'],
  ['founded in 2015','launched in 2026 by the team serving clients since 2015'],
  ['since 2015','since 2015 (under the Divan name)'],
  ['Founded in Toronto in 2015','Launched in Toronto in 2026 by the team serving clients since 2015'],
  ['دیوان','بوستان'],
  // multi-item lists first, to avoid doubled phrases
  ['cosmetic clinics, beauty businesses, hospitality groups','ambitious businesses, hospitality groups'],
  ['cosmetic clinics, AI SEO, GEO, beauty businesses','AI SEO, GEO, growing businesses'],
  ['Cosmetic clinics, med spas, beauty businesses, hospitality','Businesses of every kind, hospitality'],
  ['cosmetic clinics, med spas, and beauty brands','ambitious businesses in every industry'],
  ['cosmetic clinics, med spas, and beauty businesses','ambitious businesses in every industry'],
  ['cosmetic clinics, med spas, beauty businesses','businesses in every industry'],
  ['cosmetic, dental &amp; dermatology clinics','ambitious businesses in every industry'],
  ['cosmetic, dental & dermatology clinics','ambitious businesses in every industry'],
  ['Solo clinics &amp; businesses','Solo operators &amp; small teams'],
  ['Solo clinics & businesses','Solo operators & small teams'],
  ['Cosmetic Clinics &amp; Beauty Brands','Ambitious Businesses'],
  ['Cosmetic Clinics & Beauty Brands','Ambitious Businesses'],
  ['cosmetic clinics &amp; beauty brands','ambitious businesses'],
  ['beauty and medical brands','brands in every industry'],
  ['beauty and health clinics','businesses of every kind'],
  ['Beauty and Health Clinics','Businesses of Every Kind'],
  ['beauty &amp; health clinics','businesses of every kind'],
  ['beauty & health clinics','businesses of every kind'],
  ['Beauty &amp; Health Clinics','Businesses of Every Kind'],
  ['Beauty & Health Clinics','Businesses of Every Kind'],
  // AdsRx target list, generalized
  ['Med spas and aesthetic clinics','Local service businesses'],
  ['Dermatology practices','Professional practices'],
  ['Dental and cosmetic dentistry','Retail and e-commerce'],
  ['Wellness centers','Wellness, fitness and studios'],
  ['Physiotherapy and chiropractic','Trades and home services'],
  ['Botox and filler clinics','Restaurants and hospitality'],
  ['Laser and body contouring studios','Real estate and boutiques'],
  // generic fallbacks
  ['cosmetic clinics','ambitious businesses'],['Cosmetic Clinics','Ambitious Businesses'],
  ['cosmetic clinic','ambitious business'],['Cosmetic Clinic','Ambitious Business'],
  ['med spas','service businesses'],['Med Spas','Service Businesses'],
  ['med spa','service business'],['Med Spa','Service Business'],
  ['beauty brands','modern brands'],['Beauty Brands','Modern Brands'],
  ['beauty brand','modern brand'],
  ['beauty businesses','ambitious businesses'],
  ['dermatology practices','professional practices'],
  ['clinics','businesses'],['Clinics','Businesses'],
  ['clinic','business'],['Clinic','Business'],
  ['patients','customers'],['Patients','Customers'],
  ['patient','customer'],['Patient','Customer'],
];

function transform(text) {
  PROTECT.forEach((p,i)=>{ text = text.split(p).join('\u0001P'+i+'\u0001'); });
  for (const [a,b] of HEX) text = text.replace(new RegExp('#'+a,'gi'),'#'+b).replace(new RegExp('0x'+a,'gi'),'0x'+b.toLowerCase());
  for (const [a,b] of RGB) text = text.split(a).join(b);
  for (const [a,b] of STR) text = text.split(a).join(b);
  PROTECT.forEach((p,i)=>{ text = text.split('\u0001P'+i+'\u0001').join(p); });
  return text;
}

function readBody(req){return new Promise(res=>{
  if (req.body !== undefined) {
    res(typeof req.body === 'string' ? req.body : JSON.stringify(req.body)); return;
  }
  const c=[]; req.on('data',d=>c.push(d)); req.on('end',()=>res(c.length?Buffer.concat(c):undefined)); req.on('error',()=>res(undefined));
});}

module.exports = async (req, res) => {
  let path = req.url || '/';
  if (path.startsWith('/api/mirror')) path = '/';
  try {
    const opts = { method: req.method, headers: { 'user-agent': 'boostan-mirror' } };
    if (req.headers['content-type']) opts.headers['content-type'] = req.headers['content-type'];
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      const body = await readBody(req);
      if (body !== undefined) opts.body = body;
    }
    const r = await fetch(UPSTREAM + path, opts);
    const ct = r.headers.get('content-type') || 'application/octet-stream';
    res.statusCode = r.status;
    res.setHeader('content-type', ct);
    res.setHeader('cache-control', req.method==='GET' ? 'public, s-maxage=600, stale-while-revalidate=86400' : 'no-store');
    if (/text\/|javascript|json|svg|xml/.test(ct)) {
      let text = transform(await r.text());
      if (ct.includes('html')) {
        text = text.replace('<link rel="icon" type="image/x-icon" href="/favicon.ico" />',
                            '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
        text = text.replace('"foundingDate": "2026",',
          '"foundingDate": "2026", "parentOrganization": {"@type": "Organization", "name": "Divan Group", "url": "https://www.divangroup.ca"},');
        const patch = `
<style>video[autoplay],video[muted]{display:none!important}
.bfx-inf{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(62vw,660px);max-width:88%;pointer-events:none;z-index:0;opacity:.26;animation:bfxFloat 9s ease-in-out infinite alternate;filter:drop-shadow(0 0 40px rgba(240,194,56,.22))}
.bfx-amb{position:absolute;inset:0;z-index:0;pointer-events:none;background:radial-gradient(44% 36% at 72% 18%,rgba(21,90,64,.40),transparent 70%),radial-gradient(38% 32% at 16% 80%,rgba(156,42,42,.15),transparent 70%),radial-gradient(30% 26% at 50% 58%,rgba(240,194,56,.08),transparent 72%)}
@keyframes bfxFloat{from{transform:translate(-50%,-51%) scale(.99);opacity:.22}to{transform:translate(-50%,-49%) scale(1.01);opacity:.30}}
.bfx-em{position:absolute;inset:0;z-index:0;pointer-events:none}
.bfx-w{display:inline-block;animation:bfxUp .9s cubic-bezier(.4,0,.2,1) both}
.bfx-w1{background:linear-gradient(96deg,#8FD9B8,#2FA474);-webkit-background-clip:text;background-clip:text;color:transparent;animation-delay:.05s}
.bfx-w2{color:#F4EEE2;animation-delay:.24s}
.bfx-w3{background:linear-gradient(96deg,#F4D474,#F0C238);-webkit-background-clip:text;background-clip:text;color:transparent;animation-delay:.42s}
@keyframes bfxUp{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
.bfx-fa{direction:rtl;margin-top:.9rem;font-size:clamp(1rem,1.6vw,1.3rem);color:rgba(240,194,56,.9);letter-spacing:.01em;animation:bfxUp .9s cubic-bezier(.4,0,.2,1) .6s both}
.bfx-sis{max-width:1100px;margin:1.4rem auto 0;padding:1.1rem 1.5rem 0;border-top:1px solid rgba(255,255,255,.09);color:rgba(244,238,226,.5);font-size:.85rem;line-height:1.6;text-align:center}
.bfx-sis a{color:#3FA8CC;text-decoration:none}
.bfx-cap{margin:.6rem 0 0;color:rgba(240,194,56,.78);font-size:.85rem;letter-spacing:.02em}
@media (prefers-reduced-motion:reduce){.bfx-inf,.bfx-w,.bfx-fa{animation:none}.bfx-em{display:none}}</style>
<script>(function(){
function seed(host){if(!host||host.querySelector('.bfx-inf'))return;var cs=getComputedStyle(host);if(cs.position==='static')host.style.position='relative';var amb=document.createElement('div');amb.className='bfx-amb';host.appendChild(amb);var img=document.createElement('img');img.src='/boostan-infinity-glow.png';img.alt='';img.className='bfx-inf';host.appendChild(img);embers(host);}
function embers(host){if(host.querySelector('.bfx-em')||matchMedia('(prefers-reduced-motion: reduce)').matches)return;var cv=document.createElement('canvas');cv.className='bfx-em';host.appendChild(cv);var cx=cv.getContext('2d'),P=[],W,H;function R(){W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight}R();addEventListener('resize',R);for(var i=0;i<38;i++)P.push({x:Math.random(),y:Math.random(),z:.3+Math.random()*.7,s:Math.random()*6.28,v:.0004+Math.random()*.0007});(function T(ts){cx.clearRect(0,0,W,H);P.forEach(function(p){p.y-=p.v*p.z;if(p.y<-.02){p.y=1.02;p.x=Math.random()}var x=(p.x+Math.sin(ts*.0005+p.s)*.01*p.z)*W,y=p.y*H,r=(.6+p.z*1.6),a=(.10+.34*p.z)*(.6+.4*Math.sin(ts*.002+p.s));var g=cx.createRadialGradient(x,y,0,x,y,r*4);g.addColorStop(0,'rgba(240,194,56,'+a+')');g.addColorStop(1,'rgba(240,194,56,0)');cx.fillStyle=g;cx.beginPath();cx.arc(x,y,r*4,0,6.28);cx.fill()});requestAnimationFrame(T)})(0);}
var fix=function(){
document.querySelectorAll('button,a,span,div,p').forEach(function(el){if(el.childElementCount>1)return;var s=(el.textContent||'').trim().toLowerCase().replace(/[^a-z]/g,'');if(s==='skip'||s==='skipintro'){var b=el.closest('button,a')||el;try{b.click();}catch(e){}try{el.click();}catch(e){}var ov=el.closest('[class*="intro" i],[class*="splash" i],[class*="overlay" i],[class*="loader" i],[class*="preload" i]');if(ov){try{ov.style.display='none';}catch(e){}}}});
document.querySelectorAll('video').forEach(function(v){if(v.autoplay||v.muted){var r=v.getBoundingClientRect(),abs=r.top+(window.scrollY||0);if(abs<innerHeight*1.2){var host=v.parentElement;try{v.pause();v.remove();}catch(e){}if(host&&r.width>200)seed(host);}}});
document.querySelectorAll('canvas:not(.bfx-em)').forEach(function(c){var r=c.getBoundingClientRect(),abs=r.top+(window.scrollY||0);if(abs<innerHeight*1.15&&r.width>150){var host=c.parentElement;try{c.remove();}catch(e){}seed(host);}});
document.querySelectorAll('img[src*="logo" i]').forEach(function(i){if(i.dataset.bfx)return;i.dataset.bfx='1';i.src='/logo.png';i.srcset='';});
var ft=document.querySelector('footer');if(ft&&!ft.querySelector('.bfx-sis')){var sd=document.createElement('div');sd.className='bfx-sis';sd.innerHTML='Boostan Group is the sister studio of <a href="https://www.divangroup.ca" target="_blank" rel="noopener">Divan Group</a> — the same senior team that has served beauty and health brands since 2015. Featured projects and client reviews include work delivered under the Divan name.';ft.appendChild(sd);}
document.querySelectorAll('h2,h3').forEach(function(h){if(h.dataset.bfxC)return;var s=(h.textContent||'').toLowerCase();var ks=['testimonial','review','clients say','our clients','featured work','our work','case stud','portfolio','success stories'];var hit=false;for(var i=0;i<ks.length;i++){if(s.indexOf(ks[i])>-1){hit=true;break}}if(hit){h.dataset.bfxC='1';var c=document.createElement('div');c.className='bfx-cap';c.textContent='Includes projects and reviews delivered by our team under sister studio Divan Group (est. 2015).';h.insertAdjacentElement('afterend',c);}});
document.querySelectorAll('h1').forEach(function(h){var r=h.getBoundingClientRect(),abs=r.top+(window.scrollY||0);if(abs>innerHeight||h.dataset.bfxH)return;var tx=h.textContent||'';if(tx.indexOf('Plant')>-1&&tx.indexOf('Flourish')>-1){h.dataset.bfxH='1';h.innerHTML='<span class="bfx-w bfx-w1">Plant.</span> <span class="bfx-w bfx-w2">Nurture.</span> <span class="bfx-w bfx-w3">Flourish.</span>';if(!(h.nextElementSibling&&h.nextElementSibling.className==='bfx-fa')){var fa=document.createElement('div');fa.className='bfx-fa';fa.textContent='\u0628\u0650\u06A9\u0627\u0631. \u0628\u067E\u0631\u0648\u0631. \u0634\u06A9\u0648\u0641\u0627 \u0634\u0648.';h.parentElement.insertBefore(fa,h.nextSibling);}}});
};
new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true});document.addEventListener('DOMContentLoaded',fix);setInterval(fix,600);})();<\/script>
</head>`;
        text = text.replace('</head>', patch);
      }
      res.end(text);
    } else {
      res.end(Buffer.from(await r.arrayBuffer()));
    }
  } catch (e) { res.statusCode = 502; res.end('Mirror error: ' + e.message); }
};
