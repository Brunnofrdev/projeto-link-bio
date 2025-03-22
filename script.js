document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const img = document.querySelector(".profile img");
  
    // Verificar se já está no modo claro (light)
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/branco.png");
    } else {
      img.setAttribute("src", "./assets/preto.png");
    }
  });
  
  function toggleModel() {
    const html = document.documentElement;
    html.classList.toggle("light");
  
    const img = document.querySelector(".profile img");
  
    // Trocar a imagem ao alternar entre os modos
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/branco.png");
    } else {
      img.setAttribute("src", "./assets/preto.png");
    }
  }
  
