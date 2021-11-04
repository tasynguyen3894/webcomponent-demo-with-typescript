import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('router-content')
class RouterContent extends LitElement {

    @property()
    currentRouter: string = '';

    @property()
    pageUrl: string = '';
    
    getStyle() {
        if(this.currentRouter === this.pageUrl) {
            return 'display: block';
        }
        return 'display: none';
    }

    render() {
        return html`
            <div
                style="${this.getStyle()}"
            >
                <slot><slot>
            </div>
        `;
    }
}