/// <reference path="bobril/bobril.d.ts" />
/// <reference path="bobril/bobril.l10n.d.ts" />
/// <reference path="layouts/pageLayout.ts" />
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
})(JirglStructures || (JirglStructures = {}));
//# sourceMappingURL=app.js.map