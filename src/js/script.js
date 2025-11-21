// Seletores
const fotoPerfil = document.getElementById("foto-perfil");
const modal = document.getElementById("modal");
const upload = document.getElementById("upload");
const preview = document.getElementById("preview");

// Abrir o modal ao clicar na foto de perfil
fotoPerfil.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Mostrar a imagem selecionada no preview
upload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Fechar o modal
function fecharModal() {
  modal.style.display = "none";
  upload.value = "";
  preview.src = "";
}

// Salvar a nova foto no perfil
function salvarFoto() {
  if (preview !== "" ) {
    fotoPerfil.src = preview.src;
    fecharModal();
  }else {
    alert("Por favor, selecione uma imagem.");
  }
}
function abrirAnabele(){
    const botao = document.getElementById('anabele');

  // Adiciona o evento de clique
  botao.addEventListener('click', function () {
    // Abre nova aba com a URL desejada
    window.open('/src/pages/filmes/anabele/anabele.html', '_blank');
  });
}

