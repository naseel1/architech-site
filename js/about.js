"use strict";
(() => {
  var d = ".accordion_item",
    c = "is-open",
    f = `.${c}`,
    h = ".accordion_toggle",
    g = `${h}${f}`,
    T = ".accordion_content",
    r = ".accordion_minus.is-vertical",
    a = 400;
  function E() {
    m(),
      $(h).on("click", function () {
        $(this).hasClass(c) || $(g).trigger("click");
        let t = $(this).next(T);
        if ($(this).hasClass(c))
          t.animate({ height: "0px" }, a),
            $(this).find(r).css("transform", "rotate(-90deg)");
        else {
          t.css("height", "auto");
          let o = t.height();
          t.css("height", "0px"),
            t.animate({ height: o }, a, function () {
              t.css("height", "auto");
            }),
            $(this).find(r).css("transform", "rotate(0deg)");
        }
        $(this).toggleClass(c);
      });
  }
  function m() {
    document.querySelectorAll(d).forEach((o) => {
      let n = o.querySelector(".rich-text");
      if (!n) return;
      n.querySelectorAll("p").forEach((i) => {
        var e;
        let s = (e = i.textContent) == null ? void 0 : e.trim();
        (!s || s === "\u200D") && i.remove();
      }),
        n.innerHTML.trim() === "" && (o.style.display = "none");
    });
  }
  var l;
  (l = window.Webflow) == null ||
    l.push(() => {
      E();
    });
})();
