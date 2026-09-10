document.addEventListener('DOMContentLoaded', function () {
  const btnAvancar = document.getElementById('btnAvancar');
  const btnCancelar = document.getElementById('btnCancelar');
  const mensagem = document.getElementById('mensagem');

  // Lógica do botão escondido (Avançar Real)
  if (btnAvancar) {
    btnAvancar.addEventListener('click', function (e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const senha = document.getElementById('senha').value;

      // Validação básica de preenchimento
      if (!nome || !senha) {
        alert('Preenche o negócio direito, mano! Ficou cego?');
        return;
      }

      // Exibe mensagem provocativa na tela
      mensagem.textContent = 'Achou mesmo que ia cadastrar? Caiu no papo de trouxa! 🤣';
      mensagem.classList.remove('hidden');
      mensagem.style.display = 'block';
    });
  }

  // Lógica do botão principal (Sabotagem)
  if (btnCancelar) {
    btnCancelar.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Limpa os dados do formulário
      document.getElementById('nome').value = '';
      document.getElementById('senha').value = '';
      
      // Exibe o alerta debochado
      alert('Apertou o botão verde achando que ia salvar, né? Perdeu tudo, vacilão! 🤡');
    });
  }
});