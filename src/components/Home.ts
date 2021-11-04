import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('page-home')
class Home extends LitElement {

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
                <p>A simple demo for webcomponents and Typesctipt</p>
            <div>
        `;
    }
}