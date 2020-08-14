import { LitElement, html, css } from "lit-element";

export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 0px 30px 20px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      name: { type: String },
      count: { type: Number },
    };
  }

  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <slot></slot>
      <button @click=${this._onClick} part="button">${this.count}</button>
    `;
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('my-element', MyElement);
