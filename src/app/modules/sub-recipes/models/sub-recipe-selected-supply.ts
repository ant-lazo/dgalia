

export class SubRecipeSelectedSupply {

  id: number;
  code: string;
  name: string;
  category: string;
  measuredUnit: string;
  quantity: number;
  measuredUnitId: number;
  editar: boolean;

  constructor(
    id: number,
    code: string,
    name: string,
    category: string,
    measuredUnit: string,
    quantity: number,
    measuredUnitId: number
  ) {
    this.id = id
    this.code = code
    this.name = name
    this.category = category
    this.measuredUnit = measuredUnit
    this.quantity = quantity
    this.measuredUnitId = measuredUnitId;
  }

}