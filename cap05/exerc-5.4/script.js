//selecionando body
const newBody = document.querySelector('body');
//criando section
const newSection = document.createElement('section');
//add section
newBody.appendChild(newSection);
//selecionando o script
const newScript = document.querySelector('script');
console.log('newScript');
//add newSection no topo do body
newBody.insertBefore(newSection, newScript);
//criando cor de fundo
newSection.style.backgroundColor = 'lightgrey';
//
newSection.style.width
