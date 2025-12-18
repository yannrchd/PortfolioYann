// footer.js
const footerContainer = document.createElement('footer');
footerContainer.style.textAlign = 'center';
footerContainer.style.padding = '60px';
footerContainer.style.color = 'var(--sub)';

// HTML du footer
footerContainer.innerHTML = `
  <p>Portfolio — Yann Richard</p>
  <p>
    <a href="https://www.linkedin.com/in/yann-richard-467178232/" target="_blank" style="color: var(--accent); text-decoration: none; margin: 0 10px;">LinkedIn</a>
    <a href="mailto:yann.richard.ry2@gmail.com" style="color: var(--accent); text-decoration: none; margin: 0 10px;">Email</a>
    <a href="https://www.instagram.com/yann.pctr/" target="_blank" style="color: var(--accent); text-decoration: none; margin: 0 10px;">Instagram</a>
  </p>
`;

document.body.appendChild(footerContainer);
