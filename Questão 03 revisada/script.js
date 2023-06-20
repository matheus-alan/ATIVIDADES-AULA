const form = document.getElementById('formulario');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;

  if (nome && sobrenome) {
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';
    mensagem.innerHTML = `Bem-vindo(a), ${nome} ${sobrenome}!`;
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
