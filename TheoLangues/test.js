// Self-check: node test.js — validates all data files and smoke-tests app.js with a stubbed DOM.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const el = () => ({ innerHTML: '', textContent: '', value: '', dataset: {}, classList: { add() {}, toggle() {} }, focus() {}, querySelector: () => el(), querySelectorAll: () => [] });
const store = {};
const ctx = {
  console, setTimeout: f => f(), Blob: class {}, File: class { constructor(p, n) { this.name = n; } }, URL: { createObjectURL: () => '' },
  alert() {}, confirm: () => true, scrollTo() {},
  localStorage: { getItem: k => store[k] ?? null, setItem: (k, v) => { store[k] = v; } },
  navigator: {}, location: { hash: '' }, addEventListener() {},
  document: { querySelector: () => el(), querySelectorAll: () => [], addEventListener() {}, createElement: () => ({ click() {} }) },
};
ctx.window = ctx;
vm.createContext(ctx);
const html = fs.readFileSync('index.html', 'utf8'), files = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]);
const sw = fs.readFileSync('sw.js', 'utf8');
for (const f of files) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: f });
const run = s => vm.runInContext(s, ctx);
// every script and asset must be in the offline cache list
const cached = run(`(() => { ${sw.replace(/self\.addEventListener[\s\S]*/, '')}; return FILES; })()`);
for (const f of [...files, 'icon-180.png', 'icon-192.png', 'icon-512.png']) { assert(cached.includes(f), 'sw.js does not cache ' + f); assert(fs.existsSync(f), 'missing file ' + f); }

// word data
const POS = run('POS'), THEMES = run('THEMES'), GENDER = run('GENDER');
for (const k of ['es', 'en']) {
  const words = run(`LANGS.${k}.words`), ids = new Set(), seen = new Set();
  words.forEach((w, i) => {
    const where = `${k} #${w.id} ${w.t}`;
    assert.equal(w.id, i + 1, 'ranks must be 1..n in order ' + where);
    assert(!seen.has(w.t), 'duplicate word ' + where); seen.add(w.t); ids.add(w.id);
    for (const f of ['t', 'fr', 'ex']) assert(w[f]?.trim(), `missing ${f} ${where}`);
    assert(POS[w.pos], 'bad pos ' + where);
    assert(THEMES[w.theme], 'bad theme ' + where);
    assert(w.g === '' || GENDER[w.g], 'bad gender ' + where);
    if (k === 'es') assert(w.pos !== 'n' || w.g, 'noun without gender ' + where); else assert.equal(w.g, '', 'english has no gender ' + where);
    assert.equal(w.ex.split(' = ').length, 2, 'example needs exactly one " = " ' + where);
    assert(w.note !== undefined, 'field count ' + where);
  });
  console.log(`${k}: ${words.length} words OK`);
}
assert.equal(run('LANGS.es.words.length'), 2000);
assert.equal(run('LANGS.en.words.length'), 1000);

// lessons and texts
for (const k of ['es', 'en']) {
  for (const l of run(`LANGS.${k}.lessons`)) {
    assert(l.title && l.sub && l.body && l.quiz.length >= 5, 'lesson ' + l.title);
    for (const q of l.quiz) assert(typeof q.a === 'string' ? q.a.trim() : q.opts?.[q.a] !== undefined, `quiz answer in "${l.title}": ${q.q}`);
  }
  for (const t of run(`LANGS.${k}.texts`)) for (const q of t.qs) assert(q.opts[q.a] !== undefined, 'text answer ' + t.title);
  console.log(`${k}: ${run(`LANGS.${k}.lessons.length`)} lessons, ${run(`LANGS.${k}.texts.length`)} texts OK`);
}

// helpers: accent tolerance and article stripping
const match = run('match');
assert.equal(match('está', ['está']), 'ok');
assert.equal(match('esta', ['está']), 'accent');
assert.equal(match('ano', ['año']), 'accent');
assert.equal(match('la casa', ['casa']), 'ok');
assert.equal(match('casa', ['la casa']), 'ok');
assert.equal(match('to deal with', ['deal with']), 'ok');
assert.equal(match('¿Por qué?', ['por qué']), 'ok');
assert.equal(match('perro', ['pero']), '');
assert.equal(match('learned', ['learnt', 'learned']), 'ok');
assert.equal(run('addDays')('2026-12-31', 1), '2027-01-01');

