const CWS_URL =
    "https://chrome.google.com/webstore/detail/webtime-tracker/ppaojnbmmaigjmlpjaldnkgnklhicppk",
  CWS_REVIEWS_URL = `${CWS_URL}/reviews`,
  _HOMEPAGE_URL = "https://www.petasittek.com/",
  _PRODUCT_URL = `${_HOMEPAGE_URL}webtime-tracker/`,
  _PRODUCT_ISSUE_URL = `${_PRODUCT_URL}issue/`,
  _PRODUCT_PWYL_URL = `${_PRODUCT_URL}pay-what-you-like/`,
  _PRODUCT_UPDATE_URL_BASE = `${_PRODUCT_URL}version/`,
  APP_VERSION = chrome.runtime.getManifest().version,
  APP_VERSION_WITH_UPDATE_URL = ["1.7.8"],
  getUrl = (_, e = "") => {
    const U = new URLSearchParams({
        utm_source: "webtime-tracker",
        utm_medium: "browser-extension",
        utm_campaign: "chrome",
        utm_content: "none",
      }),
      t = new URL(_);
    if (e) {
      const _ = new URLSearchParams(U);
      _.set("utm_content", e), (t.search = _.toString());
    }
    return t.href;
  },
  INSTALL_URL = getUrl(_HOMEPAGE_URL, "install"),
  UNINSTALL_URL = getUrl(_HOMEPAGE_URL, "uninstall"),
  FOOTER_URL = getUrl(_HOMEPAGE_URL, "footer"),
  PWYL_URL = getUrl(_PRODUCT_PWYL_URL),
  ISSUE_URL = getUrl(_PRODUCT_ISSUE_URL),
  UPDATE_URL = getUrl(`${_PRODUCT_UPDATE_URL_BASE}${APP_VERSION}`, "update");
