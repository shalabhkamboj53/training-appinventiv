import { createContext } from 'react';
import { AsSeenListType, HomeFooterDataType, ProductFeatureType, ProductType, TestimonialType } from '../../utils/type';

interface HomeContextType {
    TestimonialData: TestimonialType[];
    ProductList: ProductType[];
    ExcusiveProductFeature: ProductFeatureType | null;
    setExclusiveProductFeature: React.Dispatch<React.SetStateAction<ProductFeatureType | null>>;
    ExclusiveProductItem: ProductType | null;
    setExclusiveProductItem: React.Dispatch<React.SetStateAction<ProductType | null>>;
    AsSeenList: AsSeenListType[];
    FooterData: HomeFooterDataType | null
}

const defaultHomeContext: HomeContextType = {
    TestimonialData: [],
    ProductList: [],
    ExcusiveProductFeature: null,
    setExclusiveProductFeature: () => null,
    ExclusiveProductItem: null,
    setExclusiveProductItem: () => null,
    AsSeenList: [],
    FooterData: null
}

export const HomeContext = createContext<HomeContextType>(defaultHomeContext);