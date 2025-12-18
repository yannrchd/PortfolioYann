const menuContainer = document.getElementById('menu-container');

// Toggle button
const toggleButton = document.createElement('div');
toggleButton.id = 'menu-toggle';
toggleButton.textContent = '...';
menuContainer.appendChild(toggleButton);

// Menu data
const menuData = [
  { name: 'Accueil', link: 'index.html' },
  { name: 'Video', link: 'video.html', submenu: [ { name: 'Video Auto', link: 'videoauto.html' } ] },
  { name: 'Portraits', link: 'portraits.html', submenu: [ { name: 'Ethan', link: 'ethan.html' }, { name: 'Enzo', link: 'enzo.html' } ] },
  { name: 'Automobiles', link: 'automobile.html', submenu: [ { name: 'Video Auto', link: 'videoauto.html' }, { name: 'Japancar', link: 'japancar.html' }, { name: 'Divers', link: 'diverscar.html' }, { name: 'GPexplorer', link: 'gpexplorer.html' } ] },
  { name: 'Concerts', link: 'concert.html', submenu: [ { name: 'La Java', link: 'lajava.html' } ] }
];

// Création menu
function createMenu(data) {
  const ul = document.createElement('ul');

  data.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('menu-item');
    li.dataset.link = item.link;

    const span = document.createElement('span');
    span.textContent = item.name;
    li.appendChild(span);

    if (item.submenu) {
      const submenuUl = document.createElement('ul');
      submenuUl.classList.add('submenu');

      item.submenu.forEach(sub => {
        const subLi = document.createElement('li');
        subLi.textContent = sub.name;
        subLi.dataset.link = sub.link;
        subLi.addEventListener('click', e => {
          e.stopPropagation();
          window.location.href = sub.link;
        });
        submenuUl.appendChild(subLi);
      });

      li.appendChild(submenuUl);

      li.addEventListener('click', e => {
        e.stopPropagation();
        const isOpen = li.classList.contains('open');
        document.querySelectorAll('.menu-item').forEach(mi => {
          if (mi !== li) mi.classList.remove('open');
        });
        if (!isOpen) li.classList.add('open');
        else window.location.href = li.dataset.link;
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

const menuUl = createMenu(menuData);
menuContainer.appendChild(menuUl);

// Toggle menu principal
toggleButton.addEventListener('click', e => {
  e.stopPropagation();
  menuContainer.classList.toggle('open');
  if (!menuContainer.classList.contains('open')) {
    document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('open'));
  }
});

// Fermer menu clic dehors
document.addEventListener('click', () => {
  menuContainer.classList.remove('open');
  document.querySelectorAll('.menu-item').forEach(li => li.classList.remove('open'));
});
