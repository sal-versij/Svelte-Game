import type IInventory from "./IInventory";
import type {InventoryId} from "./Ids";
import type ItemEntries from "./ItemEntries";

export default class Storage implements IInventory {
    id: InventoryId;
    items: ItemEntries;
}