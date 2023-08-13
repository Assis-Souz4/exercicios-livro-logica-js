const alerta = alert('Digite seu "Nome" ou "S" para sair:');
const alunos = [];

do {
  const nome = prompt("Digite seu Nome:");
  if (nome == "s") {
    // console.log("saiu");
    break;
  }

  const nota = Number(prompt("Digite sua Nota:"));
  alunos.push({ nome, nota });
  const lista = alunos.reduce((acc, aluno) => acc = aluno.nome, '');
  console.log(`Aluno(a): ${lista}, cadastrado(a)...\n`);
} while (true);
console.log("-".repeat(50));

const maiorNota = alunos.reduce((acc, aluno) => Math.max(acc, aluno.nota), 0);
console.log(`Maior nota: ${maiorNota}`);

if (maiorNota >= 7) {
  const alunosDestaques = alunos.filter((aluno) => aluno.nota >= 7 + "\n", "");
  console.log(`Alunos destaques com nota maior ou igual a 7`);
  for (const alunoDestaque of alunosDestaques) {
    console.log(`Aluno : ${alunoDestaque.nome}`);
  }
} else {
  console.log("Nenhum aluno tirou nota 7 ou maior");
}
