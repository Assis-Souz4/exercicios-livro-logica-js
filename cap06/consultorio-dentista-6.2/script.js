const form = document.querySelector("form");
const respNome = document.querySelector("span");
const respLista = document.querySelector("pre");

const pacientes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.inPaciente.value;
  pacientes.push(nome);
  console.log(pacientes);
  let lista = "";

  for (let i = 0; i < pacientes.length; i++) {
    lista += `${i + 1} ${pacientes[i]}\n`;
  }
  respLista.innerText = lista;
  form.inPaciente = "";
  form.inPaciente.focus();
});

form.urgencia.addEventListener("click", () => {
  if (!form.checkValidity()) {
    alert("Urgencia: Nome do paciente!");
    form.inPaciente.focus();
    return;
  }
  const nome = form.inPaciente.value;
  pacientes.unshift(nome);
  let lista = "";

  pacientes.forEach(
    (paciente, index) => (lista += `${index + 1}.${paciente}\n`)
  );
  respLista.innerText = lista;
  form.inPaciente.value = "";
  form.inPaciente.focus();
});

form.atender.addEventListener("click", () => {
  if (pacientes.length == 0) {
    alert("Não há pacientes");
    form.inPaciente.focus();
    return;
  }
  const atender = pacientes.shift();
  respNome.innerText = atender;
  let lista = "";
  pacientes.forEach(
    (paciente, index) => (lista += `${index + 1}. ${paciente}\n`)
  );
  respLista.innerText = lista;
});
