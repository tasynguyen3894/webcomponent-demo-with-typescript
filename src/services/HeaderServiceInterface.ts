import { MenuItemInterface } from '../models/interfaces/MenuItemInterface';

export interface HeaderServiceInterface {
    getMenuItem(): MenuItemInterface[];
}