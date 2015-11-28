var JirglStructures;
(function (JirglStructures) {
    b.initLocalization({
        pathToIntlJs: "l10n/Intl.min.js",
        pathToIntlLocaleDataJsonp: "l10n/intldata/",
        pathToIntlMessageFormatJs: "l10n/intl-messageformat.min.js",
        pathToIntlMessageFormatLocaleData: "l10n/intlmfdata/",
        defaultLocale: "en-US",
        pathToTranslation: function (l) { return ("l10n/translations/" + l + ".js"); }
    });
    b.init(function () {
        return JirglStructures.pageLayout({});
    });
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map