
function iniciar() {
  document.getElementById('pantalla-inicial').style.display = 'none';
  document.getElementById('menu-juegos').style.display = 'block';
  document.getElementById('retroalimentacion').innerHTML = '';
}

function mostrarJuego(juego) {
  if (juego === 'juego1') {
    juego1();
  } else if (juego === 'juego2') {
    juego2();
  } else if (juego === 'juego3') {
    juego3();
  }
  document.getElementById('retroalimentacion').innerHTML = '';
}

// ---------------- Juego 1 -------------------
function juego1() {
  const contenedor = document.getElementById('contenedor-juego');
  contenedor.innerHTML = `
    <h2>Juego 1: Guardianes de la Danza</h2>
    <p>Arrastra cada objeto o prenda a la figura correcta: Mama Danza o Wawa Danza.</p>
    <div style="margin-top:20px;">
      <div class="draggable" draggable="true" ondragstart="drag(event)">Cushma</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Chumpi</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Sombrero blanco</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Pinkullu</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Bombo</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Huactana</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Pollerín</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Alfanje</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Cascabeles</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Chanta</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Bandas</div>
    </div>

    <h3>Mama Danza</h3>
    <div class="dropzone" ondrop="drop(event, 'mama')" ondragover="allowDrop(event)"></div>

    <h3>Wawa Danza</h3>
    <div class="dropzone" ondrop="drop(event, 'wawa')" ondragover="allowDrop(event)"></div>

    <br>
    <button onclick="verificarJuego1()">Verificar</button>
    <button onclick="juego1()">Reintentar</button>
  `;
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.innerText);
}

let mamaItems = ["Cushma","Chumpi","Sombrero blanco","Pinkullu","Bombo","Huactana"];
let wawaItems = ["Chumpi","Pollerín","Alfanje","Cascabeles","Chanta","Bandas"];

function drop(ev, zona) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const elementos = document.querySelectorAll('.draggable');
  for (let el of elementos) {
    if (el.innerText === data) {
      ev.target.appendChild(el);
      break;
    }
  }
}

function verificarJuego1() {
  let mamaZone = document.querySelectorAll(".dropzone")[0];
  let wawaZone = document.querySelectorAll(".dropzone")[1];

  let mamaWords = Array.from(mamaZone.children).map(e => e.innerText);
  let wawaWords = Array.from(wawaZone.children).map(e => e.innerText);

  let mamaCorrect = mamaWords.every(w => mamaItems.includes(w)) && mamaWords.length === mamaItems.length;
  let wawaCorrect = wawaWords.every(w => wawaItems.includes(w)) && wawaWords.length === wawaItems.length;

  if (mamaCorrect && wawaCorrect) {
    document.getElementById('retroalimentacion').innerText =
      "¡Bien hecho! Estás preservando nuestra tradición.";
  } else {
    document.getElementById('retroalimentacion').innerText =
      "Intenta otra vez. Observa bien sus vestimentas.";
  }
}

// ---------------- Juego 2 -------------------
let respuestasJuego2 = {
  1: "Inti",
  2: "Atuendo",
  3: "Alfanje",
  4: "Tauna",
  5: "Allpamama",
  6: "Mama Danza",
  7: "Pinkullu",
  8: "Bombo"
};

