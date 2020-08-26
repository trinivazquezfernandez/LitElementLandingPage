import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';

export class LitElementNavBar extends LitElement {
  static get properties() {
    return {
      toggle: { type: Boolean },
      links: { type: Array },
    };
  }

  constructor() {
    super();
    this.toggle = false;
    this.links = [
      { text: 'Marcar mapa', activeClass: '', href: '/map' },
      { text: 'Inicio', activeClass: 'active', href: '/' },
    ];
  }

  static get styles() {
    return css`
      .main-menu-container {
        --main-bg-color: #b2d732;
        --active-bg-color: #66b032;
        --main-color: #092834;
      }

      .main-menu-container {
        display: flex;
        flex-flow: row;
        justify-content: flex-end;
        background-color: var(--main-bg-color);
        color: var(--main-color);
        font-weight: bold;
      }

      .main-menu-container a {
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      .main-menu-container a:hover,
      .main-menu-container a.active {
        background-color: var(--active-bg-color);
      }

      .icon {
        display: none;
      }

      @media all and (max-width: 600px) {
        .main-menu-container {
          flex-flow: column-reverse;
        }

        .main-menu-container a {
          text-align: start;
        }

        .main-menu-container .menu {
          display: none;
        }

        .main-menu-container .menu[toggle='true'],
        .icon {
          display: block;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="main-menu-container">
        ${this.links.map(
          l =>
            html`<a
              class="menu ${l.activeClass}"
              toggle=${this.toggle}
              href=${l.href}
              >${l.text}</a
            >`
        )}

        <a class="icon" @click="${this.toggleMenu}"
          ><iron-icon icon="menu"></iron-icon
        ></a>
      </div>
    `;
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }
}
