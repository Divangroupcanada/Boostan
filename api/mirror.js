// Boostan mirror of divangroup.ca — colors, brand name, and industry positioning
// transformed in-flight. Static files in this branch (logo.png, favicon.svg)
// take precedence over the mirror via Vercel's filesystem-first rewrites.
const UPSTREAM = 'https://www.divangroup.ca';

// hex + three.js colors (case-insensitive)
const HEX = [
  ['0B6B8C','155A40'], // teal -> cypress
  ['1A87AC','1F7A57'], // teal-light -> cypress-light
  ['6B1E5C','9C2A2A'], // magenta -> pomegranate
  ['892676','B83B3B'], // magenta-light -> pomegranate-light
  ['C9A227','F0C238'], // gold -> saffron
  ['993C1D','A85A28'], // coral -> clay
  ['1A1A1A','1C1A15'], // charcoal -> bark
  ['0A0A0A','0C0B08'], // charcoal-dark -> bark-dark
];
// tailwind rgb space syntax + comma syntax
const RGB = [
  ['11 107 140','21 90 64'],  ['11,107,140','21,90,64'],
  ['26 135 172','31 122 87'], ['26,135,172','31,122,87'],
  ['107 30 92','156 42 42'],  ['107,30,92','156,42,42'],
  ['137 38 118','184 59 59'], ['137,38,118','184,59,59'],
  ['201 162 39','240 194 56'],['201,162,39','240,194,56'],
  ['153 60 29','168 90 40'],  ['153,60,29','168,90,40'],
  ['26 26 26','28 26 21'],
];
// urls/handles first (lowercase), then capitalized brand name only —
// lowercase divan-* Tailwind class names must keep matching the CSS
const STR = [
  ['www.divangroup.ca','www.boostangroup.com'],
  ['divangroup.ca','boostangroup.com'],
  ['instagram.com/divan.group','instagram.com/boostan.group'],
  ['youtube.com/@divan.group','youtube.com/@boostan.group'],
  ['info@boostangroup.com','hello@boostangroup.com'],
  ['Divan','Boostan'], ['DIVAN','BOOSTAN'],
  // industry: longest phrases first
  ['cosmetic, dental &amp; dermatology clinics','ambitious businesses in every industry'],
  ['cosmetic, dental & dermatology clinics','ambitious businesses in every industry'],
  ['cosmetic clinics, med spas, and beauty brands','ambitious businesses in every industry'],
  ['cosmetic clinics, med spas, and beauty businesses','ambitious businesses in every industry'],
  ['cosmetic clinics, med spas, beauty businesses','businesses in every industry'],
  ['Cosmetic Clinics &amp; Beauty Brands','Ambitious Businesses'],
  ['Cosmetic Clinics & Beauty Brands','Ambitious Businesses'],
  ['cosmetic clinics &amp; beauty brands','ambitious businesses'],
  ['beauty and medical brands','brands in every industry'],
  ['beauty &amp; health clinics','businesses of every kind'],
  ['beauty & health clinics','businesses of every kind'],
  ['Beauty &amp; Health Clinics','Businesses of Every Kind'],
  ['Beauty & Health Clinics','Businesses of Every Kind'],
  ['cosmetic clinics','ambitious businesses'], ['Cosmetic Clinics','Ambitious Businesses'],
  ['cosmetic clinic','ambitious business'],   ['Cosmetic Clinic','Ambitious Business'],
  ['med spas','service businesses'], ['Med Spas','Service Businesses'],
  ['med spa','service business'],    ['Med Spa','Service Business'],
  ['beauty brands','modern brands'], ['Beauty Brands','Modern Brands'],
  ['beauty brand','modern brand'],
  ['beauty businesses','ambitious businesses'],
  ['dermatology practices','professional practices'],
  ['clinics','businesses'], ['Clinics','Businesses'],
  ['clinic','business'],    ['Clinic','Business'],
  ['patients','customers'], ['Patients','Customers'],
  ['patient','customer'],   ['Patient','Customer'],
];

function transform(text) {
  for (const [a, b] of HEX) {
    text = text.replace(new RegExp('#' + a, 'gi'), '#' + b)
               .replace(new RegExp('0x' + a, 'gi'), '0x' + b.toLowerCase());
  }
  for (const [a, b] of RGB) text = text.split(a).join(b);
  for (const [a, b] of STR) text = text.split(a).join(b);
  return text;
}

module.exports = async (req, res) => {
  let path = req.url || '/';
  if (path.startsWith('/api/mirror')) path = '/';
  try {
    const r = await fetch(UPSTREAM + path, { headers: { 'user-agent': 'boostan-mirror' } });
    const ct = r.headers.get('content-type') || 'application/octet-stream';
    res.statusCode = r.status;
    res.setHeader('content-type', ct);
    res.setHeader('cache-control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    if (/text\/|javascript|json|svg|xml/.test(ct)) {
      let text = await r.text();
      text = transform(text);
      if (ct.includes('html')) {
        text = text.replace('<link rel="icon" type="image/x-icon" href="/favicon.ico" />',
                            '<link rel="icon" type="image/svg+xml" href="/favicon.svg" />');
      }
      res.end(text);
    } else {
      res.end(Buffer.from(await r.arrayBuffer()));
    }
  } catch (e) {
    res.statusCode = 502;
    res.end('Mirror error: ' + e.message);
  }
};
