const ACTION_URL_MAPPING = { support: ISSUE_URL, review: CWS_REVIEWS_URL },
  starEls = document.querySelectorAll(".stars .stars__star-wrapper"),
  initStarsUI = () => {
    starEls.forEach((t) => {
      const s = t.dataset.action,
        r = ACTION_URL_MAPPING[s];
      t.setAttribute("href", r);
    });
  };
starEls.forEach((t) => {
  const s = t.dataset.action,
    r = ACTION_URL_MAPPING[s];
  t.setAttribute("href", r);
});
