export type Product ={
    id: number;
    name: string;
    type: string;
    price: string;
    quantity: number;
    desc: string;
    image: string;
}

export type DataMainProvider = {
    products: Product[]
}