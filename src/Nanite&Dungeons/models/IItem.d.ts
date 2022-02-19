import type {ItemId} from "./Ids";

export default interface IItem {
    id: ItemId;
    name: string;
    description: string;
    value: number;
    damage: number;
    armour: number;
    heal: number;
    image: string;
}