export class RqRegisterOutput {
    quantity: number;
    headquarter_id: number;
    unit_price: number;
    igv: number;
    product_code: string;
    comments: string;
    output_type: string;
    comment: string;

    constructor(data: {
        quantity: number,
        headquarter_id: number,
        unit_price: number,
        igv: number,
        product_code: string,
        comments: string,
        output_type: string,
        comment: string
    }) {
        this.quantity = data.quantity;
        this.headquarter_id = data.headquarter_id;
        this.unit_price = data.unit_price;
        this.igv = data.igv;
        this.product_code = data.product_code;
        this.comments = data.comments;
        this.output_type = data.output_type;
        this.comment = data.comment;
    }

}