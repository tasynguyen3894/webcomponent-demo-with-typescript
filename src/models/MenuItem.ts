import { html, TemplateResult } from "lit";
import { MenuItemInterface } from "./interfaces/MenuItemInterface";

export class MenuItem implements MenuItemInterface {
    title: string;
    link: string;
    isHome: boolean;

    constructor(title: string = '', link: string = '', isHome: boolean = false) {
        this.title = title;
        this.link = link;
        this.isHome = isHome;
    }

    renderLink(): TemplateResult {
        return html`<li><a href="${this.link}">${this.title}</a></li>`
    }
}