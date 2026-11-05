'use strict';

// ---------- data ----------
const POS = { n: 'nom', v: 'verbe', adj: 'adjectif', adv: 'adverbe', pron: 'pronom', prep: 'préposition', conj: 'conjonction',
  art: 'article', det: 'déterminant', num: 'nombre', int: 'interjection', phr: 'verbe à particule', exp: 'expression' };
const GENDER = { m: 'masculin', f: 'féminin', mf: 'masc. et fém.', mpl: 'masc. pluriel', fpl: 'fém. pluriel' };
const THEMES = {
  core: 'Mots-outils', people: 'Personnes & famille', body: 'Corps & santé', home: 'Maison & objets', food: 'Nourriture & boissons',
  nature: 'Nature, animaux & météo', time: 'Temps & dates', num: 'Nombres & quantités', color: 'Couleurs', place: 'Lieux & voyages',
  move: 'Mouvement', act: 'Actions du quotidien', talk: 'Parole & communication', mind: 'Pensée & savoir', feel: 'Émotions & caractère',
  qual: 'Qualités & descriptions', work: 'Travail, argent & école', society: 'Société, loi & politique', media: 'Médias & technologie',
  fun: 'Loisirs, sport & culture', abstract: 'Notions abstraites', phr: 'Phrasal verbs', idiom: 'Expressions idiomatiques',
};
// line format: rank|word|pos|gender|fr|theme|note|example (target = fr)
const parse = chunks => (chunks || []).join('\n').split('\n').filter(l => l.trim() && !l.startsWith('#')).map(l => {
  const [id, t, pos, g, fr, theme, note, ex] = l.split('|');
  return { id: +id, t, pos, g, fr, theme, note, ex };
});
const LANGS = {
  es: { name: 'Espagnol', flag: '🇪🇸', voice: 'es-ES', words: parse(window.ES_WORDS), lessons: window.ES_LESSONS || [], texts: window.ES_TEXTS || [],
    bands: [200, 500, 1000], sample: '¡Hola! ¿Qué tal? Me llamo Theo.', hello: '¡Hola!', ph: 'en espagnol…',
    src: 'Wiktionary — Spanish frequency lists (sous-titres), top 2000 lemmes' },
  en: { name: 'Anglais', flag: '🇬🇧', voice: 'en-GB', words: parse(window.EN_WORDS), lessons: window.EN_LESSONS || [], texts: window.EN_TEXTS || [],
    bands: [250, 500], sample: 'Hello! How are you doing today?', hello: 'Hi there!', ph: 'in English…',
    src: 'Liste de vocabulaire avancé (niveau B2–C1), classée par utilité' },
};
for (const L of Object.values(LANGS)) L.byId = new Map(L.words.map(w => [w.id, w]));

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const app = $('#app');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const today = () => new Date().toLocaleDateString('sv'); // local YYYY-MM-DD
const addDays = (d, n) => { const x = new Date(d + 'T12:00'); x.setDate(x.getDate() + n); return x.toLocaleDateString('sv'); };
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00') - new Date(a + 'T12:00')) / 864e5);
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.random() * a.length | 0];

// typed answers: punctuation, case and a leading article never matter; accents give a warning but count as right
const norm = s => String(s).toLowerCase().replace(/[’']/g, "'").replace(/[¿¡!?.,;:"«»()…]/g, ' ').replace(/\s+/g, ' ').trim()
  .replace(/^(el|la|los|las|un|una|to|the|a|an) (?=\S)/, '');
const bare = s => norm(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
function match(input, answers) {
  const i = norm(input);
  if (answers.some(a => norm(a) === i)) return 'ok';
  return answers.some(a => bare(a) === bare(input)) ? 'accent' : '';
}

// ---------- state ----------
const KEY = 'theo-langues-v1';
const freshLang = () => ({ quota: 15, theme: '', pos: '', words: {}, day: null, lessons: {}, texts: {}, tenses: ['pres'] });
const fresh = () => ({ lang: 'es', rate: 0.9, active: [], created: today(), lastExport: null, es: freshLang(), en: freshLang() });
let S = load();
function load() {
  try { const s = JSON.parse(localStorage.getItem(KEY)); const f = fresh(); return s ? { ...f, ...s, es: { ...f.es, ...s.es }, en: { ...f.en, ...s.en } } : f; }
  catch { return fresh(); }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); }
  catch (e) { alert('Impossible d’enregistrer la progression : ' + e.message + '\nFais une sauvegarde maintenant (Réglages).'); }
}
navigator.storage?.persist?.(); // ask the browser not to evict our data
const L = () => LANGS[S.lang];
const P = () => S[S.lang];

// spaced repetition: box 0 = new/failed, box k → next review after STEPS[k-1] days
const STEPS = [1, 2, 4, 7, 15, 30, 60];
function grade(id, ok) {
  const p = P().words[id] ||= { box: 0, ok: 0, ko: 0 };
  if (ok) { p.ok++; p.box = Math.min(p.box + 1, STEPS.length); } else { p.ko++; p.box = 0; }
  p.due = addDays(today(), ok ? STEPS[p.box - 1] : 1);
  markActive();
}
const markActive = () => { if (!S.active.includes(today())) S.active = [...S.active.slice(-400), today()]; };
const status = id => { const p = P().words[id]; return !p ? 'new' : p.box >= 4 ? 'mastered' : 'learning'; };
const known = () => Object.keys(P().words).map(Number).filter(id => L().byId.has(id));
const score = p => p.ko - p.ok;
const dueIds = () => known().filter(id => P().words[id].due <= today()).sort((a, b) => score(P().words[b]) - score(P().words[a]));
const hardIds = () => known().filter(id => P().words[id].ko > 0).sort((a, b) => score(P().words[b]) - score(P().words[a])).slice(0, 20);
function streak() {
  let d = S.active.includes(today()) ? today() : addDays(today(), -1), n = 0;
  while (S.active.includes(d)) { n++; d = addDays(d, -1); }
  return n;
}

