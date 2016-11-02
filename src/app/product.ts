export class Product {
    private sku:string;
    private name:string;
    private imageUrl:string;
    private department:string[];
    private price:number;
    constructor(aSku:string,aName:string,aImageUrl:string,aDepartment:string[],aPrice:number){
        this.sku = aSku;
        this.name = aName;
        this.imageUrl = aImageUrl;
        this.department = aDepartment;
        this.price = aPrice;
    }
}
