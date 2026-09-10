document.getElementById('btnAvancar').addEventListener('click', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const mensagem = document.getElementById('mensagem');

  // Validação simples: apenas verifica se os campos foram preenchidos
  if (nome === '' || senha === '') {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  // Exibe a mensagem de feedback
  mensagem.className = 'sucesso-falso';
  mensagem.innerText = 'Cadastro concluído com sucesso! (Ou não...)';
});