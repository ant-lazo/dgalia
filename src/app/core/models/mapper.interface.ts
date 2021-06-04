export interface Mapper<T> {
    fromJson(json: any): T;
    toJson(doc: T): any;
}