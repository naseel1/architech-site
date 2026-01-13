"use strict";
(() => {
  var d = ".filter_dropdown",
    u = ".filter_dropdown-button",
    L = ".filter_dropdown-wrapper",
    i = ".filter_dropdown-options",
    o = "is-open";
  function a() {
    let e;
    document.querySelectorAll(d).forEach((t) => {
      let r = t.querySelector(u);
      r == null ||
        r.addEventListener("click", (O) => {
          var n;
          if (
            (O.stopPropagation(),
            (!e || e.signal.aborted) && (e = new AbortController()),
            t.classList.contains(o))
          ) {
            s("remove"), e.abort();
            return;
          }
          s("remove"),
            t.classList.add(o),
            (n = t.querySelector(i)) == null || n.classList.add(o),
            document.addEventListener(
              "click",
              (f) => {
                let l = f.target;
                (l && l.closest(L)) || (s("remove"), e.abort());
              },
              { signal: e.signal }
            );
        });
    });
  }
  function s(e = "add") {
    document.querySelectorAll(`${d}, ${i}`).forEach((t) => {
      e === "add" ? t.classList.add(o) : t.classList.remove(o);
    });
  }
  var c;
  (c = window.Webflow) == null ||
    c.push(() => {
      a();
    });
})();
