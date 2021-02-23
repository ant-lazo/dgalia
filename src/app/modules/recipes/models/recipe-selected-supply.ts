

export class RecipeSelectedSupply {

  constructor(
    id: number, 
    code: string, 
    name: string, 
    category: string, 
    measuredUnit: string, 
    quantity: number
) {
    this.id = id
    this.code = code
    this.name = name
    this.category = category
    this.measuredUnit = measuredUnit
    this.quantity = quantity
  }
    id: number;
    code: string;
    name: string;
    category: string;
    measuredUnit: string;
    quantity: number;
}