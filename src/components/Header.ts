import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Menu } from "../models/Menu";
import { MenuItemInterface } from "../models/interfaces/MenuItemInterface";

@customElement("page-header")
class Header extends LitElement {
    @property()
    websiteName: string = '';

    @property()
    menu: Menu;

    static get styles() {
        return css`
            header {
                text-align: center;
            }
            
            ul {
                list-style: none;
                padding: 0;
                margin: 0px auto 20px;
            }

            ul li {
              display: inline-block;
            }

            ul li a {
                color: black;
                padding: 10px 15px;
                display: inline-block;
            }
        `;
    }

    render() {
        return html`
            <header>
                <h1>${this.websiteName}</h1>
                    <ul>
                        ${this.menu.items.map(
                            (item: MenuItemInterface) => html`${item.renderLink()}`
                        )}
                    </ul>
            </header>
        `;
    }
}