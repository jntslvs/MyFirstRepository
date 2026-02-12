// Adicionar imagem de fundo ao #inicio
const inicio = document.getElementById('inicio');
inicio.style.backgroundImage = 'url("teclado.jpg")';

// Adicionar evento de clique ao botão "Agende sua Aula Experimental Grátis!"
const botao = document.querySelector('button');
botao.addEventListener('click', () => {
 alert('Aula experimental agendada com sucesso!');
});

// Adicionar evento de envio ao formulário de contato
const formulario = document.getElementById('contato');
formulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const nome = document.getElementById('nome').value;
 const email = document.getElementById('email').value;
 const mensagem = document.getElementById('mensagem').value;
 alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
});