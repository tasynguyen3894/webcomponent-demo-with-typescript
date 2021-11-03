import { MenuItemInterface } from "./MenuItemInterface";

export interface MenuInterface {
    title: string;
    items: MenuItemInterface[];
    addItem(item: MenuItemInterface): void;
    removeItem(index: number): boolean;
}