// random inside frequency bands, easiest band first: the first ~2 weeks only draw from the top 200
const band = (w, bands) => { const b = bands.findIndex(n => w.id <= n); return b < 0 ? bands.length : b; };
function pickNew(n) {
  const { theme, pos } = P(), bands = L().bands;
  const pool = L().words.filter(w => !P().words[w.id] && (!theme || w.theme === theme) && (!pos || w.pos === pos));
  const out = [];
  for (let b = 0; b <= bands.length; b++) out.push(...shuffle(pool.filter(w => band(w, bands) === b)).slice(0, n - out.length));
  return out.map(w => w.id);
}
function todaySet() {
  if (P().day?.date !== today()) { P().day = { date: today(), ids: pickNew(P().quota), learned: 0, score: null }; save(); }
  return P().day;
}

// ---------- speech (built-in iPhone / Android voices) ----------
const hasTTS = 'speechSynthesis' in window;
const voices = {};
function pickVoices() {
  const all = speechSynthesis.getVoices(), good = v => /premium|enhanced|améliorée|amélioré|neural/i.test(v.name);
  for (const [k, l] of Object.entries(LANGS)) {
    const base = l.voice.slice(0, 2), same = v => v.lang.replace('_', '-').toLowerCase();
    const exact = all.filter(v => same(v) === l.voice.toLowerCase()), loose = all.filter(v => same(v).startsWith(base));
    voices[k] = [...exact.filter(good), ...exact, ...loose.filter(good), ...loose][0] || null;
  }
}
if (hasTTS) { pickVoices(); speechSynthesis.onvoiceschanged = pickVoices; }
function say(text, slow) {
  if (!hasTTS || !text) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = L().voice; if (voices[S.lang]) u.voice = voices[S.lang];
  u.rate = slow ? 0.5 : S.rate;
  speechSynthesis.speak(u);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-say]');
  if (b) return say(b.dataset.say, b.dataset.slow === '1');
  const s = e.target.closest('.s');
  if (s) say(s.dataset.t || s.textContent);
});
const sayBtn = (text, label = '🔊') => `<button class="say" data-say="${esc(text)}">${label}</button>`;
const slowBtn = text => `<button class="say" data-say="${esc(text)}" data-slow="1">🐢</button>`;

// ---------- words ----------
const EL_F = new Set(['agua', 'alma', 'arma', 'área', 'águila', 'hambre', 'hacha', 'ala', 'aula', 'hada', 'ave', 'arca', 'ancla']);
const article = w => S.lang !== 'es' || w.pos !== 'n' ? '' : EL_F.has(w.t) ? 'el' : { m: 'el', f: 'la', mf: 'el/la', mpl: 'los', fpl: 'las' }[w.g] || '';
const shown = w => (article(w) ? article(w).split('/')[0] + ' ' : '') + w.t; // what we pronounce
const exParts = w => (w.ex || '').split(' = ');
function card(w) {
  const [exT, exFr] = exParts(w), art = article(w);
  return `<div class="big">${art ? `<span class="art">${art}</span> ` : ''}${esc(w.t)}</div>
    <div><span class="tag">${POS[w.pos] || w.pos}</span> ${w.g ? `<span class="tag ${w.g[0]}">${GENDER[w.g]}</span>` : ''}
      <span class="tag">${esc(THEMES[w.theme] || '')}</span> <span class="tag">n° ${w.id}</span></div>
    <div class="row" style="margin-top:8px">${sayBtn(shown(w))} ${slowBtn(shown(w))}</div>
    <div class="meaning">🇫🇷 ${esc(w.fr)}</div>
    ${w.note ? `<div class="note">💡 ${esc(w.note)}</div>` : ''}
    ${exT ? `<div class="ex">${sayBtn(exT)} <b>${esc(exT)}</b><br><span class="muted">${esc(exFr || '')}</span></div>` : ''}`;
}

// ---------- quiz engine ----------
function options(w, label) {
  const others = shuffle(L().words.filter(x => x.id !== w.id && x.t !== w.t && x.fr !== w.fr));
  const picks = [...new Set([...others.filter(x => x.pos === w.pos), ...others])].slice(0, 3);
  const opts = shuffle([w, ...picks]);
  return { opts: opts.map(label).map(esc), a: opts.indexOf(w) };
}
const WORD_TYPES = ['read', 'pick', 'type', 'type', 'ear', 'dict'];
function wordQ(w, only) {
  const types = (only ? [only] : [...WORD_TYPES, ...(S.lang === 'es' && w.pos === 'n' && /^[mf]/.test(w.g) && !EL_F.has(w.t) ? ['gen'] : [])])
    .filter(t => hasTTS || (t !== 'ear' && t !== 'dict'));
  const t = pick(types), s = shown(w), big = `<div class="big">${esc(s)}</div>`;
  const base = { key: w.id, after: s, why: `<b>${esc(s)}</b> = ${esc(w.fr)}`, lang: S.lang };
  const ear = `<button class="say" style="font-size:2.5rem;padding:16px 28px" data-say="${esc(s)}">🔊</button> ${slowBtn(s)}`;
  if (t === 'read') return { ...base, ...options(w, x => x.fr), speak: s, html: `${big}${sayBtn(s)}<p class="muted">Que veut dire ce mot ?</p>` };
  if (t === 'ear') return { ...base, ...options(w, x => x.fr), speak: s, html: `${ear}<p class="muted">Écoute — que veut dire ce mot ?</p>` };
  if (t === 'pick') return { ...base, ...options(w, shown), html: `<h2>${esc(w.fr)}</h2><p class="muted">Quel est le bon mot ?</p>` };
  if (t === 'dict') return { ...base, a: w.t, speak: s, html: `${ear}<p class="muted">Dictée — écris ce que tu entends</p>` };
  if (t === 'gen') {
    const opts = w.g.endsWith('pl') ? ['los', 'las'] : ['el', 'la'];
    return { ...base, opts, a: w.g[0] === 'm' ? 0 : 1, html: `<div class="big">… ${esc(w.t)}</div><p class="muted">${esc(w.fr)} — masculin ou féminin ?</p>` };
  }
  return { ...base, a: w.t, html: `<h2>${esc(w.fr)}</h2><p class="muted">Écris-le ${L().ph}</p>` };
}
// word-order question built from a word's example sentence
function orderQ(w) {
  const [exT, exFr] = exParts(w);
  const tokens = exT.split(' ');
  if (tokens.length < 3 || tokens.length > 12) return null;
  return { key: w.id, tokens: shuffle(tokens.slice()), a: exT, after: exT, html: `<h2>${esc(exFr)}</h2><p class="muted">Remets les mots dans l’ordre</p>`, lang: S.lang };
}

