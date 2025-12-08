// menu.js
const menuContainer = document.getElementById('menu-container');

menuContainer.innerHTML = `
  <ul>
    <li><a href="index.html">Accueil</a></li>
    <li class="menu-item" data-menu="portraits">
      <a href="portraits.html">Portraits</a>
      <ul class="submenu">
        <li><a href="portraits-ethan.html">Ethan</a></li>
        <li><a href="portraits-enzo.html">Enzo</a></li>
      </ul>
    </li>
    <li class="menu-item" data-menu="automobiles">
      <a href="automobiles.html">Automobiles</a>
      <ul class="submenu">
        <li><a href="japancar.html">Japancar</a></li>
        <li><a href="divers-auto.html">Divers</a></li>
      </ul>
    </li>
    <li class="menu-item" data-menu="concerts">
      <a href="concerts.html">Concerts</a>
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
    // Si le sous-menu existe et que c'est le premier clic, on ouvre juste le sous-menu
    if (submenu && !opened) {
      e.preventDefault();

      // Fermer tous les autres sous-menus
      menuItems.forEach(i => {
        const sm = i.querySelector('.submenu');
        if (sm && sm !== submenu) sm.style.display = 'none';
        i.dataset.opened = false;
      });

      submenu.style.display = 'block';
      opened = true;
      item.dataset.opened = true;
    } 
    // Sinon, naviguer normalement vers la page
  });
});
