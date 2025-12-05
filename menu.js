const menuHTML = `
<ul>
  <li><a href="index.html">Accueil</a></li>
  <li>
    <a href="portraits.html">Portraits</a>
    <ul class="submenu">
      <li><a href="ethan.html">Ethan</a></li>
      <li><a href="enzo.html">Enzo</a></li>
    </ul>
  </li>
  <li>
    <a href="automobile.html">Automobile</a>
    <ul class="submenu">
      <li><a href="japancar.html">Japancar</a></li>
      <li><a href="divers.html">Divers</a></li>
    </ul>
  </li>
  <li>
    <a href="concert.html">Concert</a>
    <ul class="submenu">
      <li><a href="lajava.html">La Java</a></li>
    </ul>
  </li>
</ul>
`;

document.getElementById('menu-container').innerHTML = menuHTML;
