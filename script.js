document.addEventListener('DOMContentLoaded', function () {
  const btnAvancar = document.getElementById('btnAvancar');
  const btnCancelar = document.getElementById('btnCancelar');
  const mensagem = document.getElementById('mensagem');

  // Ação do botão "Avançar" escondido lá embaixo
  btnAvancar.addEventListener('click', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;

    if (!nome || !senha) {
      alert('Preenche o negócio direito, mano! Ficou cego?');
      return;
    }

    // Feedback deboche puro
    mensagem.textContent = 'Achou mesmo que ia cadastrar? Caiu no papo de trouxa! 🤣';
    mensagem.classList.remove('hidden');
    mensagem.style.display = 'block';
  });

  // Ação do botão verde chamativo "CANCELAR TUDO"
  if (btnCancelar) {
    btnCancelar.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('nome').value = '';
      document.getElementById('senha').value = '';
      alert('Apertou o botão verde achando que ia salvar, né? Perdeu tudo, vacilão! 🤡');
    });
  }
});