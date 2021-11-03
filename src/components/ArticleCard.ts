import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Article } from "../models/Article";

@customElement("article-card")
class ArticleCard extends LitElement {

    @property()
    article: Article;

    static get styles() {
        return css`
            div a {
                color: black;
            }
        `;
    }

    render() {
        return html`
            <div>
                <h2><a href="${this.article.url}">${this.article.title}</a></h2>
                ${this.article.tags.map((tag: string) => html`<span>${tag}</span>`)}
            </div>
        `;
    }
}