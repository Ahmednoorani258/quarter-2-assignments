interface UserDataCard {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
  };
}

interface SingleUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string; lng:string };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export type { UserDataCard, SingleUser};
