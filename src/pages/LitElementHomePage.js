import { LitElement, html, css } from 'lit-element';

export class LitElementHomePage extends LitElement {
  static get properties() {
    return {
      name: { attribute: String },
      avatarSrc: { attibute: String },
      tecnologies: { type: Array },
    };
  }

  constructor() {
    super();
    this.avatarSrc = '';
    this.name = 'yo';
    this.tecnologies = ['LitElement', 'Flex', 'Karma', 'Chai'];
  }

  static get styles() {
    return css`
      .main-content li {
        list-style-type: square;
      }
      .main-content {
        display: flex;
        flex-flow: column;
        background-color: #f0f7d4;
        color: #092834;
      }

      .main-content img {
        max-width: 40%;
      }

      .hello-content {
        align-self: center;
        text-align: center;
      }

      .hello-content,
      .presentation-content {
        margin-left: 40px;
        margin-right: 40px;
      }
    `;
  }

  render() {
    return html`
      <main class="main-content">
        <div class="hello-content">
          ${this.avatarSrc
            ? html`<img src=${this.avatarSrc} alt="Trini" />`
            : ''}
          <h1>Hello LitElement¡¡</h1>
        </div>
        <div class="presentation-content">
          <div>
            ${this.getPresentationContextText()}
            <ul>
              ${this.tecnologies.map(t => html`<li>${t}</li>`)}
            </ul>
          </div>
        </div>
      </main>
    `;
  }

  getPresentationContextText() {
    return `¡Hola! Soy ${this.name}, desarrolladora web, y en este proyecto batalleo con:`;
  }
}
