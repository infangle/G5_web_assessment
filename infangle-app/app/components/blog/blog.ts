export interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: {
      _id: string;
      name: string;
      email: string;
      image: string;
      role: string;
    } | null;
    isPending: boolean;
    tags: string[];
    createdAt: string;
    updatedAt: string;
  }
  