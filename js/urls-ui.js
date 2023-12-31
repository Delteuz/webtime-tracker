const footerLinkEls = document.querySelectorAll(".js-footer-link");
footerLinkEls.forEach((e) => {
  e.setAttribute("href", FOOTER_URL);
});
const pwylLinkEls = document.querySelectorAll(".js-pwyl-link");
pwylLinkEls.forEach((e) => {
  e.setAttribute("href", PWYL_URL);
});
const issueLinkEls = document.querySelectorAll(".js-issue-link");
issueLinkEls.forEach((e) => {
  e.setAttribute("href", ISSUE_URL);
});
const reviewLinkEls = document.querySelectorAll(".js-review-link");
reviewLinkEls.forEach((e) => {
  e.setAttribute("href", CWS_REVIEWS_URL);
});
