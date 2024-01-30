import { EmailCopy } from "./email";

export interface ContactType {
    type: string;
    link: string;
    linkText: string;
    emailCopy?: EmailCopy;
}