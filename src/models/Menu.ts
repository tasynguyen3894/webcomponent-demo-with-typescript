import { MenuItem } from './MenuItem';
import { MenuInterface } from './interfaces/MenuInterface';

export class Menu implements MenuInterface {
    title: string;
    items: MenuItem[] = [];

    addItem(item: MenuItem) {
        this.items.push(item);
    }

    removeItem(index: number): boolean {
        if (this.items[index]) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}