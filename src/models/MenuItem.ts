import { html, TemplateResult } from "lit";
import { MenuItemInterface } from "./interfaces/MenuItemInterface";

export class MenuItem implements MenuItemInterface {
    title: string;
    link: string;

    constructor(title: string = '', link: string = '') {
        this.title = title;
        this.link = link;
    }

    renderLink(): TemplateResult {
        return html`<li><a href="${this.link}">${this.title}</a></li>`
    }
}