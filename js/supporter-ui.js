const heartEl = document.querySelector(".js-heart"),
  supportEl = document.querySelector(".js-support"),
  codeEl = document.querySelector(".js-support__code"),
  activateEl = document.querySelector(".js-support__activate"),
  thankyouEl = document.querySelector(".js-support__thankyou"),
  invalidCodeEl = document.querySelector(".js-support__invalid-code"),
  STORAGE_KEY_IS_SUPPORTER = "is-premium",
  saveIsSupporter = () => {
    storageLocal.save("is-premium", !0);
  },
  loadIsSupporter = (e) => {
    storageLocal.load("is-premium", !1, e);
  };
heartEl.addEventListener("click", (e) => {
  supportEl.classList.toggle("is-hidden"),
    supportEl.scrollIntoView({ behavior: "smooth", block: "start" });
}),
  activateEl.addEventListener("click", (e) => {
    const t = codeEl.value;
    "V1RST0NLUw==" === btoa(t)
      ? (thankyouEl.classList.remove("is-hidden"),
        invalidCodeEl.classList.add("is-hidden"),
        storageLocal.save("is-premium", !0))
      : (invalidCodeEl.classList.remove("is-hidden"),
        thankyouEl.classList.add("is-hidden"));
  });
