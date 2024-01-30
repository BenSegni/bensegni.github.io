export interface EmailCopy {
    emailAddress?: string;
    title?: string;
    body?: string;
    reference?: {
        title: string;
        body: string;
    }
}