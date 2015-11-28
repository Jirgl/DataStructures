module JirglStructures {
    b.initLocalization({
        pathToIntlJs: "l10n/Intl.min.js",
        pathToIntlLocaleDataJsonp: "l10n/intldata/",
        pathToIntlMessageFormatJs: "l10n/intl-messageformat.min.js",
        pathToIntlMessageFormatLocaleData: "l10n/intlmfdata/",
        defaultLocale: "en-US",
        pathToTranslation: (l) => `l10n/translations/${l}.js`
    });

    b.init(() => {
        return pageLayout({});
    });
}