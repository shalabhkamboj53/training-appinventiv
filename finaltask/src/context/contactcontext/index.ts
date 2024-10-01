import { createContext } from 'react';
import { ContactFooterDataType, FaqDataType, HelpDeskDataType, OtherQuestionsDataType } from '../../utils/type';

interface ContactContextType {
    HelpDeskData: HelpDeskDataType[];
    FaqData: FaqDataType[];
    OtherQuestionsData: OtherQuestionsDataType[];
    ContactFooterData: ContactFooterDataType[]
}

const defaultContactContext: ContactContextType = {
    HelpDeskData: [],
    FaqData: [],
    OtherQuestionsData: [],
    ContactFooterData: [],
}

export const ContactContext = createContext<ContactContextType>(defaultContactContext);