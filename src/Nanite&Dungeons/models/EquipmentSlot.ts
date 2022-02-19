import type IEquipmentSlot from "./IEquipmentSlot";
import type IItem from "./IItem";

export default class EquipmentSlot implements IEquipmentSlot {
    item: IItem;
}