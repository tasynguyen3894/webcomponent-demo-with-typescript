import { MenuItem } from '../models/MenuItem';
import menuData from '../data/menus';
import { HeaderServiceInterface } from './HeaderServiceInterface';

export class HeaderService implements HeaderServiceInterface {
    getMenuItem(): MenuItem[] {
        let menuItems: MenuItem[] = [];
        for (let i = 0; i < menuData.menus.length; i++) {
            menuItems.push(new MenuItem(menuData.menus[i].title, menuData.menus[i].link));
        }
        return menuItems;
    }
}