document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('badForm');
  const btnAvancar = document.getElementById('btnAvancar');
  const mensagem = document.getElementById('mensagem');

  btnAvancar.addEventListener('click', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !senha) {
      alert('Preencha os campos de nome e senha!');
      return;
    }

    // Exibe a mensagem sem travar no emoji
    mensagem.textContent = 'Cadastro concluído! (Ou não...)';
    mensagem.classList.remove('hidden');
    mensagem.classList.add('sucesso-falso');
  });
});