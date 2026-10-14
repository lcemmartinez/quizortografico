const questions = [
  {lesson:"Lección 3 · B y V", type:"radio", q:"Tu adiós me dejó un ____ pesar.", opts:["acervo","acerbo","aservo"], a:"acerbo", why:"Acerbo significa áspero, cruel o riguroso; en este contexto se refiere a un pesar cruel."},
  {lesson:"Lección 3 · B y V", type:"select", q:"La biblioteca Lafragua tiene un magnífico ____ colonial.", opts:["acerbo","acervo"], a:"acervo", why:"Acervo es un conjunto de bienes culturales o patrimoniales acumulados."},
  {lesson:"Lección 3 · B y V", type:"select", q:"El ____ de Koch es causante de la tuberculosis.", opts:["bacilo","vacilo","basilo"], a:"bacilo", why:"Bacilo es la bacteria con forma cilíndrica; vacilo proviene del verbo vacilar."},
  {lesson:"Lección 3 · B y V", type:"radio", q:"El ____ recorrió el castillo junto con los demás nobles.", opts:["varón","barón"], a:"barón", why:"Barón es un título nobiliario; varón hace referencia al sexo masculino."},
  {lesson:"Lección 3 · B y V", type:"select", q:"Hay que ____ las ideas en fundamentos sólidos.", opts:["basar","bazar","vasar"], a:"basar", why:"Basar significa fundar, apoyar o establecer principios."},
  {lesson:"Lección 3 · B y V", type:"select", q:"El gran ____ poblano falleció. (poeta o adivino)", opts:["bate","vate","bateh"], a:"vate", why:"Vate es un sustantivo poético que significa poeta o adivino."},
  {lesson:"Lección 3 · B y V", type:"radio", q:"Cerca del caserío había una ____ llanura.", opts:["basta","vasta","baca"], a:"vasta", why:"Vasta significa extensa o amplia; basta es del verbo bastar o tosca."},
  {lesson:"Lección 3 · B y V", type:"select", q:"Era pobre y casi no poseía ____.", opts:["bienes","vienes"], a:"bienes", why:"Bienes se refiere a propiedades, caudal o riqueza; vienes es del verbo venir."},
  {lesson:"Lección 3 · B y V", type:"select", q:"Yo com____ los colores del piso con las paredes.", opts:["combino","convino"], a:"combino", why:"Combino proviene de combinar; convino corresponde al verbo convenir."},
  {lesson:"Lección 3 · B y V", type:"radio", q:"Debes gra____ todo en tu disco duro.", opts:["gravar","grabar"], a:"grabar", why:"Grabar implica registrar datos, imágenes o sonidos; gravar es imponer un impuesto."},
  {lesson:"Lección 4 · C", type:"select", q:"Selecciona la forma correcta: Es un magnífico a_tor.", opts:["actor","agtor","aptor"], a:"actor", why:"Se escribe C antes de la consonante T en este grupo léxico."},
  {lesson:"Lección 4 · C", type:"select", q:"Ella sólo se quería embelle__.", opts:["embellecer","embellezer","embelleser"], a:"embellecer", why:"Los verbos terminados en -ecer se escriben con C."},
  {lesson:"Lección 4 · C", type:"radio", q:"El que no oye con__ejo no llega a viejo.", opts:["concejo","consejo"], a:"consejo", why:"Consejo es una recomendación o dictamen; concejo es el ayuntamiento o municipio."},
  {lesson:"Lección 4 · C", type:"select", q:"Premiaron su buena ac__ión.", opts:["acción","aksión","acsión"], a:"acción", why:"Las palabras con la terminación -acción llevan C o doble C según la familia léxica."},
  {lesson:"Lección 5 · S", type:"select", q:"Era un hermoso periquito canadien__.", opts:["canadiense","canadience"], a:"canadiense", why:"Los gentilicios terminados en -ense se escriben con S."},
  {lesson:"Lección 5 · S", type:"radio", q:"Se probó un vestido feí__imo.", opts:["feísimo","feízimo"], a:"feísimo", why:"Los adjetivos superlativos en -ísimo / -ísima se escriben con S."},
  {lesson:"Lección 5 · S", type:"select", q:"Perdió todo el romanti____.", opts:["romanticismo","romanticizmo","romanticisno"], a:"romanticismo", why:"Los sustantivos o adjetivos terminados en -ismo se escriben con S."},
  {lesson:"Lección 6 · Z", type:"select", q:"Se le hizo tarde para la cobran__a.", opts:["cobranza","cobransa"], a:"cobranza", why:"Los sustantivos derivados terminados en -anza se escriben con Z."},
  {lesson:"Lección 6 · Z", type:"radio", q:"Amarró los cordones del __apato.", opts:["sapato","zapato"], a:"zapato", why:"En español estándar la palabra zapato se escribe con Z inicial."},
  {lesson:"Lección 6 · Z", type:"select", q:"Había un pasadi__o secreto.", opts:["pasadizo","pasadiso"], a:"pasadizo", why:"La terminación -izo / -iza en adjetivos y sustantivos se escribe con Z."},
  {lesson:"Lección 7 · C y S", type:"radio", q:"Caminó junto al cau__e del río.", opts:["cause","cauce"], a:"cauce", why:"Cauce es el lecho por donde corre el agua; cause es una forma del verbo causar."},
  {lesson:"Lección 7 · C y S", type:"select", q:"No llegó nadie a la __esión del miércoles.", opts:["cesión","sesión"], a:"sesión", why:"Sesión es una junta o reunión; cesión es el acto de ceder un derecho o bien."},
  {lesson:"Lección 8 · S y Z", type:"select", q:"Compré carne para a__ar.", opts:["asar","azar"], a:"asar", why:"Asar se refiere a cocinar alimentos al fuego; azar significa casualidad o suerte."},
  {lesson:"Lección 8 · S y Z", type:"radio", q:"Ponte a lavar esa lo__a.", opts:["losa","loza"], a:"loza", why:"Loza se refiere al conjunto de vajilla de barro o cerámica; losa es una piedra llana."},
  {lesson:"Lección 8 · S y Z", type:"select", q:"Pon nuevamente café en mi ta__a.", opts:["tasa","taza"], a:"taza", why:"Taza es el recipiente usado para tomar bebidas; tasa es un indicador financiero o tributo."},
  {lesson:"Lección 9 · G", type:"select", q:"El cole__io abrió sus puertas.", opts:["colegio","colejio"], a:"colegio", why:"Las palabras con la terminación -gio / -gia se escriben con G."},
  {lesson:"Lección 9 · G", type:"radio", q:"No te vayas a conta__iar de influenza.", opts:["contagiar","contajiar"], a:"contagiar", why:"Los verbos terminados en -giar se escriben con G."},
  {lesson:"Lección 9 · G", type:"select", q:"El mobiliario tenía cien años de anti__üedad.", opts:["antigüedad","antiguedad","antijüedad"], a:"antigüedad", why:"La U requiere diéresis (ü) para sonar en las sílabas güe y güi."},
  {lesson:"Lección 10 · J", type:"select", q:"Es sencillo descifrar el mensa__e.", opts:["mensaje","mensage"], a:"mensaje", why:"Las palabras con la terminación -aje se escriben con J."},
  {lesson:"Lección 10 · J", type:"radio", q:"Su maquilla__e era perfecto.", opts:["maquillaje","maquillage"], a:"maquillaje", why:"Las palabras terminadas en -aje o -eje se escriben con J."}
];

