const menuContainer = document.getElementById('menu-container');

// Toggle button
const toggleButton = document.createElement('div');
toggleButton.id = 'menu-toggle';
toggleButton.textContent = '...';
menuContainer.appendChild(toggleButton);
console.log('Toggle button créé');

// Menu data
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
    link: 'automobile.html',
    submenu: [
      { name: 'Japancar', link: 'japancar.html' },
      { name: 'Divers', link: 'divers.html' }
    ]
  },
  {
    name: 'Concerts',
    link: 'concert.html',
    submenu: [
      { name: 'La Java', link: 'lajava.html' }
    ]
  }
];

// Création menu
function createMenu(data) {
  const ul = document.createElement('ul');
  console.log('Création du menu principal');

  data.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('menu-item');

    const span = document.createElement('span'); // texte séparé
    span.textContent = item.name;
    li.appendChild(span);

    li.dataset.link = item.link;

    if (item.submenu) {
      console.log('Item a un sous-menu:', item.name);

      const submenuUl = document.createElement('ul');
      submenuUl.classList.add('submenu');

      item.submenu.forEach(sub => {
        const subLi = document.createElement('li');
        subLi.textContent = sub.name;
        subLi.dataset.link = sub.link;

        subLi.addEventListener('click', e => {
          e.stopPropagation();
          console.log('Clic sur sous-menu:', sub.name);
          window.location.href = sub.link;
        });

        submenuUl.appendChild(subLi);
      });

      li.appendChild(submenuUl);

      // clic parent
      li.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = li.classList.contains('open');
        console.log('Clic sur parent:', item.name, 'isOpen:', isOpen);

        // fermer tous les autres
        document.querySelectorAll('.menu-item').forEach(mi => {
          if (mi !== li) mi.classList.remove('open');
        });

        // toggle le parent
        if (!isOpen) li.classList.add('open');
        else window.location.href = li.dataset.link;
      });
    } else {
      li.addEventListener('click', () => {
        console.log('Redirection:', item.name);
        window.location.href = item.link;
      });
    }

    ul.appendChild(li);
  });

  return ul;
}

const menuUl = createMenu(menuData);
menuContainer.appendChild(menuUl);
console.log('Menu ajouté au container');

// Toggle menu
toggleButton.addEventListener('click', e => {
  e.stopPropagation();
  menuContainer.classList.toggle('open');
  console.log('Toggle menu:', menuContainer.classList.contains('open'));

  if (!menuContainer.classList.contains('open')) {
    document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('open'));
  }
});

// Fermer menu clic dehors
document.addEventListener('click', () => {
  menuContainer.classList.remove('open');
  document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('open'));
});