function juego2() {
  const contenedor = document.getElementById('contenedor-juego');

  contenedor.innerHTML = `
    <h2>Juego 2: Crónica de los Danzantes del Sol</h2>
    <p>Arrastra las palabras al lugar correcto en el texto.</p>
    <p>
      Cuando el <span class="dropzone" data-pos="1" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span> despertaba entre las montañas, los Wawa Danza ya estaban en la plaza.
      Ataban su <span class="dropzone" data-pos="2" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span>, recogían su <span class="dropzone" data-pos="3" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span> con símbolos ancestrales, y esperaban la señal del <span class="dropzone" data-pos="4" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span>.
      En ese momento, la <span class="dropzone" data-pos="5" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span> resonaba desde los cerros como un canto antiguo.
      El <span class="dropzone" data-pos="6" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span> elevaba la mirada al cielo y empezaba a soplar su <span class="dropzone" data-pos="7" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span>, mientras golpeaba su <span class="dropzone" data-pos="8" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span>.
      Era el inicio de un nuevo ciclo para la <span class="dropzone" data-pos="5" ondrop="dropTexto(event)" ondragover="allowDrop(event)"></span>, la gran dadora de vida.
    </p>

    <div style="margin-top: 20px;">
      <div class="draggable" draggable="true" ondragstart="drag(event)">Inti</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Atuendo</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Alfanje</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Tauna</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Allpamama</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Mama Danza</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Pinkullu</div>
      <div class="draggable" draggable="true" ondragstart="drag(event)">Bombo</div>
    </div>

    <br>
    <button onclick="verificarJuego2()">Verificar</button>
    <button onclick="juego2()">Reintentar</button>
  `;
}

function dropTexto(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const dropZone = ev.target;
  dropZone.innerHTML = '';
  const newElem = document.createElement("span");
  newElem.innerText = data;
  newElem.className = "inserted";
  dropZone.appendChild(newElem);
}

function verificarJuego2() {
  let correcto = true;
  document.querySelectorAll(".dropzone").forEach(zone => {
    const pos = zone.dataset.pos;
    const respuesta = respuestasJuego2[pos];
    const valorUsuario = zone.innerText.trim();
    if (valorUsuario !== respuesta) {
      correcto = false;
    }
  });

  document.getElementById('retroalimentacion').innerText = correcto
    ? "¡Sabiduría ancestral revive contigo!"
    : "Sigue buscando, las palabras tienen espíritu.";
}

// ---------------- Juego 3 -------------------
function juego3() {
  const contenedor = document.getElementById('contenedor-juego');

  contenedor.innerHTML = `
    <h2>Juego 3: Calendario Sagrado</h2>
    <p>Selecciona la traducción correcta de cada festividad:</p>
    <div>
      <p>Killa Raymi →
        <select id="killa">
          <option value="">Selecciona</option>
          <option value="Fiesta de la Luna">Fiesta de la Luna</option>
          <option value="Fiesta del Sol">Fiesta del Sol</option>
        </select>
      </p>
      <p>Kapak Raymi →
        <select id="kapak">
          <option value="">Selecciona</option>
          <option value="Fiesta del Poder">Fiesta del Poder</option>
          <option value="Fiesta del Florecimiento">Fiesta del Florecimiento</option>
        </select>
      </p>
      <p>Pawkar Raymi →
        <select id="pawkar">
          <option value="">Selecciona</option>
          <option value="Fiesta del Florecimiento">Fiesta del Florecimiento</option>
          <option value="Fiesta de la Luna">Fiesta de la Luna</option>
        </select>
      </p>
      <p>Inti Raymi →
        <select id="inti">
          <option value="">Selecciona</option>
          <option value="Fiesta del Sol">Fiesta del Sol</option>
          <option value="Fiesta del Poder">Fiesta del Poder</option>
        </select>
      </p>
    </div>
    <button onclick="verificarJuego3()">Verificar</button>
    <button onclick="juego3()">Reintentar</button>
  `;
}

function verificarJuego3() {
  const respuestas = {
    killa: "Fiesta de la Luna",
    kapak: "Fiesta del Poder",
    pawkar: "Fiesta del Florecimiento",
    inti: "Fiesta del Sol"
  };

  let correctas = true;

  Object.keys(respuestas).forEach(id => {
    const select = document.getElementById(id);
    const esCorrecta = select.value === respuestas[id];
    select.style.border = esCorrecta ? "2px solid green" : "2px solid red";
    if (!esCorrecta) correctas = false;
  });

  document.getElementById('retroalimentacion').innerText = correctas
    ? "¡Estás preservando el orden sagrado del tiempo!"
    : "La Pachamama espera. Intenta de nuevo.";
}
