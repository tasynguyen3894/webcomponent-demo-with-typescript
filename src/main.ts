import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import './components/Footer';
import './components/Header';
import './components/Articles';
import { Menu } from './models/Menu';
import { MenuItem } from './models/MenuItem';
import { Article } from "./models/Article";


@customElement("main-page")
class MainPage extends LitElement {
    websiteName: string = 'Sang Nguyen';

    getHeader(): Menu {
        let menu: Menu = new Menu();
        menu.title = 'Sangnguyen.dev';
        for (let i = 0; i < 3; i++) {
            menu.items.push(new MenuItem(`Menu ${i}`, `#${i}`));
        }
        return menu;
    }

    render() {
        return html`
            <page-header
                .websiteName="${this.websiteName}"
                .menu="${this.getHeader()}"
            ></page-header>
            <page-articles></page-articles>
            <page-footer
                .websiteName="${this.websiteName}"
            >
            </page-footer>
        `;
    }
}