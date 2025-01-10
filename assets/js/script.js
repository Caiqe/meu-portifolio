const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let contImagem = 0;
const imagem = document.querySelector("#foto_criador");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = document.querySelector("#name");
  const txtNome = document.querySelector("#txtNome");

  if (campoNome.value.length < 3) {
    txtNome.innerHTML = "O Nome deve ter no minimo 3 caracteres.";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = document.querySelector("#email");
  const txtEmail = document.querySelector("#txtEmail");

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um E-mail válido.";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoSubject = document.querySelector("#subject");
  const txtSubject = document.querySelector("#txtSubject");

  if (campoSubject.value.length < 5) {
    txtSubject.innerHTML = "O Assunto deve ter no minimo 5 caracteres.";
    campoSubject.focus();
    return;
  } else {
    txtSubject.innerHTML = "";
  }

  const campoMessage = document.querySelector("#message");

  window.alert("Formulário Enviado com Sucesso!");

  campoNome.value = "";
  campoEmail.value = "";
  campoSubject.value = "";
  campoMessage.value = "";
});

function alteraImagem() {
  if (contImagem == 1) {
    imagem.innerHTML =
      '<img class="img_profile" src="./assets/img/caiqe_amarelo.svg" alt="Foto do Criador do conteudo" style="cursor: pointer" onclick="alteraImagem()"/>';
    contImagem = 0;
  } else {
    imagem.innerHTML =
      '<img class="img_profile" src="./assets/img/caiqe_azul.svg" alt="Foto do Criador do conteudo" style="cursor: pointer" onclick="alteraImagem()"/>';
    contImagem = 1;
  }
}
