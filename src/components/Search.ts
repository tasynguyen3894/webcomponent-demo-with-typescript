import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('page-search')
class Search extends LitElement {

    @property()
    keyword: string = '';

    search() {
        this.dispatchEvent(new CustomEvent('searchArticle', {
            detail: {
                keyword: this.keyword
            }
        }));
    }

    changeName(e: any) {
        this.keyword = e.target.value;
    }

    render() {
        return html`
            <div>
                <input 
                    .value="${this.keyword}"
                    @change=${this.changeName}
                />
                <button @click=${this.search}>Search</button>
            </div>
        `;
    }
}