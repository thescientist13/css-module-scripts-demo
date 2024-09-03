import themeSheet from './theme.css' with { type: 'css' };
import componentSheet from './component.css' with { type: 'css' };

const template = document.createElement('template');

template.innerHTML = `
  <h2>This should be blue and centered (theme.css)</h2>
  <h3>This should be red and centered (component.css)</h3>
`;

export default class SomeComponent extends HTMLElement {

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = [themeSheet, componentSheet ];
  }
}

customElements.define('some-component', SomeComponent);