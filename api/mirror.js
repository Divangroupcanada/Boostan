// Boostan mirror of divangroup.ca — same team, same services & solutions,
// generalized for every industry. Colors + brand swapped in-flight.
const UPSTREAM = 'https://www.divangroup.ca';

const HEX = [
  ['0B6B8C','155A40'],['1A87AC','1F7A57'],['6B1E5C','9C2A2A'],['892676','B83B3B'],
  ['C9A227','F0C238'],['993C1D','A85A28'],['1A1A1A','1C1A15'],['0A0A0A','0C0B08'],
];
const RGB = [
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
  // urls & handles
  ['www.divangroup.ca','www.boostangroup.com'],
  ['divangroup.ca','boostangroup.com'],
  ['instagram.com/divan.group','instagram.com/boostan.group'],
  ['youtube.com/@divan.group','youtube.com/@boostan.group'],
  ['@divan.group','@boostan.group'],
  ['info@boostangroup.com','hello@boostangroup.com'],
  // brand (capitalized only; lowercase divan-* class names must keep matching CSS)
  ['Divan','Boostan'],['DIVAN','BOOSTAN'],
  // founding: truthful sister-brand framing
  ['"foundingDate": "2015"','"foundingDate": "2026"'],
  ['Founded 2015','Est. 2026 — same senior team serving clients since 2015'],
  ['**Founded**: 2015','**Founded**: 2026 (same team since 2015)'],
  ['founded 2015','est. 2026 — same team since 2015'],
  ['founded in 2015','launched in 2026 by the team serving clients since 2015'],
  ['since 2015','since 2015 (under the Divan name)'],
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
      }
      res.end(text);
    } else {
      res.end(Buffer.from(await r.arrayBuffer()));
    }
  } catch (e) { res.statusCode = 502; res.end('Mirror error: ' + e.message); }
};
