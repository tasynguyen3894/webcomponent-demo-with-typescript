import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import './components/Footer';
import './components/Header';
import './components/Articles';
import './components/RouterContent';
import './components/Home';
import './components/About';
import { Menu } from './models/Menu';
import { HeaderService } from './services/HeaderService';

const baseTitle = 'Demo Webcomponents with Typescript';
@customElement("main-page")
class MainPage extends LitElement {
    websiteName: string = 'Webcomponents demo';
    headerService: HeaderService;

    @property()
    currentRouter: string = '';

    constructor() {
        super();
        this.headerService = new HeaderService();
        this.setTitle(baseTitle)
        let _this = this;
        this.handleHashChange(window.location.hash);
        window.addEventListener('hashchange', function() {
            _this.handleHashChange(window.location.hash)
        }, false);
    }

    handleHashChange(hash: string) {
        if(hash === '') {
            hash = '#';
        }
        this.currentRouter = hash;
    }

    onSearch(e: CustomEvent) {
        if(e.detail.keyword !== '') {
            this.setTitle(`Search for ${e.detail.keyword} | ${baseTitle}`);
        } else {
            this.setTitle(baseTitle)
        }
    }

    setTitle(title: string) {
        document.title = title;
    }

    getHeader(): Menu {
        let menu: Menu = new Menu();
        menu.title = 'Sangnguyen.dev';
        menu.items = this.headerService.getMenuItem();
        return menu;
    }

    render() {
        return html`
            <page-header
                .websiteName="${this.websiteName}"
                .menu="${this.getHeader()}"
            ></page-header>
            <router-content
                .currentRouter="${this.currentRouter}"
                .pageUrl="${'#article'}"
            >
                <page-articles
                    @onSearch=${this.onSearch}
                ></page-articles>
            </router-content>
            <router-content
                .currentRouter="${this.currentRouter}"
                .pageUrl="${'#'}"
            >
                <page-home></page-home>
            </router-content>
            <router-content
                .currentRouter="${this.currentRouter}"
                .pageUrl="${'#about'}"
            >
                <page-about></page-about>
            </router-content>
            <page-footer
                .websiteName="${this.websiteName}"
            >
            </page-footer>
        `;
    }
}