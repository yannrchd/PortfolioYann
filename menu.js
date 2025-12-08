document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <div class="menu-wrapper">
      <span class="menu-toggle">⋯</span>

      <div class="menu">

        <div class="menu-item" data-target="portraits">
          <a class="menu-link" href="portraits.html">Portraits</a>
        </div>
        <div class="submenu" id="portraits">
          <a href="ethan.html">Ethan</a>
          <a href="enzo.html">Enzo</a>
        </div>

        <div class="menu-item" data-target="auto">
          <a class="menu-link" href="automobile.html">Automobile</a>
        </div>
        <div class="submenu" id="auto">
          <a href="japancar.html">Japancar</a>
          <a href="divers.html">Divers</a>
        </div>

        <div class="menu-item" data-target="concert">
          <a class="menu-link" href="concerts.html">Concerts</a>
        </div>
        <div class="submenu" id="concert">
          <a href="lajava.html">La Java</a>
        </div>

      </div>
    </div>
  `;

  const container = document.getElementById("menu-container");
  container.innerHTML = menuHTML;

  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // Gestion des catégories cliquables (double fonction)
  document.querySelectorAll(".menu-item").forEach(item => {
    let opened = false; // mémorise si on a déjà ouvert le sous-menu

    item.addEventListener("click", e => {
      e.preventDefault();
      const target = item.getAttribute("data-target");
      const submenu = document.getElementById(target);

      if (!opened) {
        // 1er clic : ouvrir le sous-menu
        submenu.style.display = submenu.style.display === "flex" ? "none" : "flex";
        opened = true;
      } else {
        // 2ème clic : aller à la page
        window.location.href = item.querySelector("a").href;
      }
    });
  });
});
