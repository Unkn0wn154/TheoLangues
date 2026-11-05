// Spanish lessons. body = HTML in French; <span class="s">…</span> = tap to hear. quiz: {q, opts, a (index)} or {q, a: 'typed answer', alt: [...]}, why = explanation.
window.ES_LESSONS = [
{
  title: 'Prononciation et alphabet', sub: 'Les sons, l’accent tonique, les accents écrits',
  body: `
<p>Bonne nouvelle : l’espagnol se lit <b>presque toujours comme il s’écrit</b>. Une fois les règles apprises, tu peux lire n’importe quel mot.</p>
<h3>Les voyelles : toujours pures</h3>
<p><b>a e i o u</b> se prononcent toujours pareil, jamais « nasales » comme en français : <span class="s">pan</span> se dit « pane », pas « pan ». Le <b>u</b> se dit « ou » : <span class="s">luna</span> = « louna ». Le <b>e</b> se dit toujours « é » : <span class="s">leche</span> = « létché ».</p>
<h3>Les consonnes qui changent</h3>
<table><tr><th>Lettre</th><th>Son</th><th>Exemple</th></tr>
<tr><td>h</td><td>muet, toujours</td><td><span class="s">hola</span>, <span class="s">hotel</span></td></tr>
<tr><td>j / g (devant e, i)</td><td>« r » raclé du fond de la gorge (comme le « ch » allemand)</td><td><span class="s">jamón</span>, <span class="s">gente</span></td></tr>
<tr><td>ll / y</td><td>« y » (comme dans « yaourt »)</td><td><span class="s">llamar</span>, <span class="s">yo</span></td></tr>
<tr><td>ñ</td><td>« gn » de « montagne »</td><td><span class="s">España</span>, <span class="s">niño</span></td></tr>
<tr><td>r (au milieu)</td><td>r roulé une fois, bref</td><td><span class="s">pero</span> (mais)</td></tr>
<tr><td>rr, r au début</td><td>r roulé fort, plusieurs battements</td><td><span class="s">perro</span> (chien), <span class="s">rojo</span></td></tr>
<tr><td>z / c (devant e, i)</td><td>en Espagne : « th » anglais (langue entre les dents)</td><td><span class="s">gracias</span>, <span class="s">cerveza</span></td></tr>
<tr><td>v</td><td>comme un b doux</td><td><span class="s">vino</span> ≈ « bino »</td></tr>
<tr><td>ch</td><td>« tch »</td><td><span class="s">chico</span></td></tr>
<tr><td>qu / gu (devant e, i)</td><td>« k » / « g » : le u est muet</td><td><span class="s">queso</span>, <span class="s">guerra</span></td></tr>
<tr><td>s</td><td>toujours « ss », jamais « z »</td><td><span class="s">casa</span> = « cassa »</td></tr></table>
<div class="warn">⚠️ <b>pero</b> (mais) ≠ <b>perro</b> (chien). Le double r change le sens !</div>
<h3>L’accent tonique</h3>
<p>Chaque mot a une syllabe plus forte. Règles :</p>
<ul><li>Mot terminé par une <b>voyelle, n ou s</b> → avant-dernière syllabe : <span class="s">casa</span>, <span class="s">hablan</span>.</li>
<li>Terminé par une <b>autre consonne</b> → dernière syllabe : <span class="s">hablar</span>, <span class="s">ciudad</span>.</li>
<li>Sinon, un <b>accent écrit</b> (´) indique la syllabe forte : <span class="s">café</span>, <span class="s">música</span>, <span class="s">canción</span>.</li></ul>
<p>Le seul accent écrit de l’espagnol est l’accent aigu (á é í ó ú). Il sert aussi à distinguer des mots : <b>tu</b> (ton) / <b>tú</b> (toi), <b>si</b> (si) / <b>sí</b> (oui), <b>el</b> (le) / <b>él</b> (il).</p>
<div class="fr-box">🇫🇷 <b>Astuce de Français :</b> en français, on accentue toujours la fin du mot. En espagnol, insiste vraiment sur la syllabe tonique, sinon on ne te comprendra pas : <b>papá</b> (papa) ≠ <b>papa</b> (pomme de terre, en Amérique) ≠ <b>Papa</b> (pape).</div>
<h3>Ponctuation</h3>
<p>Les questions et exclamations s’ouvrent à l’envers : <span class="s">¿Cómo estás?</span> <span class="s">¡Qué bien!</span></p>`,
  quiz: [
    { q: 'Comment se prononce le <b>h</b> de « hola » ?', opts: ['Il est muet', 'Comme un h aspiré anglais', 'Comme un « r » raclé'], a: 0, why: 'Le h espagnol ne se prononce jamais.' },
    { q: 'Que veut dire <b>perro</b> ?', opts: ['mais', 'chien', 'poire'], a: 1, why: '<b>perro</b> (rr roulé fort) = chien ; <b>pero</b> = mais.', say: 'perro' },
    { q: 'Le son « gn » (comme dans montagne) s’écrit…', opts: ['ll', 'ñ', 'ch'], a: 1, why: 'ñ : España, niño, año.' },
    { q: 'Où est l’accent tonique dans <b>ciudad</b> ?', opts: ['ciu-', '-dad'], a: 1, why: 'Terminé par une consonne autre que n/s → dernière syllabe.' },
    { q: 'Dans « gente », le g se prononce…', opts: ['comme le g de « gâteau »', 'comme le j français', 'comme un r raclé (jota)'], a: 2, why: 'g devant e/i = son de la jota, raclé du fond de la gorge.' },
    { q: '<b>tú</b> avec accent veut dire…', opts: ['ton', 'toi / tu', 'tout'], a: 1, why: 'tú = toi/tu ; tu (sans accent) = ton.' },
    { q: 'En Espagne, le <b>z</b> de « cerveza » se prononce…', opts: ['comme un z français', 'comme le « th » anglais', 'comme un s'], a: 1, why: 'Dans l’espagnol d’Espagne, z et c (devant e, i) = « th » anglais.' },
    { q: 'Comment commence une question écrite en espagnol ?', opts: ['?', '¿', '¡'], a: 1, why: '¿Cómo estás? Les signes s’ouvrent à l’envers.' },
  ],
},
{
  title: 'Articles, genre et pluriel', sub: 'el, la, los, las, un, una — masculin et féminin',
  body: `
<h3>Les articles</h3>
<table><tr><th></th><th>Masculin</th><th>Féminin</th></tr>
<tr><td>le / la</td><td><span class="s">el chico</span></td><td><span class="s">la chica</span></td></tr>
<tr><td>les</td><td><span class="s">los chicos</span></td><td><span class="s">las chicas</span></td></tr>
<tr><td>un / une</td><td><span class="s">un libro</span></td><td><span class="s">una casa</span></td></tr>
<tr><td>des</td><td><span class="s">unos libros</span></td><td><span class="s">unas casas</span></td></tr></table>
<p>Contractions obligatoires : <b>a + el = al</b> (<span class="s">voy al cine</span>), <b>de + el = del</b> (<span class="s">el coche del profesor</span>).</p>
<h3>Reconnaître le genre</h3>
<ul><li>Finit par <b>-o</b> → généralement masculin : el libro, el perro.</li>
<li>Finit par <b>-a</b> → généralement féminin : la casa, la mesa.</li>
<li><b>-ción, -sión, -dad, -tad, -tud</b> → féminin : la canción, la ciudad, la libertad, la juventud.</li>
<li><b>-aje, -or</b> → souvent masculin : el viaje, el color, el amor.</li></ul>
<div class="warn">⚠️ Exceptions fréquentes : <b>el día</b>, <b>el mapa</b>, <b>el problema</b>, <b>el tema</b>, <b>el sistema</b>, <b>el idioma</b> (mots grecs en -ma) sont masculins. <b>La mano</b>, <b>la foto</b>, <b>la moto</b>, <b>la radio</b> sont féminins.</div>
<h3>Le genre ne suit pas toujours le français</h3>
<table><tr><th>Espagnol</th><th>Français</th></tr>
<tr><td>la leche</td><td>le lait</td></tr><tr><td>la sangre</td><td>le sang</td></tr><tr><td>la nariz</td><td>le nez</td></tr>
<tr><td>el color</td><td>la couleur</td></tr><tr><td>el dolor</td><td>la douleur</td></tr><tr><td>el coche</td><td>la voiture</td></tr></table>
<p><b>El agua</b> : les noms féminins qui commencent par un <b>a tonique</b> prennent <b>el</b> au singulier, pour éviter « la agua ». Mais ils restent féminins : <span class="s">el agua fría</span>, <span class="s">las aguas</span>. Pareil : el alma, el arma, el hambre, el área.</p>
<h3>Le pluriel</h3>
<ul><li>Voyelle → <b>+s</b> : casa → <span class="s">casas</span></li>
<li>Consonne → <b>+es</b> : ciudad → <span class="s">ciudades</span>, canción → <span class="s">canciones</span> (l’accent disparaît)</li>
<li><b>z → ces</b> : vez → <span class="s">veces</span>, luz → <span class="s">luces</span></li></ul>
<div class="fr-box">🇫🇷 <b>Différence avec le français :</b> pas d’article pour « des » devant un nom général : <span class="s">Como manzanas</span> = je mange des pommes. Pas d’article pour un métier : <span class="s">Soy estudiante</span> = je suis étudiant.</div>`,
  quiz: [
    { q: '___ problema', opts: ['el', 'la'], a: 0, why: 'Les mots grecs en -ma sont masculins : el problema, el tema, el sistema.' },
    { q: '___ canción', opts: ['el', 'la'], a: 1, why: '-ción → féminin.' },
    { q: '___ leche', opts: ['el', 'la'], a: 1, why: 'La leche est féminin (le lait en français).' },
    { q: '___ agua está fría.', opts: ['La', 'El'], a: 1, why: 'Féminin commençant par un a tonique → el agua (mais fría reste au féminin).' },
    { q: 'Pluriel de <b>ciudad</b> ?', a: 'ciudades', why: 'Consonne → +es.' },
    { q: 'Pluriel de <b>vez</b> ?', a: 'veces', why: 'z → ces.' },
    { q: 'Voy ___ cine.', opts: ['a el', 'al', 'el'], a: 1, why: 'a + el = al (obligatoire).' },
    { q: '« Je suis professeur » se dit…', opts: ['Soy un profesor', 'Soy profesor', 'Estoy profesor'], a: 1, why: 'Pas d’article devant un métier, et ser pour l’identité.' },
  ],
},
{
  title: 'Pronoms personnels, tú et usted', sub: 'yo, tú, él… et quand vouvoyer',
  body: `
<table><tr><th>Espagnol</th><th>Français</th></tr>
<tr><td><span class="s">yo</span></td><td>je</td></tr><tr><td><span class="s">tú</span></td><td>tu</td></tr>
<tr><td><span class="s">él / ella / usted</span></td><td>il / elle / vous (politesse)</td></tr>
<tr><td><span class="s">nosotros / nosotras</span></td><td>nous</td></tr>
<tr><td><span class="s">vosotros / vosotras</span></td><td>vous (plusieurs amis)</td></tr>
<tr><td><span class="s">ellos / ellas / ustedes</span></td><td>ils / elles / vous (politesse, plusieurs)</td></tr></table>
<h3>Le sujet disparaît</h3>
<p>La terminaison du verbe indique déjà la personne, donc on ne dit le pronom que pour <b>insister</b> ou <b>éviter une ambiguïté</b> :</p>
<p><span class="s">Hablo español.</span> = Je parle espagnol. <span class="s">Yo hablo español, ¿y tú?</span> = Moi, je parle espagnol, et toi ?</p>
<h3>Tú ou usted ?</h3>
<p>En Espagne, on tutoie <b>beaucoup plus</b> qu’en France : collègues, jeunes, commerçants souvent. <b>Usted</b> est pour les personnes âgées, les situations officielles, un client très formel.</p>
<div class="warn">⚠️ <b>Usted</b> se conjugue à la <b>3e personne</b> : <span class="s">¿Cómo está usted?</span> (et non « estáis »). <b>Ustedes</b> → 3e du pluriel : <span class="s">¿Ustedes son franceses?</span></div>
<h3>Vosotros</h3>
<p>En Espagne, « vous » pour plusieurs amis = <b>vosotros</b> : <span class="s">¿Vosotros venís?</span> En Amérique latine, on dit toujours <b>ustedes</b>.</p>
<h3>Après une préposition</h3>
<p><b>mí, ti</b> remplacent yo, tú : <span class="s">para mí</span>, <span class="s">sin ti</span>. Avec <b>con</b> : <span class="s">conmigo</span> (avec moi), <span class="s">contigo</span> (avec toi). Les autres ne changent pas : para él, con ella, con nosotros.</p>
<div class="fr-box">🇫🇷 Pas de « on » en espagnol ! On utilise <b>se</b> + 3e personne (<span class="s">aquí se come bien</span> = ici on mange bien), ou <b>nosotros</b> (<span class="s">¿Vamos?</span> = on y va ?).</div>`,
  quiz: [
    { q: '« Nous » (un groupe de filles) se dit…', opts: ['nosotros', 'nosotras', 'vosotras'], a: 1, why: 'nosotras pour un groupe uniquement féminin.' },
    { q: '¿Cómo ___ usted?', opts: ['estás', 'está', 'estáis'], a: 1, why: 'usted → 3e personne du singulier.' },
    { q: '« Avec moi » se dit…', a: 'conmigo', why: 'con + mí = conmigo.' },
    { q: '« Avec toi » se dit…', a: 'contigo', why: 'con + ti = contigo.' },
    { q: 'En Espagne, à deux amis, « vous venez ? » se dit…', opts: ['¿Ustedes vienen?', '¿Vosotros venís?', '¿Tú vienes?'], a: 1, why: 'vosotros = vous (tutoiement pluriel), propre à l’Espagne.' },
    { q: 'Ce cadeau est pour toi : Este regalo es para ___.', opts: ['tú', 'ti', 'te'], a: 1, why: 'Après une préposition : ti.' },
    { q: '« Hablo francés » : qui parle ?', opts: ['je', 'il', 'tu'], a: 0, why: 'La terminaison -o = yo. Le pronom est inutile.' },
  ],
},
{
  title: 'Ser ou estar ?', sub: 'Les deux verbes « être » : la leçon la plus importante',
  body: `
<p>L’espagnol a <b>deux verbes « être »</b>. C’est LE piège numéro un pour un Français.</p>
<table><tr><th></th><th>ser</th><th>estar</th></tr>
<tr><td>yo</td><td><span class="s">soy</span></td><td><span class="s">estoy</span></td></tr><tr><td>tú</td><td><span class="s">eres</span></td><td><span class="s">estás</span></td></tr>
<tr><td>él / usted</td><td><span class="s">es</span></td><td><span class="s">está</span></td></tr><tr><td>nosotros</td><td><span class="s">somos</span></td><td><span class="s">estamos</span></td></tr>
<tr><td>vosotros</td><td><span class="s">sois</span></td><td><span class="s">estáis</span></td></tr><tr><td>ellos / ustedes</td><td><span class="s">son</span></td><td><span class="s">están</span></td></tr></table>
<h3>SER = ce que l’on EST (l’essence)</h3>
<ul><li>Identité, nom : <span class="s">Soy Theo.</span></li><li>Nationalité, origine : <span class="s">Soy francés.</span> <span class="s">Es de París.</span></li>
<li>Métier : <span class="s">Es médico.</span></li><li>Caractère, description durable : <span class="s">Es simpático.</span> <span class="s">Es alto.</span></li>
<li>Heure, date : <span class="s">Son las tres.</span> <span class="s">Hoy es lunes.</span></li><li>Matière, possession : <span class="s">Es de madera.</span> <span class="s">Es mío.</span></li>
<li>Lieu d’un ÉVÉNEMENT : <span class="s">La fiesta es en mi casa.</span></li></ul>
<h3>ESTAR = comment ou où l’on SE TROUVE</h3>
<ul><li>Lieu d’une personne ou d’une chose : <span class="s">Estoy en casa.</span> <span class="s">Madrid está en España.</span></li>
<li>État temporaire, humeur : <span class="s">Estoy cansado.</span> <span class="s">Está enfadada.</span></li>
<li>Santé : <span class="s">¿Cómo estás? Estoy bien.</span></li><li>Action en cours (+ gérondif) : <span class="s">Estoy comiendo.</span> = je suis en train de manger.</li>
<li>Résultat d’une action : <span class="s">La puerta está cerrada.</span></li></ul>
<h3>Même adjectif, sens différent</h3>
<table><tr><th>Avec ser</th><th>Avec estar</th></tr>
<tr><td>Es aburrido = il est ennuyeux</td><td>Está aburrido = il s’ennuie</td></tr>
<tr><td>Es listo = il est malin</td><td>Está listo = il est prêt</td></tr>
<tr><td>Es malo = il est méchant</td><td>Está malo = il est malade</td></tr>
<tr><td>Es rico = il est riche</td><td>Está rico = c’est délicieux</td></tr>
<tr><td>Es guapa = elle est belle (de nature)</td><td>Está guapa = elle est belle (aujourd’hui)</td></tr></table>
<div class="fr-box">🇫🇷 <b>Le test rapide :</b> demande-toi « est-ce que c’est sa nature, ou son état du moment / sa position ? ». Nature → ser. État ou lieu → estar. Attention : <b>estar muerto</b> (être mort) prend estar, même si c’est définitif : c’est un état !</div>`,
  quiz: [
    { q: 'Yo ___ francés.', opts: ['soy', 'estoy'], a: 0, why: 'Nationalité → ser.' },
    { q: '¿Dónde ___ el baño?', opts: ['es', 'está'], a: 1, why: 'Lieu d’une chose → estar.' },
    { q: 'Hoy ___ muy cansado.', opts: ['soy', 'estoy'], a: 1, why: 'État temporaire → estar.' },
    { q: '___ las cinco de la tarde.', opts: ['Son', 'Están'], a: 0, why: 'L’heure → ser.' },
    { q: 'Mi hermana ___ médica.', opts: ['es', 'está'], a: 0, why: 'Métier → ser.' },
    { q: '« La paella está rica » veut dire…', opts: ['La paella est riche', 'La paella est délicieuse', 'La paella est chère'], a: 1, why: 'estar rico = être délicieux.' },
    { q: 'La fiesta ___ en mi casa.', opts: ['es', 'está'], a: 0, why: 'Lieu d’un événement → ser (piège !).' },
    { q: 'Conjugue <b>estar</b> avec <b>nosotros</b> :', a: 'estamos', why: 'estoy, estás, está, estamos, estáis, están.' },
    { q: 'Conjugue <b>ser</b> avec <b>tú</b> :', a: 'eres', why: 'soy, eres, es, somos, sois, son.' },
    { q: 'Estoy ___ (je suis en train de manger).', opts: ['como', 'comiendo', 'comer'], a: 1, why: 'estar + gérondif (-ando / -iendo) = être en train de.' },
  ],
},
{
  title: 'Le présent des verbes réguliers', sub: '-ar, -er, -ir : trois modèles pour des milliers de verbes',
  body: `
<p>Les verbes espagnols finissent par <b>-ar, -er ou -ir</b>. On enlève la terminaison et on ajoute :</p>
<table><tr><th></th><th>hablar (parler)</th><th>comer (manger)</th><th>vivir (vivre)</th></tr>
<tr><td>yo</td><td><span class="s">hablo</span></td><td><span class="s">como</span></td><td><span class="s">vivo</span></td></tr>
<tr><td>tú</td><td><span class="s">hablas</span></td><td><span class="s">comes</span></td><td><span class="s">vives</span></td></tr>
<tr><td>él / ella / usted</td><td><span class="s">habla</span></td><td><span class="s">come</span></td><td><span class="s">vive</span></td></tr>
<tr><td>nosotros</td><td><span class="s">hablamos</span></td><td><span class="s">comemos</span></td><td><span class="s">vivimos</span></td></tr>
<tr><td>vosotros</td><td><span class="s">habláis</span></td><td><span class="s">coméis</span></td><td><span class="s">vivís</span></td></tr>
<tr><td>ellos / ustedes</td><td><span class="s">hablan</span></td><td><span class="s">comen</span></td><td><span class="s">viven</span></td></tr></table>
<h3>Les repères</h3>
<ul><li><b>yo</b> finit toujours par <b>-o</b>.</li><li><b>tú</b> finit toujours par <b>-s</b>.</li><li><b>ellos</b> finit toujours par <b>-n</b>.</li>
<li>-er et -ir ne diffèrent qu’avec nosotros (-emos / -imos) et vosotros (-éis / -ís).</li></ul>
<h3>À quoi sert le présent ?</h3>
<p>Comme en français : habitudes (<span class="s">Trabajo los lunes.</span>), vérités générales, et futur proche (<span class="s">Mañana viajo a Madrid.</span>).</p>
<div class="fr-box">🇫🇷 Le présent espagnol ne s’utilise pas pour l’action EN COURS autant qu’en français : « je mange (là, maintenant) » se dit plutôt <span class="s">estoy comiendo</span>. Et « depuis » : <span class="s">Vivo aquí desde hace dos años</span> = j’habite ici depuis deux ans (présent, comme en français).</div>
<p>Autres verbes réguliers à pratiquer : trabajar, estudiar, escuchar, mirar, comprar, beber, aprender, vender, escribir, abrir, recibir.</p>`,
  quiz: [
    { q: 'hablar → yo ___', a: 'hablo', why: 'yo → -o.' },
    { q: 'comer → nosotros ___', a: 'comemos', why: '-er → -emos.' },
    { q: 'vivir → nosotros ___', a: 'vivimos', why: '-ir → -imos.' },
    { q: 'trabajar → ellos ___', a: 'trabajan', why: 'ellos -ar → -an.' },
    { q: 'beber → tú ___', a: 'bebes', why: 'tú -er → -es.' },
    { q: 'escribir → vosotros ___', a: 'escribís', why: 'vosotros -ir → -ís.' },
    { q: 'estudiar → usted ___', a: 'estudia', why: 'usted = 3e personne → -a.' },
    { q: '« Je suis en train de lire » se dit plutôt…', opts: ['Leo', 'Estoy leyendo', 'Soy leyendo'], a: 1, why: 'estar + gérondif pour l’action en cours.' },
  ],
},
{
  title: 'Verbes irréguliers et à diphtongue', sub: 'tener, ir, hacer… et e→ie, o→ue, e→i',
  body: `
<h3>Les verbes à diphtongue (stem-changing)</h3>
<p>Leur voyelle change quand elle est <b>accentuée</b> : partout <b>sauf nosotros et vosotros</b> (la « botte »).</p>
<table><tr><th></th><th>querer e→ie</th><th>poder o→ue</th><th>pedir e→i</th></tr>
<tr><td>yo</td><td>quiero</td><td>puedo</td><td>pido</td></tr><tr><td>tú</td><td>quieres</td><td>puedes</td><td>pides</td></tr>
<tr><td>él</td><td>quiere</td><td>puede</td><td>pide</td></tr><tr><td>nosotros</td><td><b>queremos</b></td><td><b>podemos</b></td><td><b>pedimos</b></td></tr>
<tr><td>vosotros</td><td><b>queréis</b></td><td><b>podéis</b></td><td><b>pedís</b></td></tr><tr><td>ellos</td><td>quieren</td><td>pueden</td><td>piden</td></tr></table>
<p>e→ie : pensar, empezar, entender, preferir, sentir, cerrar. o→ue : volver, dormir, contar, encontrar, costar, morir. u→ue : jugar. e→i : pedir, seguir, repetir, servir, vestir.</p>
<h3>Les « yo » irréguliers</h3>
<p>Beaucoup de verbes sont réguliers <b>sauf à yo</b> :</p>
<table><tr><td>hacer → <span class="s">hago</span></td><td>poner → <span class="s">pongo</span></td><td>salir → <span class="s">salgo</span></td></tr>
<tr><td>traer → <span class="s">traigo</span></td><td>conocer → <span class="s">conozco</span></td><td>saber → <span class="s">sé</span></td></tr>
<tr><td>dar → <span class="s">doy</span></td><td>ver → <span class="s">veo</span></td><td>conducir → <span class="s">conduzco</span></td></tr></table>
<h3>Les incontournables</h3>
<table><tr><th></th><th>tener</th><th>venir</th><th>decir</th><th>ir</th></tr>
<tr><td>yo</td><td>tengo</td><td>vengo</td><td>digo</td><td>voy</td></tr><tr><td>tú</td><td>tienes</td><td>vienes</td><td>dices</td><td>vas</td></tr>
<tr><td>él</td><td>tiene</td><td>viene</td><td>dice</td><td>va</td></tr><tr><td>nosotros</td><td>tenemos</td><td>venimos</td><td>decimos</td><td>vamos</td></tr>
<tr><td>vosotros</td><td>tenéis</td><td>venís</td><td>decís</td><td>vais</td></tr><tr><td>ellos</td><td>tienen</td><td>vienen</td><td>dicen</td><td>van</td></tr></table>
<h3>Expressions avec tener</h3>
<p>Là où le français dit « avoir », l’espagnol aussi… avec tener : <span class="s">tengo hambre</span> (faim), <span class="s">tengo sed</span> (soif), <span class="s">tengo frío</span> (froid), <span class="s">tengo veinte años</span> (20 ans), <span class="s">tengo miedo</span> (peur), <span class="s">tengo razón</span> (raison), <span class="s">tengo prisa</span> (je suis pressé).</p>
<div class="fr-box">🇫🇷 <b>tener que</b> + infinitif = devoir : <span class="s">Tengo que trabajar.</span> = je dois travailler. C’est la façon la plus courante d’exprimer l’obligation.</div>
<p>👉 Entraîne-toi : Tests → Conjugaison (présent).</p>`,
  quiz: [
    { q: 'querer → yo ___', a: 'quiero', why: 'e→ie : quiero.' },
    { q: 'poder → nosotros ___', a: 'podemos', why: 'Pas de diphtongue avec nosotros.' },
    { q: 'dormir → ella ___', a: 'duerme', why: 'o→ue : duerme.' },
    { q: 'pedir → ellos ___', a: 'piden', why: 'e→i : piden.' },
    { q: 'hacer → yo ___', a: 'hago', why: 'Yo irrégulier : hago.' },
    { q: 'conocer → yo ___', a: 'conozco', why: '-cer → -zco : conozco.' },
    { q: 'ir → nosotros ___', a: 'vamos', why: 'voy, vas, va, vamos, vais, van.' },
    { q: '« J’ai 25 ans » :', opts: ['Soy 25 años', 'Tengo 25 años', 'Estoy 25 años'], a: 1, why: 'L’âge se dit avec tener.' },
    { q: '« Je dois partir » :', opts: ['Tengo que irme', 'Debo de irme', 'Hay que me ir'], a: 0, why: 'tener que + infinitif = devoir.' },
  ],
},
{
  title: 'Négation et questions', sub: 'no, nunca, nada, nadie… et les mots interrogatifs',
  body: `
<h3>La négation : un seul mot</h3>
<p>Il suffit de mettre <b>no</b> devant le verbe (et devant les pronoms) : <span class="s">No hablo inglés.</span> <span class="s">No lo sé.</span></p>
<h3>La double négation est OBLIGATOIRE</h3>
<p>Quand nada, nadie, nunca… viennent <b>après</b> le verbe, on garde <b>no</b> devant :</p>
<table><tr><td><span class="s">No tengo nada.</span></td><td>Je n’ai rien.</td></tr>
<tr><td><span class="s">No veo a nadie.</span></td><td>Je ne vois personne.</td></tr>
<tr><td><span class="s">No voy nunca.</span></td><td>Je n’y vais jamais.</td></tr>
<tr><td><span class="s">No tengo ningún problema.</span></td><td>Je n’ai aucun problème.</td></tr>
<tr><td><span class="s">Yo tampoco.</span></td><td>Moi non plus.</td></tr></table>
<p>Si le mot négatif est <b>avant</b> le verbe, pas de no : <span class="s">Nunca voy.</span> <span class="s">Nadie sabe.</span></p>
<h3>Les questions</h3>
<p>Souvent, on garde l’ordre normal et on change juste l’intonation : <span class="s">¿Hablas español?</span> Les mots interrogatifs portent <b>toujours un accent</b> :</p>
<table><tr><td><span class="s">¿Qué?</span> quoi / que</td><td><span class="s">¿Quién?</span> qui</td></tr>
<tr><td><span class="s">¿Dónde?</span> où</td><td><span class="s">¿Adónde?</span> où (direction)</td></tr>
<tr><td><span class="s">¿Cuándo?</span> quand</td><td><span class="s">¿Cómo?</span> comment</td></tr>
<tr><td><span class="s">¿Por qué?</span> pourquoi</td><td><span class="s">¿Cuánto?</span> combien</td></tr>
<tr><td><span class="s">¿Cuál?</span> lequel / quel</td><td><span class="s">¿De dónde?</span> d’où</td></tr></table>
<div class="warn">⚠️ <b>¿Por qué?</b> (pourquoi, 2 mots + accent) / <b>porque</b> (parce que, 1 mot) / <b>el porqué</b> (la raison).</div>
<div class="fr-box">🇫🇷 <b>¿Qué o cuál?</b> Devant un verbe « être », on dit souvent <b>cuál</b> là où le français dit « quel » : <span class="s">¿Cuál es tu nombre?</span> <span class="s">¿Cuál es tu número?</span> Devant un nom : <span class="s">¿Qué libro?</span></div>`,
  quiz: [
    { q: '« Je n’ai rien » :', opts: ['Tengo nada', 'No tengo nada', 'No tengo algo'], a: 1, why: 'Double négation obligatoire : no … nada.' },
    { q: '« Personne ne sait » :', opts: ['Nadie sabe', 'No nadie sabe', 'Nadie no sabe'], a: 0, why: 'Mot négatif avant le verbe → pas de no.' },
    { q: '« Pourquoi ? » s’écrit…', a: 'por qué', alt: ['¿por qué?'], why: 'Deux mots avec accent.' },
    { q: '« Moi non plus » :', a: 'yo tampoco', why: 'tampoco = non plus.' },
    { q: '___ es tu número de teléfono?', opts: ['¿Qué', '¿Cuál', '¿Cómo'], a: 1, why: 'Devant « es », on utilise cuál.' },
    { q: '« D’où es-tu ? »', opts: ['¿Dónde eres?', '¿De dónde eres?', '¿Adónde eres?'], a: 1, why: 'Origine : ¿De dónde…?' },
    { q: '« Je ne vais jamais au cinéma » :', opts: ['No voy nunca al cine', 'Voy nunca al cine', 'No nunca voy al cine'], a: 0, why: 'no + verbe + nunca, ou nunca + verbe.' },
  ],
},
{
  title: 'Les adjectifs', sub: 'Accord, place, et les formes courtes',
  body: `
<h3>Accord</h3>
<p>L’adjectif s’accorde en genre et en nombre :</p>
<table><tr><td><span class="s">un chico alto</span></td><td><span class="s">una chica alta</span></td></tr>
<tr><td><span class="s">unos chicos altos</span></td><td><span class="s">unas chicas altas</span></td></tr></table>
<p>Les adjectifs en <b>-e</b> ou en <b>consonne</b> ne changent pas au féminin : <span class="s">un coche grande / una casa grande</span>, <span class="s">un examen fácil / una pregunta fácil</span>. Exception : nationalités → <span class="s">francés / francesa</span>, <span class="s">español / española</span>.</p>
<h3>Place</h3>
<p>Comme en français, l’adjectif se place en général <b>après</b> le nom : <span class="s">un coche rojo</span>. Devant, il prend un sens plus subjectif : <span class="s">un gran hombre</span> (un grand homme) / <span class="s">un hombre grande</span> (un homme grand) ; <span class="s">¡pobre chico!</span> (le pauvre !) / <span class="s">un chico pobre</span> (sans argent).</p>
<h3>Formes courtes devant un nom masculin singulier</h3>
<table><tr><td>bueno → <span class="s">un buen día</span></td><td>malo → <span class="s">un mal día</span></td></tr>
<tr><td>primero → <span class="s">el primer piso</span></td><td>tercero → <span class="s">el tercer día</span></td></tr>
<tr><td>uno → <span class="s">un amigo</span></td><td>alguno / ninguno → algún / ningún</td></tr>
<tr><td colspan="2">grande → <span class="s">gran</span> devant tout nom singulier : un gran amigo, una gran idea</td></tr></table>
<h3>Comparer</h3>
<p><span class="s">más alto que</span> (plus grand que), <span class="s">menos caro que</span> (moins cher que), <span class="s">tan alto como</span> (aussi grand que). Irréguliers : <b>mejor</b> (meilleur / mieux), <b>peor</b> (pire), <b>mayor</b> (plus âgé), <b>menor</b> (plus jeune).</p>
<p>Superlatif : <span class="s">el más alto de la clase</span>. Intensif : <b>-ísimo</b> = très très : <span class="s">guapísimo</span>, <span class="s">carísimo</span>, <span class="s">muchísimo</span>.</p>
<div class="fr-box">🇫🇷 « Quel… ! » exclamatif : <span class="s">¡Qué bonito!</span> (que c’est beau !), <span class="s">¡Qué día tan bonito!</span> (quelle belle journée !).</div>`,
  quiz: [
    { q: 'una casa ___ (blanc)', a: 'blanca', why: 'Accord féminin : blanca.' },
    { q: 'Hoy es un ___ día.', opts: ['bueno', 'buen', 'buena'], a: 1, why: 'bueno → buen devant un nom masc. sing.' },
    { q: 'Mi hermano es ___ que yo (plus âgé).', opts: ['más viejo', 'mayor', 'más grande'], a: 1, why: 'Pour l’âge des personnes : mayor.' },
    { q: 'una chica ___ (français)', a: 'francesa', why: 'Les nationalités ont un féminin : francesa.' },
    { q: '« Un grand ami » :', opts: ['un amigo gran', 'un gran amigo', 'un grande amigo'], a: 1, why: 'grande → gran devant le nom.' },
    { q: '« Très très cher » :', a: 'carísimo', why: '-ísimo : caro → carísimo.' },
    { q: 'Juan es ___ alto ___ Pedro (aussi grand que).', opts: ['tan … como', 'más … que', 'tanto … que'], a: 0, why: 'tan + adjectif + como.' },
  ],
},
{
  title: 'Possessifs et démonstratifs', sub: 'mi, tu, su… este, ese, aquel',
  body: `
<h3>Possessifs (devant le nom)</h3>
<table><tr><th>Français</th><th>Singulier</th><th>Pluriel</th></tr>
<tr><td>mon, ma</td><td>mi</td><td>mis</td></tr><tr><td>ton, ta</td><td>tu</td><td>tus</td></tr>
<tr><td>son, sa / votre (usted)</td><td>su</td><td>sus</td></tr><tr><td>notre</td><td>nuestro / nuestra</td><td>nuestros / nuestras</td></tr>
<tr><td>votre (vosotros)</td><td>vuestro / vuestra</td><td>vuestros / vuestras</td></tr><tr><td>leur / votre (ustedes)</td><td>su</td><td>sus</td></tr></table>
<p><span class="s">mi casa</span>, <span class="s">mis amigos</span>, <span class="s">nuestra familia</span>.</p>
<div class="warn">⚠️ <b>su</b> est ambigu : <i>su coche</i> = sa voiture / leur voiture / votre voiture. Pour préciser : <span class="s">el coche de él</span>, <span class="s">el coche de ellos</span>.</div>
<h3>Possessifs « forts » (après le nom ou seuls)</h3>
<p>mío, tuyo, suyo, nuestro, vuestro (accord en genre et nombre) : <span class="s">Es mío.</span> = c’est à moi. <span class="s">Un amigo mío.</span> = un de mes amis. <span class="s">¿Es tuya?</span> = elle est à toi ?</p>
<h3>Démonstratifs : 3 distances</h3>
<table><tr><th>Distance</th><th>Masc.</th><th>Fém.</th><th>Neutre</th></tr>
<tr><td>ici, près de moi</td><td>este / estos</td><td>esta / estas</td><td>esto</td></tr>
<tr><td>là, près de toi</td><td>ese / esos</td><td>esa / esas</td><td>eso</td></tr>
<tr><td>là-bas, loin</td><td>aquel / aquellos</td><td>aquella / aquellas</td><td>aquello</td></tr></table>
<p><span class="s">Este libro es mío, ese es tuyo y aquel es de Pedro.</span></p>
<p>Le neutre (esto, eso, aquello) sert pour une chose non nommée ou une idée : <span class="s">¿Qué es esto?</span> <span class="s">Eso es verdad.</span></p>
<div class="fr-box">🇫🇷 Avec les parties du corps et les vêtements, l’espagnol utilise l’article, comme le français : <span class="s">Me duele la cabeza.</span> (j’ai mal à LA tête), <span class="s">Me lavo las manos.</span></div>`,
  quiz: [
    { q: '___ amigos (mes amis)', opts: ['mi', 'mis', 'míos'], a: 1, why: 'Pluriel : mis.' },
    { q: '___ casa (notre maison)', a: 'nuestra', why: 'Accord avec casa (féminin) : nuestra.' },
    { q: '« Ce livre est à moi » : Este libro es ___.', a: 'mío', why: 'Possessif fort : mío.' },
    { q: '¿Qué es ___? (ceci, une chose inconnue)', opts: ['este', 'esto', 'esta'], a: 1, why: 'Neutre pour une chose non nommée.' },
    { q: '« Cette maison-là, au loin » :', opts: ['esta casa', 'esa casa', 'aquella casa'], a: 2, why: 'Loin des deux interlocuteurs : aquella.' },
    { q: '« J’ai mal à la tête » :', opts: ['Me duele mi cabeza', 'Me duele la cabeza', 'Tengo mal de cabeza'], a: 1, why: 'Article avec les parties du corps.' },
  ],
},
{
  title: 'Hay, nombres, heure et dates', sub: 'Compter, dire l’heure, la date',
  body: `
<h3>Hay = il y a</h3>
<p>Invariable : <span class="s">Hay un problema.</span> <span class="s">Hay muchas personas.</span> Avec un article défini, on utilise estar : <span class="s">El banco está aquí.</span> (pas « hay el banco »). <b>Hay que</b> + inf. = il faut : <span class="s">Hay que estudiar.</span></p>
<h3>Les nombres</h3>
<p>0 cero · 1 uno · 2 dos · 3 tres · 4 cuatro · 5 cinco · 6 seis · 7 siete · 8 ocho · 9 nueve · 10 diez · 11 once · 12 doce · 13 trece · 14 catorce · 15 quince · 16 dieciséis · 17 diecisiete · 18 dieciocho · 19 diecinueve · 20 veinte · 21 veintiuno · 22 veintidós…</p>
<p>30 treinta · <b>31 treinta y uno</b> (avec « y » à partir de 31) · 40 cuarenta · 50 cincuenta · 60 sesenta · 70 setenta · 80 ochenta · 90 noventa · 100 cien · 101 ciento uno · 200 doscientos · 500 <b>quinientos</b> · 1000 mil · 2026 dos mil veintiséis.</p>
<div class="fr-box">🇫🇷 Plus simple que le français ! Pas de « soixante-dix » ni de « quatre-vingts » : setenta (7×10), ochenta (8×10), noventa (9×10).</div>
<h3>L’heure</h3>
<p><span class="s">¿Qué hora es?</span> → <span class="s">Es la una.</span> (1 h, singulier) / <span class="s">Son las dos.</span> / <span class="s">Son las tres y cuarto.</span> (3 h 15) / <span class="s">Son las cuatro y media.</span> (4 h 30) / <span class="s">Son las cinco menos cuarto.</span> (4 h 45) / <span class="s">Son las seis y diez.</span></p>
<p>« À quelle heure ? » <span class="s">¿A qué hora?</span> → <span class="s">A las ocho.</span> · de la mañana / de la tarde / de la noche.</p>
<h3>Jours et mois (sans majuscule !)</h3>
<p>lunes, martes, miércoles, jueves, viernes, sábado, domingo. <span class="s">El lunes</span> = lundi (ce lundi) ; <span class="s">los lunes</span> = le lundi (chaque lundi).</p>
<p>enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre.</p>
<p>La date : <span class="s">Hoy es el cinco de noviembre.</span></p>`,
  quiz: [
    { q: '« Il y a beaucoup de gens » :', opts: ['Hay mucha gente', 'Está mucha gente', 'Es mucha gente'], a: 0, why: 'hay = il y a.' },
    { q: '70 se dit…', a: 'setenta', why: 'siete → setenta.' },
    { q: '500 se dit…', a: 'quinientos', why: 'Irrégulier : quinientos.' },
    { q: 'Il est 1 h :', opts: ['Son la una', 'Es la una', 'Es las una'], a: 1, why: 'Singulier pour 1 h : es la una.' },
    { q: '« Son las cuatro y media » =', opts: ['4 h 30', '4 h 15', '3 h 30'], a: 0, why: 'y media = et demie.' },
    { q: '« Son las cinco menos cuarto » =', opts: ['5 h 15', '4 h 45', '5 h 45'], a: 1, why: 'menos cuarto = moins le quart.' },
    { q: '« Il faut travailler » :', opts: ['Hay que trabajar', 'Tiene que trabajar', 'Es que trabajar'], a: 0, why: 'hay que + infinitif = il faut (impersonnel).' },
    { q: '31 se dit…', a: 'treinta y uno', why: 'À partir de 31 : dizaine + y + unité.' },
  ],
},
{
  title: 'Gustar et les verbes « à l’envers »', sub: 'me gusta, me encanta, me duele…',
  body: `
<p><b>Gustar</b> ne veut pas vraiment dire « aimer » : il veut dire « <b>plaire</b> ». La chose aimée est le <b>sujet</b>, la personne est le complément.</p>
<p><span class="s">Me gusta el café.</span> = Le café me plaît = J’aime le café.</p>
<h3>Construction</h3>
<table><tr><th>(a mí) me</th><td rowspan="6"><b>gusta</b> + singulier / infinitif<br><b>gustan</b> + pluriel</td></tr>
<tr><th>(a ti) te</th></tr><tr><th>(a él / ella / usted) le</th></tr><tr><th>(a nosotros) nos</th></tr><tr><th>(a vosotros) os</th></tr><tr><th>(a ellos / ustedes) les</th></tr></table>
<ul><li><span class="s">Me gusta la música.</span> (une chose)</li><li><span class="s">Me gustan los perros.</span> (plusieurs choses → gustan)</li>
<li><span class="s">Nos gusta viajar.</span> (un verbe → gusta)</li><li><span class="s">¿Te gusta España?</span></li></ul>
<p>Pour insister ou préciser, on ajoute « a + personne » : <span class="s">A mí me gusta, ¿y a ti?</span> — <span class="s">A mí también.</span> / <span class="s">A mí no.</span> · <span class="s">A María le gusta el cine.</span></p>
<h3>Les autres verbes qui fonctionnent pareil</h3>
<table><tr><td><span class="s">me encanta</span></td><td>j’adore</td></tr><tr><td><span class="s">me duele</span></td><td>j’ai mal (à)</td></tr>
<tr><td><span class="s">me interesa</span></td><td>ça m’intéresse</td></tr><tr><td><span class="s">me importa</span></td><td>ça m’importe</td></tr>
<tr><td><span class="s">me molesta</span></td><td>ça me dérange</td></tr><tr><td><span class="s">me falta</span></td><td>il me manque</td></tr>
<tr><td><span class="s">me parece</span></td><td>il me semble</td></tr><tr><td><span class="s">me queda</span></td><td>il me reste / ça me va</td></tr></table>
<div class="warn">⚠️ « Je t’aime » se dit <span class="s">te quiero</span> (ou <span class="s">te amo</span>, plus fort). « Me gustas » = tu me plais (attirance).</div>
<div class="fr-box">🇫🇷 Le français a la même logique avec « plaire » et « manquer » : <i>tu me manques</i> = <span class="s">me faltas</span> / <span class="s">te echo de menos</span>. Pense « plaire » et tout devient clair.</div>`,
  quiz: [
    { q: 'Me ___ los gatos.', opts: ['gusta', 'gustan', 'gusto'], a: 1, why: 'Sujet pluriel (los gatos) → gustan.' },
    { q: 'Nos ___ bailar.', opts: ['gusta', 'gustan', 'gustamos'], a: 0, why: 'Infinitif → gusta.' },
    { q: 'A mi madre ___ gusta el té.', opts: ['me', 'le', 'la'], a: 1, why: 'à elle → le.' },
    { q: '« J’ai mal aux pieds » : Me ___ los pies.', a: 'duelen', why: 'doler fonctionne comme gustar, sujet pluriel → duelen.' },
    { q: '« Moi aussi » (réponse à « me gusta ») :', opts: ['Yo también', 'A mí también', 'Me también'], a: 1, why: 'Avec gustar, on répond « a mí también ».' },
    { q: '« J’adore la plage » :', a: 'me encanta la playa', why: 'encantar = adorer, comme gustar.' },
    { q: '« Tu me plais » (attirance) :', opts: ['Me gustas', 'Te gusto', 'Me gusta tú'], a: 0, why: 'Tu (sujet) me plais → me gustas.' },
  ],
},
{
  title: 'Parler du futur', sub: 'ir a + infinitif, et le futur simple',
  body: `
<h3>Le futur proche : ir a + infinitif</h3>
<p>Le plus utilisé à l’oral. Exactement comme « aller + infinitif » :</p>
<table><tr><td>yo voy a</td><td rowspan="6">+ infinitif</td></tr><tr><td>tú vas a</td></tr><tr><td>él va a</td></tr><tr><td>nosotros vamos a</td></tr><tr><td>vosotros vais a</td></tr><tr><td>ellos van a</td></tr></table>
<p><span class="s">Voy a comer.</span> = je vais manger. <span class="s">¿Qué vas a hacer mañana?</span> <span class="s">Va a llover.</span> = il va pleuvoir.</p>
<div class="warn">⚠️ N’oublie pas le <b>a</b> : « voy comer » est faux.</div>
<p><b>Vamos a</b> + infinitif = aussi « allons… ! » : <span class="s">¡Vamos a ver!</span> = voyons voir !</p>
<h3>Le futur simple</h3>
<p>Facile : <b>infinitif entier + terminaison</b> (les mêmes pour -ar, -er, -ir) :</p>
<table><tr><th></th><th>hablar</th></tr><tr><td>yo</td><td><span class="s">hablaré</span></td></tr><tr><td>tú</td><td><span class="s">hablarás</span></td></tr>
<tr><td>él</td><td><span class="s">hablará</span></td></tr><tr><td>nosotros</td><td><span class="s">hablaremos</span></td></tr>
<tr><td>vosotros</td><td><span class="s">hablaréis</span></td></tr><tr><td>ellos</td><td><span class="s">hablarán</span></td></tr></table>
<p>Irréguliers (même radical qu’en… presque français !) : tener → <b>tendr</b>é, hacer → <b>har</b>é, decir → <b>dir</b>é, poder → <b>podr</b>é, salir → <b>saldr</b>é, venir → <b>vendr</b>é, poner → <b>pondr</b>é, querer → <b>querr</b>é, saber → <b>sabr</b>é.</p>
<h3>Le conditionnel</h3>
<p>Même radical + <b>-ía, -ías, -ía, -íamos, -íais, -ían</b> : <span class="s">Me gustaría viajar.</span> = j’aimerais voyager. <span class="s">¿Podrías ayudarme?</span> = pourrais-tu m’aider ?</p>
<div class="fr-box">🇫🇷 Le futur simple sert aussi à faire une supposition : <span class="s">¿Dónde estará?</span> = où peut-il bien être ? <span class="s">Tendrá veinte años.</span> = il doit avoir vingt ans.</div>`,
  quiz: [
    { q: 'Mañana ___ a estudiar (je).', opts: ['voy', 'va', 'vamos'], a: 0, why: 'yo voy a + infinitif.' },
    { q: '« Il va pleuvoir » :', opts: ['Va llover', 'Va a llover', 'Está a llover'], a: 1, why: 'N’oublie pas le a.' },
    { q: 'hablar → nosotros (futur) ___', a: 'hablaremos', why: 'infinitif + -emos.' },
    { q: 'tener → yo (futur) ___', a: 'tendré', why: 'Radical irrégulier tendr- + é.' },
    { q: 'hacer → ellos (futur) ___', a: 'harán', why: 'har- + án.' },
    { q: '« J’aimerais un café » :', opts: ['Me gustaré un café', 'Me gustaría un café', 'Me gusta un café'], a: 1, why: 'Conditionnel de politesse : me gustaría.' },
    { q: 'poder → tú (conditionnel) ___', a: 'podrías', why: 'podr- + ías.' },
  ],
},
{
  title: 'Parler du passé', sub: 'Passé composé, passé simple (indefinido) et imparfait',
  body: `
<p>L’espagnol utilise <b>trois temps du passé</b> au quotidien. Bonne nouvelle : ils correspondent assez bien au français.</p>
<h3>1. Pretérito perfecto (he hablado) = passé composé « récent »</h3>
<p>haber (he, has, ha, hemos, habéis, han) + participe (<b>-ado</b> / <b>-ido</b>). Pour un passé <b>lié au présent</b> : aujourd’hui, cette semaine, déjà, jamais…</p>
<p><span class="s">Hoy he comido paella.</span> <span class="s">¿Has estado en Madrid?</span> <span class="s">Todavía no he terminado.</span></p>
<p>Participes irréguliers : hecho (fait), dicho (dit), visto (vu), escrito, abierto, puesto, vuelto, roto, muerto.</p>
<h3>2. Pretérito indefinido (hablé) = action terminée, datée</h3>
<p>Pour une action <b>finie dans une période terminée</b> : hier, l’an dernier, en 2010. C’est le temps du récit.</p>
<table><tr><th></th><th>hablar</th><th>comer / vivir</th></tr>
<tr><td>yo</td><td>hablé</td><td>comí</td></tr><tr><td>tú</td><td>hablaste</td><td>comiste</td></tr><tr><td>él</td><td>habló</td><td>comió</td></tr>
<tr><td>nosotros</td><td>hablamos</td><td>comimos</td></tr><tr><td>vosotros</td><td>hablasteis</td><td>comisteis</td></tr><tr><td>ellos</td><td>hablaron</td><td>comieron</td></tr></table>
<p><span class="s">Ayer hablé con mi madre.</span> <span class="s">El año pasado viajamos a Perú.</span> Irréguliers clés : <b>fui</b> (ser ET ir !), tuve, hice, estuve, pude, dije, vine, quise, supe.</p>
<h3>3. Pretérito imperfecto (hablaba) = imparfait</h3>
<p>Description, habitude, action en cours dans le passé — comme l’imparfait français.</p>
<table><tr><th></th><th>-ar</th><th>-er / -ir</th></tr><tr><td>yo</td><td>hablaba</td><td>comía</td></tr><tr><td>tú</td><td>hablabas</td><td>comías</td></tr>
<tr><td>él</td><td>hablaba</td><td>comía</td></tr><tr><td>nosotros</td><td>hablábamos</td><td>comíamos</td></tr><tr><td>vosotros</td><td>hablabais</td><td>comíais</td></tr><tr><td>ellos</td><td>hablaban</td><td>comían</td></tr></table>
<p>Seulement 3 irréguliers : ser (era), ir (iba), ver (veía). <span class="s">Cuando era niño, jugaba al fútbol.</span></p>
<h3>Indefinido + imperfecto ensemble</h3>
<p><span class="s">Dormía cuando sonó el teléfono.</span> = Je dormais (décor, imparfait) quand le téléphone a sonné (action ponctuelle, indefinido).</p>
<div class="fr-box">🇫🇷 <b>Règle d’or pour un Français :</b> ton « passé composé » se traduit souvent par l’<b>indefinido</b> quand le moment est terminé : « Hier j’ai mangé » = <span class="s">Ayer comí</span> (pas « he comido »). Mais « Aujourd’hui j’ai mangé » = <span class="s">Hoy he comido</span>. Le mot de temps décide !</div>
<p>👉 Entraîne-toi : Tests → Conjugaison, coche indefinido, imperfecto et perfecto.</p>`,
  quiz: [
    { q: 'Ayer ___ con Juan (je parler).', opts: ['he hablado', 'hablé', 'hablaba'], a: 1, why: 'Ayer = période terminée → indefinido.' },
    { q: 'Hoy ___ mucho (je travailler).', opts: ['trabajé', 'he trabajado', 'trabajaba'], a: 1, why: 'Hoy = période pas terminée → pretérito perfecto.' },
    { q: 'Cuando era pequeño, ___ en Lyon (je vivre).', opts: ['viví', 'vivía', 'he vivido'], a: 1, why: 'Habitude / description passée → imperfecto.' },
    { q: 'comer → yo (indefinido) ___', a: 'comí', why: '-er : í, iste, ió…' },
    { q: 'hablar → él (indefinido) ___', a: 'habló', why: '-ar : é, aste, ó… attention à l’accent !' },
    { q: 'ir → yo (indefinido) ___', a: 'fui', why: 'ir et ser ont le même indefinido : fui.' },
    { q: 'hacer → participe passé ___', a: 'hecho', why: 'Participe irrégulier : hecho.' },
    { q: 'Leía un libro cuando ___ mi madre (llamar).', opts: ['llamaba', 'llamó', 'ha llamado'], a: 1, why: 'Action ponctuelle qui interrompt → indefinido.' },
    { q: 'ser → nosotros (imperfecto) ___', a: 'éramos', why: 'era, eras, era, éramos, erais, eran.' },
  ],
},
{
  title: 'Por ou para ?', sub: 'Deux « pour » qu’il faut distinguer',
  body: `
<p>Les deux se traduisent souvent par « pour », mais leur logique est différente :</p>
<div class="fr-box">🇫🇷 <b>Image mentale :</b> <b>para</b> regarde <b>vers l’avant</b> (le but, la destination, le destinataire). <b>por</b> regarde <b>en arrière ou à travers</b> (la cause, le moyen, le passage, l’échange).</div>
<h3>PARA → but, destination</h3>
<ul><li>But (+ infinitif) : <span class="s">Estudio para aprender.</span> = pour apprendre.</li>
<li>Destinataire : <span class="s">Este regalo es para ti.</span></li><li>Destination : <span class="s">Salgo para Madrid.</span></li>
<li>Échéance : <span class="s">Es para el lunes.</span> = c’est pour lundi.</li><li>Opinion : <span class="s">Para mí, es fácil.</span> = selon moi.</li></ul>
<h3>POR → cause, moyen, passage, échange</h3>
<ul><li>Cause : <span class="s">Gracias por todo.</span> <span class="s">Lo hago por ti.</span> (à cause de toi / pour toi = en ta faveur)</li>
<li>Passage, lieu vague : <span class="s">Paseo por el parque.</span> = dans / à travers le parc.</li>
<li>Moyen : <span class="s">Hablo por teléfono.</span> <span class="s">por correo</span></li>
<li>Échange, prix : <span class="s">Lo compré por diez euros.</span></li>
<li>Durée, moment vague : <span class="s">por la mañana</span> (le matin), <span class="s">por la noche</span>.</li>
<li>Par (passif) : <span class="s">Escrito por Cervantes.</span></li></ul>
<h3>Expressions toutes faites avec por</h3>
<p><span class="s">por favor</span> · <span class="s">por fin</span> (enfin) · <span class="s">por supuesto</span> (bien sûr) · <span class="s">por ejemplo</span> · <span class="s">por eso</span> (c’est pour ça) · <span class="s">por cierto</span> (au fait) · <span class="s">por qué</span> (pourquoi).</p>`,
  quiz: [
    { q: 'Gracias ___ tu ayuda.', opts: ['por', 'para'], a: 0, why: 'Cause / remerciement → por.' },
    { q: 'Este libro es ___ ti.', opts: ['por', 'para'], a: 1, why: 'Destinataire → para.' },
    { q: 'Estudio ___ ser médico.', opts: ['por', 'para'], a: 1, why: 'But → para.' },
    { q: 'Paseamos ___ la ciudad.', opts: ['por', 'para'], a: 0, why: 'Passage à travers → por.' },
    { q: 'Lo compré ___ veinte euros.', opts: ['por', 'para'], a: 0, why: 'Échange, prix → por.' },
    { q: 'El trabajo es ___ el viernes.', opts: ['por', 'para'], a: 1, why: 'Échéance → para.' },
    { q: 'Trabajo ___ la mañana.', opts: ['por', 'para'], a: 0, why: 'Moment de la journée → por la mañana.' },
    { q: '« Bien sûr » se dit…', a: 'por supuesto', why: 'Expression fixe avec por.' },
  ],
},
{
  title: 'Les verbes pronominaux', sub: 'llamarse, levantarse, ducharse… la routine',
  body: `
<p>Comme en français (« se lever »), certains verbes s’utilisent avec un pronom réfléchi. À l’infinitif, le pronom se colle à la fin : <b>levantarse</b>.</p>
<table><tr><th></th><th>levantarse (se lever)</th></tr>
<tr><td>yo</td><td><span class="s">me levanto</span></td></tr><tr><td>tú</td><td><span class="s">te levantas</span></td></tr>
<tr><td>él / usted</td><td><span class="s">se levanta</span></td></tr><tr><td>nosotros</td><td><span class="s">nos levantamos</span></td></tr>
<tr><td>vosotros</td><td><span class="s">os levantáis</span></td></tr><tr><td>ellos / ustedes</td><td><span class="s">se levantan</span></td></tr></table>
<h3>Ma journée (la routine)</h3>
<p><span class="s">Me despierto a las siete.</span> Je me réveille à 7 h. <span class="s">Me levanto.</span> <span class="s">Me ducho.</span> Je me douche. <span class="s">Me visto.</span> Je m’habille. <span class="s">Me lavo los dientes.</span> <span class="s">Me voy al trabajo.</span> Je pars au travail. <span class="s">Me acuesto a las once.</span> Je me couche à 23 h.</p>
<h3>Position du pronom</h3>
<ul><li>Devant un verbe conjugué : <span class="s">Me llamo Theo.</span></li>
<li>Collé à l’infinitif, au gérondif ou à l’impératif : <span class="s">Voy a ducharme.</span> <span class="s">Estoy duchándome.</span> <span class="s">¡Siéntate!</span></li>
<li>Avec un infinitif, les deux sont possibles : <span class="s">Me voy a duchar</span> = <span class="s">Voy a ducharme</span>.</li></ul>
<h3>Le pronom qui change le sens</h3>
<table><tr><td>ir = aller</td><td><span class="s">irse</span> = s’en aller, partir</td></tr>
<tr><td>dormir = dormir</td><td><span class="s">dormirse</span> = s’endormir</td></tr>
<tr><td>quedar = rester / se donner RDV</td><td><span class="s">quedarse</span> = rester (quelque part)</td></tr>
<tr><td>llamar = appeler</td><td><span class="s">llamarse</span> = s’appeler</td></tr>
<tr><td>poner = mettre</td><td><span class="s">ponerse</span> = mettre (un vêtement) / devenir</td></tr></table>
<div class="fr-box">🇫🇷 Certains sont pronominaux en espagnol mais pas en français : <span class="s">casarse</span> (se marier — pareil), mais aussi <span class="s">enfadarse</span> (se fâcher), <span class="s">equivocarse</span> (se tromper), <span class="s">darse cuenta</span> (se rendre compte), <span class="s">acordarse de</span> (se souvenir de).</div>`,
  quiz: [
    { q: '« Je m’appelle Ana » :', opts: ['Llamo Ana', 'Me llamo Ana', 'Se llamo Ana'], a: 1, why: 'llamarse → me llamo.' },
    { q: 'Nosotros ___ levantamos temprano.', a: 'nos', why: 'nosotros → nos.' },
    { q: 'Voy a ___ (me doucher, collé à l’infinitif).', a: 'ducharme', why: 'Le pronom se colle à l’infinitif.' },
    { q: '« Je m’en vais » :', opts: ['Voy', 'Me voy', 'Me ido'], a: 1, why: 'irse = s’en aller → me voy.' },
    { q: '¡___! (assieds-toi)', opts: ['Te sienta', 'Siéntate', 'Sentarte'], a: 1, why: 'À l’impératif, le pronom se colle : siéntate.' },
    { q: 'ellos + acostarse (présent) :', a: 'se acuestan', why: 'o→ue : se acuestan.' },
  ],
},
{
  title: 'La logique de la phrase', sub: 'Ordre des mots, pronoms COD/COI, « a » personnel',
  body: `
<h3>Ordre souple</h3>
<p>L’ordre de base est Sujet – Verbe – Complément comme en français, mais le sujet est souvent <b>omis</b> ou placé <b>après le verbe</b> : <span class="s">Ha llegado tu hermano.</span> = ton frère est arrivé. <span class="s">Me gusta mucho esta ciudad.</span></p>
<h3>Le « a » personnel</h3>
<p>Quand le complément direct est une <b>personne</b> (ou un animal aimé), on met <b>a</b> devant :</p>
<p><span class="s">Veo a María.</span> (je vois María) mais <span class="s">Veo la casa.</span> · <span class="s">Quiero a mi perro.</span> · <span class="s">Busco a mi hermano.</span></p>
<h3>Les pronoms compléments</h3>
<table><tr><th>COD (le, la)</th><th>COI (lui, leur)</th></tr>
<tr><td>me, te, <b>lo / la</b>, nos, os, <b>los / las</b></td><td>me, te, <b>le</b>, nos, os, <b>les</b></td></tr></table>
<p><span class="s">¿El libro? Lo tengo.</span> = je l’ai. <span class="s">¿La película? La vi ayer.</span> <span class="s">Le escribo una carta.</span> = je lui écris une lettre.</p>
<h3>Deux pronoms ensemble : COI avant COD, et le → se</h3>
<p><span class="s">Te lo digo.</span> = je te le dis. Mais <b>le / les + lo / la</b> devient <b>se lo</b> : <span class="s">Se lo doy.</span> = je le lui donne (jamais « le lo »).</p>
<h3>Redoublement du COI</h3>
<p>On répète souvent le pronom même quand la personne est nommée : <span class="s">Le doy el libro a Juan.</span> C’est normal et même naturel.</p>
<h3>Mots de liaison utiles</h3>
<p><span class="s">y</span> (et) · <span class="s">pero</span> (mais) · <span class="s">porque</span> (parce que) · <span class="s">entonces</span> (alors) · <span class="s">también</span> (aussi) · <span class="s">además</span> (en plus) · <span class="s">sin embargo</span> (cependant) · <span class="s">aunque</span> (bien que, même si) · <span class="s">primero… luego… al final</span> (d’abord… ensuite… à la fin).</p>
<div class="fr-box">🇫🇷 <b>Phrase type pour te lancer :</b> <span class="s">Primero desayuno, luego voy al trabajo y por la tarde estudio español porque me gusta mucho.</span></div>`,
  quiz: [
    { q: 'Veo ___ mi madre.', opts: ['—', 'a', 'de'], a: 1, why: '« a » personnel devant une personne COD.' },
    { q: 'Busco ___ llaves.', opts: ['a las', 'las', 'a'], a: 1, why: 'Pas de « a » pour une chose.' },
    { q: '¿El pan? Ya ___ compré.', opts: ['le', 'lo', 'la'], a: 1, why: 'el pan (masc., COD) → lo.' },
    { q: '« Je le lui donne » :', opts: ['Le lo doy', 'Se lo doy', 'Lo le doy'], a: 1, why: 'le + lo → se lo.' },
    { q: '« Je te le dis » :', a: 'te lo digo', why: 'COI (te) avant COD (lo).' },
    { q: '« Cependant » se dit…', a: 'sin embargo', why: 'sin embargo = cependant.' },
    { q: '___ escribo a mis padres (je leur écris).', opts: ['Los', 'Les', 'Se'], a: 1, why: 'COI pluriel → les.' },
  ],
},
{
  title: 'Faux amis français–espagnol', sub: 'Les mots qui te piègent… et te mettent dans l’embarras',
  body: `
<p>Le français et l’espagnol se ressemblent beaucoup — trop parfois ! Voici les pièges les plus fréquents :</p>
<table><tr><th>Espagnol</th><th>Veut dire</th><th>Pas…</th></tr>
<tr><td><span class="s">embarazada</span></td><td>enceinte</td><td>embarrassée (= avergonzada)</td></tr>
<tr><td><span class="s">constipado</span></td><td>enrhumé</td><td>constipé (= estreñido)</td></tr>
<tr><td><span class="s">salir</span></td><td>sortir</td><td>salir (= ensuciar)</td></tr>
<tr><td><span class="s">largo</span></td><td>long</td><td>large (= ancho)</td></tr>
<tr><td><span class="s">éxito</span></td><td>succès</td><td>sortie (= salida)</td></tr>
<tr><td><span class="s">molestar</span></td><td>déranger</td><td>molester</td></tr>
<tr><td><span class="s">exquisito</span></td><td>délicieux</td><td>(presque pareil, mais pour la nourriture)</td></tr>
<tr><td><span class="s">contestar</span></td><td>répondre</td><td>contester</td></tr>
<tr><td><span class="s">recordar</span></td><td>se rappeler</td><td>ré-accorder</td></tr>
<tr><td><span class="s">librería</span></td><td>librairie</td><td>bibliothèque (= biblioteca)</td></tr>
<tr><td><span class="s">carpeta</span></td><td>dossier, classeur</td><td>carpette (= alfombra)</td></tr>
<tr><td><span class="s">compromiso</span></td><td>engagement</td><td>compromis (souvent)</td></tr>
<tr><td><span class="s">gracioso</span></td><td>drôle</td><td>gracieux</td></tr>
<tr><td><span class="s">suceso</span></td><td>événement, fait divers</td><td>succès (= éxito)</td></tr>
<tr><td><span class="s">nombre</span></td><td>nom, prénom</td><td>nombre (= número)</td></tr>
<tr><td><span class="s">ropa</span></td><td>vêtements</td><td>robe (= vestido)</td></tr>
<tr><td><span class="s">sensible</span></td><td>sensible</td><td>sensé (= sensato)</td></tr>
<tr><td><span class="s">desgracia</span></td><td>malheur</td><td>disgrâce</td></tr>
<tr><td><span class="s">casualidad</span></td><td>hasard</td><td>casualité</td></tr>
<tr><td><span class="s">escenario</span></td><td>scène (estrade)</td><td>scénario (= guion)</td></tr>
<tr><td><span class="s">firma</span></td><td>signature</td><td>firme (= empresa)</td></tr>
<tr><td><span class="s">vaso</span></td><td>verre (à boire)</td><td>vase (= jarrón)</td></tr></table>
<div class="fr-box">🇫🇷 <b>Le plus célèbre :</b> une Française qui veut dire « je suis gênée » et dit <i>« estoy embarazada »</i>… annonce qu’elle est enceinte ! Dis <span class="s">me da vergüenza</span> ou <span class="s">estoy avergonzada</span>.</div>
<h3>Les bons amis (presque identiques)</h3>
<p>Mots en <b>-ción</b> = -tion (nación, canción), <b>-dad</b> = -té (ciudad, libertad, verdad), <b>-mente</b> = -ment (rápidamente), <b>-oso</b> = -eux (famoso, peligroso). Profites-en !</p>`,
  quiz: [
    { q: '« Estoy embarazada » veut dire…', opts: ['Je suis gênée', 'Je suis enceinte', 'Je suis pressée'], a: 1, why: 'embarazada = enceinte. Gênée = avergonzada.' },
    { q: '« Estoy constipado » veut dire…', opts: ['Je suis enrhumé', 'Je suis constipé', 'Je suis fatigué'], a: 0, why: 'constipado = enrhumé.' },
    { q: '« Tiene el pelo largo » =', opts: ['Il a les cheveux larges', 'Il a les cheveux longs', 'Il a les cheveux épais'], a: 1, why: 'largo = long.' },
    { q: '« La película fue un éxito » =', opts: ['Le film fut un succès', 'Le film fut une sortie', 'Le film fut un échec'], a: 0, why: 'éxito = succès.' },
    { q: 'La sortie (d’un bâtiment) se dit…', a: 'la salida', alt: ['salida'], why: 'salida = sortie.' },
    { q: 'Où emprunte-t-on des livres gratuitement ?', opts: ['en la librería', 'en la biblioteca'], a: 1, why: 'biblioteca = bibliothèque ; librería = librairie (on achète).' },
    { q: '« ¿Te molesto? » =', opts: ['Je te dérange ?', 'Je te fais mal ?', 'Je te moleste ?'], a: 0, why: 'molestar = déranger.' },
    { q: 'Les vêtements se disent…', a: 'la ropa', alt: ['ropa'], why: 'ropa = vêtements ; une robe = un vestido.' },
  ],
},
];
