// English lessons (refinement level). body = HTML in French; <span class="s">…</span> = tap to hear. quiz: {q, opts, a} or {q, a: 'typed', alt}.
window.EN_LESSONS = [
{
  title: 'Present perfect ou prétérit ?', sub: 'I have done / I did — l’erreur n°1 des Français',
  body: `
<p>En français, « j’ai mangé » sert à tout. En anglais, il y a <b>deux temps</b> et le choix dépend du <b>lien avec le présent</b>.</p>
<h3>Simple past (I did) : passé terminé, daté</h3>
<p>L’action appartient à un moment <b>fini</b>, souvent précisé : yesterday, last week, in 2019, ago, when I was a child.</p>
<p><span class="s">I saw him yesterday.</span> <span class="s">She moved to London three years ago.</span> <span class="s">When did you arrive?</span></p>
<h3>Present perfect (I have done) : passé relié au présent</h3>
<ul><li><b>Expérience</b> (sans date) : <span class="s">Have you ever been to Japan?</span> <span class="s">I've never eaten sushi.</span></li>
<li><b>Résultat visible maintenant</b> : <span class="s">I've lost my keys.</span> (je ne les ai toujours pas)</li>
<li><b>Période pas terminée</b> : today, this week, this year, so far : <span class="s">I've drunk three coffees today.</span></li>
<li><b>Depuis</b> (for / since) : <span class="s">I've lived here for five years.</span> <span class="s">I've known her since 2015.</span></li>
<li>Avec <b>just, already, yet</b> : <span class="s">I've just finished.</span> <span class="s">Have you finished yet?</span></li></ul>
<div class="warn">⚠️ <b>Jamais</b> de present perfect avec une date passée : ❌ <i>I have seen him yesterday</i> → ✅ <span class="s">I saw him yesterday.</span></div>
<div class="fr-box">🇫🇷 <b>« Depuis » = present perfect, pas présent !</b> « J’habite ici depuis 5 ans » = <span class="s">I've lived here for five years</span> (❌ <i>I live here since…</i>). <b>for</b> + durée (for two hours), <b>since</b> + point de départ (since Monday, since 2010).</div>
<h3>Ago vs for</h3>
<p><span class="s">I met her two years ago.</span> (il y a deux ans — prétérit) / <span class="s">I've known her for two years.</span> (depuis deux ans — present perfect).</p>`,
  quiz: [
    { q: 'I ___ him last week.', opts: ['have seen', 'saw', 'have saw'], a: 1, why: '« last week » = moment terminé → prétérit.' },
    { q: '___ you ever ___ to Spain?', opts: ['Did / go', 'Have / been', 'Have / went'], a: 1, why: 'Expérience sans date → present perfect.' },
    { q: '« J’habite ici depuis 2018 » :', opts: ['I live here since 2018.', 'I have lived here since 2018.', 'I lived here since 2018.'], a: 1, why: 'Depuis → present perfect + since.' },
    { q: 'I have known her ___ ten years.', opts: ['since', 'for', 'during'], a: 1, why: 'for + durée.' },
    { q: 'She left two hours ___.', opts: ['ago', 'for', 'since'], a: 0, why: 'ago = il y a → prétérit.' },
    { q: 'Oh no! I ___ my wallet! (je ne l’ai plus)', opts: ['lost', 'have lost', 'was losing'], a: 1, why: 'Résultat visible maintenant → present perfect.' },
    { q: 'Complète : Have you finished ___? (déjà, question)', a: 'yet', why: 'yet en fin de question ou de négation.' },
  ],
},
{
  title: 'Les formes continues', sub: 'be + -ing, et les verbes qui la refusent',
  body: `
<h3>Present continuous : en ce moment, temporaire</h3>
<p><span class="s">I'm working right now.</span> <span class="s">She's living with her parents at the moment.</span> (situation temporaire)</p>
<p>Comparé au présent simple (habitudes, vérités) : <span class="s">I work in a bank.</span> / <span class="s">I'm working from home this week.</span></p>
<h3>Past continuous : décor dans le passé</h3>
<p><span class="s">I was having a shower when the phone rang.</span> = je prenais ma douche (en cours) quand le téléphone a sonné (action ponctuelle). C’est l’équivalent de l’imparfait « en train de ».</p>
<h3>Les verbes d’état (stative verbs) : pas de -ing</h3>
<p>Ces verbes décrivent un état, pas une action, donc normalement pas de forme continue :</p>
<p><b>know, understand, believe, like, love, hate, want, need, prefer, own, belong, seem, mean, remember</b>.</p>
<p>❌ <i>I'm knowing</i> → ✅ <span class="s">I know.</span> ❌ <i>I'm wanting a coffee</i> → ✅ <span class="s">I want a coffee.</span></p>
<div class="warn">⚠️ Certains changent de sens : <span class="s">I think it's good</span> (opinion) / <span class="s">I'm thinking about it</span> (réflexion en cours). <span class="s">I have a car</span> / <span class="s">I'm having dinner</span> (manger).</div>
<h3>Usages fréquents</h3>
<ul><li>Agacement avec <b>always</b> : <span class="s">You're always complaining!</span> = tu passes ton temps à te plaindre !</li>
<li>Futur planifié : <span class="s">I'm meeting Tom tomorrow.</span></li>
<li>Changement en cours : <span class="s">Prices are going up.</span></li></ul>
<div class="fr-box">🇫🇷 Le français n’a pas de forme continue, donc on l’oublie. Réflexe : si tu peux dire « être en train de » ou que c’est temporaire → <b>-ing</b>.</div>`,
  quiz: [
    { q: 'Look! It ___.', opts: ['rains', 'is raining', 'rained'], a: 1, why: 'Action en cours → present continuous.' },
    { q: 'I ___ what you mean.', opts: ['understand', 'am understanding'], a: 0, why: 'understand = stative verb.' },
    { q: 'I ___ TV when you called.', opts: ['watched', 'was watching', 'am watching'], a: 1, why: 'Action en cours interrompue → past continuous.' },
    { q: 'She usually ___ by bus.', opts: ['goes', 'is going'], a: 0, why: 'Habitude → présent simple.' },
    { q: '« J’y réfléchis » (en ce moment) :', opts: ['I think about it.', 'I\'m thinking about it.'], a: 1, why: 'think = réfléchir (action) → -ing possible.' },
    { q: 'This book ___ to me.', opts: ['belongs', 'is belonging'], a: 0, why: 'belong = stative verb.' },
  ],
},
{
  title: 'Past perfect et formes « perfect continuous »', sub: 'had done, have been doing',
  body: `
<h3>Past perfect (had + participe) = plus-que-parfait</h3>
<p>Pour une action <b>antérieure</b> à une autre action passée : <span class="s">When I arrived, the train had already left.</span> = le train était déjà parti.</p>
<p><span class="s">I had never seen snow before I moved to Canada.</span></p>
<h3>Present perfect continuous (have been + -ing)</h3>
<p>Action qui <b>dure</b> jusqu’à maintenant, on insiste sur la durée ou l’activité :</p>
<p><span class="s">I've been waiting for an hour!</span> = ça fait une heure que j’attends ! <span class="s">She's been learning Spanish since January.</span> <span class="s">You look tired. Have you been running?</span></p>
<p>Comparé au present perfect simple (résultat, quantité) : <span class="s">I've written three emails.</span> / <span class="s">I've been writing emails all morning.</span></p>
<h3>Past perfect continuous (had been + -ing)</h3>
<p><span class="s">He was exhausted because he had been working all night.</span></p>
<div class="fr-box">🇫🇷 <b>« Ça fait… que »</b> se traduit presque toujours par le present perfect (continuous) : « Ça fait deux heures que je travaille » = <span class="s">I've been working for two hours.</span></div>`,
  quiz: [
    { q: 'When we got there, the film ___.', opts: ['already started', 'had already started', 'has already started'], a: 1, why: 'Antérieur à une action passée → past perfect.' },
    { q: '« Ça fait une heure que j’attends » :', opts: ['I wait for an hour.', 'I\'ve been waiting for an hour.', 'I waited since an hour.'], a: 1, why: 'Durée jusqu’à maintenant → present perfect continuous.' },
    { q: 'I ___ three books this month.', opts: ['have been reading', 'have read'], a: 1, why: 'Quantité/résultat → present perfect simple.' },
    { q: 'She was tired because she ___ all day.', opts: ['had been working', 'has worked', 'works'], a: 0, why: 'Activité prolongée avant un moment passé → past perfect continuous.' },
    { q: 'Participe de « go » :', a: 'gone', why: 'go – went – gone.' },
  ],
},
{
  title: 'Parler du futur', sub: 'will, going to, present continuous, future perfect',
  body: `
<table><tr><th>Forme</th><th>Usage</th><th>Exemple</th></tr>
<tr><td><b>will</b></td><td>décision sur le moment, promesse, prédiction/opinion</td><td><span class="s">I'll help you.</span> <span class="s">I think it will rain.</span></td></tr>
<tr><td><b>be going to</b></td><td>intention déjà décidée, prédiction avec indice</td><td><span class="s">I'm going to study medicine.</span> <span class="s">Look at those clouds, it's going to rain.</span></td></tr>
<tr><td><b>present continuous</b></td><td>rendez-vous, projet organisé</td><td><span class="s">I'm seeing the dentist on Monday.</span></td></tr>
<tr><td><b>present simple</b></td><td>horaires officiels</td><td><span class="s">The train leaves at 8.</span></td></tr></table>
<h3>Future continuous et future perfect</h3>
<p><span class="s">This time tomorrow, I'll be lying on the beach.</span> = demain à la même heure, je serai en train de bronzer.</p>
<p><span class="s">By next year, I'll have finished my degree.</span> = l’an prochain, j’aurai fini mon diplôme.</p>
<div class="warn">⚠️ <b>Après when, as soon as, until, before, if</b> : présent, pas will ! ❌ <i>When I will arrive</i> → ✅ <span class="s">When I arrive, I'll call you.</span> (le français, lui, met le futur : « quand j’arriverai »).</div>
<div class="fr-box">🇫🇷 Proposer : <span class="s">Shall I open the window?</span> = j’ouvre la fenêtre ? <span class="s">Shall we go?</span> = on y va ?</div>`,
  quiz: [
    { q: 'The phone is ringing. — I ___ get it!', opts: ['\'ll', '\'m going to', 'get'], a: 0, why: 'Décision sur le moment → will.' },
    { q: 'I ___ visit my aunt next week. (c’est décidé)', opts: ['will', 'am going to', 'visit'], a: 1, why: 'Intention déjà décidée → going to.' },
    { q: 'Call me when you ___.', opts: ['will arrive', 'arrive', 'arrived'], a: 1, why: 'Après when → présent.' },
    { q: 'By 2030, I ___ my house.', opts: ['will have paid off', 'will pay off', 'pay off'], a: 0, why: 'Achevé avant un moment futur → future perfect.' },
    { q: 'Our flight ___ at 6 a.m. tomorrow.', opts: ['leaves', 'will be leave', 'is leave'], a: 0, why: 'Horaire officiel → présent simple.' },
    { q: '« On y va ? » (proposition) :', opts: ['Will we go?', 'Shall we go?', 'Do we go?'], a: 1, why: 'Shall we… ? = proposition.' },
  ],
},
{
  title: 'Les conditionnels', sub: 'If… : les 4 types, mixed, et wish',
  body: `
<table><tr><th>Type</th><th>Structure</th><th>Sens</th></tr>
<tr><td>0</td><td>If + présent, présent</td><td>vérité générale : <span class="s">If you heat ice, it melts.</span></td></tr>
<tr><td>1</td><td>If + présent, will</td><td>possible / réel : <span class="s">If it rains, I'll stay home.</span></td></tr>
<tr><td>2</td><td>If + prétérit, would</td><td>imaginaire (présent) : <span class="s">If I had money, I would travel.</span></td></tr>
<tr><td>3</td><td>If + past perfect, would have + participe</td><td>regret (passé) : <span class="s">If I had studied, I would have passed.</span></td></tr></table>
<div class="warn">⚠️ <b>Jamais de would après if</b> : ❌ <i>If I would have…</i> → ✅ <span class="s">If I had…</span>. Comme en français : « si j’avais » (pas « si j’aurais » !).</div>
<p><b>If I were you</b> : on dit <span class="s">If I were you, I'd accept.</span> (were pour toutes les personnes, style correct).</p>
<h3>Mixed conditionals</h3>
<p>Passé → conséquence présente : <span class="s">If I had taken the job, I would be rich now.</span></p>
<h3>Unless, as long as, provided that</h3>
<p><span class="s">I won't go unless you come.</span> (= if you don't come) · <span class="s">You can borrow it as long as you bring it back.</span></p>
<h3>Wish / If only</h3>
<p>Regret présent : <span class="s">I wish I were taller.</span> <span class="s">I wish I had more time.</span> Regret passé : <span class="s">I wish I had listened to you.</span> Agacement : <span class="s">I wish you would stop talking.</span></p>`,
  quiz: [
    { q: 'If it ___ tomorrow, we\'ll cancel.', opts: ['rains', 'will rain', 'would rain'], a: 0, why: 'Type 1 : if + présent.' },
    { q: 'If I ___ rich, I would buy a boat.', opts: ['am', 'were', 'would be'], a: 1, why: 'Type 2 : if + prétérit (were).' },
    { q: 'If you had told me, I ___.', opts: ['would help', 'would have helped', 'will help'], a: 1, why: 'Type 3 : would have + participe.' },
    { q: 'I wish I ___ more time. (maintenant)', opts: ['have', 'had', 'will have'], a: 1, why: 'wish + prétérit pour le présent.' },
    { q: 'I won\'t call ___ you call me first.', opts: ['if', 'unless', 'when'], a: 1, why: 'unless = sauf si.' },
    { q: 'If I ___ you, I\'d say yes.', a: 'were', why: 'If I were you…' },
    { q: 'If she had left earlier, she ___ here now.', opts: ['would be', 'would have been', 'will be'], a: 0, why: 'Mixed : passé → conséquence présente.' },
  ],
},
{
  title: 'Les modaux et leurs nuances', sub: 'must, have to, should, might, could, can’t…',
  body: `
<h3>Obligation et conseil</h3>
<table><tr><td><span class="s">must</span></td><td>obligation ressentie par celui qui parle : <span class="s">I must call my mum.</span></td></tr>
<tr><td><span class="s">have to</span></td><td>obligation extérieure : <span class="s">I have to wear a uniform.</span></td></tr>
<tr><td><span class="s">mustn't</span></td><td><b>interdiction</b> : <span class="s">You mustn't smoke here.</span></td></tr>
<tr><td><span class="s">don't have to</span></td><td><b>absence d’obligation</b> : <span class="s">You don't have to come.</span> (tu n’es pas obligé)</td></tr>
<tr><td><span class="s">should / ought to</span></td><td>conseil : <span class="s">You should see a doctor.</span></td></tr></table>
<div class="warn">⚠️ <b>mustn't ≠ don't have to</b> ! « You mustn't go » = tu ne dois pas y aller (interdit). « You don't have to go » = tu n’es pas obligé.</div>
<h3>Probabilité (du plus sûr au moins sûr)</h3>
<p><span class="s">It must be true.</span> (c’est sûrement vrai) → <span class="s">It might be true.</span> / <span class="s">It could be true.</span> / <span class="s">It may be true.</span> (peut-être) → <span class="s">It can't be true.</span> (impossible)</p>
<h3>Au passé : modal + have + participe</h3>
<ul><li><span class="s">You should have told me.</span> = tu aurais dû me le dire (reproche)</li>
<li><span class="s">She must have forgotten.</span> = elle a dû oublier (déduction)</li>
<li><span class="s">He might have missed the bus.</span> = il a peut-être raté le bus</li>
<li><span class="s">They can't have left already.</span> = ils ne peuvent pas être déjà partis</li>
<li><span class="s">I could have won.</span> = j’aurais pu gagner</li></ul>
<h3>Capacité et permission</h3>
<p><span class="s">Can I sit here?</span> (familier) / <span class="s">Could I…?</span> / <span class="s">May I…?</span> (plus poli). Capacité passée : <span class="s">I could swim at five.</span> Réussite ponctuelle : <span class="s">I managed to / was able to fix it.</span></p>`,
  quiz: [
    { q: '« Tu n’es pas obligé de venir » :', opts: ['You mustn\'t come.', 'You don\'t have to come.', 'You shouldn\'t come.'], a: 1, why: 'Absence d’obligation → don’t have to.' },
    { q: 'You ___ drive without a licence. (interdit)', opts: ['mustn\'t', 'don\'t have to'], a: 0, why: 'Interdiction → mustn’t.' },
    { q: 'He\'s not answering. He ___ be asleep. (sûrement)', opts: ['must', 'can\'t', 'should'], a: 0, why: 'Déduction forte → must.' },
    { q: '« Tu aurais dû me le dire » :', a: 'you should have told me', why: 'should have + participe = reproche.' },
    { q: 'That ___ be Tom, he\'s in Paris! (impossible)', opts: ['mustn\'t', 'can\'t', 'might'], a: 1, why: 'Impossibilité → can’t.' },
    { q: 'She ___ have missed the train. (peut-être)', opts: ['might', 'must', 'should'], a: 0, why: 'Possibilité → might have.' },
  ],
},
{
  title: 'Le passif et le discours indirect', sub: 'It was built… / He said that…',
  body: `
<h3>Le passif : be + participe passé</h3>
<p>On l’utilise quand l’auteur est inconnu ou sans importance : <span class="s">The house was built in 1900.</span> <span class="s">English is spoken here.</span> <span class="s">My phone has been stolen!</span></p>
<p>Tous les temps : is made / was made / has been made / will be made / is being made.</p>
<h3>Le causatif : have / get something done</h3>
<p>Faire faire quelque chose par quelqu’un d’autre : <span class="s">I had my hair cut.</span> = je me suis fait couper les cheveux. <span class="s">I need to get my car repaired.</span></p>
<div class="fr-box">🇫🇷 Le passif anglais remplace souvent le « on » français : « On m’a dit que… » = <span class="s">I was told that…</span> ; « On parle anglais ici » = <span class="s">English is spoken here.</span></div>
<h3>Discours indirect : le temps recule</h3>
<table><tr><th>Direct</th><th>Indirect</th></tr>
<tr><td>"I <b>am</b> tired."</td><td><span class="s">She said she was tired.</span></td></tr>
<tr><td>"I <b>will</b> call."</td><td><span class="s">He said he would call.</span></td></tr>
<tr><td>"I <b>have</b> finished."</td><td><span class="s">He said he had finished.</span></td></tr>
<tr><td>"I <b>can</b> help."</td><td><span class="s">She said she could help.</span></td></tr></table>
<p><b>say</b> vs <b>tell</b> : <span class="s">He said (that)…</span> / <span class="s">He told me (that)…</span> (tell + personne). ❌ <i>He said me</i>.</p>
<p>Questions indirectes : ordre normal ! <span class="s">She asked me where I lived.</span> (❌ <i>where did I live</i>). <span class="s">He asked if I was ready.</span></p>`,
  quiz: [
    { q: 'This bridge ___ in 1850.', opts: ['built', 'was built', 'has built'], a: 1, why: 'Passif passé : was + participe.' },
    { q: '« On m’a volé mon vélo » :', opts: ['They stole me my bike.', 'My bike has been stolen.', 'I stole my bike.'], a: 1, why: 'Passif pour un auteur inconnu.' },
    { q: '« Je me suis fait couper les cheveux » :', opts: ['I cut my hair.', 'I had my hair cut.', 'I was cut my hair.'], a: 1, why: 'Causatif : have something done.' },
    { q: 'He ___ me that he was busy.', opts: ['said', 'told', 'spoke'], a: 1, why: 'tell + personne.' },
    { q: '"I will come." → She said she ___ come.', a: 'would', why: 'will → would.' },
    { q: 'She asked me where ___.', opts: ['did I live', 'I lived', 'do I live'], a: 1, why: 'Question indirecte : ordre sujet + verbe.' },
  ],
},
{
  title: 'La logique des phrasal verbs', sub: 'Ce que veulent dire up, out, off, down…',
  body: `
<p>Un phrasal verb = verbe + particule. Le sens n’est pas toujours évident, mais <b>les particules ont une logique</b> :</p>
<table><tr><th>Particule</th><th>Idée</th><th>Exemples</th></tr>
<tr><td><b>up</b></td><td>vers le haut, jusqu’au bout, complètement</td><td><span class="s">give up</span>, <span class="s">eat up</span>, <span class="s">fill up</span>, <span class="s">grow up</span></td></tr>
<tr><td><b>down</b></td><td>baisse, réduction, arrêt</td><td><span class="s">slow down</span>, <span class="s">calm down</span>, <span class="s">cut down on</span>, <span class="s">break down</span></td></tr>
<tr><td><b>out</b></td><td>vers l’extérieur, découvrir, épuiser</td><td><span class="s">find out</span>, <span class="s">run out of</span>, <span class="s">figure out</span>, <span class="s">sort out</span></td></tr>
<tr><td><b>off</b></td><td>départ, séparation, annulation</td><td><span class="s">take off</span>, <span class="s">call off</span>, <span class="s">turn off</span>, <span class="s">set off</span></td></tr>
<tr><td><b>on</b></td><td>continuation, activation</td><td><span class="s">carry on</span>, <span class="s">go on</span>, <span class="s">turn on</span>, <span class="s">hold on</span></td></tr>
<tr><td><b>back</b></td><td>retour</td><td><span class="s">call back</span>, <span class="s">pay back</span>, <span class="s">come back</span></td></tr>
<tr><td><b>over</b></td><td>d’un bout à l’autre, transfert, réexamen</td><td><span class="s">think over</span>, <span class="s">take over</span>, <span class="s">get over</span></td></tr></table>
<h3>Séparable ou pas ?</h3>
<p>Beaucoup sont séparables : <span class="s">Turn off the light</span> = <span class="s">Turn the light off</span>. Avec un <b>pronom</b>, il DOIT aller au milieu : <span class="s">Turn it off.</span> (❌ <i>turn off it</i>).</p>
<p>Inséparables : look after, get over, deal with, come across… <span class="s">I'll look after them.</span></p>
<h3>Trois mots</h3>
<p><span class="s">look forward to</span>, <span class="s">put up with</span>, <span class="s">get along with</span>, <span class="s">come up with</span>, <span class="s">run out of</span> — jamais séparés.</p>
<div class="fr-box">🇫🇷 Les phrasal verbs sont plus naturels à l’oral que leurs équivalents latins (proches du français) : <i>continue</i> → <b>carry on</b>, <i>discover</i> → <b>find out</b>, <i>tolerate</i> → <b>put up with</b>, <i>cancel</i> → <b>call off</b>. Utilise-les pour sonner natif ! (Liste complète : Mots → catégorie « verbes à particule »)</div>`,
  quiz: [
    { q: 'The match was ___ because of the rain. (annulé)', opts: ['called off', 'called up', 'called out'], a: 0, why: 'off = annulation.' },
    { q: 'We\'ve run ___ of milk.', opts: ['out', 'off', 'down'], a: 0, why: 'run out of = être à court de.' },
    { q: 'Turn ___ (éteins-la, la télé) :', opts: ['off it', 'it off'], a: 1, why: 'Pronom au milieu : turn it off.' },
    { q: '« Je ne supporte pas ce bruit » :', opts: ['I can\'t put up with this noise.', 'I can\'t put off this noise.', 'I can\'t put on this noise.'], a: 0, why: 'put up with = supporter.' },
    { q: '« J’ai hâte de te voir » : I\'m looking forward to ___ you.', a: 'seeing', why: 'look forward to + -ing.' },
    { q: 'Please ___ down, you\'re driving too fast!', opts: ['slow', 'calm', 'cut'], a: 0, why: 'slow down = ralentir.' },
    { q: 'She came ___ with a brilliant idea.', opts: ['up', 'out', 'over'], a: 0, why: 'come up with = trouver (une idée).' },
  ],
},
{
  title: 'Les prépositions', sub: 'in / on / at, et les verbes + préposition',
  body: `
<h3>Temps : in / on / at</h3>
<table><tr><td><b>at</b></td><td>heure précise, moment</td><td><span class="s">at 8 o'clock</span>, <span class="s">at night</span>, <span class="s">at the weekend</span> (UK)</td></tr>
<tr><td><b>on</b></td><td>jour, date</td><td><span class="s">on Monday</span>, <span class="s">on 5 May</span>, <span class="s">on my birthday</span></td></tr>
<tr><td><b>in</b></td><td>mois, année, saison, période</td><td><span class="s">in July</span>, <span class="s">in 2026</span>, <span class="s">in the morning</span>, <span class="s">in two days</span> (dans deux jours)</td></tr></table>
<h3>Lieu : in / on / at</h3>
<p><b>at</b> = point (at the station, at home, at work) · <b>in</b> = à l’intérieur, ville, pays (in the kitchen, in London) · <b>on</b> = surface, ligne (on the table, on the wall, on the bus, on the second floor).</p>
<h3>Verbes + préposition (pièges pour les Français)</h3>
<table><tr><th>Anglais</th><th>Français</th></tr>
<tr><td><span class="s">depend on</span></td><td>dépendre DE</td></tr><tr><td><span class="s">listen to</span></td><td>écouter (sans préposition)</td></tr>
<tr><td><span class="s">wait for</span></td><td>attendre</td></tr><tr><td><span class="s">look at</span></td><td>regarder</td></tr>
<tr><td><span class="s">pay for</span></td><td>payer (qqch)</td></tr><tr><td><span class="s">ask for</span></td><td>demander (qqch)</td></tr>
<tr><td><span class="s">arrive in / at</span></td><td>arriver À (jamais « arrive to »)</td></tr><tr><td><span class="s">married to</span></td><td>marié AVEC</td></tr>
<tr><td><span class="s">interested in</span></td><td>intéressé PAR</td></tr><tr><td><span class="s">good at</span></td><td>bon EN</td></tr>
<tr><td><span class="s">afraid of</span></td><td>avoir peur DE</td></tr><tr><td><span class="s">angry with</span></td><td>fâché CONTRE</td></tr>
<tr><td><span class="s">discuss / enter / call / phone</span></td><td>SANS préposition (❌ discuss about)</td></tr></table>
<div class="fr-box">🇫🇷 <b>Après une préposition, toujours -ing</b> : <span class="s">I'm good at cooking.</span> <span class="s">Thanks for coming.</span> <span class="s">Before leaving…</span> (le français met l’infinitif : « avant de partir »).</div>`,
  quiz: [
    { q: 'See you ___ Monday.', opts: ['in', 'on', 'at'], a: 1, why: 'Jour → on.' },
    { q: 'I was born ___ 1998.', opts: ['in', 'on', 'at'], a: 0, why: 'Année → in.' },
    { q: 'The meeting is ___ 3 p.m.', opts: ['in', 'on', 'at'], a: 2, why: 'Heure → at.' },
    { q: 'It depends ___ the weather.', opts: ['of', 'on', 'from'], a: 1, why: 'depend on.' },
    { q: 'We arrived ___ London at midnight.', opts: ['to', 'in', 'at'], a: 1, why: 'arrive in (ville/pays).' },
    { q: 'She\'s married ___ a doctor.', opts: ['with', 'to', 'at'], a: 1, why: 'married to.' },
    { q: 'Let\'s discuss ___ the problem.', opts: ['about', '— (rien)', 'on'], a: 1, why: 'discuss + COD direct.' },
    { q: 'Thanks for ___ me. (aider)', a: 'helping', why: 'Préposition + -ing.' },
  ],
},
{
  title: 'Gérondif ou infinitif ?', sub: 'enjoy doing / want to do / stop doing vs stop to do',
  body: `
<h3>Verbes + -ing</h3>
<p><b>enjoy, avoid, finish, mind, suggest, consider, keep, miss, imagine, deny, risk, can't stand, feel like, look forward to, be used to</b> :</p>
<p><span class="s">I enjoy reading.</span> <span class="s">Would you mind opening the window?</span> <span class="s">I suggest taking a taxi.</span></p>
<h3>Verbes + to + infinitif</h3>
<p><b>want, decide, hope, plan, agree, refuse, promise, manage, afford, expect, seem, offer, learn, need, would like</b> :</p>
<p><span class="s">I decided to leave.</span> <span class="s">We can't afford to buy a house.</span> <span class="s">She refused to answer.</span></p>
<h3>Les deux, mais le sens change !</h3>
<table><tr><td><span class="s">I stopped smoking.</span></td><td>J’ai arrêté de fumer.</td></tr>
<tr><td><span class="s">I stopped to smoke.</span></td><td>Je me suis arrêté pour fumer.</td></tr>
<tr><td><span class="s">I remember meeting him.</span></td><td>Je me souviens de l’avoir rencontré (souvenir).</td></tr>
<tr><td><span class="s">Remember to call him.</span></td><td>Pense à l’appeler (à faire).</td></tr>
<tr><td><span class="s">I tried calling.</span></td><td>J’ai essayé d’appeler (pour voir si ça marche).</td></tr>
<tr><td><span class="s">I tried to open it.</span></td><td>J’ai essayé (effort) de l’ouvrir.</td></tr>
<tr><td><span class="s">I regret telling her.</span></td><td>Je regrette de lui avoir dit.</td></tr>
<tr><td><span class="s">We regret to inform you…</span></td><td>Nous avons le regret de vous informer…</td></tr></table>
<h3>Make / let + base verbale</h3>
<p><span class="s">She made me laugh.</span> <span class="s">Let me help you.</span> (sans to !)</p>
<div class="fr-box">🇫🇷 <b>-ing comme sujet</b> : « Nager est bon pour la santé » = <span class="s">Swimming is good for your health.</span> (pas « To swim is… », moins naturel).</div>`,
  quiz: [
    { q: 'I enjoy ___ to music.', opts: ['to listen', 'listening'], a: 1, why: 'enjoy + -ing.' },
    { q: 'She decided ___ abroad.', opts: ['to move', 'moving'], a: 0, why: 'decide + to.' },
    { q: '« J’ai arrêté de fumer » :', opts: ['I stopped to smoke.', 'I stopped smoking.'], a: 1, why: 'stop + -ing = arrêter de.' },
    { q: 'Remember ___ the door! (à faire)', opts: ['to lock', 'locking'], a: 0, why: 'remember to = penser à faire.' },
    { q: 'Would you mind ___ quiet?', a: 'being', why: 'mind + -ing.' },
    { q: 'My boss made me ___ late.', opts: ['to work', 'work', 'working'], a: 1, why: 'make + base verbale.' },
    { q: 'We can\'t afford ___ a new car.', opts: ['buying', 'to buy'], a: 1, why: 'afford + to.' },
  ],
},
{
  title: 'Relatives et connecteurs', sub: 'who, which, whose… et structurer un argument',
  body: `
<h3>Les pronoms relatifs</h3>
<table><tr><td><b>who</b></td><td>personnes</td><td><span class="s">The man who called you.</span></td></tr>
<tr><td><b>which</b></td><td>choses</td><td><span class="s">The car which I bought.</span></td></tr>
<tr><td><b>that</b></td><td>personnes ou choses (relative essentielle)</td><td><span class="s">The book that I read.</span></td></tr>
<tr><td><b>whose</b></td><td>dont (possession)</td><td><span class="s">The girl whose father is a pilot.</span></td></tr>
<tr><td><b>where / when</b></td><td>où (lieu / temps)</td><td><span class="s">The city where I was born.</span></td></tr></table>
<p>Quand le relatif est <b>complément</b>, on peut l’omettre : <span class="s">The film (that) we watched was great.</span></p>
<p>Avec des virgules (info en plus), jamais <b>that</b> : <span class="s">My brother, who lives in Rome, is a chef.</span></p>
<p><b>what</b> = ce que : <span class="s">What I need is a holiday.</span> (❌ <i>That I need</i>)</p>
<h3>Connecteurs pour argumenter</h3>
<table><tr><th>Idée</th><th>Connecteurs</th></tr>
<tr><td>Ajouter</td><td>moreover, furthermore, in addition, besides, what's more</td></tr>
<tr><td>Opposer</td><td>however, nevertheless, whereas, while, on the other hand, yet</td></tr>
<tr><td>Concéder</td><td>although, even though, despite / in spite of (+ nom/-ing)</td></tr>
<tr><td>Cause</td><td>because, since, as, due to, owing to</td></tr>
<tr><td>Conséquence</td><td>so, therefore, thus, as a result, consequently</td></tr>
<tr><td>Conclure</td><td>to sum up, all in all, in conclusion, overall</td></tr></table>
<div class="warn">⚠️ <b>despite</b> + nom / -ing (❌ despite of, ❌ despite it was) : <span class="s">Despite the rain…</span> / <span class="s">Although it was raining…</span></div>`,
  quiz: [
    { q: 'The woman ___ car was stolen called the police.', opts: ['who', 'whose', 'which'], a: 1, why: 'Possession → whose.' },
    { q: 'This is the hotel ___ we stayed.', opts: ['which', 'where', 'who'], a: 1, why: 'Lieu → where.' },
    { q: '___ I want is a coffee.', opts: ['That', 'What', 'Which'], a: 1, why: 'ce que = what.' },
    { q: 'My sister, ___ lives in Paris, is a nurse.', opts: ['that', 'who'], a: 1, why: 'Avec virgules : pas de that.' },
    { q: '___ the traffic, we arrived on time.', opts: ['Although', 'Despite', 'However'], a: 1, why: 'despite + nom.' },
    { q: 'It was expensive. ___, we bought it.', opts: ['Nevertheless', 'Because', 'Whereas'], a: 0, why: 'Opposition entre deux phrases → nevertheless / however.' },
  ],
},
{
  title: 'Les verbes irréguliers', sub: 'Comment les retenir : 4 familles de formes',
  body: `
<p>Un verbe irrégulier a un prétérit et un participe passé qui ne finissent pas par -ed. Il y en a environ 150 courants, mais ils suivent <b>des familles</b> :</p>
<table><tr><th>Famille</th><th>Exemples</th></tr>
<tr><td><b>A-A-A</b> : trois formes identiques</td><td><span class="s">cut, cut, cut</span> · <span class="s">put, put, put</span> · <span class="s">let, let, let</span> · <span class="s">hit, hit, hit</span></td></tr>
<tr><td><b>A-B-B</b> : prétérit = participe</td><td><span class="s">buy, bought, bought</span> · <span class="s">think, thought, thought</span> · <span class="s">sleep, slept, slept</span> · <span class="s">make, made, made</span></td></tr>
<tr><td><b>A-B-A</b> : le participe revient à la base</td><td><span class="s">come, came, come</span> · <span class="s">run, ran, run</span> · <span class="s">become, became, become</span></td></tr>
<tr><td><b>A-B-C</b> : trois formes différentes</td><td><span class="s">go, went, gone</span> · <span class="s">see, saw, seen</span> · <span class="s">take, took, taken</span> · <span class="s">write, wrote, written</span></td></tr></table>
<h3>Les sous-familles à sons qui riment</h3>
<ul><li><b>-ought / -aught</b> : bring–brought, buy–bought, fight–fought, think–thought, catch–caught, teach–taught</li>
<li><b>i – a – u</b> : begin–began–begun, drink–drank–drunk, sing–sang–sung, swim–swam–swum, ring–rang–rung</li>
<li><b>-ew / -own</b> : blow–blew–blown, grow–grew–grown, know–knew–known, throw–threw–thrown, fly–flew–flown</li>
<li><b>-ee- → -e-</b> : keep–kept, sleep–slept, feel–felt, meet–met, feed–fed</li>
<li><b>-d → -t</b> : send–sent, spend–spent, lend–lent, build–built, bend–bent</li>
<li><b>o-e / -en</b> : speak–spoke–spoken, break–broke–broken, choose–chose–chosen, freeze–froze–frozen, steal–stole–stolen</li></ul>
<h3>Comment conjuguer</h3>
<p><b>Prétérit</b> (affirmatif seulement) : <span class="s">I went.</span> Mais négation et question avec <b>did + base</b> : <span class="s">I didn't go.</span> <span class="s">Did you go?</span> (❌ <i>didn't went</i>).</p>
<p><b>Participe</b> : avec have (present perfect) et be (passif) : <span class="s">I have gone.</span> <span class="s">It was stolen.</span></p>
<div class="warn">⚠️ <b>been vs gone</b> : <span class="s">He has gone to Paris.</span> (il y est encore) / <span class="s">He has been to Paris.</span> (il y est allé et revenu).</div>
<p>👉 La liste complète triée par famille : <a href="#irr">📋 Verbes irréguliers</a>. Entraîne-toi : Tests → Verbes irréguliers.</p>`,
  quiz: [
    { q: 'Prétérit de « buy » :', a: 'bought', why: 'buy – bought – bought (A-B-B).' },
    { q: 'Participe de « write » :', a: 'written', why: 'write – wrote – written.' },
    { q: 'Prétérit de « drink » :', a: 'drank', why: 'drink – drank – drunk (i-a-u).' },
    { q: 'Participe de « come » :', a: 'come', why: 'come – came – come (A-B-A).' },
    { q: '« Je n’y suis pas allé » :', opts: ['I didn\'t went.', 'I didn\'t go.', 'I not went.'], a: 1, why: 'did + base verbale.' },
    { q: 'She\'s not here, she has ___ to the shop.', opts: ['been', 'gone'], a: 1, why: 'gone = parti (pas encore revenu).' },
    { q: 'Prétérit de « teach » :', a: 'taught', why: 'teach – taught – taught.' },
    { q: 'Participe de « choose » :', a: 'chosen', why: 'choose – chose – chosen.' },
  ],
},
{
  title: 'Expressions idiomatiques', sub: 'Parler comme un natif',
  body: `
<p>Les idioms ne se traduisent pas mot à mot. Beaucoup ont un équivalent français… avec d’autres images !</p>
<table><tr><th>Anglais</th><th>Équivalent français</th></tr>
<tr><td><span class="s">It's raining cats and dogs.</span></td><td>Il pleut des cordes.</td></tr>
<tr><td><span class="s">It costs an arm and a leg.</span></td><td>Ça coûte les yeux de la tête.</td></tr>
<tr><td><span class="s">When pigs fly.</span></td><td>Quand les poules auront des dents.</td></tr>
<tr><td><span class="s">Kill two birds with one stone.</span></td><td>Faire d’une pierre deux coups.</td></tr>
<tr><td><span class="s">Speak of the devil.</span></td><td>Quand on parle du loup.</td></tr>
<tr><td><span class="s">The last straw.</span></td><td>La goutte d’eau qui fait déborder le vase.</td></tr>
<tr><td><span class="s">Spill the beans.</span></td><td>Cracher le morceau / vendre la mèche.</td></tr>
<tr><td><span class="s">Beat around the bush.</span></td><td>Tourner autour du pot.</td></tr>
<tr><td><span class="s">A piece of cake.</span></td><td>Du gâteau, fastoche.</td></tr>
<tr><td><span class="s">Break a leg!</span></td><td>Merde ! (au théâtre)</td></tr>
<tr><td><span class="s">I'm under the weather.</span></td><td>Je suis patraque.</td></tr>
<tr><td><span class="s">Once in a blue moon.</span></td><td>Tous les trente-six du mois.</td></tr></table>
<h3>Au travail</h3>
<p><span class="s">Let's touch base.</span> (faisons un point) · <span class="s">Keep me posted.</span> (tiens-moi au courant) · <span class="s">Let's call it a day.</span> (on s’arrête là) · <span class="s">The ball is in your court.</span> · <span class="s">Think outside the box.</span> · <span class="s">Cut to the chase.</span> (va droit au but)</p>
<h3>Petits mots de conversation</h3>
<p><span class="s">Fair enough.</span> (OK, ça se tient) · <span class="s">No worries.</span> (pas de souci) · <span class="s">Fingers crossed!</span> (je croise les doigts) · <span class="s">I'm all ears.</span> (je suis tout ouïe) · <span class="s">It's up to you.</span> (c’est toi qui vois) · <span class="s">Tell me about it!</span> (à qui le dis-tu !)</p>
<p>👉 Plus de 60 expressions à apprendre dans Mots → thème « Expressions idiomatiques ».</p>`,
  quiz: [
    { q: '« Il pleut des cordes » :', opts: ['It\'s raining ropes.', 'It\'s raining cats and dogs.', 'It\'s raining hard cakes.'], a: 1, why: 'raining cats and dogs.' },
    { q: '« That exam was a piece of cake » =', opts: ['C’était très facile', 'C’était délicieux', 'C’était un désastre'], a: 0, why: 'a piece of cake = très facile.' },
    { q: '« Quand on parle du loup » :', opts: ['Speak of the wolf.', 'Speak of the devil.', 'Talk about the dog.'], a: 1, why: 'Speak of the devil!' },
    { q: '« I\'m feeling under the weather » =', opts: ['Je suis patraque', 'J’ai froid', 'Je suis mouillé'], a: 0, why: 'under the weather = pas en forme.' },
    { q: '« Faire d’une pierre deux coups » :', a: 'kill two birds with one stone', why: 'kill two birds with one stone.' },
    { q: '« Tell me about it! » =', opts: ['Raconte-moi !', 'À qui le dis-tu !', 'Explique-moi.'], a: 1, why: 'Expression d’accord ironique.' },
  ],
},
{
  title: 'Faux amis français–anglais', sub: 'Les mots qui trahissent les francophones',
  body: `
<table><tr><th>Anglais</th><th>Veut dire</th><th>Le mot français se dit…</th></tr>
<tr><td><span class="s">actually</span></td><td>en fait</td><td>actuellement = currently</td></tr>
<tr><td><span class="s">eventually</span></td><td>finalement</td><td>éventuellement = possibly</td></tr>
<tr><td><span class="s">library</span></td><td>bibliothèque</td><td>librairie = bookshop</td></tr>
<tr><td><span class="s">sensible</span></td><td>raisonnable</td><td>sensible = sensitive</td></tr>
<tr><td><span class="s">attend</span></td><td>assister à</td><td>attendre = wait</td></tr>
<tr><td><span class="s">journey</span></td><td>voyage, trajet</td><td>journée = day</td></tr>
<tr><td><span class="s">lecture</span></td><td>cours magistral</td><td>lecture = reading</td></tr>
<tr><td><span class="s">pretend</span></td><td>faire semblant</td><td>prétendre = claim</td></tr>
<tr><td><span class="s">resume</span></td><td>reprendre</td><td>résumer = sum up</td></tr>
<tr><td><span class="s">deception</span></td><td>tromperie</td><td>déception = disappointment</td></tr>
<tr><td><span class="s">chance</span></td><td>possibilité, occasion</td><td>chance (bonne) = luck</td></tr>
<tr><td><span class="s">coin</span></td><td>pièce de monnaie</td><td>coin = corner</td></tr>
<tr><td><span class="s">delay</span></td><td>retard</td><td>délai = deadline / time limit</td></tr>
<tr><td><span class="s">evidence</span></td><td>preuve(s)</td><td>évidence = obviousness</td></tr>
<tr><td><span class="s">large</span></td><td>grand</td><td>large = wide</td></tr>
<tr><td><span class="s">stranger</span></td><td>inconnu</td><td>étranger = foreigner</td></tr>
<tr><td><span class="s">rude</span></td><td>impoli</td><td>rude = tough, harsh</td></tr>
<tr><td><span class="s">achieve</span></td><td>atteindre, réussir</td><td>achever = finish</td></tr>
<tr><td><span class="s">assist</span></td><td>aider</td><td>assister à = attend</td></tr>
<tr><td><span class="s">control</span></td><td>maîtriser, diriger</td><td>contrôler (vérifier) = check</td></tr>
<tr><td><span class="s">relatives</span></td><td>la famille</td><td>relations = connections</td></tr>
<tr><td><span class="s">sympathetic</span></td><td>compatissant</td><td>sympathique = nice, friendly</td></tr>
<tr><td><span class="s">abuse</span></td><td>maltraitance, insultes</td><td>abuser (exagérer) = go too far</td></tr>
<tr><td><span class="s">formation</span></td><td>formation (géologique, militaire)</td><td>formation (pro) = training</td></tr>
<tr><td><span class="s">ignore</span></td><td>ignorer (exprès)</td><td>ignorer (ne pas savoir) = not know</td></tr>
<tr><td><span class="s">engaged</span></td><td>fiancé ; occupé (téléphone)</td><td>engagé = committed</td></tr></table>
<div class="fr-box">🇫🇷 Phrase piège : <span class="s">Actually, I eventually attended the lecture in the library.</span> = En fait, j’ai finalement assisté au cours à la bibliothèque. (Et pas « actuellement, j’ai éventuellement attendu la lecture dans la librairie » 😄)</div>`,
  quiz: [
    { q: '« Actually » veut dire…', opts: ['actuellement', 'en fait', 'activement'], a: 1, why: 'actually = en fait. Actuellement = currently.' },
    { q: '« Éventuellement » se dit…', opts: ['eventually', 'possibly', 'finally'], a: 1, why: 'eventually = finalement.' },
    { q: 'On emprunte des livres dans une…', opts: ['library', 'bookshop'], a: 0, why: 'library = bibliothèque.' },
    { q: '« He\'s very sensible » =', opts: ['Il est très sensible', 'Il est très raisonnable'], a: 1, why: 'sensible = raisonnable ; sensible = sensitive.' },
    { q: '« J’ai assisté à la réunion » :', opts: ['I assisted the meeting.', 'I attended the meeting.', 'I waited the meeting.'], a: 1, why: 'attend = assister à.' },
    { q: '« Il fait semblant de dormir » : He ___ to be asleep.', a: 'pretends', why: 'pretend = faire semblant.' },
    { q: '« Quelle déception ! » :', opts: ['What a deception!', 'What a disappointment!'], a: 1, why: 'deception = tromperie.' },
    { q: 'Un inconnu se dit…', a: 'stranger', alt: ['a stranger'], why: 'stranger = inconnu ; foreigner = étranger.' },
  ],
},
];
