import type IInventory from "./IInventory";

export default class Player {
    name: string;
    health: number;
    maxHealth: number;
    inventories: IInventory[];
}