function render() {
  const root = document.getElementById('quiz');
  root.innerHTML = '';
  questions.forEach((item, i) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = 'qcard' + i;

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.textContent = `Pregunta ${i + 1} de ${questions.length} · ${item.lesson}`;
    card.append(meta);

    const q = document.createElement('div');
    q.className = 'question';
    q.textContent = item.q;
    card.append(q);

    if (item.type === 'radio') {
      const box = document.createElement('div');
      box.className = 'options';
      item.opts.forEach(opt => {
        const label = document.createElement('label');
        label.className = 'option';
        const inp = document.createElement('input');
        inp.type = 'radio';
        inp.name = 'q' + i;
        inp.value = opt;
        inp.addEventListener('change', updateProgress);
        const span = document.createElement('span');
        span.textContent = opt;
        label.append(inp, span);
        box.append(label);
      });
      card.append(box);
    } else if (item.type === 'select') {
      const sel = document.createElement('select');
      sel.id = 'ans' + i;
      sel.innerHTML = '<option value="">Selecciona una respuesta…</option>';
      [...new Set(item.opts)].forEach(opt => {
        const o = document.createElement('option');
        o.value = opt;
        o.textContent = opt;
        sel.append(o);
      });
      sel.addEventListener('change', updateProgress);
      card.append(sel);
    }

    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.id = 'fb' + i;
    card.append(feedback);

    root.append(card);
  });
  updateProgress();
}

function normalize(s) {
  return s.toLocaleLowerCase('es-MX').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
}

function getAnswer(i) {
  const item = questions[i];
  if (item.type === 'radio') {
    const el = document.querySelector(`input[name="q${i}"]:checked`);
    return el ? el.value : '';
  }
  return document.getElementById('ans' + i).value;
}

function updateProgress() {
  let answered = 0;
  questions.forEach((_, i) => {
    if (getAnswer(i).trim()) answered++;
  });
  document.getElementById('bar').style.width = (answered / questions.length * 100) + '%';
}

function gradeQuiz() {
  const userNameInput = document.getElementById('userName').value.trim();
  const userName = userNameInput !== '' ? userNameInput : 'Usuario';

  let correct = 0;
  let incorrect = 0;

  questions.forEach((item, i) => {
    const given = getAnswer(i);
    const isCorrect = normalize(given) === normalize(item.a);
    if (isCorrect) {
      correct++;
    } else {
      incorrect++;
    }

    const fb = document.getElementById('fb' + i);
    fb.className = 'feedback ' + (isCorrect ? 'good' : 'bad');
    fb.textContent = (isCorrect ? '✓ Correcto. ' : '✗ Incorrecto. ') + `Respuesta correcta: ${item.a}. ${item.why}`;
  });

  const res = document.getElementById('results');
  res.style.display = 'block';

  // Mensaje personalizado con aciertos y fallas
  document.getElementById('score').textContent = `${userName}, tuviste ${correct} aciertos y ${incorrect} fallas. ¡Échale ganas!`;
  
  document.getElementById('message').textContent = correct === questions.length 
    ? '¡Excelente! Respondiste todo perfectamente.' 
    : correct >= questions.length * .7 
      ? '¡Buen trabajo! Revisa los detalles que fallaste y vuelve a intentarlo.' 
      : 'Sigue practicando. Lee las explicaciones para mejorar en tu siguiente intento.';

  res.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetQuiz() {
  render();
  document.getElementById('userName').value = '';
  document.getElementById('results').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar el quiz
render();