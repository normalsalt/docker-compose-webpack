import { LitElement, html, css } from "lit-element";

export class GithubSearch extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 0px 30px 20px;
        margin-top: 8px;
      }
    `;
  }

  static get properties() {
    return {
      myArray: { type: Array, reflect: true }
    };
  }

  constructor() {
    super();
    this.myArray = "";
    this.columns = ["name", "html_url", "updated_at", "stargazers_count", "description"];
  }

  getJson(key) {
    fetch("https://api.github.com/search/repositories?q=" + key + "&sort=stars").then((response) => {
      return response.json();
    }).then((myJson) => {
      this.myArray = myJson['items'];
    });
  }

  render() {
    return html`
      <h1>GitHub Search</h1>
      <p>keyword : <input type="text" placeholder="Search" @change="${(e) => { this.getJson(e.target.value); }}"></p>
      ${this.myArray.length? html`
        <table border="1">
          <thead>
            <tr>
              ${this.columns.map(col => html`
                <th>${col}</th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${this.myArray.map(row => html`
              <tr>
                ${this.columns.map(col => html`
                  <td>${row[col]}</td>
                `)}
              </tr>
            `)}
          </tbody>
        </table>
      `:``}
    `;
  }
}

window.customElements.define('github-search', GithubSearch);
