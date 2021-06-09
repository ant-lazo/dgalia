export class RqPoSelectedItem {
    localId: number;
    supplyId: number;
    supplyName: string;
    requiredQuantity: number;
    requiredMeasuredUnitName: string;
    productName: string;
    productCode: string;
    productIgv: number;
    productQuantity: number;
    productUnitPrice: number;
    productMuName: string;
    productCategoryName: string;

    constructor(data: {
        supplyId: number,
        supplyName: string,
        requiredQuantity: number,
        requiredMeasuredUnitName: string,
        productName: string,
        productCode: string,
        productIgv: number,
        productQuantity: number,
        productUnitPrice: number,
        productMuName: string,
        productCategoryName: string,

    }) {
        this.localId = new Date().getSeconds() + new Date().getMilliseconds();
        this.supplyId = data.supplyId;
        this.supplyName = data.supplyName;
        this.requiredQuantity = data.requiredQuantity;
        this.requiredMeasuredUnitName = data.requiredMeasuredUnitName;
        this.productName = data.productName;
        this.productCode = data.productCode;
        this.productIgv = data.productIgv;
        this.productQuantity = data.productQuantity;
        this.productUnitPrice = data.productUnitPrice;
        this.productMuName = data.productMuName;
        this.productCategoryName = data.productCategoryName;
    }

}