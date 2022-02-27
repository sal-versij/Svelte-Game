import type {ItemId} from "./Ids";
import type ItemEntry from "./ItemEntry";

export default class ItemEntries {
    [index: ItemId]: ItemEntry
}