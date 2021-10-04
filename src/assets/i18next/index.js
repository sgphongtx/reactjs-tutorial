import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonUs from './us/common'

i18next.use(LanguageDetector).init({
    resources: {
        'en-US': {
            common: commonUs
        }
    },
    fallbackLng: 'en-US',
    debug: false,
    ns: ['common'],
    defaultNS: 'common',

    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },

    react: {
        useSuspense: true
    }
})

export default i18next
