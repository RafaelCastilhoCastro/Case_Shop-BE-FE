export class Product {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public qty_stock: number
    ) { }
}

export class ProductGetAllOutputDTO {
    constructor(
        public id: string,
        public name: string,
        public price: number,
        public qtyStock: number
    ) { }
}

export class StockDTO {
    constructor(
        public name: string,
        public qty_stock: number
    ) { }
}

export class StockOutputDTO {
    constructor(
        public name: string,
        public qtyStock: number
    ) { }
}