// conjugation engine
const conj = (inf, t) => run(`conj(VERBS.find(v => v.inf === '${inf}'), '${t}')`);
assert.deepEqual([...conj('hablar', 'pres')], ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan']);
assert.deepEqual([...conj('vivir', 'indef')], ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron']);
assert.equal(conj('comer', 'imperf')[3], 'comíamos');
assert.equal(conj('tener', 'fut')[0], 'tendré');
assert.equal(conj('hacer', 'cond')[1], 'harías');
assert.equal(conj('escribir', 'perf')[0], 'he escrito');
assert.equal(conj('ir', 'fut')[3], 'iremos');
assert.equal(conj('oír', 'fut')[0], 'oiré');
for (const v of run('VERBS')) for (const t of Object.keys(run('TENSES'))) { const f = run(`conj(VERBS.find(v => v.inf === '${v.inf}'), '${t}')`); assert(f.length === 6 && f.every(x => x && !x.includes('undefined')), `conj ${v.inf} ${t}`); }
assert.equal(run('pattern(IRREG.find(v => v.base === "cut"))'), 'AAA');
assert.equal(run('pattern(IRREG.find(v => v.base === "come"))'), 'ABA');
assert.equal(run('pattern(IRREG.find(v => v.base === "go"))'), 'ABC');
for (const v of run('IRREG')) assert(v.base && v.past && v.pp && v.fr, 'irregular ' + v.base);
console.log(`${run('VERBS.length')} Spanish verbs, ${run('IRREG.length')} English irregulars OK`);

// flow: both languages — pick today's words, learn, grade, every view, quizzes, import
const S = () => run('S');
for (const k of ['es', 'en']) {
  ctx.location.hash = '#today'; run(`setLang('${k}')`);
  const day = S()[k].day;
  assert.equal(day.ids.length, 15);
  assert(day.ids.every(id => id <= run(`LANGS.${k}.bands[0]`)), 'first day should come from the first frequency band');
  run('P().words[1] = {box: 0, ok: 0, ko: 0, due: today()}; grade(1, true); grade(1, true)');
  assert.equal(S()[k].words[1].box, 2); assert.equal(S()[k].words[1].due, run('addDays(today(), 2)'));
  run('grade(1, false)'); assert.equal(S()[k].words[1].box, 0); assert.deepEqual([...run('hardIds()')], [1]);
  for (const v of ['today', 'learn', 'test', 'review', 'hard', 'tests', 'lessons', 'words', 'settings', 'conj', 'verbs', 'verbs/tener', 'irr', 'texts', 'order', 'drill/ear', 'drill/dict', 'drill/type', 'drill/read']) {
    ctx.location.hash = '#' + v; run('route()');
  }
  for (let i = 0; i < run('L().lessons.length'); i++) for (const v of ['lesson', 'lquiz']) { ctx.location.hash = `#${v}/${i}`; run('route()'); }
  for (let i = 0; i < run('L().texts.length'); i++) { ctx.location.hash = `#text/${i}`; run('route()'); }
  run('conjQuiz()');
  for (const w of run('L().words')) {
    for (const t of ['read', 'pick', 'type', 'ear', 'dict']) { const q = run('wordQ')(w, t); assert(typeof q.a === 'string' ? q.a === w.t : q.opts.length === 4 && q.a >= 0, `question ${t} ${w.t}`); }
  }
}
run('S.lang = "es"');
const g = run('wordQ')(run('LANGS.es.byId.get(68)'), 'gen'); // casa
assert.deepEqual([g.opts, g.a], [['el', 'la'], 1]);
assert.equal(run('article(LANGS.es.byId.get(233))'), 'el'); // el agua
assert.equal(run('shown(LANGS.es.byId.get(68))'), 'la casa');

run(`importData(JSON.stringify({state: {lang: 'en', rate: 9, es: {words: {5: {box: 3, ok: 3, ko: 0, due: '2030-01-01'}, 99999: {box: 1, ok: 1, ko: 0, due: '2030-01-01'}}, quota: 40, theme: '<b>', lessons: {0: 5, 1: '<img>', 999: 3}}, en: {pos: 'phr'}}}))`);
assert.deepEqual(Object.keys(S().es.words), ['5']); assert.equal(S().es.quota, 40); assert.equal(S().es.theme, '');
assert.deepEqual({ ...S().es.lessons }, { 0: 5 }); assert.equal(S().en.pos, 'phr'); assert.equal(S().lang, 'en'); assert.equal(S().rate, 1.2);
console.log('app OK');
