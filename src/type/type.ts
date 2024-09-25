export type Product ={
    id: string;
    name: string;
    type: string;
    price: string;
    quantity: number;
    desc: string;
    image: string;
}

export type DataMainProvider = {
    products: Product[];
    users: Users[];
}

export type Users = {
    address: {
      geolocation: {
        lat: string;
        long: string;
      };
      city: string;
      street: string;
      number: number;
      zipcode: string;
    };
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
      firstname: string;
      lastname: string;
    };
    phone: string;
    __v: number;
  };