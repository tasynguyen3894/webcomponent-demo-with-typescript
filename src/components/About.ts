import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('page-about')
class About extends LitElement {

    static get styles() {
        return css`
            div {
                width: 500px;
                margin: 0px auto;
                text-align: center;
            }
        `;
    }

    render() {
        return html`
            <div>
                <h2>About me</h2>
                <p>My name is <strong>Sang</strong>, just a lazy developer...</p>
            <div>
        `;
    }
}