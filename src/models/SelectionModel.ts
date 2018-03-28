import { BaseModel, BaseModelListener } from "./BaseModel";
import { BaseEntity } from "../BaseEntity";

export class SelectionModel {
	model: BaseModel<BaseEntity, BaseModelListener>;
	initialX: number;
	initialY: number;
}
