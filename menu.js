const menuContainer = document.getElementById('menu-container');

// Création du bouton toggle
const toggleButton = document.createElement('div');
toggleButton.id = 'menu-toggle';
toggleButton.textContent = '...';
menuContainer.appendChild(toggleButton);

// Menu principal
const menuData = [
  { name: 'Accueil', link: 'index.html' },
  {
    name: 'Portraits',
    link: 'portraits.html',
    submenu: [
      { name: 'Ethan', link: 'ethan.html' },
      { name: 'Enzo', link: 'enzo.html' }
    ]
  },
  {
    name: 'Automobiles',
    link: 'automobiles.html',
    submenu: [
      { name: 'Japancar', link: 'japancar.html' },
      { name: 'Divers', link: 'divers.html' }
    ]
  },
  {
    name: 'Concerts',
    link: 'concerts.html',
    submenu: [
      { name: 'La Java', link: 'lajava.html' }
    ]
  }
];

// Fonction pour créer les menus
function createMenu(data) {
  const ul = document.createElement('ul');

  data.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('menu-item');

    const span = document.createElement('span');
    span.textContent = item.name;
    li.appendChild(span);

    if (item.submenu) {
      const submenuUl = document.createElement('ul');
      submenuUl.classList.add('submenu');

      item.submenu.forEach(sub => {
        const subLi = document.createElement('li');
        subLi.textContent = sub.name;
        subLi.addEventListener('click', (e) => {
          e.stopPropagation();
          window.location.href = sub.link;
        });
        submenuUl.appendChild(subLi);
      });

      li.appendChild(submenuUl);

      // Premier clic = afficher sous-menu, second clic = rediriger
      li.addEventListener('click', (e) => {
        e.stopPropagation();

        const isOpen = li.classList.contains('open');
        if (isOpen) {
          window.location.href = item.link; // redirection si déjà ouvert
        } else {
          li.classList.add('open');

          // fermer les autres sous-menus
          document.querySelectorAll('.menu-item').forEach(other => {
            if (other !== li) {
              other.classList.remove('open');
            }
          });
        }
      });
    } else {
      li.addEventListener('click', () => {
        window.location.href = item.link;
      });
    }

    ul.appendChild(li);
  });

  return ul;
}

// Crée le menu et l’ajoute
const menuUl = createMenu(menuData);
menuContainer.appendChild(menuUl);

// Toggle menu principal
toggleButton.addEventListener('click', (e) => {
  e.stopPropagation();
  menuContainer.classList.toggle('open');
});

// Fermer le menu si clic ailleurs
document.addEventListener('click', () => {
  menuContainer.classList.remove('open');
  document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('open'));
});
