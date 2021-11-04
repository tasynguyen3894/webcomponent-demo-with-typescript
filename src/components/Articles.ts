import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./ArticleCard";
import "./Search";
import { Article } from "../models/Article";
import { ArticleServiceInterface } from '../services/ArticleServiceInterface';
import { ArticleService } from "../services/ArticleService";

@customElement("page-articles")
class Articles extends LitElement {

    @property()
    articles: Article[] = [];
    
    @property()
    articleService: ArticleServiceInterface;

    constructor() {
        super();
        this.articleService = new ArticleService();
        this.articles = this.getArticle();
    }

    static get styles() {
        return css`
            div {
                width: 500px;
                margin: 0px auto;
            }
        `;
    }

    searchEventHandle(e: CustomEvent) {
        this.articles = this.getArticle(e.detail.keyword);
    }

    getArticle(keyword: string = ''): Article[] {
        return this.articleService.getArticle(keyword);
    }

    render() {
        return html`
            <div>
                <page-search @searchArticle=${this.searchEventHandle}></page-search>
                <div>
                ${this.articles.map(
                    (article: Article) => html`
                        <article-card
                            .article="${article}"
                        ></article-card>
                    `
                )}
                </div>
            </div>
        `;
    }
}