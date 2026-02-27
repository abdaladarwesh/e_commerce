interface product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
  };
  images: string[];
  creationAt: Date;
  updatedAt: Date;
}