// qs: [{key, html, opts?, a (index | answer text), alt?, tokens?, why?, speak?, after?}] → onDone(results Map key→firstTryOk)
function runQuiz(qs, title, onDone) {
  const queue = qs.slice(), results = new Map();
  let i = 0;
  step();
  function step() {
    const q = queue[i];
    if (!q) return onDone(results);
    const mc = typeof q.a === 'number';
    let body;
    if (mc) body = `<div class="opts">${q.opts.map((o, k) => `<button class="opt" data-k="${k}">${o}</button>`).join('')}</div>`;
    else if (q.tokens) body = `<div class="chips ans" id="built"></div><div class="chips" id="pool">${q.tokens.map((t, k) =>
      `<button class="chip" data-k="${k}">${esc(t)}</button>`).join('')}</div><button class="wide" id="ok">Valider</button>`;
    else body = `<form class="typing"><input id="ans" lang="${q.lang || S.lang}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
      placeholder="${esc(L().ph)}"><button>OK</button></form>`;
    app.innerHTML = `<h1>${esc(title)}</h1><div class="muted">${Math.min(i + 1, qs.length)} / ${qs.length}${i >= qs.length ? ' · rattrapage' : ''}</div>
      <div class="bar"><span style="width:${100 * results.size / qs.length}%"></span></div>
      <div class="card"><div class="q">${q.html}</div>${body}<div id="fb"></div></div>`;
    if (q.speak) say(q.speak);
    if (mc) app.querySelectorAll('.opt').forEach(b => b.onclick = () => check(+b.dataset.k === q.a ? 'ok' : '', b));
    else if (q.tokens) {
      const built = [];
      const draw = () => { $('#built').innerHTML = built.map((k, j) => `<button class="chip" data-j="${j}">${esc(q.tokens[k])}</button>`).join('');
        app.querySelectorAll('#pool .chip').forEach(b => b.disabled = built.includes(+b.dataset.k)); };
      $('#pool').onclick = e => { const b = e.target.closest('.chip'); if (b && !b.disabled) { built.push(+b.dataset.k); draw(); } };
      $('#built').onclick = e => { const b = e.target.closest('.chip'); if (b) { built.splice(+b.dataset.j, 1); draw(); } };
      $('#ok').onclick = () => { if (built.length) { $('#ok').disabled = true; check(match(built.map(k => q.tokens[k]).join(' '), [q.a])); } };
    } else {
      const inp = $('#ans'); inp.focus();
      $('.typing').onsubmit = e => { e.preventDefault(); if (inp.value.trim()) check(match(inp.value, [q.a, ...(q.alt || [])])); };
    }
    function check(r, btn) {
      const ok = !!r;
      if (!results.has(q.key)) { results.set(q.key, ok); if (!ok) queue.push(q); } // retry missed ones at the end
      if (mc) { app.querySelectorAll('.opt').forEach((b, k) => { b.disabled = true; if (k === q.a) b.classList.add('right'); }); if (!ok) btn.classList.add('wrong'); }
      else if (!q.tokens) $('#ans').disabled = true;
      if (q.after) say(q.after);
      const head = r === 'ok' ? '<b>✓ Correct</b>' : r === 'accent' ? '<b>✓ Accepté — attention aux accents</b>' : '<b>✗ Pas tout à fait</b>';
      $('#fb').innerHTML = `<div class="fb ${r === 'ok' ? 'ok' : r ? 'acc' : 'ko'}">${head}
        ${!mc && r !== 'ok' ? `<p>Réponse : <b>${esc(q.a)}</b></p>` : ''}${q.why ? `<p>${q.why}</p>` : ''}</div>
        <button class="wide" id="next" style="margin-top:10px">Continuer →</button>`;
      $('#next').onclick = () => { i++; step(); };
      $('#next').focus();
    }
  }
}
const resultHtml = (res, missedHtml, backHref, backLabel) => {
  const right = [...res.values()].filter(Boolean).length;
  return `<h1>${right} / ${res.size} ✓</h1>
    ${missedHtml ? `<div class="card"><h2>À revoir</h2><ul class="list">${missedHtml}</ul></div>` : '<div class="card">Parfait ! 🎉</div>'}
    <a class="btn wide" href="${backHref}">${backLabel}</a>`;
};
// mode 'srs' grades every answer; 'drill' only records misses so free practice never pushes reviews further away
function wordQuiz(ids, title, { only, mode = 'srs', order } = {}) {
  const ws = shuffle(ids.slice()).map(id => L().byId.get(id));
  const qs = order ? ws.map(orderQ).filter(Boolean).slice(0, 12) : ws.map(w => wordQ(w, only));
  if (!qs.length) { app.innerHTML = `<h1>${esc(title)}</h1><div class="card">Apprends d’abord quelques mots (Accueil → Mots du jour).</div>`; return; }
  runQuiz(qs, title, res => {
    res.forEach((ok, id) => { if (mode === 'srs' || !ok) grade(id, ok); });
    markActive();
    if (mode === 'today' && P().day) P().day.score = `${[...res.values()].filter(Boolean).length}/${res.size}`;
    save();
    const missed = [...res].filter(([, ok]) => !ok).map(([id]) => L().byId.get(id));
    app.innerHTML = resultHtml(res, missed.map(w => `<li>${sayBtn(shown(w))} <b>${esc(shown(w))}</b> — ${esc(w.fr)}</li>`).join(''), '#tests', 'Retour aux tests');
  });
}

