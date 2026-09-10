const btnAvancar = document.getElementById('btnAvancar');
const inputSenha = document.getElementById('senha');
const mensagem = document.getElementById('mensagem');

// Pioria: Apaga o texto se o usuário errar a senha ao clicar fora
inputSenha.addEventListener('blur', () => {
  if (!inputSenha.value.includes('😀')) {
    alert('ERRO: Você precisa incluir o emoji 😀 na senha!');
    inputSenha.value = ''; // Apaga tudo
  }
});

btnAvancar.addEventListener('click', () => {
  const val = inputSenha.value;
  // Regra de vitória: Contém emoji e número par
  if (val.includes('😀') && (val.match(/\d/g) || []).some(n => n % 2 === 0)) {
    document.body.innerHTML = '<h1>Parabéns! Você venceu o pior formulário da história! 🎉</h1>';
  } else {
    mensagem.className = 'sucesso-falso';
    mensagem.textContent = 'Sucesso! Algo deu errado. Tente novamente.';
    mensagem.classList.remove('hidden');
  }
});