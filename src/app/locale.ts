export interface Locale {
    code: string;
    label: string;
}

export interface DefaultLocales {
    locales: Locale[];
    preferredLanguage: string;
}

export const defaultLocales: DefaultLocales = {
    locales: [
        { code: 'us', label: 'English' },
        { code: 'ua', label: 'Українська' },
        { code: 'ru', label: 'Террорист' },
    ],
    preferredLanguage: 'us'
};