// ---------- conjugation ----------
const PERSONS = ['yo', 'tú', 'él / ella / usted', 'nosotros', 'vosotros', 'ellos / ellas / ustedes'];
const TENSES = { pres: 'Présent (presente)', indef: 'Passé simple (pretérito indefinido)', imperf: 'Imparfait (pretérito imperfecto)',
  perf: 'Passé composé (pretérito perfecto)', fut: 'Futur (futuro simple)', cond: 'Conditionnel (condicional)' };
const ENDS = {
  pres: { ar: 'o as a amos áis an', er: 'o es e emos éis en', ir: 'o es e imos ís en' },
  indef: { ar: 'é aste ó amos asteis aron', er: 'í iste ió imos isteis ieron', ir: 'í iste ió imos isteis ieron' },
  imperf: { ar: 'aba abas aba ábamos abais aban', er: 'ía ías ía íamos íais ían', ir: 'ía ías ía íamos íais ían' },
  fut: 'é ás á emos éis án', cond: 'ía ías ía íamos íais ían',
};
const HABER = ['he', 'has', 'ha', 'hemos', 'habéis', 'han'];
// verbs.js line: inf|fr|tense=f1,...,f6;fs=future stem;pp=participle — anything not listed is regular
const VERBS = (window.ES_VERBS || []).map(l => {
  const [inf, fr, ov = ''] = l.split('|'), o = {};
  for (const kv of ov.split(';').filter(Boolean)) { const [k, v] = kv.split('='); o[k] = k === 'fs' || k === 'pp' ? v : v.split(','); }
  return { inf, fr, o };
});
function conj(v, t) {
  if (Array.isArray(v.o[t])) return v.o[t];
  const stem = v.inf.slice(0, -2), g = v.inf.slice(-2);
  if (t === 'fut' || t === 'cond') return ENDS[t].split(' ').map(e => (v.o.fs || v.inf) + e);
  if (t === 'perf') return HABER.map(h => h + ' ' + (v.o.pp || stem + (g === 'ar' ? 'ado' : 'ido')));
  return ENDS[t][g].split(' ').map(e => stem + e);
}
// English irregular verbs: base|past|participle|fr  (a slash marks two accepted forms)
const IRREG = (window.EN_IRREG || []).map(l => { const [base, past, pp, fr] = l.split('|'); return { base, past, pp, fr }; });
const pattern = v => v.base === v.past && v.past === v.pp ? 'AAA' : v.past === v.pp ? 'ABB' : v.base === v.pp ? 'ABA' : 'ABC';
const PATTERNS = { AAA: 'A-A-A : les trois formes sont identiques', ABB: 'A-B-B : prétérit = participe passé', ABA: 'A-B-A : le participe revient à la base', ABC: 'A-B-C : trois formes différentes' };

function conjQuiz() {
  let qs;
  if (S.lang === 'es') {
    const ts = P().tenses.filter(t => TENSES[t]);
    qs = Array.from({ length: 15 }, (_, k) => {
      const v = pick(VERBS), t = pick(ts.length ? ts : ['pres']), p = Math.random() * 6 | 0, f = conj(v, t)[p];
      return { key: k, a: f, lang: 'es', after: `${PERSONS[p].split(' /')[0]} ${f}`,
        html: `<div class="big">${esc(v.inf)}</div><p class="muted">${esc(v.fr)}</p><h2>${esc(TENSES[t])}</h2><h2>👤 ${esc(PERSONS[p])}</h2>`,
        why: `${esc(v.inf)} · ${esc(TENSES[t])} : ${conj(v, t).map((x, j) => `${esc(PERSONS[j].split(' /')[0])} <b>${esc(x)}</b>`).join(', ')}` };
    });
  } else {
    qs = shuffle(IRREG.slice()).slice(0, 15).map((v, k) => {
      const which = pick(['past', 'pp']), forms = v[which].split('/');
      return { key: k, a: forms[0], alt: forms.slice(1), lang: 'en', after: `${v.base}, ${v.past.replace('/', ', ')}, ${v.pp.replace('/', ', ')}`,
        html: `<div class="big">to ${esc(v.base)}</div><p class="muted">${esc(v.fr)}</p><h2>${which === 'past' ? 'Prétérit (simple past)' : 'Participe passé (past participle)'} ?</h2>`,
        why: `<b>${esc(v.base)} – ${esc(v.past)} – ${esc(v.pp)}</b> · ${PATTERNS[pattern(v)]}` };
    });
  }
  runQuiz(qs, 'Conjugaison', res => { markActive(); save(); app.innerHTML = resultHtml(res, '', '#conj', 'Encore une série'); });
}

