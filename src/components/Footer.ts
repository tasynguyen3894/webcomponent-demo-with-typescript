import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('page-footer')
class Footer extends LitElement {

    @property()
    websiteName: string = '';

    static get styles() {
        return css`
            footer {
                text-align: center;
            }

            footer .website-name {
                text-decoration: underline;
            }
        `;
    }

    render() {
        return html`
            <footer>
                <div class="website-name">${this.websiteName}</div>
                <div>
                    <slot></slot>
                </div>
            </footer>
        `;
    }
}