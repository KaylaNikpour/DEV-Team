class Nav extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const currentPage = this.getAttribute('current-page');
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          background: #2d6a4f;
          padding-bottom: 0.015rem;
          position: relative;
        }

        nav ul {
          display: flex;
          list-style-type: none;
          justify-content: center;
          padding: 0;
        }

        nav ul li a {
          border: 2px solid #1b4332;
          border-radius: 30px;
          color: #b7e4c7;
          display: block;
          font-family: capriola, shippori antique, commissioner;
          font-size:20px;
          margin: 5px;
          padding: 10px 15px;
          text-align: center;
          text-decoration: none;
        }

        nav ul li a:hover {
          background-color: #1b4332;
        }

        nav ul li a.current {
          background-color: transparent;
          border-color: #d8f3dc;
        }

        .hamburger {
          cursor: pointer;
          display: none;
        }

        .hamburger i.material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
          font-size: 45px;
          font-style: normal;
          color: #d8f3dc;
        }

        @media (max-width: 800px) {
          nav ul {
            display: none;
            flex-direction: column;
            width: 100%;
          }

          .hamburger {
            display: block;
            position: absolute;
            right: 1.25rem;
            top: -6rem;
          }
        }
      </style>
      <nav>
        <div class="hamburger" onclick="this.getRootNode().host.toggleMenu()">
          <i class="material-symbols-outlined">menu</i>
        </div>
        <ul>
          <li><a href="/" class="${currentPage === 'home' ? 'current' : ''}">Home</a></li>
          <li><a href="/issue/" class="${currentPage === 'issue' ? 'current' : ''}">The Issue</a></li>
          <li><a href="/where-to-go/" class="${currentPage === 'where' ? 'current' : ''}">Where To Go</a></li>
          <li><a href="/upcycling/" class="${currentPage === 'upcycling' ? 'current' : ''}">Upcycling</a></li>
      </nav>
    `;

    this.toggleMenuDisplay();
    window.addEventListener('resize', () => this.toggleMenuDisplay());
  }

  disconnectedCallback() {
    window.removeEventListener('resize', () => this.toggleMenuDisplay());
  }

  toggleMenu() {
    const navLinks = this.shadowRoot.querySelector('nav ul');
    navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
  }

  toggleMenuDisplay() {
    const navLinks = this.shadowRoot.querySelector('nav ul');
    if (window.innerWidth <= 800) {
      navLinks.style.display = 'none';
    } else {
      navLinks.style.display = 'flex';
    }
  }
}

customElements.define('nav-component', Nav);