// ---------- views ----------
const views = {
  today() {
    const d = todaySet(), seen = known().length, mastered = known().filter(id => status(id) === 'mastered').length;
    const due = dueIds().length, hard = hardIds().length;
    const since = S.lastExport ? daysBetween(S.lastExport, today()) : daysBetween(S.created, today());
    const remind = seen > 0 && since >= 7;
    return `<h1>${L().hello} 👋</h1>
      ${remind ? `<div class="banner">💾 ${S.lastExport ? `Dernière sauvegarde il y a ${since} jours.` : 'Aucune sauvegarde pour l’instant.'} Pense à sauvegarder chaque semaine.
        <button class="wide" style="margin-top:8px" onclick="exportData()">Sauvegarder maintenant</button></div>` : ''}
      <div class="card stats"><div><b>${seen}</b><span class="muted">vus / ${L().words.length}</span></div>
        <div><b>${mastered}</b><span class="muted">maîtrisés</span></div><div><b>🔥 ${streak()}</b><span class="muted">jours de suite</span></div></div>
      <div class="card"><h2>Mots du jour</h2>
        ${d.ids.length ? `<p class="muted">${d.ids.length} mots${P().theme ? ' · ' + esc(THEMES[P().theme]) : ''}${P().pos ? ' · ' + POS[P().pos] + 's' : ''}</p>
        <div class="bar"><span style="width:${100 * d.learned / d.ids.length}%"></span></div>
        <div class="row"><a class="btn grow" href="#learn">${d.learned ? d.learned >= d.ids.length ? 'Revoir les mots' : 'Continuer' : 'Commencer'}</a>
        <a class="btn grow ${d.learned ? '' : 'ghost'}" href="#test">${d.score ? `Refaire le test (${d.score})` : 'Test du jour'}</a></div>`
        : `<p>Plus de nouveaux mots${P().theme || P().pos ? ' avec ce filtre — change-le dans Réglages' : ' — tu les as tous vus ! 🎓'}.</p>`}</div>
      <div class="card"><h2>Révision</h2><p class="muted">${due} à réviser aujourd’hui${hard ? ` · ${hard} mots difficiles` : ''}</p>
        <div class="row"><a class="btn grow ${due ? '' : 'ghost'}" href="#review">Réviser</a>${hard ? '<a class="btn ghost grow" href="#hard">Mots difficiles</a>' : ''}</div></div>`;
  },
  learn() {
    const d = todaySet();
    if (!d.ids.length) return views.today();
    let i = d.learned >= d.ids.length ? 0 : Math.min(d.learned, d.ids.length - 1);
    const show = () => {
      const id = d.ids[i], w = L().byId.get(id);
      if (!P().words[id]) P().words[id] = { box: 0, ok: 0, ko: 0, due: addDays(today(), 1) };
      d.learned = Math.max(d.learned, i + 1); markActive(); save();
      app.innerHTML = `<h1>Apprendre</h1><div class="muted">${i + 1} / ${d.ids.length}</div>
        <div class="bar"><span style="width:${100 * (i + 1) / d.ids.length}%"></span></div>
        <div class="card">${card(w)}</div>
        <div class="row"><button class="ghost" id="prev" ${i ? '' : 'disabled'}>←</button>
        ${i + 1 < d.ids.length ? '<button class="grow" id="nx">Suivant →</button>' : '<a class="btn grow" href="#test">Terminé — passer le test</a>'}</div>`;
      say(shown(w));
      $('#prev').onclick = () => { i--; show(); };
      $('#nx') && ($('#nx').onclick = () => { i++; show(); });
    };
    setTimeout(show);
    return '';
  },
  test() { const d = todaySet(); setTimeout(() => wordQuiz(d.ids.slice(0, d.learned), 'Test du jour', { mode: 'today' })); return ''; },
  review() {
    const ids = dueIds().slice(0, 40); // shortcut: 40 per session keeps sessions short; the rest stay due
    if (!ids.length) return `<h1>Révision</h1><div class="card">Rien à réviser aujourd’hui ✓</div>
      ${hardIds().length ? '<a class="btn wide" href="#hard">Travailler les mots difficiles</a>' : ''}`;
    setTimeout(() => wordQuiz(ids, 'Révision'));
    return '';
  },
  hard() { setTimeout(() => wordQuiz(hardIds(), 'Mots difficiles')); return ''; },
  drill(kind) {
    const titles = { ear: 'Écoute (QCM)', dict: 'Dictée', type: 'Écriture', read: 'Lecture (QCM)' };
    if (!titles[kind]) return views.tests();
    setTimeout(() => wordQuiz(shuffle(known()).slice(0, 20), titles[kind], { only: kind, mode: 'drill' }));
    return '';
  },
  order() { setTimeout(() => wordQuiz(shuffle(known()), 'Phrases dans l’ordre', { order: true, mode: 'drill' })); return ''; },
  tests() {
    const n = known().length, due = dueIds().length, l = L();
    const item = (href, title, sub) => `<li><a class="item" href="${href}"><b>${title}</b><br><span class="muted">${sub}</span></a></li>`;
    return `<h1>Tests · ${l.flag} ${l.name}</h1>
      <div class="card"><h2>Vocabulaire</h2><ul class="list">
        ${item('#test', '📅 Test du jour', 'Les mots appris aujourd’hui')}
        ${item('#review', '🔁 Révision', `${due} mots à réviser (répétition espacée)`)}
        ${item('#hard', '💪 Mots difficiles', `${hardIds().length} mots que tu rates souvent`)}
        ${item('#drill/ear', '🎧 Écoute', 'Écoute le mot et choisis sa traduction')}
        ${item('#drill/read', '👀 Lecture', 'Lis le mot et choisis sa traduction')}
        ${item('#drill/type', '⌨️ Écriture', 'Traduction du français, à écrire')}
        ${item('#drill/dict', '✏️ Dictée', 'Écris le mot que tu entends')}
        ${item('#order', '🧩 Phrases', 'Remets les mots d’une phrase dans l’ordre')}
      </ul><p class="muted">Basé sur tes ${n} mots déjà vus.</p></div>
      <div class="card"><h2>Grammaire & compréhension</h2><ul class="list">
        ${item('#conj', S.lang === 'es' ? '🔤 Conjugaison' : '🔤 Verbes irréguliers', S.lang === 'es' ? `${VERBS.length} verbes, choisis tes temps` : `${IRREG.length} verbes : prétérit et participe passé`)}
        ${item('#texts', '🎙️ Compréhension orale', `${l.texts.length} textes à écouter, avec questions`)}
      </ul></div>
      <div class="card"><h2>Tests des leçons</h2><ul class="list">${l.lessons.map((x, k) =>
        `<li><a class="item" href="#lquiz/${k}"><b>${k + 1}. ${esc(x.title)}</b> ${P().lessons[k] != null ? `<span class="tag">✓ ${P().lessons[k]}/${x.quiz.length}</span>` : ''}</a></li>`).join('')}</ul></div>`;
  },
  lessons() {
    return `<h1>Leçons · ${L().flag} ${L().name}</h1><ul class="list card">${L().lessons.map((l, k) =>
      `<li><a class="item" href="#lesson/${k}"><b>${k + 1}. ${esc(l.title)}</b>
        ${P().lessons[k] != null ? `<span class="tag">✓ ${P().lessons[k]}/${l.quiz.length}</span>` : ''}<br><span class="muted">${esc(l.sub)}</span></a></li>`).join('')}</ul>
      ${S.lang === 'es' ? '<a class="btn ghost wide" href="#verbs">📋 Tableaux de conjugaison</a>' : '<a class="btn ghost wide" href="#irr">📋 Liste des verbes irréguliers</a>'}`;
  },
  lesson(k) {
    const l = L().lessons[k];
    if (!l) return views.lessons();
    return `<a href="#lessons">← Leçons</a><h1>${esc(l.title)}</h1><div class="card lesson-body">${l.body}</div>
      <a class="btn wide" href="#lquiz/${k}">Faire le test (${l.quiz.length} questions)</a>
      ${L().lessons[+k + 1] ? `<p style="text-align:center"><a href="#lesson/${+k + 1}">Leçon suivante →</a></p>` : ''}`;
  },
  lquiz(k) {
    const l = L().lessons[k];
    if (!l) return views.tests();
    setTimeout(() => runQuiz(shuffle(l.quiz.map((q, j) => ({ key: j, html: `<h2>${q.q}</h2>`, opts: q.opts, a: q.a, alt: q.alt, why: q.why, after: q.say, lang: S.lang }))), l.title, res => {
      const right = [...res.values()].filter(Boolean).length;
      P().lessons[k] = Math.max(P().lessons[k] ?? 0, right); markActive(); save();
      app.innerHTML = `<h1>${right} / ${res.size} ✓</h1><div class="card">${esc(l.title)}</div>
        <div class="row"><a class="btn ghost grow" href="#lesson/${k}">Relire la leçon</a><a class="btn grow" href="#tests">Tests</a></div>`;
    }));
    return '';
  },
  conj() {
    if (S.lang === 'en') return `<h1>Verbes irréguliers</h1><div class="card"><p>15 verbes au hasard : on te demande le prétérit ou le participe passé.</p>
      <button class="wide" onclick="conjQuiz()">Commencer</button></div><a class="btn ghost wide" href="#irr">📋 Voir la liste</a>`;
    setTimeout(() => app.querySelectorAll('[data-tense]').forEach(c => c.onchange = () => {
      P().tenses = [...app.querySelectorAll('[data-tense]:checked')].map(x => x.dataset.tense); save();
    }));
    return `<h1>Conjugaison</h1><div class="card"><h2>Temps à travailler</h2>
      ${Object.entries(TENSES).map(([k, v]) => `<label class="check"><input type="checkbox" data-tense="${k}" ${P().tenses.includes(k) ? 'checked' : ''}>${v}</label>`).join('')}
      <p class="muted">Commence par le présent, ajoute un temps quand tu as fait la leçon correspondante.</p>
      <button class="wide" onclick="conjQuiz()">15 questions</button></div><a class="btn ghost wide" href="#verbs">📋 Tableaux de conjugaison</a>`;
  },
  verbs(inf) {
    const v = VERBS.find(x => x.inf === inf);
    if (!v) return `<a href="#lessons">← Leçons</a><h1>Tableaux de conjugaison</h1><ul class="list card">${VERBS.map(x =>
      `<li><a class="item" href="#verbs/${encodeURIComponent(x.inf)}"><b>${esc(x.inf)}</b> <span class="muted">— ${esc(x.fr)}</span>${Object.keys(x.o).length ? ' <span class="tag">irrégulier</span>' : ''}</a></li>`).join('')}</ul>`;
    return `<a href="#verbs">← Verbes</a><h1>${esc(v.inf)}</h1><p class="muted">${esc(v.fr)}</p>${Object.entries(TENSES).map(([t, name]) =>
      `<div class="card"><h2>${name}</h2><table class="conj">${conj(v, t).map((f, p) => `<tr><td class="muted">${PERSONS[p]}</td><td><span class="s" data-t="${esc(PERSONS[p].split(' /')[0] + ' ' + f)}">${esc(f)}</span></td></tr>`).join('')}</table></div>`).join('')}`;
  },
  irr() {
    const groups = Object.keys(PATTERNS).map(p => [p, IRREG.filter(v => pattern(v) === p)]);
    return `<a href="#lessons">← Leçons</a><h1>Verbes irréguliers</h1><p class="muted">Touche un verbe pour l’entendre.</p>${groups.map(([p, vs]) =>
      `<div class="card lesson-body"><h2>${PATTERNS[p]}</h2><div class="scroll"><table><tr><th>Base</th><th>Prétérit</th><th>Participe</th><th>Français</th></tr>${vs.map(v =>
        `<tr><td><span class="s" data-t="${esc(`${v.base}, ${v.past}, ${v.pp}`.replace(/\//g, ', '))}">${esc(v.base)}</span></td><td>${esc(v.past)}</td><td>${esc(v.pp)}</td><td>${esc(v.fr)}</td></tr>`).join('')}</table></div></div>`).join('')}`;
  },
  texts() {
    return `<h1>Compréhension orale</h1><p class="muted">Écoute d’abord sans lire, puis réponds. Affiche le texte seulement si tu bloques.</p>
      <ul class="list card">${L().texts.map((t, k) => `<li><a class="item" href="#text/${k}"><b>${k + 1}. ${esc(t.title)}</b> <span class="tag">${esc(t.level)}</span>
      ${P().texts[k] != null ? `<span class="tag">✓ ${P().texts[k]}/${t.qs.length}</span>` : ''}</a></li>`).join('')}</ul>`;
  },
  text(k) {
    const t = L().texts[k];
    if (!t) return views.texts();
    const plain = t.text.replace(/<[^>]+>/g, '');
    return `<a href="#texts">← Textes</a><h1>${esc(t.title)}</h1>
      <div class="card"><div class="row"><button class="grow" data-say="${esc(plain)}">🔊 Écouter</button><button class="ghost grow" data-say="${esc(plain)}" data-slow="1">🐢 Lentement</button></div>
        <details style="margin-top:12px"><summary>Afficher le texte</summary><div class="text">${t.text}</div></details>
        ${t.fr ? `<details style="margin-top:8px"><summary>Afficher la traduction</summary><p class="muted">${t.fr}</p></details>` : ''}
        ${t.words ? `<details style="margin-top:8px"><summary>Vocabulaire utile</summary><p class="muted">${t.words}</p></details>` : ''}</div>
      <button class="wide" onclick="textQuiz(${+k})">Répondre aux questions (${t.qs.length})</button>`;
  },
  words() {
    setTimeout(() => {
      const draw = () => {
        const q = bare($('#q').value), th = $('#th').value, ps = $('#ps').value;
        const hits = L().words.filter(w => (!th || w.theme === th) && (!ps || w.pos === ps) && (!q || bare(w.t).includes(q) || bare(w.fr).includes(q)));
        $('#list').innerHTML = hits.slice(0, 300).map(w => `<li data-id="${w.id}"><span class="dot ${status(w.id)}"></span><b>${esc(shown(w))}</b>
          <span class="muted">— ${esc(w.fr)}</span></li>`).join('') + (hits.length > 300 ? '<li class="muted">…affine ta recherche</li>' : '');
        $('#count').textContent = hits.length + ' mots';
      };
      $('#q').oninput = $('#th').onchange = $('#ps').onchange = draw;
      $('#list').onclick = e => {
        const li = e.target.closest('li[data-id]');
        if (!li || e.target.closest('.card')) return;
        if (li.querySelector('.card')) { li.querySelector('.card').remove(); return; }
        li.insertAdjacentHTML('beforeend', `<div class="card" style="margin-top:8px">${card(L().byId.get(+li.dataset.id))}</div>`);
      };
      draw();
    });
    return `<h1>Mots · ${L().flag} ${L().name}</h1><input id="q" type="search" placeholder="Chercher (${L().name.toLowerCase()} ou français)…">
      <div class="row" style="margin-top:8px"><select id="th" class="grow"><option value="">Tous les thèmes</option>${themeOpts('')}</select>
      <select id="ps" class="grow"><option value="">Toutes les catégories</option>${posOpts('')}</select></div>
      <p class="muted" id="count"></p><ul class="list card" id="list"></ul>
      <p class="muted">🟢 maîtrisé · 🟡 en cours · ⚪ pas encore vu</p>`;
  },
  settings() {
    setTimeout(() => {
      $('#quota').onchange = e => { P().quota = +e.target.value; resetDayIfUnstarted(); };
      $('#theme').onchange = e => { P().theme = e.target.value; resetDayIfUnstarted(); route(); };
      $('#pos').onchange = e => { P().pos = e.target.value; resetDayIfUnstarted(); route(); };
      $('#rate').oninput = e => { S.rate = +e.target.value; save(); };
      $('#imp').onchange = e => e.target.files[0]?.text().then(importData);
      navigator.storage?.persisted?.().then(p => $('#persist').textContent = p ? '✓ Stockage persistant' : '⚠ Ajoute l’app à l’écran d’accueil pour protéger tes données');
    });
    const v = voices[S.lang];
    const voice = !hasTTS ? '⚠ La synthèse vocale n’est pas disponible sur ce navigateur.' : v ? `✓ Voix : ${esc(v.name)} (${esc(v.lang)})`
      : `⚠ Aucune voix ${L().name.toLowerCase()} trouvée.`;
    return `<h1>Réglages · ${L().flag} ${L().name}</h1>
      <div class="card"><label for="quota">Nouveaux mots par jour</label><select id="quota">${[5, 10, 15, 20, 30, 40, 50].map(n => `<option ${n === P().quota ? 'selected' : ''}>${n}</option>`).join('')}</select>
        <label for="theme">Thème des nouveaux mots</label><select id="theme"><option value="">Tous (par fréquence)</option>${themeOpts(P().theme, true)}</select>
        <label for="pos">Catégorie de mots</label><select id="pos"><option value="">Toutes</option>${posOpts(P().pos, true)}</select>
        <p class="muted">S’applique aujourd’hui si tu n’as pas encore commencé, sinon dès demain. Les mots les plus fréquents viennent toujours en premier.</p></div>
      <div class="card"><label for="rate">Vitesse de la voix</label><input id="rate" type="range" min="0.5" max="1.2" step="0.05" value="${S.rate}" class="wide">
        <p class="muted">${voice}</p>${sayBtn(L().sample, '🔊 Tester la voix')}
        <details style="margin-top:10px"><summary>Installer une meilleure voix</summary><p class="muted">
        <b>iPhone :</b> Réglages → Accessibilité → Contenu énoncé → Voix → ${S.lang === 'es' ? 'Espagnol → Espagne' : 'Anglais → Royaume-Uni'} → télécharge une voix « améliorée » (ex. ${S.lang === 'es' ? 'Mónica' : 'Daniel'}). Puis ferme et rouvre l’app.<br>
        <b>Samsung :</b> Paramètres → Gestion globale → Synthèse vocale → Moteur préféré → ⚙️ → Installer les données vocales.</p></details></div>
      <div class="card"><h2>Sauvegarde</h2><p class="muted">Une seule sauvegarde contient l’espagnol et l’anglais. Dernière : ${S.lastExport || 'jamais'} · <span id="persist"></span></p>
        <div class="row"><button class="grow" onclick="exportData()">Exporter</button><label class="btn ghost grow" style="margin:0">Importer<input id="imp" type="file" accept=".json,application/json" hidden></label></div></div>
      <p class="muted" style="text-align:center">Liste : ${esc(L().src)} · ${L().words.length} mots</p>`;
  },
};
const themeOpts = (sel, counts) => Object.entries(THEMES).filter(([k]) => L().words.some(w => w.theme === k)).map(([k, v]) =>
  `<option value="${k}" ${k === sel ? 'selected' : ''}>${v}${counts ? ` (${L().words.filter(w => w.theme === k && !P().words[w.id]).length} nouveaux)` : ''}</option>`).join('');
