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
        { code: 'en', label: 'English' },
        { code: 'ua', label: 'Українська' },
        { code: 'ru', label: 'Террорист' },
    ],
    preferredLanguage: 'en'
};
