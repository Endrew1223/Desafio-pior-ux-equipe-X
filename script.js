function proximaTela(numero) {

    document.querySelectorAll(".tela").forEach(tela => {
        tela.classList.remove("ativa");
    });

    document.getElementById("tela" + numero).classList.add("ativa");
}


function cancelar() {

    alert("Você escolheu CANCELAR.");

    alert("Mentira.");

    alert("Agora você vai continuar.");

    proximaTela(2);
}


function validar() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    if (nome === "" || email === "" || senha === "") {

        mensagem.innerText =
            "❌ Parabéns! Seus dados estão corretos. Mentira, preencha tudo.";

        mensagem.style.color = "red";

        return;
    }

    if (senha.length < 8) {

        mensagem.innerText =
            "❌ Senha perfeita! Porém está errada.";

        mensagem.style.color = "red";

        return;
    }

    mensagem.innerText =
        "⚠️ Erro desconhecido: sua senha aparentemente está boa demais.";

    mensagem.style.color = "orange";

    setTimeout(() => {
        proximaTela(3);
    }, 1500);
}


function termos() {

    alert(
        "TERMOS DE USO:\n\n" +
        "1. Você concorda com tudo.\n" +
        "2. Não pode reclamar.\n" +
        "3. Se chegou até aqui, já perdeu.\n" +
        "4. Obrigado por não ler."
    );

}


function confirmar() {

    const checkbox = document.getElementById("termos");

    if (!checkbox.checked) {

        alert(
            "VOCÊ NÃO LEU OS TERMOS!\n\n" +
            "Isso era exatamente o que esperávamos."
        );

        return;
    }

    alert("Confirmando...");

    setTimeout(() => {

        document.querySelectorAll(".tela").forEach(tela => {
            tela.classList.remove("ativa");
        });

        document.getElementById("final").classList.add("ativa");

    }, 1000);
}


function sair() {

    alert("Tem certeza que deseja sair?");

    alert("Pensando...");

    alert("Não.");

    alert("Obrigado por participar 😎");

}