const posOpts = (sel, counts) => Object.entries(POS).filter(([k]) => L().words.some(w => w.pos === k)).map(([k, v]) =>
  `<option value="${k}" ${k === sel ? 'selected' : ''}>${v}s${counts ? ` (${L().words.filter(w => w.pos === k && !P().words[w.id]).length} nouveaux)` : ''}</option>`).join('');
function resetDayIfUnstarted() { if (P().day && !P().day.learned) P().day = null; save(); }

function textQuiz(k) {
  const t = L().texts[k];
  runQuiz(t.qs.map((q, j) => ({ key: j, html: `<h2>${esc(q.q)}</h2>`, opts: q.opts.map(esc), a: q.a, why: q.why })), t.title, res => {
    P().texts[k] = Math.max(P().texts[k] ?? 0, [...res.values()].filter(Boolean).length); markActive(); save();
    app.innerHTML = resultHtml(res, '', `#text/${k}`, 'Réécouter le texte');
  });
}

// ---------- backup ----------
async function exportData() {
  const name = `theo-langues-${today()}.json`;
  const file = new File([JSON.stringify({ app: 'theo-langues', version: 1, exported: today(), state: S })], name, { type: 'application/json' });
  try {
    // iPhone: the share sheet lets you "Enregistrer dans Fichiers"; elsewhere a normal download
    if (navigator.canShare?.({ files: [file] })) await navigator.share({ files: [file] });
    else { const a = document.createElement('a'); a.href = URL.createObjectURL(file); a.download = name; a.click(); }
    S.lastExport = today(); save(); route();
  } catch (e) { if (e.name !== 'AbortError') alert('Export impossible : ' + e.message); }
}
const isDay = d => typeof d === 'string' && /^\d{4}-\d\d-\d\d$/.test(d);
function cleanLang(st, k) {
  const f = freshLang(), byId = LANGS[k].byId, words = {}, n = LANGS[k].lessons.length, m = LANGS[k].texts.length;
  st ||= {};
  for (const [id, p] of Object.entries(st.words || {})) {
    if (byId.has(+id) && p && [p.box, p.ok, p.ko].every(Number.isFinite) && isDay(p.due)) words[id] = { box: p.box, ok: p.ok, ko: p.ko, due: p.due };
  }
  const nums = (o, max) => Object.fromEntries(Object.entries(o || {}).filter(([i, v]) => +i < max && Number.isFinite(v)));
  return { ...f, words, quota: [5, 10, 15, 20, 30, 40, 50].includes(+st.quota) ? +st.quota : f.quota,
    theme: THEMES[st.theme] ? st.theme : '', pos: POS[st.pos] ? st.pos : '',
    lessons: nums(st.lessons, n), texts: nums(st.texts, m), tenses: Array.isArray(st.tenses) ? st.tenses.filter(t => TENSES[t]) : f.tenses };
}
function importData(text) {
  try {
    const st = JSON.parse(text).state;
    if (!st || typeof st.es !== 'object' || typeof st.en !== 'object') throw new Error('ce fichier n’est pas une sauvegarde Théo Langues');
    const es = cleanLang(st.es, 'es'), en = cleanLang(st.en, 'en');
    if (!confirm(`Remplacer la progression actuelle par cette sauvegarde (${Object.keys(es.words).length} mots espagnols, ${Object.keys(en.words).length} mots anglais) ?`)) return;
    const f = fresh();
    S = { ...f, es, en, lang: LANGS[st.lang] ? st.lang : 'es', rate: Math.min(1.2, Math.max(0.5, +st.rate || f.rate)),
      active: Array.isArray(st.active) ? st.active.filter(isDay) : [], created: isDay(st.created) ? st.created : f.created, lastExport: today() };
    save(); alert('Sauvegarde restaurée ✓'); location.hash = '#today'; route();
  } catch (e) { alert('Import impossible : ' + e.message); }
}

// ---------- router ----------
function setLang(k) { S.lang = k; save(); route(); }
function route() {
  const [name, arg] = (location.hash.slice(1) || 'today').split('/');
  if (hasTTS) speechSynthesis.cancel();
  $('#top').innerHTML = Object.entries(LANGS).map(([k, l]) => `<button class="${k === S.lang ? 'on' : ''}" onclick="setLang('${k}')">${l.flag} ${l.name}</button>`).join('');
  app.innerHTML = (views[name] || views.today)(arg && decodeURIComponent(arg));
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', a.hash === '#' + name));
  scrollTo(0, 0);
}
addEventListener('hashchange', route);
route();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js');
