export class RqPoSelectedItem {
    localId: number;
    supplyCode: string;
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
    total: number;
    constructor(data: {
        supplyCode: string,
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
        this.supplyCode = data.supplyCode;
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
        this.total = (this.productQuantity * this.productUnitPrice) + this.productIgv
    }

}