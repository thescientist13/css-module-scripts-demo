import componentSheet from './component.css' with { type: 'css' };

const template = document.createElement('template');

template.innerHTML = `
  <h2>This should NOT be blue and centered</h2>
  <h3>This should be red and centered (component.css)</h3>
`;

export default class SomeOtherComponent extends HTMLElement {

  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    this.shadowRoot.adoptedStyleSheets = [ componentSheet ];
  }
}

customElements.define('some-other-component', SomeOtherComponent);