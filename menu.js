// menu.js
const menuContainer = document.getElementById('menu-container');

menuContainer.innerHTML = `
  <ul>
    <li><a href="index.html">Accueil</a></li>
    <li class="menu-item" data-menu="portraits">
      <a href="#">Portraits</a>
      <ul class="submenu">
        <li><a href="portraits-ethan.html">Ethan</a></li>
        <li><a href="portraits-enzo.html">Enzo</a></li>
      </ul>
    </li>
    <li class="menu-item" data-menu="automobiles">
      <a href="#">Automobiles</a>
      <ul class="submenu">
        <li><a href="japancar.html">Japancar</a></li>
        <li><a href="divers-auto.html">Divers</a></li>
      </ul>
    </li>
    <li class="menu-item" data-menu="concerts">
      <a href="#">Concerts</a>
      <ul class="submenu">
        <li><a href="lajava.html">La Java</a></li>
      </ul>
    </li>
  </ul>
`;

// Gestion de l'ouverture/fermeture des sous-menus sur mobile
const menuItems = menuContainer.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  const link = item.querySelector('a');
  const submenu = item.querySelector('.submenu');

  let opened = false;

  link.addEventListener('click', e => {
    e.preventDefault();

    // Si le sous-menu est déjà ouvert, naviguer vers la page principale
    if (opened) {
      window.location.href = link.href;
      return;
    }

    // Fermer tous les sous-menus ouverts
    menuItems.forEach(i => {
      const sm = i.querySelector('.submenu');
      if (sm && sm !== submenu) sm.style.display = 'none';
      i.dataset.opened = false;
    });

    // Ouvrir le sous-menu actuel
    if (submenu) {
      submenu.style.display = 'block';
      opened = true;
      item.dataset.opened = true;
    }
  });
});
