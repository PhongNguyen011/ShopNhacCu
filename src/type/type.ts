export interface IProduct {
  id: string;
  pro_id: string;
  name: string;
  type: string;
  price: string;
  quantity: number;
  desc: string;
  img: string;
}

export type DataMainProvider = {
  products: IProduct[];
  users: Users[];
};

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
