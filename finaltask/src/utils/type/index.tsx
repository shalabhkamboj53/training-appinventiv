export interface RouteType {
  path: string;
  isExact: boolean;
  isPrivate: boolean;
  component: React.FC;
}

export type ReactNodeChildren = {
  children: React.ReactNode;
  className?: string;
};

export type TestimonialType = {
  name: string;
  product: string;
  img: string;
  message: string;
  stars: number;
};

type ColorType = {
  color: string;
  name: string;
  img: string;
};

export type ProductType = {
  id: number;
  name: string;
  imgColor: ColorType[];
  rate: number;
  isSale: boolean;
  saleRate: number;
  size: string[];
  planter: string[];
  isFeatured: boolean;
  isPopular: boolean;
  isNew: boolean;
  isExclusive: boolean;
  starRating: number;
  reviewCount: number;
  stock: number;
};

export type ProductFeatureType = {
  Size: string;
  Planter: string;
  Color: string;
};

export type AsSeenListType = {
  id: number;
  img: string;
  alt: string;
};

export type HomeFooterDataType = {
  links: {
    title: string;
    list: {
      title: string;
      link: string;
    }[];
  }[];
  terms: {
    title: string;
    link: string;
  }[];
  socialMedia: {
    title: string;
    icon: string;
    link: string;
  }[];
  paymentPartners: string;
  form: {
    title: string;
    description: string;
  };
};

// contactUs
export type HelpDeskDataType = {
  title: string;
  description: string;
  icon: string;
  viewMore: string;
};

export type FaqDataType = {
  que: string;
  ans: string;
};

export type OtherQuestionsDataType = {
  img: string;
  title: string;
  desc: string;
};

export type ContactFooterDataType = {
    title: string;
    links: {
        title: string;
        link: string;
    }[];
}