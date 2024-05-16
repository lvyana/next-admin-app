// https://locize.com/blog/next-app-dir-i18n/
export const fallbackLng = 'en';
export const languages: Languages_type = [fallbackLng, 'zh'];
export const defaultNS = 'translation';
export const cookieName = 'i18next';

export type Languages_type = ['en', 'zh'];

export function getOptions(lng = fallbackLng, ns = defaultNS) {
	return {
		// debug: true,
		supportedLngs: languages,
		fallbackLng,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns
	};
}
