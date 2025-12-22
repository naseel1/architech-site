"use strict";
(() => {
  function ir(a) {
    if (a === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return a;
  }
  function zo(a, t) {
    (a.prototype = Object.create(t.prototype)),
      (a.prototype.constructor = a),
      (a.__proto__ = t);
  }
  var _e = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    ai = { duration: 0.5, overwrite: !1, delay: 0 },
    xs,
    Vt,
    dt,
    Ee = 1e8,
    it = 1 / Ee,
    us = Math.PI * 2,
    Hl = us / 4,
    Gl = 0,
    Io = Math.sqrt,
    $l = Math.cos,
    Kl = Math.sin,
    Mt = function (t) {
      return typeof t == "string";
    },
    pt = function (t) {
      return typeof t == "function";
    },
    sr = function (t) {
      return typeof t == "number";
    },
    vn = function (t) {
      return typeof t == "undefined";
    },
    Qe = function (t) {
      return typeof t == "object";
    },
    he = function (t) {
      return t !== !1;
    },
    ws = function () {
      return typeof window != "undefined";
    },
    ln = function (t) {
      return pt(t) || Mt(t);
    },
    No =
      (typeof ArrayBuffer == "function" && ArrayBuffer.isView) ||
      function () {},
    qt = Array.isArray,
    cs = /(?:-?\.?\d|\.)+/gi,
    Ts = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    rs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Ss = /[+-]=-?[.\d]+/,
    Fo = /[^,'"\[\]\s]+/gi,
    Ql = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ut,
    be,
    fs,
    bs,
    ve = {},
    hn = {},
    Bo,
    Yo = function (t) {
      return (hn = Yr(t, ve)) && Ut;
    },
    yn = function (t, r) {
      return console.warn(
        "Invalid property",
        t,
        "set to",
        r,
        "Missing plugin? gsap.registerPlugin()"
      );
    },
    _n = function (t, r) {
      return !r && console.warn(t);
    },
    Wo = function (t, r) {
      return (t && (ve[t] = r) && hn && (hn[t] = r)) || ve;
    },
    Ni = function () {
      return 0;
    },
    Zl = { suppressEvents: !0, isStart: !0, kill: !1 },
    un = { suppressEvents: !0, kill: !1 },
    jl = { suppressEvents: !0 },
    Es = {},
    vr = [],
    hs = {},
    Xo,
    ce = {},
    is = {},
    Oo = 30,
    cn = [],
    Cs = "",
    Ms = function (t) {
      var r = t[0],
        e,
        i;
      if ((Qe(r) || pt(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
        for (i = cn.length; i-- && !cn[i].targetTest(r); );
        e = cn[i];
      }
      for (i = t.length; i--; )
        (t[i] && (t[i]._gsap || (t[i]._gsap = new ks(t[i], e)))) ||
          t.splice(i, 1);
      return t;
    },
    yr = function (t) {
      return t._gsap || Ms(Ce(t))[0]._gsap;
    },
    Os = function (t, r, e) {
      return (e = t[r]) && pt(e)
        ? t[r]()
        : (vn(e) && t.getAttribute && t.getAttribute(r)) || e;
    },
    jt = function (t, r) {
      return (t = t.split(",")).forEach(r) || t;
    },
    gt = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    zt = function (t) {
      return Math.round(t * 1e7) / 1e7 || 0;
    },
    Xr = function (t, r) {
      var e = r.charAt(0),
        i = parseFloat(r.substr(2));
      return (
        (t = parseFloat(t)),
        e === "+" ? t + i : e === "-" ? t - i : e === "*" ? t * i : t / i
      );
    },
    Jl = function (t, r) {
      for (var e = r.length, i = 0; t.indexOf(r[i]) < 0 && ++i < e; );
      return i < e;
    },
    dn = function () {
      var t = vr.length,
        r = vr.slice(0),
        e,
        i;
      for (hs = {}, vr.length = 0, e = 0; e < t; e++)
        (i = r[e]),
          i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
    },
    Vo = function (t, r, e, i) {
      vr.length && !Vt && dn(),
        t.render(r, e, i || (Vt && r < 0 && (t._initted || t._startAt))),
        vr.length && !Vt && dn();
    },
    qo = function (t) {
      var r = parseFloat(t);
      return (r || r === 0) && (t + "").match(Fo).length < 2
        ? r
        : Mt(t)
        ? t.trim()
        : t;
    },
    Uo = function (t) {
      return t;
    },
    Oe = function (t, r) {
      for (var e in r) e in t || (t[e] = r[e]);
      return t;
    },
    tu = function (t) {
      return function (r, e) {
        for (var i in e)
          i in r || (i === "duration" && t) || i === "ease" || (r[i] = e[i]);
      };
    },
    Yr = function (t, r) {
      for (var e in r) t[e] = r[e];
      return t;
    },
    Po = function a(t, r) {
      for (var e in r)
        e !== "__proto__" &&
          e !== "constructor" &&
          e !== "prototype" &&
          (t[e] = Qe(r[e]) ? a(t[e] || (t[e] = {}), r[e]) : r[e]);
      return t;
    },
    pn = function (t, r) {
      var e = {},
        i;
      for (i in t) i in r || (e[i] = t[i]);
      return e;
    },
    Di = function (t) {
      var r = t.parent || ut,
        e = t.keyframes ? tu(qt(t.keyframes)) : Oe;
      if (he(t.inherit))
        for (; r; ) e(t, r.vars.defaults), (r = r.parent || r._dp);
      return t;
    },
    eu = function (t, r) {
      for (var e = t.length, i = e === r.length; i && e-- && t[e] === r[e]; );
      return e < 0;
    },
    Ho = function (t, r, e, i, n) {
      e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
      var s = t[i],
        o;
      if (n) for (o = r[n]; s && s[n] > o; ) s = s._prev;
      return (
        s
          ? ((r._next = s._next), (s._next = r))
          : ((r._next = t[e]), (t[e] = r)),
        r._next ? (r._next._prev = r) : (t[i] = r),
        (r._prev = s),
        (r.parent = r._dp = t),
        r
      );
    },
    xn = function (t, r, e, i) {
      e === void 0 && (e = "_first"), i === void 0 && (i = "_last");
      var n = r._prev,
        s = r._next;
      n ? (n._next = s) : t[e] === r && (t[e] = s),
        s ? (s._prev = n) : t[i] === r && (t[i] = n),
        (r._next = r._prev = r.parent = null);
    },
    xr = function (t, r) {
      t.parent &&
        (!r || t.parent.autoRemoveChildren) &&
        t.parent.remove &&
        t.parent.remove(t),
        (t._act = 0);
    },
    Nr = function (t, r) {
      if (t && (!r || r._end > t._dur || r._start < 0))
        for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
      return t;
    },
    ru = function (t) {
      for (var r = t.parent; r && r.parent; )
        (r._dirty = 1), r.totalDuration(), (r = r.parent);
      return t;
    },
    _s = function (t, r, e, i) {
      return (
        t._startAt &&
        (Vt
          ? t._startAt.revert(un)
          : (t.vars.immediateRender && !t.vars.autoRevert) ||
            t._startAt.render(r, !0, i))
      );
    },
    iu = function a(t) {
      return !t || (t._ts && a(t.parent));
    },
    ko = function (t) {
      return t._repeat ? li(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
    },
    li = function (t, r) {
      var e = Math.floor((t /= r));
      return t && e === t ? e - 1 : e;
    },
    gn = function (t, r) {
      return (
        (t - r._start) * r._ts +
        (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
      );
    },
    wn = function (t) {
      return (t._end = zt(
        t._start + (t._tDur / Math.abs(t._ts || t._rts || it) || 0)
      ));
    },
    Tn = function (t, r) {
      var e = t._dp;
      return (
        e &&
          e.smoothChildTiming &&
          t._ts &&
          ((t._start = zt(
            e._time -
              (t._ts > 0
                ? r / t._ts
                : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)
          )),
          wn(t),
          e._dirty || Nr(e, t)),
        t
      );
    },
    Go = function (t, r) {
      var e;
      if (
        ((r._time ||
          (!r._dur && r._initted) ||
          (r._start < t._time && (r._dur || !r.add))) &&
          ((e = gn(t.rawTime(), r)),
          (!r._dur || Yi(0, r.totalDuration(), e) - r._tTime > it) &&
            r.render(e, !0)),
        Nr(t, r)._dp && t._initted && t._time >= t._dur && t._ts)
      ) {
        if (t._dur < t.duration())
          for (e = t; e._dp; )
            e.rawTime() >= 0 && e.totalTime(e._tTime), (e = e._dp);
        t._zTime = -it;
      }
    },
    Ke = function (t, r, e, i) {
      return (
        r.parent && xr(r),
        (r._start = zt(
          (sr(e) ? e : e || t !== ut ? Se(t, e, r) : t._time) + r._delay
        )),
        (r._end = zt(
          r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)
        )),
        Ho(t, r, "_first", "_last", t._sort ? "_start" : 0),
        ds(r) || (t._recent = r),
        i || Go(t, r),
        t._ts < 0 && Tn(t, t._tTime),
        t
      );
    },
    $o = function (t, r) {
      return (
        (ve.ScrollTrigger || yn("scrollTrigger", r)) &&
        ve.ScrollTrigger.create(r, t)
      );
    },
    Ko = function (t, r, e, i, n) {
      if ((As(t, r, n), !t._initted)) return 1;
      if (
        !e &&
        t._pt &&
        !Vt &&
        ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
        Xo !== fe.frame
      )
        return vr.push(t), (t._lazy = [n, i]), 1;
    },
    nu = function a(t) {
      var r = t.parent;
      return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r));
    },
    ds = function (t) {
      var r = t.data;
      return r === "isFromStart" || r === "isStart";
    },
    su = function (t, r, e, i) {
      var n = t.ratio,
        s =
          r < 0 ||
          (!r &&
            ((!t._start && nu(t) && !(!t._initted && ds(t))) ||
              ((t._ts < 0 || t._dp._ts < 0) && !ds(t))))
            ? 0
            : 1,
        o = t._rDelay,
        l = 0,
        u,
        c,
        d;
      if (
        (o &&
          t._repeat &&
          ((l = Yi(0, t._tDur, r)),
          (c = li(l, o)),
          t._yoyo && c & 1 && (s = 1 - s),
          c !== li(t._tTime, o) &&
            ((n = 1 - s),
            t.vars.repeatRefresh && t._initted && t.invalidate())),
        s !== n || Vt || i || t._zTime === it || (!r && t._zTime))
      ) {
        if (!t._initted && Ko(t, r, i, e, l)) return;
        for (
          d = t._zTime,
            t._zTime = r || (e ? it : 0),
            e || (e = r && !d),
            t.ratio = s,
            t._from && (s = 1 - s),
            t._time = 0,
            t._tTime = l,
            u = t._pt;
          u;

        )
          u.r(s, u.d), (u = u._next);
        r < 0 && _s(t, r, e, !0),
          t._onUpdate && !e && Me(t, "onUpdate"),
          l && t._repeat && !e && t.parent && Me(t, "onRepeat"),
          (r >= t._tDur || r < 0) &&
            t.ratio === s &&
            (s && xr(t, 1),
            !e &&
              !Vt &&
              (Me(t, s ? "onComplete" : "onReverseComplete", !0),
              t._prom && t._prom()));
      } else t._zTime || (t._zTime = r);
    },
    ou = function (t, r, e) {
      var i;
      if (e > r)
        for (i = t._first; i && i._start <= e; ) {
          if (i.data === "isPause" && i._start > r) return i;
          i = i._next;
        }
      else
        for (i = t._last; i && i._start >= e; ) {
          if (i.data === "isPause" && i._start < r) return i;
          i = i._prev;
        }
    },
    ui = function (t, r, e, i) {
      var n = t._repeat,
        s = zt(r) || 0,
        o = t._tTime / t._tDur;
      return (
        o && !i && (t._time *= s / t._dur),
        (t._dur = s),
        (t._tDur = n ? (n < 0 ? 1e10 : zt(s * (n + 1) + t._rDelay * n)) : s),
        o > 0 && !i && Tn(t, (t._tTime = t._tDur * o)),
        t.parent && wn(t),
        e || Nr(t.parent, t),
        t
      );
    },
    Ro = function (t) {
      return t instanceof Xt ? Nr(t) : ui(t, t._dur);
    },
    au = { _start: 0, endTime: Ni, totalDuration: Ni },
    Se = function a(t, r, e) {
      var i = t.labels,
        n = t._recent || au,
        s = t.duration() >= Ee ? n.endTime(!1) : t._dur,
        o,
        l,
        u;
      return Mt(r) && (isNaN(r) || r in i)
        ? ((l = r.charAt(0)),
          (u = r.substr(-1) === "%"),
          (o = r.indexOf("=")),
          l === "<" || l === ">"
            ? (o >= 0 && (r = r.replace(/=/, "")),
              (l === "<" ? n._start : n.endTime(n._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (u ? (o < 0 ? n : e).totalDuration() / 100 : 1))
            : o < 0
            ? (r in i || (i[r] = s), i[r])
            : ((l = parseFloat(r.charAt(o - 1) + r.substr(o + 1))),
              u && e && (l = (l / 100) * (qt(e) ? e[0] : e).totalDuration()),
              o > 1 ? a(t, r.substr(0, o - 1), e) + l : s + l))
        : r == null
        ? s
        : +r;
    },
    zi = function (t, r, e) {
      var i = sr(r[1]),
        n = (i ? 2 : 1) + (t < 2 ? 0 : 1),
        s = r[n],
        o,
        l;
      if ((i && (s.duration = r[1]), (s.parent = e), t)) {
        for (o = s, l = e; l && !("immediateRender" in o); )
          (o = l.vars.defaults || {}), (l = he(l.vars.inherit) && l.parent);
        (s.immediateRender = he(o.immediateRender)),
          t < 2 ? (s.runBackwards = 1) : (s.startAt = r[n - 1]);
      }
      return new yt(r[0], s, r[n + 1]);
    },
    wr = function (t, r) {
      return t || t === 0 ? r(t) : r;
    },
    Yi = function (t, r, e) {
      return e < t ? t : e > r ? r : e;
    },
    It = function (t, r) {
      return !Mt(t) || !(r = Ql.exec(t)) ? "" : r[1];
    },
    lu = function (t, r, e) {
      return wr(e, function (i) {
        return Yi(t, r, i);
      });
    },
    ps = [].slice,
    Qo = function (t, r) {
      return (
        t &&
        Qe(t) &&
        "length" in t &&
        ((!r && !t.length) || (t.length - 1 in t && Qe(t[0]))) &&
        !t.nodeType &&
        t !== be
      );
    },
    uu = function (t, r, e) {
      return (
        e === void 0 && (e = []),
        t.forEach(function (i) {
          var n;
          return (Mt(i) && !r) || Qo(i, 1)
            ? (n = e).push.apply(n, Ce(i))
            : e.push(i);
        }) || e
      );
    },
    Ce = function (t, r, e) {
      return dt && !r && dt.selector
        ? dt.selector(t)
        : Mt(t) && !e && (fs || !ci())
        ? ps.call((r || bs).querySelectorAll(t), 0)
        : qt(t)
        ? uu(t, e)
        : Qo(t)
        ? ps.call(t, 0)
        : t
        ? [t]
        : [];
    },
    gs = function (t) {
      return (
        (t = Ce(t)[0] || _n("Invalid scope") || {}),
        function (r) {
          var e = t.current || t.nativeElement || t;
          return Ce(
            r,
            e.querySelectorAll
              ? e
              : e === t
              ? _n("Invalid scope") || bs.createElement("div")
              : t
          );
        }
      );
    },
    Zo = function (t) {
      return t.sort(function () {
        return 0.5 - Math.random();
      });
    },
    jo = function (t) {
      if (pt(t)) return t;
      var r = Qe(t) ? t : { each: t },
        e = Fr(r.ease),
        i = r.from || 0,
        n = parseFloat(r.base) || 0,
        s = {},
        o = i > 0 && i < 1,
        l = isNaN(i) || o,
        u = r.axis,
        c = i,
        d = i;
      return (
        Mt(i)
          ? (c = d = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
          : !o && l && ((c = i[0]), (d = i[1])),
        function (h, f, p) {
          var _ = (p || r).length,
            m = s[_],
            T,
            w,
            b,
            v,
            S,
            C,
            x,
            M,
            E;
          if (!m) {
            if (((E = r.grid === "auto" ? 0 : (r.grid || [1, Ee])[1]), !E)) {
              for (
                x = -Ee;
                x < (x = p[E++].getBoundingClientRect().left) && E < _;

              );
              E--;
            }
            for (
              m = s[_] = [],
                T = l ? Math.min(E, _) * c - 0.5 : i % E,
                w = E === Ee ? 0 : l ? (_ * d) / E - 0.5 : (i / E) | 0,
                x = 0,
                M = Ee,
                C = 0;
              C < _;
              C++
            )
              (b = (C % E) - T),
                (v = w - ((C / E) | 0)),
                (m[C] = S =
                  u ? Math.abs(u === "y" ? v : b) : Io(b * b + v * v)),
                S > x && (x = S),
                S < M && (M = S);
            i === "random" && Zo(m),
              (m.max = x - M),
              (m.min = M),
              (m.v = _ =
                (parseFloat(r.amount) ||
                  parseFloat(r.each) *
                    (E > _
                      ? _ - 1
                      : u
                      ? u === "y"
                        ? _ / E
                        : E
                      : Math.max(E, _ / E)) ||
                  0) * (i === "edges" ? -1 : 1)),
              (m.b = _ < 0 ? n - _ : n),
              (m.u = It(r.amount || r.each) || 0),
              (e = e && _ < 0 ? aa(e) : e);
          }
          return (
            (_ = (m[h] - m.min) / m.max || 0),
            zt(m.b + (e ? e(_) : _) * m.v) + m.u
          );
        }
      );
    },
    ms = function (t) {
      var r = Math.pow(10, ((t + "").split(".")[1] || "").length);
      return function (e) {
        var i = zt(Math.round(parseFloat(e) / t) * t * r);
        return (i - (i % 1)) / r + (sr(e) ? 0 : It(e));
      };
    },
    Jo = function (t, r) {
      var e = qt(t),
        i,
        n;
      return (
        !e &&
          Qe(t) &&
          ((i = e = t.radius || Ee),
          t.values
            ? ((t = Ce(t.values)), (n = !sr(t[0])) && (i *= i))
            : (t = ms(t.increment))),
        wr(
          r,
          e
            ? pt(t)
              ? function (s) {
                  return (n = t(s)), Math.abs(n - s) <= i ? n : s;
                }
              : function (s) {
                  for (
                    var o = parseFloat(n ? s.x : s),
                      l = parseFloat(n ? s.y : 0),
                      u = Ee,
                      c = 0,
                      d = t.length,
                      h,
                      f;
                    d--;

                  )
                    n
                      ? ((h = t[d].x - o),
                        (f = t[d].y - l),
                        (h = h * h + f * f))
                      : (h = Math.abs(t[d] - o)),
                      h < u && ((u = h), (c = d));
                  return (
                    (c = !i || u <= i ? t[c] : s),
                    n || c === s || sr(s) ? c : c + It(s)
                  );
                }
            : ms(t)
        )
      );
    },
    ta = function (t, r, e, i) {
      return wr(qt(t) ? !r : e === !0 ? !!(e = 0) : !i, function () {
        return qt(t)
          ? t[~~(Math.random() * t.length)]
          : (e = e || 1e-5) &&
              (i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) &&
              Math.floor(
                Math.round(
                  (t - e / 2 + Math.random() * (r - t + e * 0.99)) / e
                ) *
                  e *
                  i
              ) / i;
      });
    },
    cu = function () {
      for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
        r[e] = arguments[e];
      return function (i) {
        return r.reduce(function (n, s) {
          return s(n);
        }, i);
      };
    },
    fu = function (t, r) {
      return function (e) {
        return t(parseFloat(e)) + (r || It(e));
      };
    },
    hu = function (t, r, e) {
      return ra(t, r, 0, 1, e);
    },
    ea = function (t, r, e) {
      return wr(e, function (i) {
        return t[~~r(i)];
      });
    },
    _u = function a(t, r, e) {
      var i = r - t;
      return qt(t)
        ? ea(t, a(0, t.length), r)
        : wr(e, function (n) {
            return ((i + ((n - t) % i)) % i) + t;
          });
    },
    du = function a(t, r, e) {
      var i = r - t,
        n = i * 2;
      return qt(t)
        ? ea(t, a(0, t.length - 1), r)
        : wr(e, function (s) {
            return (s = (n + ((s - t) % n)) % n || 0), t + (s > i ? n - s : s);
          });
    },
    fi = function (t) {
      for (var r = 0, e = "", i, n, s, o; ~(i = t.indexOf("random(", r)); )
        (s = t.indexOf(")", i)),
          (o = t.charAt(i + 7) === "["),
          (n = t.substr(i + 7, s - i - 7).match(o ? Fo : cs)),
          (e +=
            t.substr(r, i - r) +
            ta(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5)),
          (r = s + 1);
      return e + t.substr(r, t.length - r);
    },
    ra = function (t, r, e, i, n) {
      var s = r - t,
        o = i - e;
      return wr(n, function (l) {
        return e + (((l - t) / s) * o || 0);
      });
    },
    pu = function a(t, r, e, i) {
      var n = isNaN(t + r)
        ? 0
        : function (f) {
            return (1 - f) * t + f * r;
          };
      if (!n) {
        var s = Mt(t),
          o = {},
          l,
          u,
          c,
          d,
          h;
        if ((e === !0 && (i = 1) && (e = null), s))
          (t = { p: t }), (r = { p: r });
        else if (qt(t) && !qt(r)) {
          for (c = [], d = t.length, h = d - 2, u = 1; u < d; u++)
            c.push(a(t[u - 1], t[u]));
          d--,
            (n = function (p) {
              p *= d;
              var _ = Math.min(h, ~~p);
              return c[_](p - _);
            }),
            (e = r);
        } else i || (t = Yr(qt(t) ? [] : {}, t));
        if (!c) {
          for (l in r) Rs.call(o, t, l, "get", r[l]);
          n = function (p) {
            return Is(p, o) || (s ? t.p : t);
          };
        }
      }
      return wr(e, n);
    },
    Lo = function (t, r, e) {
      var i = t.labels,
        n = Ee,
        s,
        o,
        l;
      for (s in i)
        (o = i[s] - r),
          o < 0 == !!e && o && n > (o = Math.abs(o)) && ((l = s), (n = o));
      return l;
    },
    Me = function (t, r, e) {
      var i = t.vars,
        n = i[r],
        s = dt,
        o = t._ctx,
        l,
        u,
        c;
      if (n)
        return (
          (l = i[r + "Params"]),
          (u = i.callbackScope || t),
          e && vr.length && dn(),
          o && (dt = o),
          (c = l ? n.apply(u, l) : n.call(u)),
          (dt = s),
          c
        );
    },
    Li = function (t) {
      return (
        xr(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!Vt),
        t.progress() < 1 && Me(t, "onInterrupt"),
        t
      );
    },
    oi,
    ia = [],
    na = function (t) {
      if (ws() && t) {
        t = (!t.name && t.default) || t;
        var r = t.name,
          e = pt(t),
          i =
            r && !e && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: Ni,
            render: Is,
            add: Rs,
            kill: Ru,
            modifier: ku,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: Sn,
            aliases: {},
            register: 0,
          };
        if ((ci(), t !== i)) {
          if (ce[r]) return;
          Oe(i, Oe(pn(t, n), s)),
            Yr(i.prototype, Yr(n, pn(t, s))),
            (ce[(i.prop = r)] = i),
            t.targetTest && (cn.push(i), (Es[r] = 1)),
            (r =
              (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) +
              "Plugin");
        }
        Wo(r, i), t.register && t.register(Ut, i, Jt);
      } else t && ia.push(t);
    },
    rt = 255,
    Ai = {
      aqua: [0, rt, rt],
      lime: [0, rt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, rt],
      navy: [0, 0, 128],
      white: [rt, rt, rt],
      olive: [128, 128, 0],
      yellow: [rt, rt, 0],
      orange: [rt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [rt, 0, 0],
      pink: [rt, 192, 203],
      cyan: [0, rt, rt],
      transparent: [rt, rt, rt, 0],
    },
    ns = function (t, r, e) {
      return (
        (t += t < 0 ? 1 : t > 1 ? -1 : 0),
        ((t * 6 < 1
          ? r + (e - r) * t * 6
          : t < 0.5
          ? e
          : t * 3 < 2
          ? r + (e - r) * (2 / 3 - t) * 6
          : r) *
          rt +
          0.5) |
          0
      );
    },
    sa = function (t, r, e) {
      var i = t ? (sr(t) ? [t >> 16, (t >> 8) & rt, t & rt] : 0) : Ai.black,
        n,
        s,
        o,
        l,
        u,
        c,
        d,
        h,
        f,
        p;
      if (!i) {
        if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Ai[t]))
          i = Ai[t];
        else if (t.charAt(0) === "#") {
          if (
            (t.length < 6 &&
              ((n = t.charAt(1)),
              (s = t.charAt(2)),
              (o = t.charAt(3)),
              (t =
                "#" +
                n +
                n +
                s +
                s +
                o +
                o +
                (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
            t.length === 9)
          )
            return (
              (i = parseInt(t.substr(1, 6), 16)),
              [i >> 16, (i >> 8) & rt, i & rt, parseInt(t.substr(7), 16) / 255]
            );
          (t = parseInt(t.substr(1), 16)),
            (i = [t >> 16, (t >> 8) & rt, t & rt]);
        } else if (t.substr(0, 3) === "hsl") {
          if (((i = p = t.match(cs)), !r))
            (l = (+i[0] % 360) / 360),
              (u = +i[1] / 100),
              (c = +i[2] / 100),
              (s = c <= 0.5 ? c * (u + 1) : c + u - c * u),
              (n = c * 2 - s),
              i.length > 3 && (i[3] *= 1),
              (i[0] = ns(l + 1 / 3, n, s)),
              (i[1] = ns(l, n, s)),
              (i[2] = ns(l - 1 / 3, n, s));
          else if (~t.indexOf("="))
            return (i = t.match(Ts)), e && i.length < 4 && (i[3] = 1), i;
        } else i = t.match(cs) || Ai.transparent;
        i = i.map(Number);
      }
      return (
        r &&
          !p &&
          ((n = i[0] / rt),
          (s = i[1] / rt),
          (o = i[2] / rt),
          (d = Math.max(n, s, o)),
          (h = Math.min(n, s, o)),
          (c = (d + h) / 2),
          d === h
            ? (l = u = 0)
            : ((f = d - h),
              (u = c > 0.5 ? f / (2 - d - h) : f / (d + h)),
              (l =
                d === n
                  ? (s - o) / f + (s < o ? 6 : 0)
                  : d === s
                  ? (o - n) / f + 2
                  : (n - s) / f + 4),
              (l *= 60)),
          (i[0] = ~~(l + 0.5)),
          (i[1] = ~~(u * 100 + 0.5)),
          (i[2] = ~~(c * 100 + 0.5))),
        e && i.length < 4 && (i[3] = 1),
        i
      );
    },
    oa = function (t) {
      var r = [],
        e = [],
        i = -1;
      return (
        t.split(nr).forEach(function (n) {
          var s = n.match(Wr) || [];
          r.push.apply(r, s), e.push((i += s.length + 1));
        }),
        (r.c = e),
        r
      );
    },
    Ao = function (t, r, e) {
      var i = "",
        n = (t + i).match(nr),
        s = r ? "hsla(" : "rgba(",
        o = 0,
        l,
        u,
        c,
        d;
      if (!n) return t;
      if (
        ((n = n.map(function (h) {
          return (
            (h = sa(h, r, 1)) &&
            s +
              (r
                ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3]
                : h.join(",")) +
              ")"
          );
        })),
        e && ((c = oa(t)), (l = e.c), l.join(i) !== c.c.join(i)))
      )
        for (u = t.replace(nr, "1").split(Wr), d = u.length - 1; o < d; o++)
          i +=
            u[o] +
            (~l.indexOf(o)
              ? n.shift() || s + "0,0,0,0)"
              : (c.length ? c : n.length ? n : e).shift());
      if (!u)
        for (u = t.split(nr), d = u.length - 1; o < d; o++) i += u[o] + n[o];
      return i + u[d];
    },
    nr = (function () {
      var a =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
        t;
      for (t in Ai) a += "|" + t + "\\b";
      return new RegExp(a + ")", "gi");
    })(),
    gu = /hsl[a]?\(/,
    Ps = function (t) {
      var r = t.join(" "),
        e;
      if (((nr.lastIndex = 0), nr.test(r)))
        return (
          (e = gu.test(r)),
          (t[1] = Ao(t[1], e)),
          (t[0] = Ao(t[0], e, oa(t[1]))),
          !0
        );
    },
    Fi,
    fe = (function () {
      var a = Date.now,
        t = 500,
        r = 33,
        e = a(),
        i = e,
        n = 1e3 / 240,
        s = n,
        o = [],
        l,
        u,
        c,
        d,
        h,
        f,
        p = function _(m) {
          var T = a() - i,
            w = m === !0,
            b,
            v,
            S,
            C;
          if (
            (T > t && (e += T - r),
            (i += T),
            (S = i - e),
            (b = S - s),
            (b > 0 || w) &&
              ((C = ++d.frame),
              (h = S - d.time * 1e3),
              (d.time = S = S / 1e3),
              (s += b + (b >= n ? 4 : n - b)),
              (v = 1)),
            w || (l = u(_)),
            v)
          )
            for (f = 0; f < o.length; f++) o[f](S, h, C, m);
        };
      return (
        (d = {
          time: 0,
          frame: 0,
          tick: function () {
            p(!0);
          },
          deltaRatio: function (m) {
            return h / (1e3 / (m || 60));
          },
          wake: function () {
            Bo &&
              (!fs &&
                ws() &&
                ((be = fs = window),
                (bs = be.document || {}),
                (ve.gsap = Ut),
                (be.gsapVersions || (be.gsapVersions = [])).push(Ut.version),
                Yo(hn || be.GreenSockGlobals || (!be.gsap && be) || {}),
                (c = be.requestAnimationFrame),
                ia.forEach(na)),
              l && d.sleep(),
              (u =
                c ||
                function (m) {
                  return setTimeout(m, (s - d.time * 1e3 + 1) | 0);
                }),
              (Fi = 1),
              p(2));
          },
          sleep: function () {
            (c ? be.cancelAnimationFrame : clearTimeout)(l), (Fi = 0), (u = Ni);
          },
          lagSmoothing: function (m, T) {
            (t = m || 1 / 0), (r = Math.min(T || 33, t));
          },
          fps: function (m) {
            (n = 1e3 / (m || 240)), (s = d.time * 1e3 + n);
          },
          add: function (m, T, w) {
            var b = T
              ? function (v, S, C, x) {
                  m(v, S, C, x), d.remove(b);
                }
              : m;
            return d.remove(m), o[w ? "unshift" : "push"](b), ci(), b;
          },
          remove: function (m, T) {
            ~(T = o.indexOf(m)) && o.splice(T, 1) && f >= T && f--;
          },
          _listeners: o,
        }),
        d
      );
    })(),
    ci = function () {
      return !Fi && fe.wake();
    },
    U = {},
    mu = /^[\d.\-M][\d.\-,\s]/,
    vu = /["']/g,
    yu = function (t) {
      for (
        var r = {},
          e = t.substr(1, t.length - 3).split(":"),
          i = e[0],
          n = 1,
          s = e.length,
          o,
          l,
          u;
        n < s;
        n++
      )
        (l = e[n]),
          (o = n !== s - 1 ? l.lastIndexOf(",") : l.length),
          (u = l.substr(0, o)),
          (r[i] = isNaN(u) ? u.replace(vu, "").trim() : +u),
          (i = l.substr(o + 1).trim());
      return r;
    },
    xu = function (t) {
      var r = t.indexOf("(") + 1,
        e = t.indexOf(")"),
        i = t.indexOf("(", r);
      return t.substring(r, ~i && i < e ? t.indexOf(")", e + 1) : e);
    },
    wu = function (t) {
      var r = (t + "").split("("),
        e = U[r[0]];
      return e && r.length > 1 && e.config
        ? e.config.apply(
            null,
            ~t.indexOf("{") ? [yu(r[1])] : xu(t).split(",").map(qo)
          )
        : U._CE && mu.test(t)
        ? U._CE("", t)
        : e;
    },
    aa = function (t) {
      return function (r) {
        return 1 - t(1 - r);
      };
    },
    la = function a(t, r) {
      for (var e = t._first, i; e; )
        e instanceof Xt
          ? a(e, r)
          : e.vars.yoyoEase &&
            (!e._yoyo || !e._repeat) &&
            e._yoyo !== r &&
            (e.timeline
              ? a(e.timeline, r)
              : ((i = e._ease),
                (e._ease = e._yEase),
                (e._yEase = i),
                (e._yoyo = r))),
          (e = e._next);
    },
    Fr = function (t, r) {
      return (t && (pt(t) ? t : U[t] || wu(t))) || r;
    },
    Vr = function (t, r, e, i) {
      e === void 0 &&
        (e = function (l) {
          return 1 - r(1 - l);
        }),
        i === void 0 &&
          (i = function (l) {
            return l < 0.5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2;
          });
      var n = { easeIn: r, easeOut: e, easeInOut: i },
        s;
      return (
        jt(t, function (o) {
          (U[o] = ve[o] = n), (U[(s = o.toLowerCase())] = e);
          for (var l in n)
            U[
              s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
            ] = U[o + "." + l] = n[l];
        }),
        n
      );
    },
    ua = function (t) {
      return function (r) {
        return r < 0.5 ? (1 - t(1 - r * 2)) / 2 : 0.5 + t((r - 0.5) * 2) / 2;
      };
    },
    ss = function a(t, r, e) {
      var i = r >= 1 ? r : 1,
        n = (e || (t ? 0.3 : 0.45)) / (r < 1 ? r : 1),
        s = (n / us) * (Math.asin(1 / i) || 0),
        o = function (c) {
          return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Kl((c - s) * n) + 1;
        },
        l =
          t === "out"
            ? o
            : t === "in"
            ? function (u) {
                return 1 - o(1 - u);
              }
            : ua(o);
      return (
        (n = us / n),
        (l.config = function (u, c) {
          return a(t, u, c);
        }),
        l
      );
    },
    os = function a(t, r) {
      r === void 0 && (r = 1.70158);
      var e = function (s) {
          return s ? --s * s * ((r + 1) * s + r) + 1 : 0;
        },
        i =
          t === "out"
            ? e
            : t === "in"
            ? function (n) {
                return 1 - e(1 - n);
              }
            : ua(e);
      return (
        (i.config = function (n) {
          return a(t, n);
        }),
        i
      );
    };
  jt("Linear,Quad,Cubic,Quart,Quint,Strong", function (a, t) {
    var r = t < 5 ? t + 1 : t;
    Vr(
      a + ",Power" + (r - 1),
      t
        ? function (e) {
            return Math.pow(e, r);
          }
        : function (e) {
            return e;
          },
      function (e) {
        return 1 - Math.pow(1 - e, r);
      },
      function (e) {
        return e < 0.5
          ? Math.pow(e * 2, r) / 2
          : 1 - Math.pow((1 - e) * 2, r) / 2;
      }
    );
  });
  U.Linear.easeNone = U.none = U.Linear.easeIn;
  Vr("Elastic", ss("in"), ss("out"), ss());
  (function (a, t) {
    var r = 1 / t,
      e = 2 * r,
      i = 2.5 * r,
      n = function (o) {
        return o < r
          ? a * o * o
          : o < e
          ? a * Math.pow(o - 1.5 / t, 2) + 0.75
          : o < i
          ? a * (o -= 2.25 / t) * o + 0.9375
          : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
      };
    Vr(
      "Bounce",
      function (s) {
        return 1 - n(1 - s);
      },
      n
    );
  })(7.5625, 2.75);
  Vr("Expo", function (a) {
    return a ? Math.pow(2, 10 * (a - 1)) : 0;
  });
  Vr("Circ", function (a) {
    return -(Io(1 - a * a) - 1);
  });
  Vr("Sine", function (a) {
    return a === 1 ? 1 : -$l(a * Hl) + 1;
  });
  Vr("Back", os("in"), os("out"), os());
  U.SteppedEase =
    U.steps =
    ve.SteppedEase =
      {
        config: function (t, r) {
          t === void 0 && (t = 1);
          var e = 1 / t,
            i = t + (r ? 0 : 1),
            n = r ? 1 : 0,
            s = 1 - it;
          return function (o) {
            return (((i * Yi(0, s, o)) | 0) + n) * e;
          };
        },
      };
  ai.ease = U["quad.out"];
  jt(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (a) {
      return (Cs += a + "," + a + "Params,");
    }
  );
  var ks = function (t, r) {
      (this.id = Gl++),
        (t._gsap = this),
        (this.target = t),
        (this.harness = r),
        (this.get = r ? r.get : Os),
        (this.set = r ? r.getSetter : Sn);
    },
    Bi = (function () {
      function a(r) {
        (this.vars = r),
          (this._delay = +r.delay || 0),
          (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) &&
            ((this._rDelay = r.repeatDelay || 0),
            (this._yoyo = !!r.yoyo || !!r.yoyoEase)),
          (this._ts = 1),
          ui(this, +r.duration, 1, 1),
          (this.data = r.data),
          dt && ((this._ctx = dt), dt.data.push(this)),
          Fi || fe.wake();
      }
      var t = a.prototype;
      return (
        (t.delay = function (e) {
          return e || e === 0
            ? (this.parent &&
                this.parent.smoothChildTiming &&
                this.startTime(this._start + e - this._delay),
              (this._delay = e),
              this)
            : this._delay;
        }),
        (t.duration = function (e) {
          return arguments.length
            ? this.totalDuration(
                this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e
              )
            : this.totalDuration() && this._dur;
        }),
        (t.totalDuration = function (e) {
          return arguments.length
            ? ((this._dirty = 0),
              ui(
                this,
                this._repeat < 0
                  ? e
                  : (e - this._repeat * this._rDelay) / (this._repeat + 1)
              ))
            : this._tDur;
        }),
        (t.totalTime = function (e, i) {
          if ((ci(), !arguments.length)) return this._tTime;
          var n = this._dp;
          if (n && n.smoothChildTiming && this._ts) {
            for (
              Tn(this, e), !n._dp || n.parent || Go(n, this);
              n && n.parent;

            )
              n.parent._time !==
                n._start +
                  (n._ts >= 0
                    ? n._tTime / n._ts
                    : (n.totalDuration() - n._tTime) / -n._ts) &&
                n.totalTime(n._tTime, !0),
                (n = n.parent);
            !this.parent &&
              this._dp.autoRemoveChildren &&
              ((this._ts > 0 && e < this._tDur) ||
                (this._ts < 0 && e > 0) ||
                (!this._tDur && !e)) &&
              Ke(this._dp, this, this._start - this._delay);
          }
          return (
            (this._tTime !== e ||
              (!this._dur && !i) ||
              (this._initted && Math.abs(this._zTime) === it) ||
              (!e && !this._initted && (this.add || this._ptLookup))) &&
              (this._ts || (this._pTime = e), Vo(this, e, i)),
            this
          );
        }),
        (t.time = function (e, i) {
          return arguments.length
            ? this.totalTime(
                Math.min(this.totalDuration(), e + ko(this)) %
                  (this._dur + this._rDelay) || (e ? this._dur : 0),
                i
              )
            : this._time;
        }),
        (t.totalProgress = function (e, i) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * e, i)
            : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.ratio;
        }),
        (t.progress = function (e, i) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) +
                  ko(this),
                i
              )
            : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.ratio;
        }),
        (t.iteration = function (e, i) {
          var n = this.duration() + this._rDelay;
          return arguments.length
            ? this.totalTime(this._time + (e - 1) * n, i)
            : this._repeat
            ? li(this._tTime, n) + 1
            : 1;
        }),
        (t.timeScale = function (e) {
          if (!arguments.length) return this._rts === -it ? 0 : this._rts;
          if (this._rts === e) return this;
          var i =
            this.parent && this._ts ? gn(this.parent._time, this) : this._tTime;
          return (
            (this._rts = +e || 0),
            (this._ts = this._ps || e === -it ? 0 : this._rts),
            this.totalTime(Yi(-Math.abs(this._delay), this._tDur, i), !0),
            wn(this),
            ru(this)
          );
        }),
        (t.paused = function (e) {
          return arguments.length
            ? (this._ps !== e &&
                ((this._ps = e),
                e
                  ? ((this._pTime =
                      this._tTime || Math.max(-this._delay, this.rawTime())),
                    (this._ts = this._act = 0))
                  : (ci(),
                    (this._ts = this._rts),
                    this.totalTime(
                      this.parent && !this.parent.smoothChildTiming
                        ? this.rawTime()
                        : this._tTime || this._pTime,
                      this.progress() === 1 &&
                        Math.abs(this._zTime) !== it &&
                        (this._tTime -= it)
                    ))),
              this)
            : this._ps;
        }),
        (t.startTime = function (e) {
          if (arguments.length) {
            this._start = e;
            var i = this.parent || this._dp;
            return (
              i && (i._sort || !this.parent) && Ke(i, this, e - this._delay),
              this
            );
          }
          return this._start;
        }),
        (t.endTime = function (e) {
          return (
            this._start +
            (he(e) ? this.totalDuration() : this.duration()) /
              Math.abs(this._ts || 1)
          );
        }),
        (t.rawTime = function (e) {
          var i = this.parent || this._dp;
          return i
            ? e &&
              (!this._ts ||
                (this._repeat && this._time && this.totalProgress() < 1))
              ? this._tTime % (this._dur + this._rDelay)
              : this._ts
              ? gn(i.rawTime(e), this)
              : this._tTime
            : this._tTime;
        }),
        (t.revert = function (e) {
          e === void 0 && (e = jl);
          var i = Vt;
          return (
            (Vt = e),
            (this._initted || this._startAt) &&
              (this.timeline && this.timeline.revert(e),
              this.totalTime(-0.01, e.suppressEvents)),
            this.data !== "nested" && e.kill !== !1 && this.kill(),
            (Vt = i),
            this
          );
        }),
        (t.globalTime = function (e) {
          for (var i = this, n = arguments.length ? e : i.rawTime(); i; )
            (n = i._start + n / (i._ts || 1)), (i = i._dp);
          return !this.parent && this._sat
            ? this._sat.vars.immediateRender
              ? -1 / 0
              : this._sat.globalTime(e)
            : n;
        }),
        (t.repeat = function (e) {
          return arguments.length
            ? ((this._repeat = e === 1 / 0 ? -2 : e), Ro(this))
            : this._repeat === -2
            ? 1 / 0
            : this._repeat;
        }),
        (t.repeatDelay = function (e) {
          if (arguments.length) {
            var i = this._time;
            return (this._rDelay = e), Ro(this), i ? this.time(i) : this;
          }
          return this._rDelay;
        }),
        (t.yoyo = function (e) {
          return arguments.length ? ((this._yoyo = e), this) : this._yoyo;
        }),
        (t.seek = function (e, i) {
          return this.totalTime(Se(this, e), he(i));
        }),
        (t.restart = function (e, i) {
          return this.play().totalTime(e ? -this._delay : 0, he(i));
        }),
        (t.play = function (e, i) {
          return e != null && this.seek(e, i), this.reversed(!1).paused(!1);
        }),
        (t.reverse = function (e, i) {
          return (
            e != null && this.seek(e || this.totalDuration(), i),
            this.reversed(!0).paused(!1)
          );
        }),
        (t.pause = function (e, i) {
          return e != null && this.seek(e, i), this.paused(!0);
        }),
        (t.resume = function () {
          return this.paused(!1);
        }),
        (t.reversed = function (e) {
          return arguments.length
            ? (!!e !== this.reversed() &&
                this.timeScale(-this._rts || (e ? -it : 0)),
              this)
            : this._rts < 0;
        }),
        (t.invalidate = function () {
          return (this._initted = this._act = 0), (this._zTime = -it), this;
        }),
        (t.isActive = function () {
          var e = this.parent || this._dp,
            i = this._start,
            n;
          return !!(
            !e ||
            (this._ts &&
              this._initted &&
              e.isActive() &&
              (n = e.rawTime(!0)) >= i &&
              n < this.endTime(!0) - it)
          );
        }),
        (t.eventCallback = function (e, i, n) {
          var s = this.vars;
          return arguments.length > 1
            ? (i
                ? ((s[e] = i),
                  n && (s[e + "Params"] = n),
                  e === "onUpdate" && (this._onUpdate = i))
                : delete s[e],
              this)
            : s[e];
        }),
        (t.then = function (e) {
          var i = this;
          return new Promise(function (n) {
            var s = pt(e) ? e : Uo,
              o = function () {
                var u = i.then;
                (i.then = null),
                  pt(s) && (s = s(i)) && (s.then || s === i) && (i.then = u),
                  n(s),
                  (i.then = u);
              };
            (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
            (!i._tTime && i._ts < 0)
              ? o()
              : (i._prom = o);
          });
        }),
        (t.kill = function () {
          Li(this);
        }),
        a
      );
    })();
  Oe(Bi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -it,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Xt = (function (a) {
    zo(t, a);
    function t(e, i) {
      var n;
      return (
        e === void 0 && (e = {}),
        (n = a.call(this, e) || this),
        (n.labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = he(e.sortChildren)),
        ut && Ke(e.parent || ut, ir(n), i),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && $o(ir(n), e.scrollTrigger),
        n
      );
    }
    var r = t.prototype;
    return (
      (r.to = function (i, n, s) {
        return zi(0, arguments, this), this;
      }),
      (r.from = function (i, n, s) {
        return zi(1, arguments, this), this;
      }),
      (r.fromTo = function (i, n, s, o) {
        return zi(2, arguments, this), this;
      }),
      (r.set = function (i, n, s) {
        return (
          (n.duration = 0),
          (n.parent = this),
          Di(n).repeatDelay || (n.repeat = 0),
          (n.immediateRender = !!n.immediateRender),
          new yt(i, n, Se(this, s), 1),
          this
        );
      }),
      (r.call = function (i, n, s) {
        return Ke(this, yt.delayedCall(0, i, n), s);
      }),
      (r.staggerTo = function (i, n, s, o, l, u, c) {
        return (
          (s.duration = n),
          (s.stagger = s.stagger || o),
          (s.onComplete = u),
          (s.onCompleteParams = c),
          (s.parent = this),
          new yt(i, s, Se(this, l)),
          this
        );
      }),
      (r.staggerFrom = function (i, n, s, o, l, u, c) {
        return (
          (s.runBackwards = 1),
          (Di(s).immediateRender = he(s.immediateRender)),
          this.staggerTo(i, n, s, o, l, u, c)
        );
      }),
      (r.staggerFromTo = function (i, n, s, o, l, u, c, d) {
        return (
          (o.startAt = s),
          (Di(o).immediateRender = he(o.immediateRender)),
          this.staggerTo(i, n, o, l, u, c, d)
        );
      }),
      (r.render = function (i, n, s) {
        var o = this._time,
          l = this._dirty ? this.totalDuration() : this._tDur,
          u = this._dur,
          c = i <= 0 ? 0 : zt(i),
          d = this._zTime < 0 != i < 0 && (this._initted || !u),
          h,
          f,
          p,
          _,
          m,
          T,
          w,
          b,
          v,
          S,
          C,
          x;
        if (
          (this !== ut && c > l && i >= 0 && (c = l),
          c !== this._tTime || s || d)
        ) {
          if (
            (o !== this._time &&
              u &&
              ((c += this._time - o), (i += this._time - o)),
            (h = c),
            (v = this._start),
            (b = this._ts),
            (T = !b),
            d && (u || (o = this._zTime), (i || !n) && (this._zTime = i)),
            this._repeat)
          ) {
            if (
              ((C = this._yoyo),
              (m = u + this._rDelay),
              this._repeat < -1 && i < 0)
            )
              return this.totalTime(m * 100 + i, n, s);
            if (
              ((h = zt(c % m)),
              c === l
                ? ((_ = this._repeat), (h = u))
                : ((_ = ~~(c / m)),
                  _ && _ === c / m && ((h = u), _--),
                  h > u && (h = u)),
              (S = li(this._tTime, m)),
              !o &&
                this._tTime &&
                S !== _ &&
                this._tTime - S * m - this._dur <= 0 &&
                (S = _),
              C && _ & 1 && ((h = u - h), (x = 1)),
              _ !== S && !this._lock)
            ) {
              var M = C && S & 1,
                E = M === (C && _ & 1);
              if (
                (_ < S && (M = !M),
                (o = M ? 0 : c % u ? u : c),
                (this._lock = 1),
                (this.render(o || (x ? 0 : zt(_ * m)), n, !u)._lock = 0),
                (this._tTime = c),
                !n && this.parent && Me(this, "onRepeat"),
                this.vars.repeatRefresh && !x && (this.invalidate()._lock = 1),
                (o && o !== this._time) ||
                  T !== !this._ts ||
                  (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((u = this._dur),
                (l = this._tDur),
                E &&
                  ((this._lock = 2),
                  (o = M ? u : -1e-4),
                  this.render(o, !0),
                  this.vars.repeatRefresh && !x && this.invalidate()),
                (this._lock = 0),
                !this._ts && !T)
              )
                return this;
              la(this, x);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              ((w = ou(this, zt(o), zt(h))), w && (c -= h - (h = w._start))),
            (this._tTime = c),
            (this._time = h),
            (this._act = !b),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = i),
              (o = 0)),
            !o && h && !n && !_ && (Me(this, "onStart"), this._tTime !== c))
          )
            return this;
          if (h >= o && i >= 0)
            for (f = this._first; f; ) {
              if (
                ((p = f._next), (f._act || h >= f._start) && f._ts && w !== f)
              ) {
                if (f.parent !== this) return this.render(i, n, s);
                if (
                  (f.render(
                    f._ts > 0
                      ? (h - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (h - f._start) * f._ts,
                    n,
                    s
                  ),
                  h !== this._time || (!this._ts && !T))
                ) {
                  (w = 0), p && (c += this._zTime = -it);
                  break;
                }
              }
              f = p;
            }
          else {
            f = this._last;
            for (var O = i < 0 ? i : h; f; ) {
              if (
                ((p = f._prev), (f._act || O <= f._end) && f._ts && w !== f)
              ) {
                if (f.parent !== this) return this.render(i, n, s);
                if (
                  (f.render(
                    f._ts > 0
                      ? (O - f._start) * f._ts
                      : (f._dirty ? f.totalDuration() : f._tDur) +
                          (O - f._start) * f._ts,
                    n,
                    s || (Vt && (f._initted || f._startAt))
                  ),
                  h !== this._time || (!this._ts && !T))
                ) {
                  (w = 0), p && (c += this._zTime = O ? -it : it);
                  break;
                }
              }
              f = p;
            }
          }
          if (
            w &&
            !n &&
            (this.pause(),
            (w.render(h >= o ? 0 : -it)._zTime = h >= o ? 1 : -1),
            this._ts)
          )
            return (this._start = v), wn(this), this.render(i, n, s);
          this._onUpdate && !n && Me(this, "onUpdate", !0),
            ((c === l && this._tTime >= this.totalDuration()) || (!c && o)) &&
              (v === this._start || Math.abs(b) !== Math.abs(this._ts)) &&
              (this._lock ||
                ((i || !u) &&
                  ((c === l && this._ts > 0) || (!c && this._ts < 0)) &&
                  xr(this, 1),
                !n &&
                  !(i < 0 && !o) &&
                  (c || o || !l) &&
                  (Me(
                    this,
                    c === l && i >= 0 ? "onComplete" : "onReverseComplete",
                    !0
                  ),
                  this._prom &&
                    !(c < l && this.timeScale() > 0) &&
                    this._prom())));
        }
        return this;
      }),
      (r.add = function (i, n) {
        var s = this;
        if ((sr(n) || (n = Se(this, n, i)), !(i instanceof Bi))) {
          if (qt(i))
            return (
              i.forEach(function (o) {
                return s.add(o, n);
              }),
              this
            );
          if (Mt(i)) return this.addLabel(i, n);
          if (pt(i)) i = yt.delayedCall(0, i);
          else return this;
        }
        return this !== i ? Ke(this, i, n) : this;
      }),
      (r.getChildren = function (i, n, s, o) {
        i === void 0 && (i = !0),
          n === void 0 && (n = !0),
          s === void 0 && (s = !0),
          o === void 0 && (o = -Ee);
        for (var l = [], u = this._first; u; )
          u._start >= o &&
            (u instanceof yt
              ? n && l.push(u)
              : (s && l.push(u),
                i && l.push.apply(l, u.getChildren(!0, n, s)))),
            (u = u._next);
        return l;
      }),
      (r.getById = function (i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
          if (n[s].vars.id === i) return n[s];
      }),
      (r.remove = function (i) {
        return Mt(i)
          ? this.removeLabel(i)
          : pt(i)
          ? this.killTweensOf(i)
          : (xn(this, i),
            i === this._recent && (this._recent = this._last),
            Nr(this));
      }),
      (r.totalTime = function (i, n) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = zt(
                fe.time -
                  (this._ts > 0
                    ? i / this._ts
                    : (this.totalDuration() - i) / -this._ts)
              )),
            a.prototype.totalTime.call(this, i, n),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (r.addLabel = function (i, n) {
        return (this.labels[i] = Se(this, n)), this;
      }),
      (r.removeLabel = function (i) {
        return delete this.labels[i], this;
      }),
      (r.addPause = function (i, n, s) {
        var o = yt.delayedCall(0, n || Ni, s);
        return (
          (o.data = "isPause"), (this._hasPause = 1), Ke(this, o, Se(this, i))
        );
      }),
      (r.removePause = function (i) {
        var n = this._first;
        for (i = Se(this, i); n; )
          n._start === i && n.data === "isPause" && xr(n), (n = n._next);
      }),
      (r.killTweensOf = function (i, n, s) {
        for (var o = this.getTweensOf(i, s), l = o.length; l--; )
          mr !== o[l] && o[l].kill(i, n);
        return this;
      }),
      (r.getTweensOf = function (i, n) {
        for (var s = [], o = Ce(i), l = this._first, u = sr(n), c; l; )
          l instanceof yt
            ? Jl(l._targets, o) &&
              (u
                ? (!mr || (l._initted && l._ts)) &&
                  l.globalTime(0) <= n &&
                  l.globalTime(l.totalDuration()) > n
                : !n || l.isActive()) &&
              s.push(l)
            : (c = l.getTweensOf(o, n)).length && s.push.apply(s, c),
            (l = l._next);
        return s;
      }),
      (r.tweenTo = function (i, n) {
        n = n || {};
        var s = this,
          o = Se(s, i),
          l = n,
          u = l.startAt,
          c = l.onStart,
          d = l.onStartParams,
          h = l.immediateRender,
          f,
          p = yt.to(
            s,
            Oe(
              {
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration:
                  n.duration ||
                  Math.abs(
                    (o - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                  ) ||
                  it,
                onStart: function () {
                  if ((s.pause(), !f)) {
                    var m =
                      n.duration ||
                      Math.abs(
                        (o - (u && "time" in u ? u.time : s._time)) /
                          s.timeScale()
                      );
                    p._dur !== m && ui(p, m, 0, 1).render(p._time, !0, !0),
                      (f = 1);
                  }
                  c && c.apply(p, d || []);
                },
              },
              n
            )
          );
        return h ? p.render(0) : p;
      }),
      (r.tweenFromTo = function (i, n, s) {
        return this.tweenTo(n, Oe({ startAt: { time: Se(this, i) } }, s));
      }),
      (r.recent = function () {
        return this._recent;
      }),
      (r.nextLabel = function (i) {
        return i === void 0 && (i = this._time), Lo(this, Se(this, i));
      }),
      (r.previousLabel = function (i) {
        return i === void 0 && (i = this._time), Lo(this, Se(this, i), 1);
      }),
      (r.currentLabel = function (i) {
        return arguments.length
          ? this.seek(i, !0)
          : this.previousLabel(this._time + it);
      }),
      (r.shiftChildren = function (i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, l = this.labels, u; o; )
          o._start >= s && ((o._start += i), (o._end += i)), (o = o._next);
        if (n) for (u in l) l[u] >= s && (l[u] += i);
        return Nr(this);
      }),
      (r.invalidate = function (i) {
        var n = this._first;
        for (this._lock = 0; n; ) n.invalidate(i), (n = n._next);
        return a.prototype.invalidate.call(this, i);
      }),
      (r.clear = function (i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n; )
          (s = n._next), this.remove(n), (n = s);
        return (
          this._dp && (this._time = this._tTime = this._pTime = 0),
          i && (this.labels = {}),
          Nr(this)
        );
      }),
      (r.totalDuration = function (i) {
        var n = 0,
          s = this,
          o = s._last,
          l = Ee,
          u,
          c,
          d;
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -i : i)
          );
        if (s._dirty) {
          for (d = s.parent; o; )
            (u = o._prev),
              o._dirty && o.totalDuration(),
              (c = o._start),
              c > l && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (Ke(s, o, c - o._delay, 1)._lock = 0))
                : (l = c),
              c < 0 &&
                o._ts &&
                ((n -= c),
                ((!d && !s._dp) || (d && d.smoothChildTiming)) &&
                  ((s._start += c / s._ts), (s._time -= c), (s._tTime -= c)),
                s.shiftChildren(-c, !1, -1 / 0),
                (l = 0)),
              o._end > n && o._ts && (n = o._end),
              (o = u);
          ui(s, s === ut && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (t.updateRoot = function (i) {
        if ((ut._ts && (Vo(ut, gn(i, ut)), (Xo = fe.frame)), fe.frame >= Oo)) {
          Oo += _e.autoSleep || 120;
          var n = ut._first;
          if ((!n || !n._ts) && _e.autoSleep && fe._listeners.length < 2) {
            for (; n && !n._ts; ) n = n._next;
            n || fe.sleep();
          }
        }
      }),
      t
    );
  })(Bi);
  Oe(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Tu = function (t, r, e, i, n, s, o) {
      var l = new Jt(this._pt, t, r, 0, 1, zs, null, n),
        u = 0,
        c = 0,
        d,
        h,
        f,
        p,
        _,
        m,
        T,
        w;
      for (
        l.b = e,
          l.e = i,
          e += "",
          i += "",
          (T = ~i.indexOf("random(")) && (i = fi(i)),
          s && ((w = [e, i]), s(w, t, r), (e = w[0]), (i = w[1])),
          h = e.match(rs) || [];
        (d = rs.exec(i));

      )
        (p = d[0]),
          (_ = i.substring(u, d.index)),
          f ? (f = (f + 1) % 5) : _.substr(-5) === "rgba(" && (f = 1),
          p !== h[c++] &&
            ((m = parseFloat(h[c - 1]) || 0),
            (l._pt = {
              _next: l._pt,
              p: _ || c === 1 ? _ : ",",
              s: m,
              c: p.charAt(1) === "=" ? Xr(m, p) - m : parseFloat(p) - m,
              m: f && f < 4 ? Math.round : 0,
            }),
            (u = rs.lastIndex));
      return (
        (l.c = u < i.length ? i.substring(u, i.length) : ""),
        (l.fp = o),
        (Ss.test(i) || T) && (l.e = 0),
        (this._pt = l),
        l
      );
    },
    Rs = function (t, r, e, i, n, s, o, l, u, c) {
      pt(i) && (i = i(n || 0, t, s));
      var d = t[r],
        h =
          e !== "get"
            ? e
            : pt(d)
            ? u
              ? t[
                  r.indexOf("set") || !pt(t["get" + r.substr(3)])
                    ? r
                    : "get" + r.substr(3)
                ](u)
              : t[r]()
            : d,
        f = pt(d) ? (u ? Mu : ha) : Ds,
        p;
      if (
        (Mt(i) &&
          (~i.indexOf("random(") && (i = fi(i)),
          i.charAt(1) === "=" &&
            ((p = Xr(h, i) + (It(h) || 0)), (p || p === 0) && (i = p))),
        !c || h !== i || vs)
      )
        return !isNaN(h * i) && i !== ""
          ? ((p = new Jt(
              this._pt,
              t,
              r,
              +h || 0,
              i - (h || 0),
              typeof d == "boolean" ? Pu : _a,
              0,
              f
            )),
            u && (p.fp = u),
            o && p.modifier(o, this, t),
            (this._pt = p))
          : (!d && !(r in t) && yn(r, i),
            Tu.call(this, t, r, h, i, f, l || _e.stringFilter, u));
    },
    Su = function (t, r, e, i, n) {
      if (
        (pt(t) && (t = Ii(t, n, r, e, i)),
        !Qe(t) || (t.style && t.nodeType) || qt(t) || No(t))
      )
        return Mt(t) ? Ii(t, n, r, e, i) : t;
      var s = {},
        o;
      for (o in t) s[o] = Ii(t[o], n, r, e, i);
      return s;
    },
    Ls = function (t, r, e, i, n, s) {
      var o, l, u, c;
      if (
        ce[t] &&
        (o = new ce[t]()).init(
          n,
          o.rawVars ? r[t] : Su(r[t], i, n, s, e),
          e,
          i,
          s
        ) !== !1 &&
        ((e._pt = l = new Jt(e._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
        e !== oi)
      )
        for (u = e._ptLookup[e._targets.indexOf(n)], c = o._props.length; c--; )
          u[o._props[c]] = l;
      return o;
    },
    mr,
    vs,
    As = function a(t, r, e) {
      var i = t.vars,
        n = i.ease,
        s = i.startAt,
        o = i.immediateRender,
        l = i.lazy,
        u = i.onUpdate,
        c = i.onUpdateParams,
        d = i.callbackScope,
        h = i.runBackwards,
        f = i.yoyoEase,
        p = i.keyframes,
        _ = i.autoRevert,
        m = t._dur,
        T = t._startAt,
        w = t._targets,
        b = t.parent,
        v = b && b.data === "nested" ? b.vars.targets : w,
        S = t._overwrite === "auto" && !xs,
        C = t.timeline,
        x,
        M,
        E,
        O,
        L,
        P,
        K,
        z,
        N,
        q,
        D,
        V,
        tt;
      if (
        (C && (!p || !n) && (n = "none"),
        (t._ease = Fr(n, ai.ease)),
        (t._yEase = f ? aa(Fr(f === !0 ? n : f, ai.ease)) : 0),
        f &&
          t._yoyo &&
          !t._repeat &&
          ((f = t._yEase), (t._yEase = t._ease), (t._ease = f)),
        (t._from = !C && !!i.runBackwards),
        !C || (p && !i.stagger))
      ) {
        if (
          ((z = w[0] ? yr(w[0]).harness : 0),
          (V = z && i[z.prop]),
          (x = pn(i, Es)),
          T &&
            (T._zTime < 0 && T.progress(1),
            r < 0 && h && o && !_
              ? T.render(-1, !0)
              : T.revert(h && m ? un : Zl),
            (T._lazy = 0)),
          s)
        ) {
          if (
            (xr(
              (t._startAt = yt.set(
                w,
                Oe(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: b,
                    immediateRender: !0,
                    lazy: !T && he(l),
                    startAt: null,
                    delay: 0,
                    onUpdate: u,
                    onUpdateParams: c,
                    callbackScope: d,
                    stagger: 0,
                  },
                  s
                )
              ))
            ),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (Vt || (!o && !_)) && t._startAt.revert(un),
            o && m && r <= 0 && e <= 0)
          ) {
            r && (t._zTime = r);
            return;
          }
        } else if (h && m && !T) {
          if (
            (r && (o = !1),
            (E = Oe(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: o && !T && he(l),
                immediateRender: o,
                stagger: 0,
                parent: b,
              },
              x
            )),
            V && (E[z.prop] = V),
            xr((t._startAt = yt.set(w, E))),
            (t._startAt._dp = 0),
            (t._startAt._sat = t),
            r < 0 && (Vt ? t._startAt.revert(un) : t._startAt.render(-1, !0)),
            (t._zTime = r),
            !o)
          )
            a(t._startAt, it, it);
          else if (!r) return;
        }
        for (
          t._pt = t._ptCache = 0, l = (m && he(l)) || (l && !m), M = 0;
          M < w.length;
          M++
        ) {
          if (
            ((L = w[M]),
            (K = L._gsap || Ms(w)[M]._gsap),
            (t._ptLookup[M] = q = {}),
            hs[K.id] && vr.length && dn(),
            (D = v === w ? M : v.indexOf(L)),
            z &&
              (N = new z()).init(L, V || x, t, D, v) !== !1 &&
              ((t._pt = O =
                new Jt(t._pt, L, N.name, 0, 1, N.render, N, 0, N.priority)),
              N._props.forEach(function (g) {
                q[g] = O;
              }),
              N.priority && (P = 1)),
            !z || V)
          )
            for (E in x)
              ce[E] && (N = Ls(E, x, t, D, L, v))
                ? N.priority && (P = 1)
                : (q[E] = O =
                    Rs.call(t, L, E, "get", x[E], D, v, 0, i.stringFilter));
          t._op && t._op[M] && t.kill(L, t._op[M]),
            S &&
              t._pt &&
              ((mr = t),
              ut.killTweensOf(L, q, t.globalTime(r)),
              (tt = !t.parent),
              (mr = 0)),
            t._pt && l && (hs[K.id] = 1);
        }
        P && Ns(t), t._onInit && t._onInit(t);
      }
      (t._onUpdate = u),
        (t._initted = (!t._op || t._pt) && !tt),
        p && r <= 0 && C.render(Ee, !0, !0);
    },
    bu = function (t, r, e, i, n, s, o) {
      var l = ((t._pt && t._ptCache) || (t._ptCache = {}))[r],
        u,
        c,
        d,
        h;
      if (!l)
        for (
          l = t._ptCache[r] = [], d = t._ptLookup, h = t._targets.length;
          h--;

        ) {
          if (((u = d[h][r]), u && u.d && u.d._pt))
            for (u = u.d._pt; u && u.p !== r && u.fp !== r; ) u = u._next;
          if (!u) return (vs = 1), (t.vars[r] = "+=0"), As(t, o), (vs = 0), 1;
          l.push(u);
        }
      for (h = l.length; h--; )
        (c = l[h]),
          (u = c._pt || c),
          (u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c),
          (u.c = e - u.s),
          c.e && (c.e = gt(e) + It(c.e)),
          c.b && (c.b = u.s + It(c.b));
    },
    Eu = function (t, r) {
      var e = t[0] ? yr(t[0]).harness : 0,
        i = e && e.aliases,
        n,
        s,
        o,
        l;
      if (!i) return r;
      n = Yr({}, r);
      for (s in i)
        if (s in n)
          for (l = i[s].split(","), o = l.length; o--; ) n[l[o]] = n[s];
      return n;
    },
    Cu = function (t, r, e, i) {
      var n = r.ease || i || "power1.inOut",
        s,
        o;
      if (qt(r))
        (o = e[t] || (e[t] = [])),
          r.forEach(function (l, u) {
            return o.push({ t: (u / (r.length - 1)) * 100, v: l, e: n });
          });
      else
        for (s in r)
          (o = e[s] || (e[s] = [])),
            s === "ease" || o.push({ t: parseFloat(t), v: r[s], e: n });
    },
    Ii = function (t, r, e, i, n) {
      return pt(t)
        ? t.call(r, e, i, n)
        : Mt(t) && ~t.indexOf("random(")
        ? fi(t)
        : t;
    },
    ca = Cs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    fa = {};
  jt(ca + ",id,stagger,delay,duration,paused,scrollTrigger", function (a) {
    return (fa[a] = 1);
  });
  var yt = (function (a) {
    zo(t, a);
    function t(e, i, n, s) {
      var o;
      typeof i == "number" && ((n.duration = i), (i = n), (n = null)),
        (o = a.call(this, s ? i : Di(i)) || this);
      var l = o.vars,
        u = l.duration,
        c = l.delay,
        d = l.immediateRender,
        h = l.stagger,
        f = l.overwrite,
        p = l.keyframes,
        _ = l.defaults,
        m = l.scrollTrigger,
        T = l.yoyoEase,
        w = i.parent || ut,
        b = (qt(e) || No(e) ? sr(e[0]) : "length" in i) ? [e] : Ce(e),
        v,
        S,
        C,
        x,
        M,
        E,
        O,
        L;
      if (
        ((o._targets = b.length
          ? Ms(b)
          : _n(
              "GSAP target " + e + " not found. https://greensock.com",
              !_e.nullTargetWarn
            ) || []),
        (o._ptLookup = []),
        (o._overwrite = f),
        p || h || ln(u) || ln(c))
      ) {
        if (
          ((i = o.vars),
          (v = o.timeline =
            new Xt({
              data: "nested",
              defaults: _ || {},
              targets: w && w.data === "nested" ? w.vars.targets : b,
            })),
          v.kill(),
          (v.parent = v._dp = ir(o)),
          (v._start = 0),
          h || ln(u) || ln(c))
        ) {
          if (((x = b.length), (O = h && jo(h)), Qe(h)))
            for (M in h) ~ca.indexOf(M) && (L || (L = {}), (L[M] = h[M]));
          for (S = 0; S < x; S++)
            (C = pn(i, fa)),
              (C.stagger = 0),
              T && (C.yoyoEase = T),
              L && Yr(C, L),
              (E = b[S]),
              (C.duration = +Ii(u, ir(o), S, E, b)),
              (C.delay = (+Ii(c, ir(o), S, E, b) || 0) - o._delay),
              !h &&
                x === 1 &&
                C.delay &&
                ((o._delay = c = C.delay), (o._start += c), (C.delay = 0)),
              v.to(E, C, O ? O(S, E, b) : 0),
              (v._ease = U.none);
          v.duration() ? (u = c = 0) : (o.timeline = 0);
        } else if (p) {
          Di(Oe(v.vars.defaults, { ease: "none" })),
            (v._ease = Fr(p.ease || i.ease || "none"));
          var P = 0,
            K,
            z,
            N;
          if (qt(p))
            p.forEach(function (q) {
              return v.to(b, q, ">");
            }),
              v.duration();
          else {
            C = {};
            for (M in p)
              M === "ease" || M === "easeEach" || Cu(M, p[M], C, p.easeEach);
            for (M in C)
              for (
                K = C[M].sort(function (q, D) {
                  return q.t - D.t;
                }),
                  P = 0,
                  S = 0;
                S < K.length;
                S++
              )
                (z = K[S]),
                  (N = {
                    ease: z.e,
                    duration: ((z.t - (S ? K[S - 1].t : 0)) / 100) * u,
                  }),
                  (N[M] = z.v),
                  v.to(b, N, P),
                  (P += N.duration);
            v.duration() < u && v.to({}, { duration: u - v.duration() });
          }
        }
        u || o.duration((u = v.duration()));
      } else o.timeline = 0;
      return (
        f === !0 && !xs && ((mr = ir(o)), ut.killTweensOf(b), (mr = 0)),
        Ke(w, ir(o), n),
        i.reversed && o.reverse(),
        i.paused && o.paused(!0),
        (d ||
          (!u &&
            !p &&
            o._start === zt(w._time) &&
            he(d) &&
            iu(ir(o)) &&
            w.data !== "nested")) &&
          ((o._tTime = -it), o.render(Math.max(0, -c) || 0)),
        m && $o(ir(o), m),
        o
      );
    }
    var r = t.prototype;
    return (
      (r.render = function (i, n, s) {
        var o = this._time,
          l = this._tDur,
          u = this._dur,
          c = i < 0,
          d = i > l - it && !c ? l : i < it ? 0 : i,
          h,
          f,
          p,
          _,
          m,
          T,
          w,
          b,
          v;
        if (!u) su(this, i, n, s);
        else if (
          d !== this._tTime ||
          !i ||
          s ||
          (!this._initted && this._tTime) ||
          (this._startAt && this._zTime < 0 !== c)
        ) {
          if (((h = d), (b = this.timeline), this._repeat)) {
            if (((_ = u + this._rDelay), this._repeat < -1 && c))
              return this.totalTime(_ * 100 + i, n, s);
            if (
              ((h = zt(d % _)),
              d === l
                ? ((p = this._repeat), (h = u))
                : ((p = ~~(d / _)),
                  p && p === d / _ && ((h = u), p--),
                  h > u && (h = u)),
              (T = this._yoyo && p & 1),
              T && ((v = this._yEase), (h = u - h)),
              (m = li(this._tTime, _)),
              h === o && !s && this._initted)
            )
              return (this._tTime = d), this;
            p !== m &&
              (b && this._yEase && la(b, T),
              this.vars.repeatRefresh &&
                !T &&
                !this._lock &&
                ((this._lock = s = 1),
                (this.render(zt(_ * p), !0).invalidate()._lock = 0)));
          }
          if (!this._initted) {
            if (Ko(this, c ? i : h, s, n, d)) return (this._tTime = 0), this;
            if (o !== this._time) return this;
            if (u !== this._dur) return this.render(i, n, s);
          }
          if (
            ((this._tTime = d),
            (this._time = h),
            !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
            (this.ratio = w = (v || this._ease)(h / u)),
            this._from && (this.ratio = w = 1 - w),
            h && !o && !n && !p && (Me(this, "onStart"), this._tTime !== d))
          )
            return this;
          for (f = this._pt; f; ) f.r(w, f.d), (f = f._next);
          (b &&
            b.render(
              i < 0 ? i : !h && T ? -it : b._dur * b._ease(h / this._dur),
              n,
              s
            )) ||
            (this._startAt && (this._zTime = i)),
            this._onUpdate &&
              !n &&
              (c && _s(this, i, n, s), Me(this, "onUpdate")),
            this._repeat &&
              p !== m &&
              this.vars.onRepeat &&
              !n &&
              this.parent &&
              Me(this, "onRepeat"),
            (d === this._tDur || !d) &&
              this._tTime === d &&
              (c && !this._onUpdate && _s(this, i, !0, !0),
              (i || !u) &&
                ((d === this._tDur && this._ts > 0) || (!d && this._ts < 0)) &&
                xr(this, 1),
              !n &&
                !(c && !o) &&
                (d || o || T) &&
                (Me(this, d === l ? "onComplete" : "onReverseComplete", !0),
                this._prom &&
                  !(d < l && this.timeScale() > 0) &&
                  this._prom()));
        }
        return this;
      }),
      (r.targets = function () {
        return this._targets;
      }),
      (r.invalidate = function (i) {
        return (
          (!i || !this.vars.runBackwards) && (this._startAt = 0),
          (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(i),
          a.prototype.invalidate.call(this, i)
        );
      }),
      (r.resetTo = function (i, n, s, o) {
        Fi || fe.wake(), this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
          u;
        return (
          this._initted || As(this, l),
          (u = this._ease(l / this._dur)),
          bu(this, i, n, s, o, u, l)
            ? this.resetTo(i, n, s, o)
            : (Tn(this, 0),
              this.parent ||
                Ho(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0
                ),
              this.render(0))
        );
      }),
      (r.kill = function (i, n) {
        if ((n === void 0 && (n = "all"), !i && (!n || n === "all")))
          return (this._lazy = this._pt = 0), this.parent ? Li(this) : this;
        if (this.timeline) {
          var s = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(i, n, mr && mr.vars.overwrite !== !0)
              ._first || Li(this),
            this.parent &&
              s !== this.timeline.totalDuration() &&
              ui(this, (this._dur * this.timeline._tDur) / s, 0, 1),
            this
          );
        }
        var o = this._targets,
          l = i ? Ce(i) : o,
          u = this._ptLookup,
          c = this._pt,
          d,
          h,
          f,
          p,
          _,
          m,
          T;
        if ((!n || n === "all") && eu(o, l))
          return n === "all" && (this._pt = 0), Li(this);
        for (
          d = this._op = this._op || [],
            n !== "all" &&
              (Mt(n) &&
                ((_ = {}),
                jt(n, function (w) {
                  return (_[w] = 1);
                }),
                (n = _)),
              (n = Eu(o, n))),
            T = o.length;
          T--;

        )
          if (~l.indexOf(o[T])) {
            (h = u[T]),
              n === "all"
                ? ((d[T] = n), (p = h), (f = {}))
                : ((f = d[T] = d[T] || {}), (p = n));
            for (_ in p)
              (m = h && h[_]),
                m &&
                  ((!("kill" in m.d) || m.d.kill(_) === !0) &&
                    xn(this, m, "_pt"),
                  delete h[_]),
                f !== "all" && (f[_] = 1);
          }
        return this._initted && !this._pt && c && Li(this), this;
      }),
      (t.to = function (i, n) {
        return new t(i, n, arguments[2]);
      }),
      (t.from = function (i, n) {
        return zi(1, arguments);
      }),
      (t.delayedCall = function (i, n, s, o) {
        return new t(n, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: i,
          onComplete: n,
          onReverseComplete: n,
          onCompleteParams: s,
          onReverseCompleteParams: s,
          callbackScope: o,
        });
      }),
      (t.fromTo = function (i, n, s) {
        return zi(2, arguments);
      }),
      (t.set = function (i, n) {
        return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(i, n);
      }),
      (t.killTweensOf = function (i, n, s) {
        return ut.killTweensOf(i, n, s);
      }),
      t
    );
  })(Bi);
  Oe(yt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
  jt("staggerTo,staggerFrom,staggerFromTo", function (a) {
    yt[a] = function () {
      var t = new Xt(),
        r = ps.call(arguments, 0);
      return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, r);
    };
  });
  var Ds = function (t, r, e) {
      return (t[r] = e);
    },
    ha = function (t, r, e) {
      return t[r](e);
    },
    Mu = function (t, r, e, i) {
      return t[r](i.fp, e);
    },
    Ou = function (t, r, e) {
      return t.setAttribute(r, e);
    },
    Sn = function (t, r) {
      return pt(t[r]) ? ha : vn(t[r]) && t.setAttribute ? Ou : Ds;
    },
    _a = function (t, r) {
      return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e6) / 1e6, r);
    },
    Pu = function (t, r) {
      return r.set(r.t, r.p, !!(r.s + r.c * t), r);
    },
    zs = function (t, r) {
      var e = r._pt,
        i = "";
      if (!t && r.b) i = r.b;
      else if (t === 1 && r.e) i = r.e;
      else {
        for (; e; )
          (i =
            e.p +
            (e.m
              ? e.m(e.s + e.c * t)
              : Math.round((e.s + e.c * t) * 1e4) / 1e4) +
            i),
            (e = e._next);
        i += r.c;
      }
      r.set(r.t, r.p, i, r);
    },
    Is = function (t, r) {
      for (var e = r._pt; e; ) e.r(t, e.d), (e = e._next);
    },
    ku = function (t, r, e, i) {
      for (var n = this._pt, s; n; )
        (s = n._next), n.p === i && n.modifier(t, r, e), (n = s);
    },
    Ru = function (t) {
      for (var r = this._pt, e, i; r; )
        (i = r._next),
          (r.p === t && !r.op) || r.op === t
            ? xn(this, r, "_pt")
            : r.dep || (e = 1),
          (r = i);
      return !e;
    },
    Lu = function (t, r, e, i) {
      i.mSet(t, r, i.m.call(i.tween, e, i.mt), i);
    },
    Ns = function (t) {
      for (var r = t._pt, e, i, n, s; r; ) {
        for (e = r._next, i = n; i && i.pr > r.pr; ) i = i._next;
        (r._prev = i ? i._prev : s) ? (r._prev._next = r) : (n = r),
          (r._next = i) ? (i._prev = r) : (s = r),
          (r = e);
      }
      t._pt = n;
    },
    Jt = (function () {
      function a(r, e, i, n, s, o, l, u, c) {
        (this.t = e),
          (this.s = n),
          (this.c = s),
          (this.p = i),
          (this.r = o || _a),
          (this.d = l || this),
          (this.set = u || Ds),
          (this.pr = c || 0),
          (this._next = r),
          r && (r._prev = this);
      }
      var t = a.prototype;
      return (
        (t.modifier = function (e, i, n) {
          (this.mSet = this.mSet || this.set),
            (this.set = Lu),
            (this.m = e),
            (this.mt = n),
            (this.tween = i);
        }),
        a
      );
    })();
  jt(
    Cs +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (a) {
      return (Es[a] = 1);
    }
  );
  ve.TweenMax = ve.TweenLite = yt;
  ve.TimelineLite = ve.TimelineMax = Xt;
  ut = new Xt({
    sortChildren: !1,
    defaults: ai,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  });
  _e.stringFilter = Ps;
  var Br = [],
    fn = {},
    Au = [],
    Do = 0,
    Du = 0,
    as = function (t) {
      return (fn[t] || Au).map(function (r) {
        return r();
      });
    },
    ys = function () {
      var t = Date.now(),
        r = [];
      t - Do > 2 &&
        (as("matchMediaInit"),
        Br.forEach(function (e) {
          var i = e.queries,
            n = e.conditions,
            s,
            o,
            l,
            u;
          for (o in i)
            (s = be.matchMedia(i[o]).matches),
              s && (l = 1),
              s !== n[o] && ((n[o] = s), (u = 1));
          u && (e.revert(), l && r.push(e));
        }),
        as("matchMediaRevert"),
        r.forEach(function (e) {
          return e.onMatch(e);
        }),
        (Do = t),
        as("matchMedia"));
    },
    da = (function () {
      function a(r, e) {
        (this.selector = e && gs(e)),
          (this.data = []),
          (this._r = []),
          (this.isReverted = !1),
          (this.id = Du++),
          r && this.add(r);
      }
      var t = a.prototype;
      return (
        (t.add = function (e, i, n) {
          pt(e) && ((n = i), (i = e), (e = pt));
          var s = this,
            o = function () {
              var u = dt,
                c = s.selector,
                d;
              return (
                u && u !== s && u.data.push(s),
                n && (s.selector = gs(n)),
                (dt = s),
                (d = i.apply(s, arguments)),
                pt(d) && s._r.push(d),
                (dt = u),
                (s.selector = c),
                (s.isReverted = !1),
                d
              );
            };
          return (s.last = o), e === pt ? o(s) : e ? (s[e] = o) : o;
        }),
        (t.ignore = function (e) {
          var i = dt;
          (dt = null), e(this), (dt = i);
        }),
        (t.getTweens = function () {
          var e = [];
          return (
            this.data.forEach(function (i) {
              return i instanceof a
                ? e.push.apply(e, i.getTweens())
                : i instanceof yt &&
                    !(i.parent && i.parent.data === "nested") &&
                    e.push(i);
            }),
            e
          );
        }),
        (t.clear = function () {
          this._r.length = this.data.length = 0;
        }),
        (t.kill = function (e, i) {
          var n = this;
          if (e) {
            var s = this.getTweens();
            this.data.forEach(function (l) {
              l.data === "isFlip" &&
                (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function (u) {
                  return s.splice(s.indexOf(u), 1);
                }));
            }),
              s
                .map(function (l) {
                  return { g: l.globalTime(0), t: l };
                })
                .sort(function (l, u) {
                  return u.g - l.g || -1 / 0;
                })
                .forEach(function (l) {
                  return l.t.revert(e);
                }),
              this.data.forEach(function (l) {
                return !(l instanceof yt) && l.revert && l.revert(e);
              }),
              this._r.forEach(function (l) {
                return l(e, n);
              }),
              (this.isReverted = !0);
          } else
            this.data.forEach(function (l) {
              return l.kill && l.kill();
            });
          if ((this.clear(), i))
            for (var o = Br.length; o--; )
              Br[o].id === this.id && Br.splice(o, 1);
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        a
      );
    })(),
    zu = (function () {
      function a(r) {
        (this.contexts = []), (this.scope = r);
      }
      var t = a.prototype;
      return (
        (t.add = function (e, i, n) {
          Qe(e) || (e = { matches: e });
          var s = new da(0, n || this.scope),
            o = (s.conditions = {}),
            l,
            u,
            c;
          dt && !s.selector && (s.selector = dt.selector),
            this.contexts.push(s),
            (i = s.add("onMatch", i)),
            (s.queries = e);
          for (u in e)
            u === "all"
              ? (c = 1)
              : ((l = be.matchMedia(e[u])),
                l &&
                  (Br.indexOf(s) < 0 && Br.push(s),
                  (o[u] = l.matches) && (c = 1),
                  l.addListener
                    ? l.addListener(ys)
                    : l.addEventListener("change", ys)));
          return c && i(s), this;
        }),
        (t.revert = function (e) {
          this.kill(e || {});
        }),
        (t.kill = function (e) {
          this.contexts.forEach(function (i) {
            return i.kill(e, !0);
          });
        }),
        a
      );
    })(),
    mn = {
      registerPlugin: function () {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
          r[e] = arguments[e];
        r.forEach(function (i) {
          return na(i);
        });
      },
      timeline: function (t) {
        return new Xt(t);
      },
      getTweensOf: function (t, r) {
        return ut.getTweensOf(t, r);
      },
      getProperty: function (t, r, e, i) {
        Mt(t) && (t = Ce(t)[0]);
        var n = yr(t || {}).get,
          s = e ? Uo : qo;
        return (
          e === "native" && (e = ""),
          t &&
            (r
              ? s(((ce[r] && ce[r].get) || n)(t, r, e, i))
              : function (o, l, u) {
                  return s(((ce[o] && ce[o].get) || n)(t, o, l, u));
                })
        );
      },
      quickSetter: function (t, r, e) {
        if (((t = Ce(t)), t.length > 1)) {
          var i = t.map(function (c) {
              return Ut.quickSetter(c, r, e);
            }),
            n = i.length;
          return function (c) {
            for (var d = n; d--; ) i[d](c);
          };
        }
        t = t[0] || {};
        var s = ce[r],
          o = yr(t),
          l = (o.harness && (o.harness.aliases || {})[r]) || r,
          u = s
            ? function (c) {
                var d = new s();
                (oi._pt = 0),
                  d.init(t, e ? c + e : c, oi, 0, [t]),
                  d.render(1, d),
                  oi._pt && Is(1, oi);
              }
            : o.set(t, l);
        return s
          ? u
          : function (c) {
              return u(t, l, e ? c + e : c, o, 1);
            };
      },
      quickTo: function (t, r, e) {
        var i,
          n = Ut.to(
            t,
            Yr(((i = {}), (i[r] = "+=0.1"), (i.paused = !0), i), e || {})
          ),
          s = function (l, u, c) {
            return n.resetTo(r, l, u, c);
          };
        return (s.tween = n), s;
      },
      isTweening: function (t) {
        return ut.getTweensOf(t, !0).length > 0;
      },
      defaults: function (t) {
        return t && t.ease && (t.ease = Fr(t.ease, ai.ease)), Po(ai, t || {});
      },
      config: function (t) {
        return Po(_e, t || {});
      },
      registerEffect: function (t) {
        var r = t.name,
          e = t.effect,
          i = t.plugins,
          n = t.defaults,
          s = t.extendTimeline;
        (i || "").split(",").forEach(function (o) {
          return (
            o &&
            !ce[o] &&
            !ve[o] &&
            _n(r + " effect requires " + o + " plugin.")
          );
        }),
          (is[r] = function (o, l, u) {
            return e(Ce(o), Oe(l || {}, n), u);
          }),
          s &&
            (Xt.prototype[r] = function (o, l, u) {
              return this.add(is[r](o, Qe(l) ? l : (u = l) && {}, this), u);
            });
      },
      registerEase: function (t, r) {
        U[t] = Fr(r);
      },
      parseEase: function (t, r) {
        return arguments.length ? Fr(t, r) : U;
      },
      getById: function (t) {
        return ut.getById(t);
      },
      exportRoot: function (t, r) {
        t === void 0 && (t = {});
        var e = new Xt(t),
          i,
          n;
        for (
          e.smoothChildTiming = he(t.smoothChildTiming),
            ut.remove(e),
            e._dp = 0,
            e._time = e._tTime = ut._time,
            i = ut._first;
          i;

        )
          (n = i._next),
            (r ||
              !(
                !i._dur &&
                i instanceof yt &&
                i.vars.onComplete === i._targets[0]
              )) &&
              Ke(e, i, i._start - i._delay),
            (i = n);
        return Ke(ut, e, 0), e;
      },
      context: function (t, r) {
        return t ? new da(t, r) : dt;
      },
      matchMedia: function (t) {
        return new zu(t);
      },
      matchMediaRefresh: function () {
        return (
          Br.forEach(function (t) {
            var r = t.conditions,
              e,
              i;
            for (i in r) r[i] && ((r[i] = !1), (e = 1));
            e && t.revert();
          }) || ys()
        );
      },
      addEventListener: function (t, r) {
        var e = fn[t] || (fn[t] = []);
        ~e.indexOf(r) || e.push(r);
      },
      removeEventListener: function (t, r) {
        var e = fn[t],
          i = e && e.indexOf(r);
        i >= 0 && e.splice(i, 1);
      },
      utils: {
        wrap: _u,
        wrapYoyo: du,
        distribute: jo,
        random: ta,
        snap: Jo,
        normalize: hu,
        getUnit: It,
        clamp: lu,
        splitColor: sa,
        toArray: Ce,
        selector: gs,
        mapRange: ra,
        pipe: cu,
        unitize: fu,
        interpolate: pu,
        shuffle: Zo,
      },
      install: Yo,
      effects: is,
      ticker: fe,
      updateRoot: Xt.updateRoot,
      plugins: ce,
      globalTimeline: ut,
      core: {
        PropTween: Jt,
        globals: Wo,
        Tween: yt,
        Timeline: Xt,
        Animation: Bi,
        getCache: yr,
        _removeLinkedListItem: xn,
        reverting: function () {
          return Vt;
        },
        context: function (t) {
          return t && dt && (dt.data.push(t), (t._ctx = dt)), dt;
        },
        suppressOverwrites: function (t) {
          return (xs = t);
        },
      },
    };
  jt("to,from,fromTo,delayedCall,set,killTweensOf", function (a) {
    return (mn[a] = yt[a]);
  });
  fe.add(Xt.updateRoot);
  oi = mn.to({}, { duration: 0 });
  var Iu = function (t, r) {
      for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
        e = e._next;
      return e;
    },
    Nu = function (t, r) {
      var e = t._targets,
        i,
        n,
        s;
      for (i in r)
        for (n = e.length; n--; )
          (s = t._ptLookup[n][i]),
            s &&
              (s = s.d) &&
              (s._pt && (s = Iu(s, i)),
              s && s.modifier && s.modifier(r[i], t, e[n], i));
    },
    ls = function (t, r) {
      return {
        name: t,
        rawVars: 1,
        init: function (i, n, s) {
          s._onInit = function (o) {
            var l, u;
            if (
              (Mt(n) &&
                ((l = {}),
                jt(n, function (c) {
                  return (l[c] = 1);
                }),
                (n = l)),
              r)
            ) {
              l = {};
              for (u in n) l[u] = r(n[u]);
              n = l;
            }
            Nu(o, n);
          };
        },
      };
    },
    Ut =
      mn.registerPlugin(
        {
          name: "attr",
          init: function (t, r, e, i, n) {
            var s, o, l;
            this.tween = e;
            for (s in r)
              (l = t.getAttribute(s) || ""),
                (o = this.add(
                  t,
                  "setAttribute",
                  (l || 0) + "",
                  r[s],
                  i,
                  n,
                  0,
                  0,
                  s
                )),
                (o.op = s),
                (o.b = l),
                this._props.push(s);
          },
          render: function (t, r) {
            for (var e = r._pt; e; )
              Vt ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d), (e = e._next);
          },
        },
        {
          name: "endArray",
          init: function (t, r) {
            for (var e = r.length; e--; )
              this.add(t, e, t[e] || 0, r[e], 0, 0, 0, 0, 0, 1);
          },
        },
        ls("roundProps", ms),
        ls("modifiers"),
        ls("snap", Jo)
      ) || mn;
  yt.version = Xt.version = Ut.version = "3.12.2";
  Bo = 1;
  ws() && ci();
  var Fu = U.Power0,
    Bu = U.Power1,
    Yu = U.Power2,
    Wu = U.Power3,
    Xu = U.Power4,
    Vu = U.Linear,
    qu = U.Quad,
    Uu = U.Cubic,
    Hu = U.Quart,
    Gu = U.Quint,
    $u = U.Strong,
    Ku = U.Elastic,
    Qu = U.Back,
    Zu = U.SteppedEase,
    ju = U.Bounce,
    Ju = U.Sine,
    tc = U.Expo,
    ec = U.Circ;
  var pa,
    Tr,
    _i,
    qs,
    Gr,
    rc,
    ga,
    Us,
    ic = function () {
      return typeof window != "undefined";
    },
    ar = {},
    Hr = 180 / Math.PI,
    di = Math.PI / 180,
    hi = Math.atan2,
    ma = 1e8,
    Hs = /([A-Z])/g,
    nc = /(left|right|width|margin|padding|x)/i,
    sc = /[\s,\(]\S/,
    Ze = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ys = function (t, r) {
      return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r);
    },
    oc = function (t, r) {
      return r.set(
        r.t,
        r.p,
        t === 1 ? r.e : Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u,
        r
      );
    },
    ac = function (t, r) {
      return r.set(
        r.t,
        r.p,
        t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b,
        r
      );
    },
    lc = function (t, r) {
      var e = r.s + r.c * t;
      r.set(r.t, r.p, ~~(e + (e < 0 ? -0.5 : 0.5)) + r.u, r);
    },
    ba = function (t, r) {
      return r.set(r.t, r.p, t ? r.e : r.b, r);
    },
    Ea = function (t, r) {
      return r.set(r.t, r.p, t !== 1 ? r.b : r.e, r);
    },
    uc = function (t, r, e) {
      return (t.style[r] = e);
    },
    cc = function (t, r, e) {
      return t.style.setProperty(r, e);
    },
    fc = function (t, r, e) {
      return (t._gsap[r] = e);
    },
    hc = function (t, r, e) {
      return (t._gsap.scaleX = t._gsap.scaleY = e);
    },
    _c = function (t, r, e, i, n) {
      var s = t._gsap;
      (s.scaleX = s.scaleY = e), s.renderTransform(n, s);
    },
    dc = function (t, r, e, i, n) {
      var s = t._gsap;
      (s[r] = e), s.renderTransform(n, s);
    },
    ct = "transform",
    Ye = ct + "Origin",
    pc = function a(t, r) {
      var e = this,
        i = this.target,
        n = i.style;
      if (t in ar && n) {
        if (((this.tfm = this.tfm || {}), t !== "transform"))
          (t = Ze[t] || t),
            ~t.indexOf(",")
              ? t.split(",").forEach(function (s) {
                  return (e.tfm[s] = or(i, s));
                })
              : (this.tfm[t] = i._gsap.x ? i._gsap[t] : or(i, t));
        else
          return Ze.transform.split(",").forEach(function (s) {
            return a.call(e, s, r);
          });
        if (this.props.indexOf(ct) >= 0) return;
        i._gsap.svg &&
          ((this.svgo = i.getAttribute("data-svg-origin")),
          this.props.push(Ye, r, "")),
          (t = ct);
      }
      (n || r) && this.props.push(t, r, n[t]);
    },
    Ca = function (t) {
      t.translate &&
        (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"));
    },
    gc = function () {
      var t = this.props,
        r = this.target,
        e = r.style,
        i = r._gsap,
        n,
        s;
      for (n = 0; n < t.length; n += 3)
        t[n + 1]
          ? (r[t[n]] = t[n + 2])
          : t[n + 2]
          ? (e[t[n]] = t[n + 2])
          : e.removeProperty(
              t[n].substr(0, 2) === "--"
                ? t[n]
                : t[n].replace(Hs, "-$1").toLowerCase()
            );
      if (this.tfm) {
        for (s in this.tfm) i[s] = this.tfm[s];
        i.svg &&
          (i.renderTransform(),
          r.setAttribute("data-svg-origin", this.svgo || "")),
          (n = Us()),
          (!n || !n.isStart) && !e[ct] && (Ca(e), (i.uncache = 1));
      }
    },
    Ma = function (t, r) {
      var e = { target: t, props: [], revert: gc, save: pc };
      return (
        t._gsap || Ut.core.getCache(t),
        r &&
          r.split(",").forEach(function (i) {
            return e.save(i);
          }),
        e
      );
    },
    Oa,
    Ws = function (t, r) {
      var e = Tr.createElementNS
        ? Tr.createElementNS(
            (r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
            t
          )
        : Tr.createElement(t);
      return e.style ? e : Tr.createElement(t);
    },
    je = function a(t, r, e) {
      var i = getComputedStyle(t);
      return (
        i[r] ||
        i.getPropertyValue(r.replace(Hs, "-$1").toLowerCase()) ||
        i.getPropertyValue(r) ||
        (!e && a(t, pi(r) || r, 1)) ||
        ""
      );
    },
    va = "O,Moz,ms,Ms,Webkit".split(","),
    pi = function (t, r, e) {
      var i = r || Gr,
        n = i.style,
        s = 5;
      if (t in n && !e) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        s-- && !(va[s] + t in n);

      );
      return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? va[s] : "") + t;
    },
    Xs = function () {
      ic() &&
        window.document &&
        ((pa = window),
        (Tr = pa.document),
        (_i = Tr.documentElement),
        (Gr = Ws("div") || { style: {} }),
        (rc = Ws("div")),
        (ct = pi(ct)),
        (Ye = ct + "Origin"),
        (Gr.style.cssText =
          "border-width:0;line-height:0;position:absolute;padding:0"),
        (Oa = !!pi("perspective")),
        (Us = Ut.core.reverting),
        (qs = 1));
    },
    Fs = function a(t) {
      var r = Ws(
          "svg",
          (this.ownerSVGElement &&
            this.ownerSVGElement.getAttribute("xmlns")) ||
            "http://www.w3.org/2000/svg"
        ),
        e = this.parentNode,
        i = this.nextSibling,
        n = this.style.cssText,
        s;
      if (
        (_i.appendChild(r),
        r.appendChild(this),
        (this.style.display = "block"),
        t)
      )
        try {
          (s = this.getBBox()),
            (this._gsapBBox = this.getBBox),
            (this.getBBox = a);
        } catch (o) {}
      else this._gsapBBox && (s = this._gsapBBox());
      return (
        e && (i ? e.insertBefore(this, i) : e.appendChild(this)),
        _i.removeChild(r),
        (this.style.cssText = n),
        s
      );
    },
    ya = function (t, r) {
      for (var e = r.length; e--; )
        if (t.hasAttribute(r[e])) return t.getAttribute(r[e]);
    },
    Pa = function (t) {
      var r;
      try {
        r = t.getBBox();
      } catch (e) {
        r = Fs.call(t, !0);
      }
      return (
        (r && (r.width || r.height)) ||
          t.getBBox === Fs ||
          (r = Fs.call(t, !0)),
        r && !r.width && !r.x && !r.y
          ? {
              x: +ya(t, ["x", "cx", "x1"]) || 0,
              y: +ya(t, ["y", "cy", "y1"]) || 0,
              width: 0,
              height: 0,
            }
          : r
      );
    },
    ka = function (t) {
      return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Pa(t));
    },
    Xi = function (t, r) {
      if (r) {
        var e = t.style;
        r in ar && r !== Ye && (r = ct),
          e.removeProperty
            ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") &&
                (r = "-" + r),
              e.removeProperty(r.replace(Hs, "-$1").toLowerCase()))
            : e.removeAttribute(r);
      }
    },
    Sr = function (t, r, e, i, n, s) {
      var o = new Jt(t._pt, r, e, 0, 1, s ? Ea : ba);
      return (t._pt = o), (o.b = i), (o.e = n), t._props.push(e), o;
    },
    xa = { deg: 1, rad: 1, turn: 1 },
    mc = { grid: 1, flex: 1 },
    br = function a(t, r, e, i) {
      var n = parseFloat(e) || 0,
        s = (e + "").trim().substr((n + "").length) || "px",
        o = Gr.style,
        l = nc.test(r),
        u = t.tagName.toLowerCase() === "svg",
        c = (u ? "client" : "offset") + (l ? "Width" : "Height"),
        d = 100,
        h = i === "px",
        f = i === "%",
        p,
        _,
        m,
        T;
      return i === s || !n || xa[i] || xa[s]
        ? n
        : (s !== "px" && !h && (n = a(t, r, e, "px")),
          (T = t.getCTM && ka(t)),
          (f || s === "%") && (ar[r] || ~r.indexOf("adius"))
            ? ((p = T ? t.getBBox()[l ? "width" : "height"] : t[c]),
              gt(f ? (n / p) * d : (n / 100) * p))
            : ((o[l ? "width" : "height"] = d + (h ? s : i)),
              (_ =
                ~r.indexOf("adius") || (i === "em" && t.appendChild && !u)
                  ? t
                  : t.parentNode),
              T && (_ = (t.ownerSVGElement || {}).parentNode),
              (!_ || _ === Tr || !_.appendChild) && (_ = Tr.body),
              (m = _._gsap),
              m && f && m.width && l && m.time === fe.time && !m.uncache
                ? gt((n / m.width) * d)
                : ((f || s === "%") &&
                    !mc[je(_, "display")] &&
                    (o.position = je(t, "position")),
                  _ === t && (o.position = "static"),
                  _.appendChild(Gr),
                  (p = Gr[c]),
                  _.removeChild(Gr),
                  (o.position = "absolute"),
                  l && f && ((m = yr(_)), (m.time = fe.time), (m.width = _[c])),
                  gt(h ? (p * n) / d : p && n ? (d / p) * n : 0))));
    },
    or = function (t, r, e, i) {
      var n;
      return (
        qs || Xs(),
        r in Ze &&
          r !== "transform" &&
          ((r = Ze[r]), ~r.indexOf(",") && (r = r.split(",")[0])),
        ar[r] && r !== "transform"
          ? ((n = qi(t, i)),
            (n =
              r !== "transformOrigin"
                ? n[r]
                : n.svg
                ? n.origin
                : En(je(t, Ye)) + " " + n.zOrigin + "px"))
          : ((n = t.style[r]),
            (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) &&
              (n =
                (bn[r] && bn[r](t, r, e)) ||
                je(t, r) ||
                Os(t, r) ||
                (r === "opacity" ? 1 : 0))),
        e && !~(n + "").trim().indexOf(" ") ? br(t, r, n, e) + e : n
      );
    },
    vc = function (t, r, e, i) {
      if (!e || e === "none") {
        var n = pi(r, t, 1),
          s = n && je(t, n, 1);
        s && s !== e
          ? ((r = n), (e = s))
          : r === "borderColor" && (e = je(t, "borderTopColor"));
      }
      var o = new Jt(this._pt, t.style, r, 0, 1, zs),
        l = 0,
        u = 0,
        c,
        d,
        h,
        f,
        p,
        _,
        m,
        T,
        w,
        b,
        v,
        S;
      if (
        ((o.b = e),
        (o.e = i),
        (e += ""),
        (i += ""),
        i === "auto" &&
          ((t.style[r] = i), (i = je(t, r) || i), (t.style[r] = e)),
        (c = [e, i]),
        Ps(c),
        (e = c[0]),
        (i = c[1]),
        (h = e.match(Wr) || []),
        (S = i.match(Wr) || []),
        S.length)
      ) {
        for (; (d = Wr.exec(i)); )
          (m = d[0]),
            (w = i.substring(l, d.index)),
            p
              ? (p = (p + 1) % 5)
              : (w.substr(-5) === "rgba(" || w.substr(-5) === "hsla(") &&
                (p = 1),
            m !== (_ = h[u++] || "") &&
              ((f = parseFloat(_) || 0),
              (v = _.substr((f + "").length)),
              m.charAt(1) === "=" && (m = Xr(f, m) + v),
              (T = parseFloat(m)),
              (b = m.substr((T + "").length)),
              (l = Wr.lastIndex - b.length),
              b ||
                ((b = b || _e.units[r] || v),
                l === i.length && ((i += b), (o.e += b))),
              v !== b && (f = br(t, r, _, b) || 0),
              (o._pt = {
                _next: o._pt,
                p: w || u === 1 ? w : ",",
                s: f,
                c: T - f,
                m: (p && p < 4) || r === "zIndex" ? Math.round : 0,
              }));
        o.c = l < i.length ? i.substring(l, i.length) : "";
      } else o.r = r === "display" && i === "none" ? Ea : ba;
      return Ss.test(i) && (o.e = 0), (this._pt = o), o;
    },
    wa = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    yc = function (t) {
      var r = t.split(" "),
        e = r[0],
        i = r[1] || "50%";
      return (
        (e === "top" || e === "bottom" || i === "left" || i === "right") &&
          ((t = e), (e = i), (i = t)),
        (r[0] = wa[e] || e),
        (r[1] = wa[i] || i),
        r.join(" ")
      );
    },
    xc = function (t, r) {
      if (r.tween && r.tween._time === r.tween._dur) {
        var e = r.t,
          i = e.style,
          n = r.u,
          s = e._gsap,
          o,
          l,
          u;
        if (n === "all" || n === !0) (i.cssText = ""), (l = 1);
        else
          for (n = n.split(","), u = n.length; --u > -1; )
            (o = n[u]),
              ar[o] && ((l = 1), (o = o === "transformOrigin" ? Ye : ct)),
              Xi(e, o);
        l &&
          (Xi(e, ct),
          s &&
            (s.svg && e.removeAttribute("transform"),
            qi(e, 1),
            (s.uncache = 1),
            Ca(i)));
      }
    },
    bn = {
      clearProps: function (t, r, e, i, n) {
        if (n.data !== "isFromStart") {
          var s = (t._pt = new Jt(t._pt, r, e, 0, 0, xc));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(e), 1;
        }
      },
    },
    Vi = [1, 0, 0, 1, 0, 0],
    Ra = {},
    La = function (t) {
      return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
    },
    Ta = function (t) {
      var r = je(t, ct);
      return La(r) ? Vi : r.substr(7).match(Ts).map(gt);
    },
    Gs = function (t, r) {
      var e = t._gsap || yr(t),
        i = t.style,
        n = Ta(t),
        s,
        o,
        l,
        u;
      return e.svg && t.getAttribute("transform")
        ? ((l = t.transform.baseVal.consolidate().matrix),
          (n = [l.a, l.b, l.c, l.d, l.e, l.f]),
          n.join(",") === "1,0,0,1,0,0" ? Vi : n)
        : (n === Vi &&
            !t.offsetParent &&
            t !== _i &&
            !e.svg &&
            ((l = i.display),
            (i.display = "block"),
            (s = t.parentNode),
            (!s || !t.offsetParent) &&
              ((u = 1), (o = t.nextElementSibling), _i.appendChild(t)),
            (n = Ta(t)),
            l ? (i.display = l) : Xi(t, "display"),
            u &&
              (o
                ? s.insertBefore(t, o)
                : s
                ? s.appendChild(t)
                : _i.removeChild(t))),
          r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
    },
    Vs = function (t, r, e, i, n, s) {
      var o = t._gsap,
        l = n || Gs(t, !0),
        u = o.xOrigin || 0,
        c = o.yOrigin || 0,
        d = o.xOffset || 0,
        h = o.yOffset || 0,
        f = l[0],
        p = l[1],
        _ = l[2],
        m = l[3],
        T = l[4],
        w = l[5],
        b = r.split(" "),
        v = parseFloat(b[0]) || 0,
        S = parseFloat(b[1]) || 0,
        C,
        x,
        M,
        E;
      e
        ? l !== Vi &&
          (x = f * m - p * _) &&
          ((M = v * (m / x) + S * (-_ / x) + (_ * w - m * T) / x),
          (E = v * (-p / x) + S * (f / x) - (f * w - p * T) / x),
          (v = M),
          (S = E))
        : ((C = Pa(t)),
          (v = C.x + (~b[0].indexOf("%") ? (v / 100) * C.width : v)),
          (S =
            C.y + (~(b[1] || b[0]).indexOf("%") ? (S / 100) * C.height : S))),
        i || (i !== !1 && o.smooth)
          ? ((T = v - u),
            (w = S - c),
            (o.xOffset = d + (T * f + w * _) - T),
            (o.yOffset = h + (T * p + w * m) - w))
          : (o.xOffset = o.yOffset = 0),
        (o.xOrigin = v),
        (o.yOrigin = S),
        (o.smooth = !!i),
        (o.origin = r),
        (o.originIsAbsolute = !!e),
        (t.style[Ye] = "0px 0px"),
        s &&
          (Sr(s, o, "xOrigin", u, v),
          Sr(s, o, "yOrigin", c, S),
          Sr(s, o, "xOffset", d, o.xOffset),
          Sr(s, o, "yOffset", h, o.yOffset)),
        t.setAttribute("data-svg-origin", v + " " + S);
    },
    qi = function (t, r) {
      var e = t._gsap || new ks(t);
      if ("x" in e && !r && !e.uncache) return e;
      var i = t.style,
        n = e.scaleX < 0,
        s = "px",
        o = "deg",
        l = getComputedStyle(t),
        u = je(t, Ye) || "0",
        c,
        d,
        h,
        f,
        p,
        _,
        m,
        T,
        w,
        b,
        v,
        S,
        C,
        x,
        M,
        E,
        O,
        L,
        P,
        K,
        z,
        N,
        q,
        D,
        V,
        tt,
        g,
        nt,
        $t,
        Ae,
        ht,
        Rt;
      return (
        (c = d = h = _ = m = T = w = b = v = 0),
        (f = p = 1),
        (e.svg = !!(t.getCTM && ka(t))),
        l.translate &&
          ((l.translate !== "none" ||
            l.scale !== "none" ||
            l.rotate !== "none") &&
            (i[ct] =
              (l.translate !== "none"
                ? "translate3d(" +
                  (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                  ") "
                : "") +
              (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
              (l.scale !== "none"
                ? "scale(" + l.scale.split(" ").join(",") + ") "
                : "") +
              (l[ct] !== "none" ? l[ct] : "")),
          (i.scale = i.rotate = i.translate = "none")),
        (x = Gs(t, e.svg)),
        e.svg &&
          (e.uncache
            ? ((V = t.getBBox()),
              (u = e.xOrigin - V.x + "px " + (e.yOrigin - V.y) + "px"),
              (D = ""))
            : (D = !r && t.getAttribute("data-svg-origin")),
          Vs(t, D || u, !!D || e.originIsAbsolute, e.smooth !== !1, x)),
        (S = e.xOrigin || 0),
        (C = e.yOrigin || 0),
        x !== Vi &&
          ((L = x[0]),
          (P = x[1]),
          (K = x[2]),
          (z = x[3]),
          (c = N = x[4]),
          (d = q = x[5]),
          x.length === 6
            ? ((f = Math.sqrt(L * L + P * P)),
              (p = Math.sqrt(z * z + K * K)),
              (_ = L || P ? hi(P, L) * Hr : 0),
              (w = K || z ? hi(K, z) * Hr + _ : 0),
              w && (p *= Math.abs(Math.cos(w * di))),
              e.svg && ((c -= S - (S * L + C * K)), (d -= C - (S * P + C * z))))
            : ((Rt = x[6]),
              (Ae = x[7]),
              (g = x[8]),
              (nt = x[9]),
              ($t = x[10]),
              (ht = x[11]),
              (c = x[12]),
              (d = x[13]),
              (h = x[14]),
              (M = hi(Rt, $t)),
              (m = M * Hr),
              M &&
                ((E = Math.cos(-M)),
                (O = Math.sin(-M)),
                (D = N * E + g * O),
                (V = q * E + nt * O),
                (tt = Rt * E + $t * O),
                (g = N * -O + g * E),
                (nt = q * -O + nt * E),
                ($t = Rt * -O + $t * E),
                (ht = Ae * -O + ht * E),
                (N = D),
                (q = V),
                (Rt = tt)),
              (M = hi(-K, $t)),
              (T = M * Hr),
              M &&
                ((E = Math.cos(-M)),
                (O = Math.sin(-M)),
                (D = L * E - g * O),
                (V = P * E - nt * O),
                (tt = K * E - $t * O),
                (ht = z * O + ht * E),
                (L = D),
                (P = V),
                (K = tt)),
              (M = hi(P, L)),
              (_ = M * Hr),
              M &&
                ((E = Math.cos(M)),
                (O = Math.sin(M)),
                (D = L * E + P * O),
                (V = N * E + q * O),
                (P = P * E - L * O),
                (q = q * E - N * O),
                (L = D),
                (N = V)),
              m &&
                Math.abs(m) + Math.abs(_) > 359.9 &&
                ((m = _ = 0), (T = 180 - T)),
              (f = gt(Math.sqrt(L * L + P * P + K * K))),
              (p = gt(Math.sqrt(q * q + Rt * Rt))),
              (M = hi(N, q)),
              (w = Math.abs(M) > 2e-4 ? M * Hr : 0),
              (v = ht ? 1 / (ht < 0 ? -ht : ht) : 0)),
          e.svg &&
            ((D = t.getAttribute("transform")),
            (e.forceCSS = t.setAttribute("transform", "") || !La(je(t, ct))),
            D && t.setAttribute("transform", D))),
        Math.abs(w) > 90 &&
          Math.abs(w) < 270 &&
          (n
            ? ((f *= -1),
              (w += _ <= 0 ? 180 : -180),
              (_ += _ <= 0 ? 180 : -180))
            : ((p *= -1), (w += w <= 0 ? 180 : -180))),
        (r = r || e.uncache),
        (e.x =
          c -
          ((e.xPercent =
            c &&
            ((!r && e.xPercent) ||
              (Math.round(t.offsetWidth / 2) === Math.round(-c) ? -50 : 0)))
            ? (t.offsetWidth * e.xPercent) / 100
            : 0) +
          s),
        (e.y =
          d -
          ((e.yPercent =
            d &&
            ((!r && e.yPercent) ||
              (Math.round(t.offsetHeight / 2) === Math.round(-d) ? -50 : 0)))
            ? (t.offsetHeight * e.yPercent) / 100
            : 0) +
          s),
        (e.z = h + s),
        (e.scaleX = gt(f)),
        (e.scaleY = gt(p)),
        (e.rotation = gt(_) + o),
        (e.rotationX = gt(m) + o),
        (e.rotationY = gt(T) + o),
        (e.skewX = w + o),
        (e.skewY = b + o),
        (e.transformPerspective = v + s),
        (e.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[Ye] = En(u)),
        (e.xOffset = e.yOffset = 0),
        (e.force3D = _e.force3D),
        (e.renderTransform = e.svg ? Tc : Oa ? Aa : wc),
        (e.uncache = 0),
        e
      );
    },
    En = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Bs = function (t, r, e) {
      var i = It(r);
      return gt(parseFloat(r) + parseFloat(br(t, "x", e + "px", i))) + i;
    },
    wc = function (t, r) {
      (r.z = "0px"),
        (r.rotationY = r.rotationX = "0deg"),
        (r.force3D = 0),
        Aa(t, r);
    },
    qr = "0deg",
    Wi = "0px",
    Ur = ") ",
    Aa = function (t, r) {
      var e = r || this,
        i = e.xPercent,
        n = e.yPercent,
        s = e.x,
        o = e.y,
        l = e.z,
        u = e.rotation,
        c = e.rotationY,
        d = e.rotationX,
        h = e.skewX,
        f = e.skewY,
        p = e.scaleX,
        _ = e.scaleY,
        m = e.transformPerspective,
        T = e.force3D,
        w = e.target,
        b = e.zOrigin,
        v = "",
        S = (T === "auto" && t && t !== 1) || T === !0;
      if (b && (d !== qr || c !== qr)) {
        var C = parseFloat(c) * di,
          x = Math.sin(C),
          M = Math.cos(C),
          E;
        (C = parseFloat(d) * di),
          (E = Math.cos(C)),
          (s = Bs(w, s, x * E * -b)),
          (o = Bs(w, o, -Math.sin(C) * -b)),
          (l = Bs(w, l, M * E * -b + b));
      }
      m !== Wi && (v += "perspective(" + m + Ur),
        (i || n) && (v += "translate(" + i + "%, " + n + "%) "),
        (S || s !== Wi || o !== Wi || l !== Wi) &&
          (v +=
            l !== Wi || S
              ? "translate3d(" + s + ", " + o + ", " + l + ") "
              : "translate(" + s + ", " + o + Ur),
        u !== qr && (v += "rotate(" + u + Ur),
        c !== qr && (v += "rotateY(" + c + Ur),
        d !== qr && (v += "rotateX(" + d + Ur),
        (h !== qr || f !== qr) && (v += "skew(" + h + ", " + f + Ur),
        (p !== 1 || _ !== 1) && (v += "scale(" + p + ", " + _ + Ur),
        (w.style[ct] = v || "translate(0, 0)");
    },
    Tc = function (t, r) {
      var e = r || this,
        i = e.xPercent,
        n = e.yPercent,
        s = e.x,
        o = e.y,
        l = e.rotation,
        u = e.skewX,
        c = e.skewY,
        d = e.scaleX,
        h = e.scaleY,
        f = e.target,
        p = e.xOrigin,
        _ = e.yOrigin,
        m = e.xOffset,
        T = e.yOffset,
        w = e.forceCSS,
        b = parseFloat(s),
        v = parseFloat(o),
        S,
        C,
        x,
        M,
        E;
      (l = parseFloat(l)),
        (u = parseFloat(u)),
        (c = parseFloat(c)),
        c && ((c = parseFloat(c)), (u += c), (l += c)),
        l || u
          ? ((l *= di),
            (u *= di),
            (S = Math.cos(l) * d),
            (C = Math.sin(l) * d),
            (x = Math.sin(l - u) * -h),
            (M = Math.cos(l - u) * h),
            u &&
              ((c *= di),
              (E = Math.tan(u - c)),
              (E = Math.sqrt(1 + E * E)),
              (x *= E),
              (M *= E),
              c &&
                ((E = Math.tan(c)),
                (E = Math.sqrt(1 + E * E)),
                (S *= E),
                (C *= E))),
            (S = gt(S)),
            (C = gt(C)),
            (x = gt(x)),
            (M = gt(M)))
          : ((S = d), (M = h), (C = x = 0)),
        ((b && !~(s + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
          ((b = br(f, "x", s, "px")), (v = br(f, "y", o, "px"))),
        (p || _ || m || T) &&
          ((b = gt(b + p - (p * S + _ * x) + m)),
          (v = gt(v + _ - (p * C + _ * M) + T))),
        (i || n) &&
          ((E = f.getBBox()),
          (b = gt(b + (i / 100) * E.width)),
          (v = gt(v + (n / 100) * E.height))),
        (E =
          "matrix(" +
          S +
          "," +
          C +
          "," +
          x +
          "," +
          M +
          "," +
          b +
          "," +
          v +
          ")"),
        f.setAttribute("transform", E),
        w && (f.style[ct] = E);
    },
    Sc = function (t, r, e, i, n) {
      var s = 360,
        o = Mt(n),
        l = parseFloat(n) * (o && ~n.indexOf("rad") ? Hr : 1),
        u = l - i,
        c = i + u + "deg",
        d,
        h;
      return (
        o &&
          ((d = n.split("_")[1]),
          d === "short" &&
            ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
          d === "cw" && u < 0
            ? (u = ((u + s * ma) % s) - ~~(u / s) * s)
            : d === "ccw" && u > 0 && (u = ((u - s * ma) % s) - ~~(u / s) * s)),
        (t._pt = h = new Jt(t._pt, r, e, i, u, oc)),
        (h.e = c),
        (h.u = "deg"),
        t._props.push(e),
        h
      );
    },
    Sa = function (t, r) {
      for (var e in r) t[e] = r[e];
      return t;
    },
    bc = function (t, r, e) {
      var i = Sa({}, e._gsap),
        n = "perspective,force3D,transformOrigin,svgOrigin",
        s = e.style,
        o,
        l,
        u,
        c,
        d,
        h,
        f,
        p;
      i.svg
        ? ((u = e.getAttribute("transform")),
          e.setAttribute("transform", ""),
          (s[ct] = r),
          (o = qi(e, 1)),
          Xi(e, ct),
          e.setAttribute("transform", u))
        : ((u = getComputedStyle(e)[ct]),
          (s[ct] = r),
          (o = qi(e, 1)),
          (s[ct] = u));
      for (l in ar)
        (u = i[l]),
          (c = o[l]),
          u !== c &&
            n.indexOf(l) < 0 &&
            ((f = It(u)),
            (p = It(c)),
            (d = f !== p ? br(e, l, u, p) : parseFloat(u)),
            (h = parseFloat(c)),
            (t._pt = new Jt(t._pt, o, l, d, h - d, Ys)),
            (t._pt.u = p || 0),
            t._props.push(l));
      Sa(o, i);
    };
  jt("padding,margin,Width,Radius", function (a, t) {
    var r = "Top",
      e = "Right",
      i = "Bottom",
      n = "Left",
      s = (t < 3 ? [r, e, i, n] : [r + n, r + e, i + e, i + n]).map(function (
        o
      ) {
        return t < 2 ? a + o : "border" + o + a;
      });
    bn[t > 1 ? "border" + a : a] = function (o, l, u, c, d) {
      var h, f;
      if (arguments.length < 4)
        return (
          (h = s.map(function (p) {
            return or(o, p, u);
          })),
          (f = h.join(" ")),
          f.split(h[0]).length === 5 ? h[0] : f
        );
      (h = (c + "").split(" ")),
        (f = {}),
        s.forEach(function (p, _) {
          return (f[p] = h[_] = h[_] || h[((_ - 1) / 2) | 0]);
        }),
        o.init(l, f, d);
    };
  });
  var $s = {
    name: "css",
    register: Xs,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, r, e, i, n) {
      var s = this._props,
        o = t.style,
        l = e.vars.startAt,
        u,
        c,
        d,
        h,
        f,
        p,
        _,
        m,
        T,
        w,
        b,
        v,
        S,
        C,
        x,
        M;
      qs || Xs(),
        (this.styles = this.styles || Ma(t)),
        (M = this.styles.props),
        (this.tween = e);
      for (_ in r)
        if (
          _ !== "autoRound" &&
          ((c = r[_]), !(ce[_] && Ls(_, r, e, i, t, n)))
        ) {
          if (
            ((f = typeof c),
            (p = bn[_]),
            f === "function" && ((c = c.call(e, i, t, n)), (f = typeof c)),
            f === "string" && ~c.indexOf("random(") && (c = fi(c)),
            p)
          )
            p(this, t, _, c, e) && (x = 1);
          else if (_.substr(0, 2) === "--")
            (u = (getComputedStyle(t).getPropertyValue(_) + "").trim()),
              (c += ""),
              (nr.lastIndex = 0),
              nr.test(u) || ((m = It(u)), (T = It(c))),
              T ? m !== T && (u = br(t, _, u, T) + T) : m && (c += m),
              this.add(o, "setProperty", u, c, i, n, 0, 0, _),
              s.push(_),
              M.push(_, 0, o[_]);
          else if (f !== "undefined") {
            if (
              (l && _ in l
                ? ((u =
                    typeof l[_] == "function" ? l[_].call(e, i, t, n) : l[_]),
                  Mt(u) && ~u.indexOf("random(") && (u = fi(u)),
                  It(u + "") || (u += _e.units[_] || It(or(t, _)) || ""),
                  (u + "").charAt(1) === "=" && (u = or(t, _)))
                : (u = or(t, _)),
              (h = parseFloat(u)),
              (w = f === "string" && c.charAt(1) === "=" && c.substr(0, 2)),
              w && (c = c.substr(2)),
              (d = parseFloat(c)),
              _ in Ze &&
                (_ === "autoAlpha" &&
                  (h === 1 && or(t, "visibility") === "hidden" && d && (h = 0),
                  M.push("visibility", 0, o.visibility),
                  Sr(
                    this,
                    o,
                    "visibility",
                    h ? "inherit" : "hidden",
                    d ? "inherit" : "hidden",
                    !d
                  )),
                _ !== "scale" &&
                  _ !== "transform" &&
                  ((_ = Ze[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
              (b = _ in ar),
              b)
            ) {
              if (
                (this.styles.save(_),
                v ||
                  ((S = t._gsap),
                  (S.renderTransform && !r.parseTransform) ||
                    qi(t, r.parseTransform),
                  (C = r.smoothOrigin !== !1 && S.smooth),
                  (v = this._pt =
                    new Jt(this._pt, o, ct, 0, 1, S.renderTransform, S, 0, -1)),
                  (v.dep = 1)),
                _ === "scale")
              )
                (this._pt = new Jt(
                  this._pt,
                  S,
                  "scaleY",
                  S.scaleY,
                  (w ? Xr(S.scaleY, w + d) : d) - S.scaleY || 0,
                  Ys
                )),
                  (this._pt.u = 0),
                  s.push("scaleY", _),
                  (_ += "X");
              else if (_ === "transformOrigin") {
                M.push(Ye, 0, o[Ye]),
                  (c = yc(c)),
                  S.svg
                    ? Vs(t, c, 0, C, 0, this)
                    : ((T = parseFloat(c.split(" ")[2]) || 0),
                      T !== S.zOrigin && Sr(this, S, "zOrigin", S.zOrigin, T),
                      Sr(this, o, _, En(u), En(c)));
                continue;
              } else if (_ === "svgOrigin") {
                Vs(t, c, 1, C, 0, this);
                continue;
              } else if (_ in Ra) {
                Sc(this, S, _, h, w ? Xr(h, w + c) : c);
                continue;
              } else if (_ === "smoothOrigin") {
                Sr(this, S, "smooth", S.smooth, c);
                continue;
              } else if (_ === "force3D") {
                S[_] = c;
                continue;
              } else if (_ === "transform") {
                bc(this, c, t);
                continue;
              }
            } else _ in o || (_ = pi(_) || _);
            if (
              b ||
              ((d || d === 0) && (h || h === 0) && !sc.test(c) && _ in o)
            )
              (m = (u + "").substr((h + "").length)),
                d || (d = 0),
                (T = It(c) || (_ in _e.units ? _e.units[_] : m)),
                m !== T && (h = br(t, _, u, T)),
                (this._pt = new Jt(
                  this._pt,
                  b ? S : o,
                  _,
                  h,
                  (w ? Xr(h, w + d) : d) - h,
                  !b && (T === "px" || _ === "zIndex") && r.autoRound !== !1
                    ? lc
                    : Ys
                )),
                (this._pt.u = T || 0),
                m !== T && T !== "%" && ((this._pt.b = u), (this._pt.r = ac));
            else if (_ in o) vc.call(this, t, _, u, w ? w + c : c);
            else if (_ in t) this.add(t, _, u || t[_], w ? w + c : c, i, n);
            else if (_ !== "parseTransform") {
              yn(_, c);
              continue;
            }
            b || (_ in o ? M.push(_, 0, o[_]) : M.push(_, 1, u || t[_])),
              s.push(_);
          }
        }
      x && Ns(this);
    },
    render: function (t, r) {
      if (r.tween._time || !Us())
        for (var e = r._pt; e; ) e.r(t, e.d), (e = e._next);
      else r.styles.revert();
    },
    get: or,
    aliases: Ze,
    getSetter: function (t, r, e) {
      var i = Ze[r];
      return (
        i && i.indexOf(",") < 0 && (r = i),
        r in ar && r !== Ye && (t._gsap.x || or(t, "x"))
          ? e && ga === e
            ? r === "scale"
              ? hc
              : fc
            : (ga = e || {}) && (r === "scale" ? _c : dc)
          : t.style && !vn(t.style[r])
          ? uc
          : ~r.indexOf("-")
          ? cc
          : Sn(t, r)
      );
    },
    core: { _removeProperty: Xi, _getMatrix: Gs },
  };
  Ut.utils.checkPrefix = pi;
  Ut.core.getStyleSaver = Ma;
  (function (a, t, r, e) {
    var i = jt(a + "," + t + "," + r, function (n) {
      ar[n] = 1;
    });
    jt(t, function (n) {
      (_e.units[n] = "deg"), (Ra[n] = 1);
    }),
      (Ze[i[13]] = a + "," + t),
      jt(e, function (n) {
        var s = n.split(":");
        Ze[s[1]] = i[s[0]];
      });
  })(
    "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
    "rotation,rotationX,rotationY,skewX,skewY",
    "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
  );
  jt(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (a) {
      _e.units[a] = "px";
    }
  );
  Ut.registerPlugin($s);
  var Ks = Ut.registerPlugin($s) || Ut,
    ff = Ks.core.Tween;
  function Da(a, t) {
    for (var r = 0; r < t.length; r++) {
      var e = t[r];
      (e.enumerable = e.enumerable || !1),
        (e.configurable = !0),
        "value" in e && (e.writable = !0),
        Object.defineProperty(a, e.key, e);
    }
  }
  function Ec(a, t, r) {
    return t && Da(a.prototype, t), r && Da(a, r), a;
  }
  var Nt,
    Qs,
    Cc,
    ye,
    Er,
    Cr,
    mi,
    Ia,
    $r,
    Hi,
    Na,
    lr,
    We,
    Fa,
    Ba = function () {
      return (
        Nt ||
        (typeof window != "undefined" &&
          (Nt = window.gsap) &&
          Nt.registerPlugin &&
          Nt)
      );
    },
    Ya = 1,
    gi = [],
    Y = [],
    Xe = [],
    Gi = Date.now,
    Zs = function (t, r) {
      return r;
    },
    Mc = function () {
      var t = Hi.core,
        r = t.bridge || {},
        e = t._scrollers,
        i = t._proxies;
      e.push.apply(e, Y),
        i.push.apply(i, Xe),
        (Y = e),
        (Xe = i),
        (Zs = function (s, o) {
          return r[s](o);
        });
    },
    cr = function (t, r) {
      return ~Xe.indexOf(t) && Xe[Xe.indexOf(t) + 1][r];
    },
    $i = function (t) {
      return !!~Na.indexOf(t);
    },
    ee = function (t, r, e, i, n) {
      return t.addEventListener(r, e, { passive: !i, capture: !!n });
    },
    te = function (t, r, e, i) {
      return t.removeEventListener(r, e, !!i);
    },
    Cn = "scrollLeft",
    Mn = "scrollTop",
    js = function () {
      return (lr && lr.isPressed) || Y.cache++;
    },
    On = function (t, r) {
      var e = function i(n) {
        if (n || n === 0) {
          Ya && (ye.history.scrollRestoration = "manual");
          var s = lr && lr.isPressed;
          (n = i.v = Math.round(n) || (lr && lr.iOS ? 1 : 0)),
            t(n),
            (i.cacheID = Y.cache),
            s && Zs("ss", n);
        } else
          (r || Y.cache !== i.cacheID || Zs("ref")) &&
            ((i.cacheID = Y.cache), (i.v = t()));
        return i.v + i.offset;
      };
      return (e.offset = 0), t && e;
    },
    Ht = {
      s: Cn,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: On(function (a) {
        return arguments.length
          ? ye.scrollTo(a, bt.sc())
          : ye.pageXOffset || Er[Cn] || Cr[Cn] || mi[Cn] || 0;
      }),
    },
    bt = {
      s: Mn,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Ht,
      sc: On(function (a) {
        return arguments.length
          ? ye.scrollTo(Ht.sc(), a)
          : ye.pageYOffset || Er[Mn] || Cr[Mn] || mi[Mn] || 0;
      }),
    },
    re = function (t, r) {
      return (
        ((r && r._ctx && r._ctx.selector) || Nt.utils.toArray)(t)[0] ||
        (typeof t == "string" && Nt.config().nullTargetWarn !== !1
          ? console.warn("Element not found:", t)
          : null)
      );
    },
    ur = function (t, r) {
      var e = r.s,
        i = r.sc;
      $i(t) && (t = Er.scrollingElement || Cr);
      var n = Y.indexOf(t),
        s = i === bt.sc ? 1 : 2;
      !~n && (n = Y.push(t) - 1), Y[n + s] || ee(t, "scroll", js);
      var o = Y[n + s],
        l =
          o ||
          (Y[n + s] =
            On(cr(t, e), !0) ||
            ($i(t)
              ? i
              : On(function (u) {
                  return arguments.length ? (t[e] = u) : t[e];
                })));
      return (
        (l.target = t),
        o || (l.smooth = Nt.getProperty(t, "scrollBehavior") === "smooth"),
        l
      );
    },
    Pn = function (t, r, e) {
      var i = t,
        n = t,
        s = Gi(),
        o = s,
        l = r || 50,
        u = Math.max(500, l * 3),
        c = function (p, _) {
          var m = Gi();
          _ || m - s > l
            ? ((n = i), (i = p), (o = s), (s = m))
            : e
            ? (i += p)
            : (i = n + ((p - n) / (m - o)) * (s - o));
        },
        d = function () {
          (n = i = e ? 0 : i), (o = s = 0);
        },
        h = function (p) {
          var _ = o,
            m = n,
            T = Gi();
          return (
            (p || p === 0) && p !== i && c(p),
            s === o || T - o > u
              ? 0
              : ((i + (e ? m : -m)) / ((e ? T : s) - _)) * 1e3
          );
        };
      return { update: c, reset: d, getVelocity: h };
    },
    Ui = function (t, r) {
      return (
        r && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
      );
    },
    za = function (t) {
      var r = Math.max.apply(Math, t),
        e = Math.min.apply(Math, t);
      return Math.abs(r) >= Math.abs(e) ? r : e;
    },
    Wa = function () {
      (Hi = Nt.core.globals().ScrollTrigger), Hi && Hi.core && Mc();
    },
    Xa = function (t) {
      return (
        (Nt = t || Ba()),
        Nt &&
          typeof document != "undefined" &&
          document.body &&
          ((ye = window),
          (Er = document),
          (Cr = Er.documentElement),
          (mi = Er.body),
          (Na = [ye, Er, Cr, mi]),
          (Cc = Nt.utils.clamp),
          (Fa = Nt.core.context || function () {}),
          ($r = "onpointerenter" in mi ? "pointer" : "mouse"),
          (Ia = xt.isTouch =
            ye.matchMedia &&
            ye.matchMedia("(hover: none), (pointer: coarse)").matches
              ? 1
              : "ontouchstart" in ye ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
          (We = xt.eventTypes =
            (
              "ontouchstart" in Cr
                ? "touchstart,touchmove,touchcancel,touchend"
                : "onpointerdown" in Cr
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
            ).split(",")),
          setTimeout(function () {
            return (Ya = 0);
          }, 500),
          Wa(),
          (Qs = 1)),
        Qs
      );
    };
  Ht.op = bt;
  Y.cache = 0;
  var xt = (function () {
    function a(r) {
      this.init(r);
    }
    var t = a.prototype;
    return (
      (t.init = function (e) {
        Qs || Xa(Nt) || console.warn("Please gsap.registerPlugin(Observer)"),
          Hi || Wa();
        var i = e.tolerance,
          n = e.dragMinimum,
          s = e.type,
          o = e.target,
          l = e.lineHeight,
          u = e.debounce,
          c = e.preventDefault,
          d = e.onStop,
          h = e.onStopDelay,
          f = e.ignore,
          p = e.wheelSpeed,
          _ = e.event,
          m = e.onDragStart,
          T = e.onDragEnd,
          w = e.onDrag,
          b = e.onPress,
          v = e.onRelease,
          S = e.onRight,
          C = e.onLeft,
          x = e.onUp,
          M = e.onDown,
          E = e.onChangeX,
          O = e.onChangeY,
          L = e.onChange,
          P = e.onToggleX,
          K = e.onToggleY,
          z = e.onHover,
          N = e.onHoverEnd,
          q = e.onMove,
          D = e.ignoreCheck,
          V = e.isNormalizer,
          tt = e.onGestureStart,
          g = e.onGestureEnd,
          nt = e.onWheel,
          $t = e.onEnable,
          Ae = e.onDisable,
          ht = e.onClick,
          Rt = e.scrollSpeed,
          Kt = e.capture,
          wt = e.allowClicks,
          Qt = e.lockAxis,
          Bt = e.onLockAxis;
        (this.target = o = re(o) || Cr),
          (this.vars = e),
          f && (f = Nt.utils.toArray(f)),
          (i = i || 1e-9),
          (n = n || 0),
          (p = p || 1),
          (Rt = Rt || 1),
          (s = s || "wheel,touch,pointer"),
          (u = u !== !1),
          l || (l = parseFloat(ye.getComputedStyle(mi).lineHeight) || 22);
        var dr,
          ae,
          qe,
          j,
          Tt,
          le,
          de,
          y = this,
          pe = 0,
          tr = 0,
          Or = ur(o, Ht),
          St = ur(o, bt),
          Pr = Or(),
          kr = St(),
          Oi =
            ~s.indexOf("touch") &&
            !~s.indexOf("pointer") &&
            We[0] === "pointerdown",
          Lt = $i(o),
          mt = o.ownerDocument || Er,
          De = [0, 0, 0],
          ze = [0, 0, 0],
          Rr = 0,
          er = function () {
            return (Rr = Gi());
          },
          Ue = function (A, J) {
            return (
              ((y.event = A) && f && ~f.indexOf(A.target)) ||
              (J && Oi && A.pointerType !== "touch") ||
              (D && D(A, J))
            );
          },
          ue = function () {
            y._vx.reset(), y._vy.reset(), ae.pause(), d && d(y);
          },
          Lr = function () {
            var A = (y.deltaX = za(De)),
              J = (y.deltaY = za(ze)),
              _t = Math.abs(A) >= i,
              k = Math.abs(J) >= i;
            L && (_t || k) && L(y, A, J, De, ze),
              _t &&
                (S && y.deltaX > 0 && S(y),
                C && y.deltaX < 0 && C(y),
                E && E(y),
                P && y.deltaX < 0 != pe < 0 && P(y),
                (pe = y.deltaX),
                (De[0] = De[1] = De[2] = 0)),
              k &&
                (M && y.deltaY > 0 && M(y),
                x && y.deltaY < 0 && x(y),
                O && O(y),
                K && y.deltaY < 0 != tr < 0 && K(y),
                (tr = y.deltaY),
                (ze[0] = ze[1] = ze[2] = 0)),
              (j || qe) && (q && q(y), qe && (w(y), (qe = !1)), (j = !1)),
              le && !(le = !1) && Bt && Bt(y),
              Tt && (nt(y), (Tt = !1)),
              (dr = 0);
          },
          ii = function (A, J, _t) {
            (De[_t] += A),
              (ze[_t] += J),
              y._vx.update(A),
              y._vy.update(J),
              u ? dr || (dr = requestAnimationFrame(Lr)) : Lr();
          },
          ni = function (A, J) {
            Qt &&
              !de &&
              ((y.axis = de = Math.abs(A) > Math.abs(J) ? "x" : "y"),
              (le = !0)),
              de !== "y" && ((De[2] += A), y._vx.update(A, !0)),
              de !== "x" && ((ze[2] += J), y._vy.update(J, !0)),
              u ? dr || (dr = requestAnimationFrame(Lr)) : Lr();
          },
          Ar = function (A) {
            if (!Ue(A, 1)) {
              A = Ui(A, c);
              var J = A.clientX,
                _t = A.clientY,
                k = J - y.x,
                G = _t - y.y,
                I = y.isDragging;
              (y.x = J),
                (y.y = _t),
                (I ||
                  Math.abs(y.startX - J) >= n ||
                  Math.abs(y.startY - _t) >= n) &&
                  (w && (qe = !0),
                  I || (y.isDragging = !0),
                  ni(k, G),
                  I || (m && m(y)));
            }
          },
          pr = (y.onPress = function (F) {
            Ue(F, 1) ||
              (F && F.button) ||
              ((y.axis = de = null),
              ae.pause(),
              (y.isPressed = !0),
              (F = Ui(F)),
              (pe = tr = 0),
              (y.startX = y.x = F.clientX),
              (y.startY = y.y = F.clientY),
              y._vx.reset(),
              y._vy.reset(),
              ee(V ? o : mt, We[1], Ar, c, !0),
              (y.deltaX = y.deltaY = 0),
              b && b(y));
          }),
          gr = (y.onRelease = function (F) {
            if (!Ue(F, 1)) {
              te(V ? o : mt, We[1], Ar, !0);
              var A = !isNaN(y.y - y.startY),
                J =
                  y.isDragging &&
                  (Math.abs(y.x - y.startX) > 3 ||
                    Math.abs(y.y - y.startY) > 3),
                _t = Ui(F);
              !J &&
                A &&
                (y._vx.reset(),
                y._vy.reset(),
                c &&
                  wt &&
                  Nt.delayedCall(0.08, function () {
                    if (Gi() - Rr > 300 && !F.defaultPrevented) {
                      if (F.target.click) F.target.click();
                      else if (mt.createEvent) {
                        var k = mt.createEvent("MouseEvents");
                        k.initMouseEvent(
                          "click",
                          !0,
                          !0,
                          ye,
                          1,
                          _t.screenX,
                          _t.screenY,
                          _t.clientX,
                          _t.clientY,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null
                        ),
                          F.target.dispatchEvent(k);
                      }
                    }
                  })),
                (y.isDragging = y.isGesturing = y.isPressed = !1),
                d && !V && ae.restart(!0),
                T && J && T(y),
                v && v(y, J);
            }
          }),
          Q = function (A) {
            return (
              A.touches &&
              A.touches.length > 1 &&
              (y.isGesturing = !0) &&
              tt(A, y.isDragging)
            );
          },
          Dr = function () {
            return (y.isGesturing = !1) || g(y);
          },
          Ie = function (A) {
            if (!Ue(A)) {
              var J = Or(),
                _t = St();
              ii((J - Pr) * Rt, (_t - kr) * Rt, 1),
                (Pr = J),
                (kr = _t),
                d && ae.restart(!0);
            }
          },
          Ne = function (A) {
            if (!Ue(A)) {
              (A = Ui(A, c)), nt && (Tt = !0);
              var J =
                (A.deltaMode === 1
                  ? l
                  : A.deltaMode === 2
                  ? ye.innerHeight
                  : 1) * p;
              ii(A.deltaX * J, A.deltaY * J, 0), d && !V && ae.restart(!0);
            }
          },
          Fe = function (A) {
            if (!Ue(A)) {
              var J = A.clientX,
                _t = A.clientY,
                k = J - y.x,
                G = _t - y.y;
              (y.x = J), (y.y = _t), (j = !0), (k || G) && ni(k, G);
            }
          },
          zr = function (A) {
            (y.event = A), z(y);
          },
          si = function (A) {
            (y.event = A), N(y);
          },
          rr = function (A) {
            return Ue(A) || (Ui(A, c) && ht(y));
          };
        (ae = y._dc = Nt.delayedCall(h || 0.25, ue).pause()),
          (y.deltaX = y.deltaY = 0),
          (y._vx = Pn(0, 50, !0)),
          (y._vy = Pn(0, 50, !0)),
          (y.scrollX = Or),
          (y.scrollY = St),
          (y.isDragging = y.isGesturing = y.isPressed = !1),
          Fa(this),
          (y.enable = function (F) {
            return (
              y.isEnabled ||
                (ee(Lt ? mt : o, "scroll", js),
                s.indexOf("scroll") >= 0 &&
                  ee(Lt ? mt : o, "scroll", Ie, c, Kt),
                s.indexOf("wheel") >= 0 && ee(o, "wheel", Ne, c, Kt),
                ((s.indexOf("touch") >= 0 && Ia) ||
                  s.indexOf("pointer") >= 0) &&
                  (ee(o, We[0], pr, c, Kt),
                  ee(mt, We[2], gr),
                  ee(mt, We[3], gr),
                  wt && ee(o, "click", er, !1, !0),
                  ht && ee(o, "click", rr),
                  tt && ee(mt, "gesturestart", Q),
                  g && ee(mt, "gestureend", Dr),
                  z && ee(o, $r + "enter", zr),
                  N && ee(o, $r + "leave", si),
                  q && ee(o, $r + "move", Fe)),
                (y.isEnabled = !0),
                F && F.type && pr(F),
                $t && $t(y)),
              y
            );
          }),
          (y.disable = function () {
            y.isEnabled &&
              (gi.filter(function (F) {
                return F !== y && $i(F.target);
              }).length || te(Lt ? mt : o, "scroll", js),
              y.isPressed &&
                (y._vx.reset(), y._vy.reset(), te(V ? o : mt, We[1], Ar, !0)),
              te(Lt ? mt : o, "scroll", Ie, Kt),
              te(o, "wheel", Ne, Kt),
              te(o, We[0], pr, Kt),
              te(mt, We[2], gr),
              te(mt, We[3], gr),
              te(o, "click", er, !0),
              te(o, "click", rr),
              te(mt, "gesturestart", Q),
              te(mt, "gestureend", Dr),
              te(o, $r + "enter", zr),
              te(o, $r + "leave", si),
              te(o, $r + "move", Fe),
              (y.isEnabled = y.isPressed = y.isDragging = !1),
              Ae && Ae(y));
          }),
          (y.kill = y.revert =
            function () {
              y.disable();
              var F = gi.indexOf(y);
              F >= 0 && gi.splice(F, 1), lr === y && (lr = 0);
            }),
          gi.push(y),
          V && $i(o) && (lr = y),
          y.enable(_);
      }),
      Ec(a, [
        {
          key: "velocityX",
          get: function () {
            return this._vx.getVelocity();
          },
        },
        {
          key: "velocityY",
          get: function () {
            return this._vy.getVelocity();
          },
        },
      ]),
      a
    );
  })();
  xt.version = "3.12.2";
  xt.create = function (a) {
    return new xt(a);
  };
  xt.register = Xa;
  xt.getAll = function () {
    return gi.slice();
  };
  xt.getById = function (a) {
    return gi.filter(function (t) {
      return t.vars.id === a;
    })[0];
  };
  Ba() && Nt.registerPlugin(xt);
  var R,
    xi,
    H,
    ft,
    Ve,
    st,
    sl,
    Gn,
    $n,
    Ti,
    Yn,
    kn,
    Gt,
    Qn,
    oo,
    ie,
    Va,
    qa,
    wi,
    ol,
    Js,
    al,
    xe,
    ll,
    ul,
    cl,
    Mr,
    ao,
    ho,
    Si,
    _o,
    to,
    Rn = 1,
    se = Date.now,
    eo = se(),
    Re = 0,
    Qi = 0,
    Ua = function (t, r, e) {
      var i = Te(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
      return (e["_" + r + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t;
    },
    Ha = function (t, r) {
      return r && (!Te(t) || t.substr(0, 6) !== "clamp(")
        ? "clamp(" + t + ")"
        : t;
    },
    Oc = function a() {
      return Qi && requestAnimationFrame(a);
    },
    Ga = function () {
      return (Qn = 1);
    },
    $a = function () {
      return (Qn = 0);
    },
    Je = function (t) {
      return t;
    },
    Zi = function (t) {
      return Math.round(t * 1e5) / 1e5 || 0;
    },
    fl = function () {
      return typeof window != "undefined";
    },
    hl = function () {
      return R || (fl() && (R = window.gsap) && R.registerPlugin && R);
    },
    ti = function (t) {
      return !!~sl.indexOf(t);
    },
    _l = function (t) {
      return (
        (t === "Height" ? _o : H["inner" + t]) ||
        Ve["client" + t] ||
        st["client" + t]
      );
    },
    dl = function (t) {
      return (
        cr(t, "getBoundingClientRect") ||
        (ti(t)
          ? function () {
              return (Hn.width = H.innerWidth), (Hn.height = _o), Hn;
            }
          : function () {
              return fr(t);
            })
      );
    },
    Pc = function (t, r, e) {
      var i = e.d,
        n = e.d2,
        s = e.a;
      return (s = cr(t, "getBoundingClientRect"))
        ? function () {
            return s()[i];
          }
        : function () {
            return (r ? _l(n) : t["client" + n]) || 0;
          };
    },
    kc = function (t, r) {
      return !r || ~Xe.indexOf(t)
        ? dl(t)
        : function () {
            return Hn;
          };
    },
    hr = function (t, r) {
      var e = r.s,
        i = r.d2,
        n = r.d,
        s = r.a;
      return Math.max(
        0,
        (e = "scroll" + i) && (s = cr(t, e))
          ? s() - dl(t)()[n]
          : ti(t)
          ? (Ve[e] || st[e]) - _l(i)
          : t[e] - t["offset" + i]
      );
    },
    Ln = function (t, r) {
      for (var e = 0; e < wi.length; e += 3)
        (!r || ~r.indexOf(wi[e + 1])) && t(wi[e], wi[e + 1], wi[e + 2]);
    },
    Te = function (t) {
      return typeof t == "string";
    },
    oe = function (t) {
      return typeof t == "function";
    },
    Wn = function (t) {
      return typeof t == "number";
    },
    Kr = function (t) {
      return typeof t == "object";
    },
    Ki = function (t, r, e) {
      return t && t.progress(r ? 0 : 1) && e && t.pause();
    },
    ro = function (t, r) {
      if (t.enabled) {
        var e = r(t);
        e && e.totalTime && (t.callbackAnimation = e);
      }
    },
    vi = Math.abs,
    pl = "left",
    gl = "top",
    po = "right",
    go = "bottom",
    Zr = "width",
    jr = "height",
    Ji = "Right",
    tn = "Left",
    en = "Top",
    rn = "Bottom",
    Et = "padding",
    Pe = "margin",
    Ei = "Width",
    mo = "Height",
    Ft = "px",
    ke = function (t) {
      return H.getComputedStyle(t);
    },
    Rc = function (t) {
      var r = ke(t).position;
      t.style.position = r === "absolute" || r === "fixed" ? r : "relative";
    },
    Ka = function (t, r) {
      for (var e in r) e in t || (t[e] = r[e]);
      return t;
    },
    fr = function (t, r) {
      var e =
          r &&
          ke(t)[oo] !== "matrix(1, 0, 0, 1, 0, 0)" &&
          R.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          }).progress(1),
        i = t.getBoundingClientRect();
      return e && e.progress(0).kill(), i;
    },
    lo = function (t, r) {
      var e = r.d2;
      return t["offset" + e] || t["client" + e] || 0;
    },
    ml = function (t) {
      var r = [],
        e = t.labels,
        i = t.duration(),
        n;
      for (n in e) r.push(e[n] / i);
      return r;
    },
    Lc = function (t) {
      return function (r) {
        return R.utils.snap(ml(t), r);
      };
    },
    vo = function (t) {
      var r = R.utils.snap(t),
        e =
          Array.isArray(t) &&
          t.slice(0).sort(function (i, n) {
            return i - n;
          });
      return e
        ? function (i, n, s) {
            s === void 0 && (s = 0.001);
            var o;
            if (!n) return r(i);
            if (n > 0) {
              for (i -= s, o = 0; o < e.length; o++) if (e[o] >= i) return e[o];
              return e[o - 1];
            } else for (o = e.length, i += s; o--; ) if (e[o] <= i) return e[o];
            return e[0];
          }
        : function (i, n, s) {
            s === void 0 && (s = 0.001);
            var o = r(i);
            return !n || Math.abs(o - i) < s || o - i < 0 == n < 0
              ? o
              : r(n < 0 ? i - t : i + t);
          };
    },
    Ac = function (t) {
      return function (r, e) {
        return vo(ml(t))(r, e.direction);
      };
    },
    An = function (t, r, e, i) {
      return e.split(",").forEach(function (n) {
        return t(r, n, i);
      });
    },
    kt = function (t, r, e, i, n) {
      return t.addEventListener(r, e, { passive: !i, capture: !!n });
    },
    Pt = function (t, r, e, i) {
      return t.removeEventListener(r, e, !!i);
    },
    Dn = function (t, r, e) {
      (e = e && e.wheelHandler), e && (t(r, "wheel", e), t(r, "touchmove", e));
    },
    Qa = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal",
    },
    zn = { toggleActions: "play", anticipatePin: 0 },
    Kn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    Xn = function (t, r) {
      if (Te(t)) {
        var e = t.indexOf("="),
          i = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
        ~e && (t.indexOf("%") > e && (i *= r / 100), (t = t.substr(0, e - 1))),
          (t =
            i +
            (t in Kn
              ? Kn[t] * r
              : ~t.indexOf("%")
              ? (parseFloat(t) * r) / 100
              : parseFloat(t) || 0));
      }
      return t;
    },
    In = function (t, r, e, i, n, s, o, l) {
      var u = n.startColor,
        c = n.endColor,
        d = n.fontSize,
        h = n.indent,
        f = n.fontWeight,
        p = ft.createElement("div"),
        _ = ti(e) || cr(e, "pinType") === "fixed",
        m = t.indexOf("scroller") !== -1,
        T = _ ? st : e,
        w = t.indexOf("start") !== -1,
        b = w ? u : c,
        v =
          "border-color:" +
          b +
          ";font-size:" +
          d +
          ";color:" +
          b +
          ";font-weight:" +
          f +
          ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return (
        (v += "position:" + ((m || l) && _ ? "fixed;" : "absolute;")),
        (m || l || !_) &&
          (v += (i === bt ? po : go) + ":" + (s + parseFloat(h)) + "px;"),
        o &&
          (v +=
            "box-sizing:border-box;text-align:left;width:" +
            o.offsetWidth +
            "px;"),
        (p._isStart = w),
        p.setAttribute("class", "gsap-marker-" + t + (r ? " marker-" + r : "")),
        (p.style.cssText = v),
        (p.innerText = r || r === 0 ? t + "-" + r : t),
        T.children[0] ? T.insertBefore(p, T.children[0]) : T.appendChild(p),
        (p._offset = p["offset" + i.op.d2]),
        Vn(p, 0, i, w),
        p
      );
    },
    Vn = function (t, r, e, i) {
      var n = { display: "block" },
        s = e[i ? "os2" : "p2"],
        o = e[i ? "p2" : "os2"];
      (t._isFlipped = i),
        (n[e.a + "Percent"] = i ? -100 : 0),
        (n[e.a] = i ? "1px" : 0),
        (n["border" + s + Ei] = 1),
        (n["border" + o + Ei] = 0),
        (n[e.p] = r + "px"),
        R.set(t, n);
    },
    W = [],
    uo = {},
    sn,
    Za = function () {
      return se() - Re > 34 && (sn || (sn = requestAnimationFrame(_r)));
    },
    yi = function () {
      (!xe || !xe.isPressed || xe.startX > st.clientWidth) &&
        (Y.cache++,
        xe ? sn || (sn = requestAnimationFrame(_r)) : _r(),
        Re || ri("scrollStart"),
        (Re = se()));
    },
    io = function () {
      (cl = H.innerWidth), (ul = H.innerHeight);
    },
    ji = function () {
      Y.cache++,
        !Gt &&
          !al &&
          !ft.fullscreenElement &&
          !ft.webkitFullscreenElement &&
          (!ll ||
            cl !== H.innerWidth ||
            Math.abs(H.innerHeight - ul) > H.innerHeight * 0.25) &&
          Gn.restart(!0);
    },
    ei = {},
    Dc = [],
    vl = function a() {
      return Pt(B, "scrollEnd", a) || Qr(!0);
    },
    ri = function (t) {
      return (
        (ei[t] &&
          ei[t].map(function (r) {
            return r();
          })) ||
        Dc
      );
    },
    we = [],
    yl = function (t) {
      for (var r = 0; r < we.length; r += 5)
        (!t || (we[r + 4] && we[r + 4].query === t)) &&
          ((we[r].style.cssText = we[r + 1]),
          we[r].getBBox && we[r].setAttribute("transform", we[r + 2] || ""),
          (we[r + 3].uncache = 1));
    },
    yo = function (t, r) {
      var e;
      for (ie = 0; ie < W.length; ie++)
        (e = W[ie]),
          e && (!r || e._ctx === r) && (t ? e.kill(1) : e.revert(!0, !0));
      r && yl(r), r || ri("revert");
    },
    xl = function (t, r) {
      Y.cache++,
        (r || !ne) &&
          Y.forEach(function (e) {
            return oe(e) && e.cacheID++ && (e.rec = 0);
          }),
        Te(t) && (H.history.scrollRestoration = ho = t);
    },
    ne,
    Jr = 0,
    ja,
    zc = function () {
      if (ja !== Jr) {
        var t = (ja = Jr);
        requestAnimationFrame(function () {
          return t === Jr && Qr(!0);
        });
      }
    },
    wl = function () {
      st.appendChild(Si),
        (_o = Si.offsetHeight || H.innerHeight),
        st.removeChild(Si);
    },
    Qr = function (t, r) {
      if (Re && !t) {
        kt(B, "scrollEnd", vl);
        return;
      }
      wl(),
        (ne = B.isRefreshing = !0),
        Y.forEach(function (i) {
          return oe(i) && ++i.cacheID && (i.rec = i());
        });
      var e = ri("refreshInit");
      ol && B.sort(),
        r || yo(),
        Y.forEach(function (i) {
          oe(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0));
        }),
        W.slice(0).forEach(function (i) {
          return i.refresh();
        }),
        W.forEach(function (i, n) {
          if (i._subPinOffset && i.pin) {
            var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
              o = i.pin[s];
            i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.refresh();
          }
        }),
        W.forEach(function (i) {
          var n = hr(i.scroller, i._dir);
          (i.vars.end === "max" || (i._endClamp && i.end > n)) &&
            i.setPositions(i.start, Math.max(i.start + 1, n), !0);
        }),
        e.forEach(function (i) {
          return i && i.render && i.render(-1);
        }),
        Y.forEach(function (i) {
          oe(i) &&
            (i.smooth &&
              requestAnimationFrame(function () {
                return (i.target.style.scrollBehavior = "smooth");
              }),
            i.rec && i(i.rec));
        }),
        xl(ho, 1),
        Gn.pause(),
        Jr++,
        (ne = 2),
        _r(2),
        W.forEach(function (i) {
          return oe(i.vars.onRefresh) && i.vars.onRefresh(i);
        }),
        (ne = B.isRefreshing = !1),
        ri("refresh");
    },
    co = 0,
    qn = 1,
    nn,
    _r = function (t) {
      if (!ne || t === 2) {
        (B.isUpdating = !0), nn && nn.update(0);
        var r = W.length,
          e = se(),
          i = e - eo >= 50,
          n = r && W[0].scroll();
        if (
          ((qn = co > n ? -1 : 1),
          ne || (co = n),
          i &&
            (Re && !Qn && e - Re > 200 && ((Re = 0), ri("scrollEnd")),
            (Yn = eo),
            (eo = e)),
          qn < 0)
        ) {
          for (ie = r; ie-- > 0; ) W[ie] && W[ie].update(0, i);
          qn = 1;
        } else for (ie = 0; ie < r; ie++) W[ie] && W[ie].update(0, i);
        B.isUpdating = !1;
      }
      sn = 0;
    },
    fo = [
      pl,
      gl,
      go,
      po,
      Pe + rn,
      Pe + Ji,
      Pe + en,
      Pe + tn,
      "display",
      "flexShrink",
      "float",
      "zIndex",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "justifySelf",
      "alignSelf",
      "placeSelf",
      "order",
    ],
    Un = fo.concat([
      Zr,
      jr,
      "boxSizing",
      "max" + Ei,
      "max" + mo,
      "position",
      Pe,
      Et,
      Et + en,
      Et + Ji,
      Et + rn,
      Et + tn,
    ]),
    Ic = function (t, r, e) {
      bi(e);
      var i = t._gsap;
      if (i.spacerIsNative) bi(i.spacerState);
      else if (t._gsap.swappedIn) {
        var n = r.parentNode;
        n && (n.insertBefore(t, r), n.removeChild(r));
      }
      t._gsap.swappedIn = !1;
    },
    no = function (t, r, e, i) {
      if (!t._gsap.swappedIn) {
        for (var n = fo.length, s = r.style, o = t.style, l; n--; )
          (l = fo[n]), (s[l] = e[l]);
        (s.position = e.position === "absolute" ? "absolute" : "relative"),
          e.display === "inline" && (s.display = "inline-block"),
          (o[go] = o[po] = "auto"),
          (s.flexBasis = e.flexBasis || "auto"),
          (s.overflow = "visible"),
          (s.boxSizing = "border-box"),
          (s[Zr] = lo(t, Ht) + Ft),
          (s[jr] = lo(t, bt) + Ft),
          (s[Et] = o[Pe] = o[gl] = o[pl] = "0"),
          bi(i),
          (o[Zr] = o["max" + Ei] = e[Zr]),
          (o[jr] = o["max" + mo] = e[jr]),
          (o[Et] = e[Et]),
          t.parentNode !== r &&
            (t.parentNode.insertBefore(r, t), r.appendChild(t)),
          (t._gsap.swappedIn = !0);
      }
    },
    Nc = /([A-Z])/g,
    bi = function (t) {
      if (t) {
        var r = t.t.style,
          e = t.length,
          i = 0,
          n,
          s;
        for ((t.t._gsap || R.core.getCache(t.t)).uncache = 1; i < e; i += 2)
          (s = t[i + 1]),
            (n = t[i]),
            s
              ? (r[n] = s)
              : r[n] && r.removeProperty(n.replace(Nc, "-$1").toLowerCase());
      }
    },
    Nn = function (t) {
      for (var r = Un.length, e = t.style, i = [], n = 0; n < r; n++)
        i.push(Un[n], e[Un[n]]);
      return (i.t = t), i;
    },
    Fc = function (t, r, e) {
      for (var i = [], n = t.length, s = e ? 8 : 0, o; s < n; s += 2)
        (o = t[s]), i.push(o, o in r ? r[o] : t[s + 1]);
      return (i.t = t.t), i;
    },
    Hn = { left: 0, top: 0 },
    Ja = function (t, r, e, i, n, s, o, l, u, c, d, h, f, p) {
      oe(t) && (t = t(l)),
        Te(t) &&
          t.substr(0, 3) === "max" &&
          (t = h + (t.charAt(4) === "=" ? Xn("0" + t.substr(3), e) : 0));
      var _ = f ? f.time() : 0,
        m,
        T,
        w;
      if ((f && f.seek(0), isNaN(t) || (t = +t), Wn(t)))
        f &&
          (t = R.utils.mapRange(
            f.scrollTrigger.start,
            f.scrollTrigger.end,
            0,
            h,
            t
          )),
          o && Vn(o, e, i, !0);
      else {
        oe(r) && (r = r(l));
        var b = (t || "0").split(" "),
          v,
          S,
          C,
          x;
        (w = re(r, l) || st),
          (v = fr(w) || {}),
          (!v || (!v.left && !v.top)) &&
            ke(w).display === "none" &&
            ((x = w.style.display),
            (w.style.display = "block"),
            (v = fr(w)),
            x ? (w.style.display = x) : w.style.removeProperty("display")),
          (S = Xn(b[0], v[i.d])),
          (C = Xn(b[1] || "0", e)),
          (t = v[i.p] - u[i.p] - c + S + n - C),
          o && Vn(o, C, i, e - C < 20 || (o._isStart && C > 20)),
          (e -= e - C);
      }
      if ((p && ((l[p] = t || -0.001), t < 0 && (t = 0)), s)) {
        var M = t + e,
          E = s._isStart;
        (m = "scroll" + i.d2),
          Vn(
            s,
            M,
            i,
            (E && M > 20) ||
              (!E && (d ? Math.max(st[m], Ve[m]) : s.parentNode[m]) <= M + 1)
          ),
          d &&
            ((u = fr(o)),
            d && (s.style[i.op.p] = u[i.op.p] - i.op.m - s._offset + Ft));
      }
      return (
        f &&
          w &&
          ((m = fr(w)),
          f.seek(h),
          (T = fr(w)),
          (f._caScrollDist = m[i.p] - T[i.p]),
          (t = (t / f._caScrollDist) * h)),
        f && f.seek(_),
        f ? t : Math.round(t)
      );
    },
    Bc = /(webkit|moz|length|cssText|inset)/i,
    tl = function (t, r, e, i) {
      if (t.parentNode !== r) {
        var n = t.style,
          s,
          o;
        if (r === st) {
          (t._stOrig = n.cssText), (o = ke(t));
          for (s in o)
            !+s &&
              !Bc.test(s) &&
              o[s] &&
              typeof n[s] == "string" &&
              s !== "0" &&
              (n[s] = o[s]);
          (n.top = e), (n.left = i);
        } else n.cssText = t._stOrig;
        (R.core.getCache(t).uncache = 1), r.appendChild(t);
      }
    },
    Tl = function (t, r, e) {
      var i = r,
        n = i;
      return function (s) {
        var o = Math.round(t());
        return (
          o !== i &&
            o !== n &&
            Math.abs(o - i) > 3 &&
            Math.abs(o - n) > 3 &&
            ((s = o), e && e()),
          (n = i),
          (i = s),
          s
        );
      };
    },
    Fn = function (t, r, e) {
      var i = {};
      (i[r.p] = "+=" + e), R.set(t, i);
    },
    el = function (t, r) {
      var e = ur(t, r),
        i = "_scroll" + r.p2,
        n = function s(o, l, u, c, d) {
          var h = s.tween,
            f = l.onComplete,
            p = {};
          u = u || e();
          var _ = Tl(e, u, function () {
            h.kill(), (s.tween = 0);
          });
          return (
            (d = (c && d) || 0),
            (c = c || o - u),
            h && h.kill(),
            (l[i] = o),
            (l.modifiers = p),
            (p[i] = function () {
              return _(u + c * h.ratio + d * h.ratio * h.ratio);
            }),
            (l.onUpdate = function () {
              Y.cache++, _r();
            }),
            (l.onComplete = function () {
              (s.tween = 0), f && f.call(h);
            }),
            (h = s.tween = R.to(t, l)),
            h
          );
        };
      return (
        (t[i] = e),
        (e.wheelHandler = function () {
          return n.tween && n.tween.kill() && (n.tween = 0);
        }),
        kt(t, "wheel", e.wheelHandler),
        B.isTouch && kt(t, "touchmove", e.wheelHandler),
        n
      );
    },
    B = (function () {
      function a(r, e) {
        xi ||
          a.register(R) ||
          console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
          ao(this),
          this.init(r, e);
      }
      var t = a.prototype;
      return (
        (t.init = function (e, i) {
          if (
            ((this.progress = this.start = 0),
            this.vars && this.kill(!0, !0),
            !Qi)
          ) {
            this.update = this.refresh = this.kill = Je;
            return;
          }
          e = Ka(Te(e) || Wn(e) || e.nodeType ? { trigger: e } : e, zn);
          var n = e,
            s = n.onUpdate,
            o = n.toggleClass,
            l = n.id,
            u = n.onToggle,
            c = n.onRefresh,
            d = n.scrub,
            h = n.trigger,
            f = n.pin,
            p = n.pinSpacing,
            _ = n.invalidateOnRefresh,
            m = n.anticipatePin,
            T = n.onScrubComplete,
            w = n.onSnapComplete,
            b = n.once,
            v = n.snap,
            S = n.pinReparent,
            C = n.pinSpacer,
            x = n.containerAnimation,
            M = n.fastScrollEnd,
            E = n.preventOverlaps,
            O =
              e.horizontal || (e.containerAnimation && e.horizontal !== !1)
                ? Ht
                : bt,
            L = !d && d !== 0,
            P = re(e.scroller || H),
            K = R.core.getCache(P),
            z = ti(P),
            N =
              ("pinType" in e
                ? e.pinType
                : cr(P, "pinType") || (z && "fixed")) === "fixed",
            q = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            D = L && e.toggleActions.split(" "),
            V = "markers" in e ? e.markers : zn.markers,
            tt = z ? 0 : parseFloat(ke(P)["border" + O.p2 + Ei]) || 0,
            g = this,
            nt =
              e.onRefreshInit &&
              function () {
                return e.onRefreshInit(g);
              },
            $t = Pc(P, z, O),
            Ae = kc(P, z),
            ht = 0,
            Rt = 0,
            Kt = 0,
            wt = ur(P, O),
            Qt,
            Bt,
            dr,
            ae,
            qe,
            j,
            Tt,
            le,
            de,
            y,
            pe,
            tr,
            Or,
            St,
            Pr,
            kr,
            Oi,
            Lt,
            mt,
            De,
            ze,
            Rr,
            er,
            Ue,
            ue,
            Lr,
            ii,
            ni,
            Ar,
            pr,
            gr,
            Q,
            Dr,
            Ie,
            Ne,
            Fe,
            zr,
            si,
            rr;
          if (
            ((g._startClamp = g._endClamp = !1),
            (g._dir = O),
            (m *= 45),
            (g.scroller = P),
            (g.scroll = x ? x.time.bind(x) : wt),
            (ae = wt()),
            (g.vars = e),
            (i = i || e.animation),
            "refreshPriority" in e &&
              ((ol = 1), e.refreshPriority === -9999 && (nn = g)),
            (K.tweenScroll = K.tweenScroll || {
              top: el(P, bt),
              left: el(P, Ht),
            }),
            (g.tweenTo = Qt = K.tweenScroll[O.p]),
            (g.scrubDuration = function (k) {
              (Dr = Wn(k) && k),
                Dr
                  ? Q
                    ? Q.duration(k)
                    : (Q = R.to(i, {
                        ease: "expo",
                        totalProgress: "+=0",
                        duration: Dr,
                        paused: !0,
                        onComplete: function () {
                          return T && T(g);
                        },
                      }))
                  : (Q && Q.progress(1).kill(), (Q = 0));
            }),
            i &&
              ((i.vars.lazy = !1),
              (i._initted && !g.isReverted) ||
                (i.vars.immediateRender !== !1 &&
                  e.immediateRender !== !1 &&
                  i.duration() &&
                  i.render(0, !0, !0)),
              (g.animation = i.pause()),
              (i.scrollTrigger = g),
              g.scrubDuration(d),
              (pr = 0),
              l || (l = i.vars.id)),
            v &&
              ((!Kr(v) || v.push) && (v = { snapTo: v }),
              "scrollBehavior" in st.style &&
                R.set(z ? [st, Ve] : P, { scrollBehavior: "auto" }),
              Y.forEach(function (k) {
                return (
                  oe(k) &&
                  k.target === (z ? ft.scrollingElement || Ve : P) &&
                  (k.smooth = !1)
                );
              }),
              (dr = oe(v.snapTo)
                ? v.snapTo
                : v.snapTo === "labels"
                ? Lc(i)
                : v.snapTo === "labelsDirectional"
                ? Ac(i)
                : v.directional !== !1
                ? function (k, G) {
                    return vo(v.snapTo)(k, se() - Rt < 500 ? 0 : G.direction);
                  }
                : R.utils.snap(v.snapTo)),
              (Ie = v.duration || { min: 0.1, max: 2 }),
              (Ie = Kr(Ie) ? Ti(Ie.min, Ie.max) : Ti(Ie, Ie)),
              (Ne = R.delayedCall(v.delay || Dr / 2 || 0.1, function () {
                var k = wt(),
                  G = se() - Rt < 500,
                  I = Qt.tween;
                if (
                  (G || Math.abs(g.getVelocity()) < 10) &&
                  !I &&
                  !Qn &&
                  ht !== k
                ) {
                  var X = (k - j) / St,
                    Ot = i && !L ? i.totalProgress() : X,
                    Z = G ? 0 : ((Ot - gr) / (se() - Yn)) * 1e3 || 0,
                    vt = R.utils.clamp(-X, 1 - X, (vi(Z / 2) * Z) / 0.185),
                    Zt = X + (v.inertia === !1 ? 0 : vt),
                    At = Ti(0, 1, dr(Zt, g)),
                    at = Math.round(j + At * St),
                    et = v,
                    Be = et.onStart,
                    lt = et.onInterrupt,
                    ge = et.onComplete;
                  if (k <= Tt && k >= j && at !== k) {
                    if (I && !I._initted && I.data <= vi(at - k)) return;
                    v.inertia === !1 && (vt = At - X),
                      Qt(
                        at,
                        {
                          duration: Ie(
                            vi(
                              (Math.max(vi(Zt - Ot), vi(At - Ot)) * 0.185) /
                                Z /
                                0.05 || 0
                            )
                          ),
                          ease: v.ease || "power3",
                          data: vi(at - k),
                          onInterrupt: function () {
                            return Ne.restart(!0) && lt && lt(g);
                          },
                          onComplete: function () {
                            g.update(),
                              (ht = wt()),
                              (pr = gr =
                                i && !L ? i.totalProgress() : g.progress),
                              w && w(g),
                              ge && ge(g);
                          },
                        },
                        k,
                        vt * St,
                        at - k - vt * St
                      ),
                      Be && Be(g, Qt.tween);
                  }
                } else g.isActive && ht !== k && Ne.restart(!0);
              }).pause())),
            l && (uo[l] = g),
            (h = g.trigger = re(h || (f !== !0 && f))),
            (rr = h && h._gsap && h._gsap.stRevert),
            rr && (rr = rr(g)),
            (f = f === !0 ? h : re(f)),
            Te(o) && (o = { targets: h, className: o }),
            f &&
              (p === !1 ||
                p === Pe ||
                (p =
                  !p &&
                  f.parentNode &&
                  f.parentNode.style &&
                  ke(f.parentNode).display === "flex"
                    ? !1
                    : Et),
              (g.pin = f),
              (Bt = R.core.getCache(f)),
              Bt.spacer
                ? (Pr = Bt.pinState)
                : (C &&
                    ((C = re(C)),
                    C && !C.nodeType && (C = C.current || C.nativeElement),
                    (Bt.spacerIsNative = !!C),
                    C && (Bt.spacerState = Nn(C))),
                  (Bt.spacer = Lt = C || ft.createElement("div")),
                  Lt.classList.add("pin-spacer"),
                  l && Lt.classList.add("pin-spacer-" + l),
                  (Bt.pinState = Pr = Nn(f))),
              e.force3D !== !1 && R.set(f, { force3D: !0 }),
              (g.spacer = Lt = Bt.spacer),
              (Ar = ke(f)),
              (Ue = Ar[p + O.os2]),
              (De = R.getProperty(f)),
              (ze = R.quickSetter(f, O.a, Ft)),
              no(f, Lt, Ar),
              (Oi = Nn(f))),
            V)
          ) {
            (tr = Kr(V) ? Ka(V, Qa) : Qa),
              (y = In("scroller-start", l, P, O, tr, 0)),
              (pe = In("scroller-end", l, P, O, tr, 0, y)),
              (mt = y["offset" + O.op.d2]);
            var F = re(cr(P, "content") || P);
            (le = this.markerStart = In("start", l, F, O, tr, mt, 0, x)),
              (de = this.markerEnd = In("end", l, F, O, tr, mt, 0, x)),
              x && (si = R.quickSetter([le, de], O.a, Ft)),
              !N &&
                !(Xe.length && cr(P, "fixedMarkers") === !0) &&
                (Rc(z ? st : P),
                R.set([y, pe], { force3D: !0 }),
                (Lr = R.quickSetter(y, O.a, Ft)),
                (ni = R.quickSetter(pe, O.a, Ft)));
          }
          if (x) {
            var A = x.vars.onUpdate,
              J = x.vars.onUpdateParams;
            x.eventCallback("onUpdate", function () {
              g.update(0, 0, 1), A && A.apply(x, J || []);
            });
          }
          if (
            ((g.previous = function () {
              return W[W.indexOf(g) - 1];
            }),
            (g.next = function () {
              return W[W.indexOf(g) + 1];
            }),
            (g.revert = function (k, G) {
              if (!G) return g.kill(!0);
              var I = k !== !1 || !g.enabled,
                X = Gt;
              I !== g.isReverted &&
                (I &&
                  ((Fe = Math.max(wt(), g.scroll.rec || 0)),
                  (Kt = g.progress),
                  (zr = i && i.progress())),
                le &&
                  [le, de, y, pe].forEach(function (Ot) {
                    return (Ot.style.display = I ? "none" : "block");
                  }),
                I && ((Gt = g), g.update(I)),
                f &&
                  (!S || !g.isActive) &&
                  (I ? Ic(f, Lt, Pr) : no(f, Lt, ke(f), ue)),
                I || g.update(I),
                (Gt = X),
                (g.isReverted = I));
            }),
            (g.refresh = function (k, G, I, X) {
              if (!((Gt || !g.enabled) && !G)) {
                if (f && k && Re) {
                  kt(a, "scrollEnd", vl);
                  return;
                }
                !ne && nt && nt(g),
                  (Gt = g),
                  Qt.tween && !I && (Qt.tween.kill(), (Qt.tween = 0)),
                  Q && Q.pause(),
                  _ && i && i.revert({ kill: !1 }).invalidate(),
                  g.isReverted || g.revert(!0, !0),
                  (g._subPinOffset = !1);
                var Ot = $t(),
                  Z = Ae(),
                  vt = x ? x.duration() : hr(P, O),
                  Zt = St <= 0.01,
                  At = 0,
                  at = X || 0,
                  et = Kr(I) ? I.end : e.end,
                  Be = e.endTrigger || h,
                  lt = Kr(I)
                    ? I.start
                    : e.start ||
                      (e.start === 0 || !h ? 0 : f ? "0 0" : "0 100%"),
                  ge = (g.pinnedContainer =
                    e.pinnedContainer && re(e.pinnedContainer, g)),
                  He = (h && Math.max(0, W.indexOf(g))) || 0,
                  me = He,
                  Dt,
                  Yt,
                  Ir,
                  on,
                  Wt,
                  Ct,
                  Ge,
                  es,
                  Mo,
                  Pi,
                  $e,
                  ki,
                  an;
                for (
                  V &&
                  Kr(I) &&
                  ((ki = R.getProperty(y, O.p)), (an = R.getProperty(pe, O.p)));
                  me--;

                )
                  (Ct = W[me]),
                    Ct.end || Ct.refresh(0, 1) || (Gt = g),
                    (Ge = Ct.pin),
                    Ge &&
                      (Ge === h || Ge === f || Ge === ge) &&
                      !Ct.isReverted &&
                      (Pi || (Pi = []), Pi.unshift(Ct), Ct.revert(!0, !0)),
                    Ct !== W[me] && (He--, me--);
                for (
                  oe(lt) && (lt = lt(g)),
                    lt = Ua(lt, "start", g),
                    j =
                      Ja(
                        lt,
                        h,
                        Ot,
                        O,
                        wt(),
                        le,
                        y,
                        g,
                        Z,
                        tt,
                        N,
                        vt,
                        x,
                        g._startClamp && "_startClamp"
                      ) || (f ? -0.001 : 0),
                    oe(et) && (et = et(g)),
                    Te(et) &&
                      !et.indexOf("+=") &&
                      (~et.indexOf(" ")
                        ? (et = (Te(lt) ? lt.split(" ")[0] : "") + et)
                        : ((At = Xn(et.substr(2), Ot)),
                          (et = Te(lt)
                            ? lt
                            : (x
                                ? R.utils.mapRange(
                                    0,
                                    x.duration(),
                                    x.scrollTrigger.start,
                                    x.scrollTrigger.end,
                                    j
                                  )
                                : j) + At),
                          (Be = h))),
                    et = Ua(et, "end", g),
                    Tt =
                      Math.max(
                        j,
                        Ja(
                          et || (Be ? "100% 0" : vt),
                          Be,
                          Ot,
                          O,
                          wt() + At,
                          de,
                          pe,
                          g,
                          Z,
                          tt,
                          N,
                          vt,
                          x,
                          g._endClamp && "_endClamp"
                        )
                      ) || -0.001,
                    At = 0,
                    me = He;
                  me--;

                )
                  (Ct = W[me]),
                    (Ge = Ct.pin),
                    Ge &&
                      Ct.start - Ct._pinPush <= j &&
                      !x &&
                      Ct.end > 0 &&
                      ((Dt =
                        Ct.end -
                        (g._startClamp ? Math.max(0, Ct.start) : Ct.start)),
                      ((Ge === h && Ct.start - Ct._pinPush < j) || Ge === ge) &&
                        isNaN(lt) &&
                        (At += Dt * (1 - Ct.progress)),
                      Ge === f && (at += Dt));
                if (
                  ((j += At),
                  (Tt += At),
                  g._startClamp && (g._startClamp += At),
                  g._endClamp &&
                    !ne &&
                    ((g._endClamp = Tt || -0.001),
                    (Tt = Math.min(Tt, hr(P, O)))),
                  (St = Tt - j || ((j -= 0.01) && 0.001)),
                  Zt &&
                    (Kt = R.utils.clamp(0, 1, R.utils.normalize(j, Tt, Fe))),
                  (g._pinPush = at),
                  le &&
                    At &&
                    ((Dt = {}),
                    (Dt[O.a] = "+=" + At),
                    ge && (Dt[O.p] = "-=" + wt()),
                    R.set([le, de], Dt)),
                  f)
                )
                  (Dt = ke(f)),
                    (on = O === bt),
                    (Ir = wt()),
                    (Rr = parseFloat(De(O.a)) + at),
                    !vt &&
                      Tt > 1 &&
                      (($e = (z ? ft.scrollingElement || Ve : P).style),
                      ($e = {
                        style: $e,
                        value: $e["overflow" + O.a.toUpperCase()],
                      }),
                      z &&
                        ke(st)["overflow" + O.a.toUpperCase()] !== "scroll" &&
                        ($e.style["overflow" + O.a.toUpperCase()] = "scroll")),
                    no(f, Lt, Dt),
                    (Oi = Nn(f)),
                    (Yt = fr(f, !0)),
                    (es = N && ur(P, on ? Ht : bt)()),
                    p &&
                      ((ue = [p + O.os2, St + at + Ft]),
                      (ue.t = Lt),
                      (me = p === Et ? lo(f, O) + St + at : 0),
                      me && ue.push(O.d, me + Ft),
                      bi(ue),
                      ge &&
                        W.forEach(function (Ri) {
                          Ri.pin === ge &&
                            Ri.vars.pinSpacing !== !1 &&
                            (Ri._subPinOffset = !0);
                        }),
                      N && wt(Fe)),
                    N &&
                      ((Wt = {
                        top: Yt.top + (on ? Ir - j : es) + Ft,
                        left: Yt.left + (on ? es : Ir - j) + Ft,
                        boxSizing: "border-box",
                        position: "fixed",
                      }),
                      (Wt[Zr] = Wt["max" + Ei] = Math.ceil(Yt.width) + Ft),
                      (Wt[jr] = Wt["max" + mo] = Math.ceil(Yt.height) + Ft),
                      (Wt[Pe] =
                        Wt[Pe + en] =
                        Wt[Pe + Ji] =
                        Wt[Pe + rn] =
                        Wt[Pe + tn] =
                          "0"),
                      (Wt[Et] = Dt[Et]),
                      (Wt[Et + en] = Dt[Et + en]),
                      (Wt[Et + Ji] = Dt[Et + Ji]),
                      (Wt[Et + rn] = Dt[Et + rn]),
                      (Wt[Et + tn] = Dt[Et + tn]),
                      (kr = Fc(Pr, Wt, S)),
                      ne && wt(0)),
                    i
                      ? ((Mo = i._initted),
                        Js(1),
                        i.render(i.duration(), !0, !0),
                        (er = De(O.a) - Rr + St + at),
                        (ii = Math.abs(St - er) > 1),
                        N && ii && kr.splice(kr.length - 2, 2),
                        i.render(0, !0, !0),
                        Mo || i.invalidate(!0),
                        i.parent || i.totalTime(i.totalTime()),
                        Js(0))
                      : (er = St),
                    $e &&
                      ($e.value
                        ? ($e.style["overflow" + O.a.toUpperCase()] = $e.value)
                        : $e.style.removeProperty("overflow-" + O.a));
                else if (h && wt() && !x)
                  for (Yt = h.parentNode; Yt && Yt !== st; )
                    Yt._pinOffset &&
                      ((j -= Yt._pinOffset), (Tt -= Yt._pinOffset)),
                      (Yt = Yt.parentNode);
                Pi &&
                  Pi.forEach(function (Ri) {
                    return Ri.revert(!1, !0);
                  }),
                  (g.start = j),
                  (g.end = Tt),
                  (ae = qe = ne ? Fe : wt()),
                  !x && !ne && (ae < Fe && wt(Fe), (g.scroll.rec = 0)),
                  g.revert(!1, !0),
                  (Rt = se()),
                  Ne && ((ht = -1), Ne.restart(!0)),
                  (Gt = 0),
                  i &&
                    L &&
                    (i._initted || zr) &&
                    i.progress() !== zr &&
                    i.progress(zr || 0, !0).render(i.time(), !0, !0),
                  (Zt || Kt !== g.progress || x) &&
                    (i &&
                      !L &&
                      i.totalProgress(
                        x && j < -0.001 && !Kt
                          ? R.utils.normalize(j, Tt, 0)
                          : Kt,
                        !0
                      ),
                    (g.progress = Zt || (ae - j) / St === Kt ? 0 : Kt)),
                  f && p && (Lt._pinOffset = Math.round(g.progress * er)),
                  Q && Q.invalidate(),
                  isNaN(ki) ||
                    ((ki -= R.getProperty(y, O.p)),
                    (an -= R.getProperty(pe, O.p)),
                    Fn(y, O, ki),
                    Fn(le, O, ki - (X || 0)),
                    Fn(pe, O, an),
                    Fn(de, O, an - (X || 0))),
                  Zt && !ne && g.update(),
                  c && !ne && !Or && ((Or = !0), c(g), (Or = !1));
              }
            }),
            (g.getVelocity = function () {
              return ((wt() - qe) / (se() - Yn)) * 1e3 || 0;
            }),
            (g.endAnimation = function () {
              Ki(g.callbackAnimation),
                i &&
                  (Q
                    ? Q.progress(1)
                    : i.paused()
                    ? L || Ki(i, g.direction < 0, 1)
                    : Ki(i, i.reversed()));
            }),
            (g.labelToScroll = function (k) {
              return (
                (i &&
                  i.labels &&
                  (j || g.refresh() || j) +
                    (i.labels[k] / i.duration()) * St) ||
                0
              );
            }),
            (g.getTrailing = function (k) {
              var G = W.indexOf(g),
                I = g.direction > 0 ? W.slice(0, G).reverse() : W.slice(G + 1);
              return (
                Te(k)
                  ? I.filter(function (X) {
                      return X.vars.preventOverlaps === k;
                    })
                  : I
              ).filter(function (X) {
                return g.direction > 0 ? X.end <= j : X.start >= Tt;
              });
            }),
            (g.update = function (k, G, I) {
              if (!(x && !I && !k)) {
                var X = ne === !0 ? Fe : g.scroll(),
                  Ot = k ? 0 : (X - j) / St,
                  Z = Ot < 0 ? 0 : Ot > 1 ? 1 : Ot || 0,
                  vt = g.progress,
                  Zt,
                  At,
                  at,
                  et,
                  Be,
                  lt,
                  ge,
                  He;
                if (
                  (G &&
                    ((qe = ae),
                    (ae = x ? wt() : X),
                    v && ((gr = pr), (pr = i && !L ? i.totalProgress() : Z))),
                  m &&
                    !Z &&
                    f &&
                    !Gt &&
                    !Rn &&
                    Re &&
                    j < X + ((X - qe) / (se() - Yn)) * m &&
                    (Z = 1e-4),
                  Z !== vt && g.enabled)
                ) {
                  if (
                    ((Zt = g.isActive = !!Z && Z < 1),
                    (At = !!vt && vt < 1),
                    (lt = Zt !== At),
                    (Be = lt || !!Z != !!vt),
                    (g.direction = Z > vt ? 1 : -1),
                    (g.progress = Z),
                    Be &&
                      !Gt &&
                      ((at = Z && !vt ? 0 : Z === 1 ? 1 : vt === 1 ? 2 : 3),
                      L &&
                        ((et =
                          (!lt && D[at + 1] !== "none" && D[at + 1]) || D[at]),
                        (He =
                          i &&
                          (et === "complete" || et === "reset" || et in i)))),
                    E &&
                      (lt || He) &&
                      (He || d || !i) &&
                      (oe(E)
                        ? E(g)
                        : g.getTrailing(E).forEach(function (Ir) {
                            return Ir.endAnimation();
                          })),
                    L ||
                      (Q && !Gt && !Rn
                        ? (Q._dp._time - Q._start !== Q._time &&
                            Q.render(Q._dp._time - Q._start),
                          Q.resetTo
                            ? Q.resetTo("totalProgress", Z, i._tTime / i._tDur)
                            : ((Q.vars.totalProgress = Z),
                              Q.invalidate().restart()))
                        : i && i.totalProgress(Z, !!(Gt && (Rt || k)))),
                    f)
                  ) {
                    if ((k && p && (Lt.style[p + O.os2] = Ue), !N))
                      ze(Zi(Rr + er * Z));
                    else if (Be) {
                      if (
                        ((ge = !k && Z > vt && Tt + 1 > X && X + 1 >= hr(P, O)),
                        S)
                      )
                        if (!k && (Zt || ge)) {
                          var me = fr(f, !0),
                            Dt = X - j;
                          tl(
                            f,
                            st,
                            me.top + (O === bt ? Dt : 0) + Ft,
                            me.left + (O === bt ? 0 : Dt) + Ft
                          );
                        } else tl(f, Lt);
                      bi(Zt || ge ? kr : Oi),
                        (ii && Z < 1 && Zt) ||
                          ze(Rr + (Z === 1 && !ge ? er : 0));
                    }
                  }
                  v && !Qt.tween && !Gt && !Rn && Ne.restart(!0),
                    o &&
                      (lt || (b && Z && (Z < 1 || !to))) &&
                      $n(o.targets).forEach(function (Ir) {
                        return Ir.classList[Zt || b ? "add" : "remove"](
                          o.className
                        );
                      }),
                    s && !L && !k && s(g),
                    Be && !Gt
                      ? (L &&
                          (He &&
                            (et === "complete"
                              ? i.pause().totalProgress(1)
                              : et === "reset"
                              ? i.restart(!0).pause()
                              : et === "restart"
                              ? i.restart(!0)
                              : i[et]()),
                          s && s(g)),
                        (lt || !to) &&
                          (u && lt && ro(g, u),
                          q[at] && ro(g, q[at]),
                          b && (Z === 1 ? g.kill(!1, 1) : (q[at] = 0)),
                          lt ||
                            ((at = Z === 1 ? 1 : 3), q[at] && ro(g, q[at]))),
                        M &&
                          !Zt &&
                          Math.abs(g.getVelocity()) > (Wn(M) ? M : 2500) &&
                          (Ki(g.callbackAnimation),
                          Q
                            ? Q.progress(1)
                            : Ki(i, et === "reverse" ? 1 : !Z, 1)))
                      : L && s && !Gt && s(g);
                }
                if (ni) {
                  var Yt = x ? (X / x.duration()) * (x._caScrollDist || 0) : X;
                  Lr(Yt + (y._isFlipped ? 1 : 0)), ni(Yt);
                }
                si && si((-X / x.duration()) * (x._caScrollDist || 0));
              }
            }),
            (g.enable = function (k, G) {
              g.enabled ||
                ((g.enabled = !0),
                kt(P, "resize", ji),
                z || kt(P, "scroll", yi),
                nt && kt(a, "refreshInit", nt),
                k !== !1 && ((g.progress = Kt = 0), (ae = qe = ht = wt())),
                G !== !1 && g.refresh());
            }),
            (g.getTween = function (k) {
              return k && Qt ? Qt.tween : Q;
            }),
            (g.setPositions = function (k, G, I, X) {
              if (x) {
                var Ot = x.scrollTrigger,
                  Z = x.duration(),
                  vt = Ot.end - Ot.start;
                (k = Ot.start + (vt * k) / Z), (G = Ot.start + (vt * G) / Z);
              }
              g.refresh(
                !1,
                !1,
                {
                  start: Ha(k, I && !!g._startClamp),
                  end: Ha(G, I && !!g._endClamp),
                },
                X
              ),
                g.update();
            }),
            (g.adjustPinSpacing = function (k) {
              if (ue && k) {
                var G = ue.indexOf(O.d) + 1;
                (ue[G] = parseFloat(ue[G]) + k + Ft),
                  (ue[1] = parseFloat(ue[1]) + k + Ft),
                  bi(ue);
              }
            }),
            (g.disable = function (k, G) {
              if (
                g.enabled &&
                (k !== !1 && g.revert(!0, !0),
                (g.enabled = g.isActive = !1),
                G || (Q && Q.pause()),
                (Fe = 0),
                Bt && (Bt.uncache = 1),
                nt && Pt(a, "refreshInit", nt),
                Ne &&
                  (Ne.pause(), Qt.tween && Qt.tween.kill() && (Qt.tween = 0)),
                !z)
              ) {
                for (var I = W.length; I--; )
                  if (W[I].scroller === P && W[I] !== g) return;
                Pt(P, "resize", ji), z || Pt(P, "scroll", yi);
              }
            }),
            (g.kill = function (k, G) {
              g.disable(k, G), Q && !G && Q.kill(), l && delete uo[l];
              var I = W.indexOf(g);
              I >= 0 && W.splice(I, 1),
                I === ie && qn > 0 && ie--,
                (I = 0),
                W.forEach(function (X) {
                  return X.scroller === g.scroller && (I = 1);
                }),
                I || ne || (g.scroll.rec = 0),
                i &&
                  ((i.scrollTrigger = null),
                  k && i.revert({ kill: !1 }),
                  G || i.kill()),
                le &&
                  [le, de, y, pe].forEach(function (X) {
                    return X.parentNode && X.parentNode.removeChild(X);
                  }),
                nn === g && (nn = 0),
                f &&
                  (Bt && (Bt.uncache = 1),
                  (I = 0),
                  W.forEach(function (X) {
                    return X.pin === f && I++;
                  }),
                  I || (Bt.spacer = 0)),
                e.onKill && e.onKill(g);
            }),
            W.push(g),
            g.enable(!1, !1),
            rr && rr(g),
            i && i.add && !St)
          ) {
            var _t = g.update;
            (g.update = function () {
              (g.update = _t), j || Tt || g.refresh();
            }),
              R.delayedCall(0.01, g.update),
              (St = 0.01),
              (j = Tt = 0);
          } else g.refresh();
          f && zc();
        }),
        (a.register = function (e) {
          return (
            xi ||
              ((R = e || hl()),
              fl() && window.document && a.enable(),
              (xi = Qi)),
            xi
          );
        }),
        (a.defaults = function (e) {
          if (e) for (var i in e) zn[i] = e[i];
          return zn;
        }),
        (a.disable = function (e, i) {
          (Qi = 0),
            W.forEach(function (s) {
              return s[i ? "kill" : "disable"](e);
            }),
            Pt(H, "wheel", yi),
            Pt(ft, "scroll", yi),
            clearInterval(kn),
            Pt(ft, "touchcancel", Je),
            Pt(st, "touchstart", Je),
            An(Pt, ft, "pointerdown,touchstart,mousedown", Ga),
            An(Pt, ft, "pointerup,touchend,mouseup", $a),
            Gn.kill(),
            Ln(Pt);
          for (var n = 0; n < Y.length; n += 3)
            Dn(Pt, Y[n], Y[n + 1]), Dn(Pt, Y[n], Y[n + 2]);
        }),
        (a.enable = function () {
          if (
            ((H = window),
            (ft = document),
            (Ve = ft.documentElement),
            (st = ft.body),
            R &&
              (($n = R.utils.toArray),
              (Ti = R.utils.clamp),
              (ao = R.core.context || Je),
              (Js = R.core.suppressOverwrites || Je),
              (ho = H.history.scrollRestoration || "auto"),
              (co = H.pageYOffset),
              R.core.globals("ScrollTrigger", a),
              st))
          ) {
            (Qi = 1),
              (Si = document.createElement("div")),
              (Si.style.height = "100vh"),
              (Si.style.position = "absolute"),
              wl(),
              Oc(),
              xt.register(R),
              (a.isTouch = xt.isTouch),
              (Mr =
                xt.isTouch &&
                /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
              kt(H, "wheel", yi),
              (sl = [H, ft, Ve, st]),
              R.matchMedia
                ? ((a.matchMedia = function (l) {
                    var u = R.matchMedia(),
                      c;
                    for (c in l) u.add(c, l[c]);
                    return u;
                  }),
                  R.addEventListener("matchMediaInit", function () {
                    return yo();
                  }),
                  R.addEventListener("matchMediaRevert", function () {
                    return yl();
                  }),
                  R.addEventListener("matchMedia", function () {
                    Qr(0, 1), ri("matchMedia");
                  }),
                  R.matchMedia("(orientation: portrait)", function () {
                    return io(), io;
                  }))
                : console.warn("Requires GSAP 3.11.0 or later"),
              io(),
              kt(ft, "scroll", yi);
            var e = st.style,
              i = e.borderTopStyle,
              n = R.core.Animation.prototype,
              s,
              o;
            for (
              n.revert ||
                Object.defineProperty(n, "revert", {
                  value: function () {
                    return this.time(-0.01, !0);
                  },
                }),
                e.borderTopStyle = "solid",
                s = fr(st),
                bt.m = Math.round(s.top + bt.sc()) || 0,
                Ht.m = Math.round(s.left + Ht.sc()) || 0,
                i
                  ? (e.borderTopStyle = i)
                  : e.removeProperty("border-top-style"),
                kn = setInterval(Za, 250),
                R.delayedCall(0.5, function () {
                  return (Rn = 0);
                }),
                kt(ft, "touchcancel", Je),
                kt(st, "touchstart", Je),
                An(kt, ft, "pointerdown,touchstart,mousedown", Ga),
                An(kt, ft, "pointerup,touchend,mouseup", $a),
                oo = R.utils.checkPrefix("transform"),
                Un.push(oo),
                xi = se(),
                Gn = R.delayedCall(0.2, Qr).pause(),
                wi = [
                  ft,
                  "visibilitychange",
                  function () {
                    var l = H.innerWidth,
                      u = H.innerHeight;
                    ft.hidden
                      ? ((Va = l), (qa = u))
                      : (Va !== l || qa !== u) && ji();
                  },
                  ft,
                  "DOMContentLoaded",
                  Qr,
                  H,
                  "load",
                  Qr,
                  H,
                  "resize",
                  ji,
                ],
                Ln(kt),
                W.forEach(function (l) {
                  return l.enable(0, 1);
                }),
                o = 0;
              o < Y.length;
              o += 3
            )
              Dn(Pt, Y[o], Y[o + 1]), Dn(Pt, Y[o], Y[o + 2]);
          }
        }),
        (a.config = function (e) {
          "limitCallbacks" in e && (to = !!e.limitCallbacks);
          var i = e.syncInterval;
          (i && clearInterval(kn)) || ((kn = i) && setInterval(Za, i)),
            "ignoreMobileResize" in e &&
              (ll = a.isTouch === 1 && e.ignoreMobileResize),
            "autoRefreshEvents" in e &&
              (Ln(Pt) || Ln(kt, e.autoRefreshEvents || "none"),
              (al = (e.autoRefreshEvents + "").indexOf("resize") === -1));
        }),
        (a.scrollerProxy = function (e, i) {
          var n = re(e),
            s = Y.indexOf(n),
            o = ti(n);
          ~s && Y.splice(s, o ? 6 : 2),
            i && (o ? Xe.unshift(H, i, st, i, Ve, i) : Xe.unshift(n, i));
        }),
        (a.clearMatchMedia = function (e) {
          W.forEach(function (i) {
            return i._ctx && i._ctx.query === e && i._ctx.kill(!0, !0);
          });
        }),
        (a.isInViewport = function (e, i, n) {
          var s = (Te(e) ? re(e) : e).getBoundingClientRect(),
            o = s[n ? Zr : jr] * i || 0;
          return n
            ? s.right - o > 0 && s.left + o < H.innerWidth
            : s.bottom - o > 0 && s.top + o < H.innerHeight;
        }),
        (a.positionInViewport = function (e, i, n) {
          Te(e) && (e = re(e));
          var s = e.getBoundingClientRect(),
            o = s[n ? Zr : jr],
            l =
              i == null
                ? o / 2
                : i in Kn
                ? Kn[i] * o
                : ~i.indexOf("%")
                ? (parseFloat(i) * o) / 100
                : parseFloat(i) || 0;
          return n ? (s.left + l) / H.innerWidth : (s.top + l) / H.innerHeight;
        }),
        (a.killAll = function (e) {
          if (
            (W.slice(0).forEach(function (n) {
              return n.vars.id !== "ScrollSmoother" && n.kill();
            }),
            e !== !0)
          ) {
            var i = ei.killAll || [];
            (ei = {}),
              i.forEach(function (n) {
                return n();
              });
          }
        }),
        a
      );
    })();
  B.version = "3.12.2";
  B.saveStyles = function (a) {
    return a
      ? $n(a).forEach(function (t) {
          if (t && t.style) {
            var r = we.indexOf(t);
            r >= 0 && we.splice(r, 5),
              we.push(
                t,
                t.style.cssText,
                t.getBBox && t.getAttribute("transform"),
                R.core.getCache(t),
                ao()
              );
          }
        })
      : we;
  };
  B.revert = function (a, t) {
    return yo(!a, t);
  };
  B.create = function (a, t) {
    return new B(a, t);
  };
  B.refresh = function (a) {
    return a ? ji() : (xi || B.register()) && Qr(!0);
  };
  B.update = function (a) {
    return ++Y.cache && _r(a === !0 ? 2 : 0);
  };
  B.clearScrollMemory = xl;
  B.maxScroll = function (a, t) {
    return hr(a, t ? Ht : bt);
  };
  B.getScrollFunc = function (a, t) {
    return ur(re(a), t ? Ht : bt);
  };
  B.getById = function (a) {
    return uo[a];
  };
  B.getAll = function () {
    return W.filter(function (a) {
      return a.vars.id !== "ScrollSmoother";
    });
  };
  B.isScrolling = function () {
    return !!Re;
  };
  B.snapDirectional = vo;
  B.addEventListener = function (a, t) {
    var r = ei[a] || (ei[a] = []);
    ~r.indexOf(t) || r.push(t);
  };
  B.removeEventListener = function (a, t) {
    var r = ei[a],
      e = r && r.indexOf(t);
    e >= 0 && r.splice(e, 1);
  };
  B.batch = function (a, t) {
    var r = [],
      e = {},
      i = t.interval || 0.016,
      n = t.batchMax || 1e9,
      s = function (u, c) {
        var d = [],
          h = [],
          f = R.delayedCall(i, function () {
            c(d, h), (d = []), (h = []);
          }).pause();
        return function (p) {
          d.length || f.restart(!0),
            d.push(p.trigger),
            h.push(p),
            n <= d.length && f.progress(1);
        };
      },
      o;
    for (o in t)
      e[o] =
        o.substr(0, 2) === "on" && oe(t[o]) && o !== "onRefreshInit"
          ? s(o, t[o])
          : t[o];
    return (
      oe(n) &&
        ((n = n()),
        kt(B, "refresh", function () {
          return (n = t.batchMax());
        })),
      $n(a).forEach(function (l) {
        var u = {};
        for (o in e) u[o] = e[o];
        (u.trigger = l), r.push(B.create(u));
      }),
      r
    );
  };
  var rl = function (t, r, e, i) {
      return (
        r > i ? t(i) : r < 0 && t(0),
        e > i ? (i - r) / (e - r) : e < 0 ? r / (r - e) : 1
      );
    },
    so = function a(t, r) {
      r === !0
        ? t.style.removeProperty("touch-action")
        : (t.style.touchAction =
            r === !0
              ? "auto"
              : r
              ? "pan-" + r + (xt.isTouch ? " pinch-zoom" : "")
              : "none"),
        t === Ve && a(st, r);
    },
    Bn = { auto: 1, scroll: 1 },
    Yc = function (t) {
      var r = t.event,
        e = t.target,
        i = t.axis,
        n = (r.changedTouches ? r.changedTouches[0] : r).target,
        s = n._gsap || R.core.getCache(n),
        o = se(),
        l;
      if (!s._isScrollT || o - s._isScrollT > 2e3) {
        for (
          ;
          n &&
          n !== st &&
          ((n.scrollHeight <= n.clientHeight &&
            n.scrollWidth <= n.clientWidth) ||
            !(Bn[(l = ke(n)).overflowY] || Bn[l.overflowX]));

        )
          n = n.parentNode;
        (s._isScroll =
          n &&
          n !== e &&
          !ti(n) &&
          (Bn[(l = ke(n)).overflowY] || Bn[l.overflowX])),
          (s._isScrollT = o);
      }
      (s._isScroll || i === "x") && (r.stopPropagation(), (r._gsapAllow = !0));
    },
    Sl = function (t, r, e, i) {
      return xt.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: (i = i && Yc),
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function () {
          return e && kt(ft, xt.eventTypes[0], nl, !1, !0);
        },
        onDisable: function () {
          return Pt(ft, xt.eventTypes[0], nl, !0);
        },
      });
    },
    Wc = /(input|label|select|textarea)/i,
    il,
    nl = function (t) {
      var r = Wc.test(t.target.tagName);
      (r || il) && ((t._gsapAllow = !0), (il = r));
    },
    Xc = function (t) {
      Kr(t) || (t = {}),
        (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
        t.type || (t.type = "wheel,touch"),
        (t.debounce = !!t.debounce),
        (t.id = t.id || "normalizer");
      var r = t,
        e = r.normalizeScrollX,
        i = r.momentum,
        n = r.allowNestedScroll,
        s = r.onRelease,
        o,
        l,
        u = re(t.target) || Ve,
        c = R.core.globals().ScrollSmoother,
        d = c && c.get(),
        h =
          Mr &&
          ((t.content && re(t.content)) ||
            (d && t.content !== !1 && !d.smooth() && d.content())),
        f = ur(u, bt),
        p = ur(u, Ht),
        _ = 1,
        m =
          (xt.isTouch && H.visualViewport
            ? H.visualViewport.scale * H.visualViewport.width
            : H.outerWidth) / H.innerWidth,
        T = 0,
        w = oe(i)
          ? function () {
              return i(o);
            }
          : function () {
              return i || 2.8;
            },
        b,
        v,
        S = Sl(u, t.type, !0, n),
        C = function () {
          return (v = !1);
        },
        x = Je,
        M = Je,
        E = function () {
          (l = hr(u, bt)),
            (M = Ti(Mr ? 1 : 0, l)),
            e && (x = Ti(0, hr(u, Ht))),
            (b = Jr);
        },
        O = function () {
          (h._gsap.y = Zi(parseFloat(h._gsap.y) + f.offset) + "px"),
            (h.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              parseFloat(h._gsap.y) +
              ", 0, 1)"),
            (f.offset = f.cacheID = 0);
        },
        L = function () {
          if (v) {
            requestAnimationFrame(C);
            var V = Zi(o.deltaY / 2),
              tt = M(f.v - V);
            if (h && tt !== f.v + f.offset) {
              f.offset = tt - f.v;
              var g = Zi((parseFloat(h && h._gsap.y) || 0) - f.offset);
              (h.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                g +
                ", 0, 1)"),
                (h._gsap.y = g + "px"),
                (f.cacheID = Y.cache),
                _r();
            }
            return !0;
          }
          f.offset && O(), (v = !0);
        },
        P,
        K,
        z,
        N,
        q = function () {
          E(),
            P.isActive() &&
              P.vars.scrollY > l &&
              (f() > l ? P.progress(1) && f(l) : P.resetTo("scrollY", l));
        };
      return (
        h && R.set(h, { y: "+=0" }),
        (t.ignoreCheck = function (D) {
          return (
            (Mr && D.type === "touchmove" && L(D)) ||
            (_ > 1.05 && D.type !== "touchstart") ||
            o.isGesturing ||
            (D.touches && D.touches.length > 1)
          );
        }),
        (t.onPress = function () {
          v = !1;
          var D = _;
          (_ = Zi(((H.visualViewport && H.visualViewport.scale) || 1) / m)),
            P.pause(),
            D !== _ && so(u, _ > 1.01 ? !0 : e ? !1 : "x"),
            (K = p()),
            (z = f()),
            E(),
            (b = Jr);
        }),
        (t.onRelease = t.onGestureStart =
          function (D, V) {
            if ((f.offset && O(), !V)) N.restart(!0);
            else {
              Y.cache++;
              var tt = w(),
                g,
                nt;
              e &&
                ((g = p()),
                (nt = g + (tt * 0.05 * -D.velocityX) / 0.227),
                (tt *= rl(p, g, nt, hr(u, Ht))),
                (P.vars.scrollX = x(nt))),
                (g = f()),
                (nt = g + (tt * 0.05 * -D.velocityY) / 0.227),
                (tt *= rl(f, g, nt, hr(u, bt))),
                (P.vars.scrollY = M(nt)),
                P.invalidate().duration(tt).play(0.01),
                ((Mr && P.vars.scrollY >= l) || g >= l - 1) &&
                  R.to({}, { onUpdate: q, duration: tt });
            }
            s && s(D);
          }),
        (t.onWheel = function () {
          P._ts && P.pause(), se() - T > 1e3 && ((b = 0), (T = se()));
        }),
        (t.onChange = function (D, V, tt, g, nt) {
          if (
            (Jr !== b && E(),
            V && e && p(x(g[2] === V ? K + (D.startX - D.x) : p() + V - g[1])),
            tt)
          ) {
            f.offset && O();
            var $t = nt[2] === tt,
              Ae = $t ? z + D.startY - D.y : f() + tt - nt[1],
              ht = M(Ae);
            $t && Ae !== ht && (z += ht - Ae), f(ht);
          }
          (tt || V) && _r();
        }),
        (t.onEnable = function () {
          so(u, e ? !1 : "x"),
            B.addEventListener("refresh", q),
            kt(H, "resize", q),
            f.smooth &&
              ((f.target.style.scrollBehavior = "auto"),
              (f.smooth = p.smooth = !1)),
            S.enable();
        }),
        (t.onDisable = function () {
          so(u, !0),
            Pt(H, "resize", q),
            B.removeEventListener("refresh", q),
            S.kill();
        }),
        (t.lockAxis = t.lockAxis !== !1),
        (o = new xt(t)),
        (o.iOS = Mr),
        Mr && !f() && f(1),
        Mr && R.ticker.add(Je),
        (N = o._dc),
        (P = R.to(o, {
          ease: "power4",
          paused: !0,
          scrollX: e ? "+=0.1" : "+=0",
          scrollY: "+=0.1",
          modifiers: {
            scrollY: Tl(f, f(), function () {
              return P.pause();
            }),
          },
          onUpdate: _r,
          onComplete: N.vars.onComplete,
        })),
        o
      );
    };
  B.sort = function (a) {
    return W.sort(
      a ||
        function (t, r) {
          return (
            (t.vars.refreshPriority || 0) * -1e6 +
            t.start -
            (r.start + (r.vars.refreshPriority || 0) * -1e6)
          );
        }
    );
  };
  B.observe = function (a) {
    return new xt(a);
  };
  B.normalizeScroll = function (a) {
    if (typeof a == "undefined") return xe;
    if (a === !0 && xe) return xe.enable();
    if (a === !1) return xe && xe.kill();
    var t = a instanceof xt ? a : Xc(a);
    return (
      xe && xe.target === t.target && xe.kill(), ti(t.target) && (xe = t), t
    );
  };
  B.core = {
    _getVelocityProp: Pn,
    _inputObserver: Sl,
    _scrollers: Y,
    _proxies: Xe,
    bridge: {
      ss: function () {
        Re || ri("scrollStart"), (Re = se());
      },
      ref: function () {
        return Gt;
      },
    },
  };
  hl() && R.registerPlugin(B);
  var xo = ".cms-marquee_link";
  var qc = ".cursor",
    Uc = ".cursor_dot",
    Hc = ".cursor_text",
    bl = ".cursor_image",
    Ci = "is-larger",
    El = "cursor-smaller";
  var wf = document.querySelector(qc),
    ot = document.querySelector(Uc),
    Tf = document.querySelector(Hc),
    Vc = document.querySelector(bl);
  function Cl() {
    $(`a:not(${xo})`).on("mouseenter", function () {
      ot == null || ot.classList.add(Ci);
    }),
      $(`a:not(${xo})`).on("mouseleave", function () {
        ot == null || ot.classList.remove(Ci);
      }),
      $("body").on("mousedown", function () {
        ot == null || ot.classList.add(El);
      }),
      $("body").on("mouseup", function () {
        ot == null || ot.classList.remove(El);
      }),
      $(".accordion_toggle").on("mouseenter", function () {
        ot == null || ot.classList.add(Ci);
      }),
      $(".accordion_toggle").on("mouseleave", function () {
        ot == null || ot.classList.remove(Ci);
      }),
      $(".filter_dropdown").on("mouseenter", function () {
        ot == null || ot.classList.add(Ci);
      }),
      $(".filter_dropdown").on("mouseleave", function () {
        ot == null || ot.classList.remove(Ci);
      });
  }
  function Ml() {
    var r, e;
    let a = document.querySelectorAll("[data-animate]");
    if (!a.length) return;
    let t =
      (e = (r = a[0]) == null ? void 0 : r.parentElement) == null
        ? void 0
        : e.offsetWidth;
    t &&
      a.forEach((i) => {
        let n = (i.offsetLeft / t) * 0.4;
        window.gsap.from(i, {
          scrollTrigger: { trigger: i, start: "top 80%", end: "bottom top" },
          yPercent: 10,
          ease: "power1.out",
          duration: 0.8,
          delay: n,
        }),
          window.gsap.from(i, {
            scrollTrigger: { trigger: i, start: "top 80%", end: "bottom top" },
            opacity: 0,
            ease: "power1.out",
            duration: 0.4,
            delay: n,
          });
      });
  }
  var Gc = "[data-copyright-year]";
  function Ol() {
    let a = new Date().getFullYear();
    document.querySelectorAll(Gc).forEach((t) => {
      t.textContent = `${a}`;
    });
  }
  function wo() {
    return (
      (wo = Object.assign
        ? Object.assign.bind()
        : function (a) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var e in r)
                Object.prototype.hasOwnProperty.call(r, e) && (a[e] = r[e]);
            }
            return a;
          }),
      wo.apply(this, arguments)
    );
  }
  function Zn(a, t, r) {
    return Math.max(a, Math.min(t, r));
  }
  var To = class {
      advance(t) {
        var r;
        if (!this.isRunning) return;
        let e = !1;
        if (this.lerp)
          (this.value =
            ((i = this.value),
            (n = this.to),
            (1 - (s = 1 - Math.exp(-60 * this.lerp * t))) * i + s * n)),
            Math.round(this.value) === this.to &&
              ((this.value = this.to), (e = !0));
        else {
          this.currentTime += t;
          let o = Zn(0, this.currentTime / this.duration, 1);
          e = o >= 1;
          let l = e ? 1 : this.easing(o);
          this.value = this.from + (this.to - this.from) * l;
        }
        var i, n, s;
        (r = this.onUpdate) == null || r.call(this, this.value, e),
          e && this.stop();
      }
      stop() {
        this.isRunning = !1;
      }
      fromTo(
        t,
        r,
        {
          lerp: e = 0.1,
          duration: i = 1,
          easing: n = (l) => l,
          onStart: s,
          onUpdate: o,
        }
      ) {
        (this.from = this.value = t),
          (this.to = r),
          (this.lerp = e),
          (this.duration = i),
          (this.easing = n),
          (this.currentTime = 0),
          (this.isRunning = !0),
          s == null || s(),
          (this.onUpdate = o);
      }
    },
    So = class {
      constructor({ wrapper: t, content: r, autoResize: e = !0 } = {}) {
        if (
          ((this.resize = () => {
            this.onWrapperResize(), this.onContentResize();
          }),
          (this.onWrapperResize = () => {
            this.wrapper === window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          }),
          (this.onContentResize = () => {
            (this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth);
          }),
          (this.wrapper = t),
          (this.content = r),
          e)
        ) {
          let i = (function (n, s) {
            let o;
            return function () {
              let l = arguments,
                u = this;
              clearTimeout(o),
                (o = setTimeout(function () {
                  n.apply(u, l);
                }, 250));
            };
          })(this.resize);
          this.wrapper !== window &&
            ((this.wrapperResizeObserver = new ResizeObserver(i)),
            this.wrapperResizeObserver.observe(this.wrapper)),
            (this.contentResizeObserver = new ResizeObserver(i)),
            this.contentResizeObserver.observe(this.content);
        }
        this.resize();
      }
      destroy() {
        var t, r;
        (t = this.wrapperResizeObserver) == null || t.disconnect(),
          (r = this.contentResizeObserver) == null || r.disconnect();
      }
      get limit() {
        return {
          x: this.scrollWidth - this.width,
          y: this.scrollHeight - this.height,
        };
      }
    },
    jn = class {
      constructor() {
        this.events = {};
      }
      emit(t, ...r) {
        let e = this.events[t] || [];
        for (let i = 0, n = e.length; i < n; i++) e[i](...r);
      }
      on(t, r) {
        var e;
        return (
          ((e = this.events[t]) != null && e.push(r)) || (this.events[t] = [r]),
          () => {
            var i;
            this.events[t] =
              (i = this.events[t]) == null ? void 0 : i.filter((n) => r !== n);
          }
        );
      }
      off(t, r) {
        var e;
        this.events[t] =
          (e = this.events[t]) == null ? void 0 : e.filter((i) => r !== i);
      }
      destroy() {
        this.events = {};
      }
    },
    bo = class {
      constructor(
        t,
        {
          wheelMultiplier: r = 1,
          touchMultiplier: e = 2,
          normalizeWheel: i = !1,
        }
      ) {
        (this.onTouchStart = (n) => {
          let { clientX: s, clientY: o } = n.targetTouches
            ? n.targetTouches[0]
            : n;
          (this.touchStart.x = s),
            (this.touchStart.y = o),
            (this.lastDelta = { x: 0, y: 0 });
        }),
          (this.onTouchMove = (n) => {
            let { clientX: s, clientY: o } = n.targetTouches
                ? n.targetTouches[0]
                : n,
              l = -(s - this.touchStart.x) * this.touchMultiplier,
              u = -(o - this.touchStart.y) * this.touchMultiplier;
            (this.touchStart.x = s),
              (this.touchStart.y = o),
              (this.lastDelta = { x: l, y: u }),
              this.emitter.emit("scroll", { deltaX: l, deltaY: u, event: n });
          }),
          (this.onTouchEnd = (n) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: n,
            });
          }),
          (this.onWheel = (n) => {
            let { deltaX: s, deltaY: o } = n;
            this.normalizeWheel &&
              ((s = Zn(-100, s, 100)), (o = Zn(-100, o, 100))),
              (s *= this.wheelMultiplier),
              (o *= this.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: s, deltaY: o, event: n });
          }),
          (this.element = t),
          (this.wheelMultiplier = r),
          (this.touchMultiplier = e),
          (this.normalizeWheel = i),
          (this.touchStart = { x: null, y: null }),
          (this.emitter = new jn()),
          this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
          this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
      on(t, r) {
        return this.emitter.on(t, r);
      }
      destroy() {
        this.emitter.destroy(),
          this.element.removeEventListener("wheel", this.onWheel, {
            passive: !1,
          }),
          this.element.removeEventListener("touchstart", this.onTouchStart, {
            passive: !1,
          }),
          this.element.removeEventListener("touchmove", this.onTouchMove, {
            passive: !1,
          }),
          this.element.removeEventListener("touchend", this.onTouchEnd, {
            passive: !1,
          });
      }
    },
    Jn = class {
      constructor({
        wrapper: t = window,
        content: r = document.documentElement,
        wheelEventsTarget: e = t,
        eventsTarget: i = e,
        smoothWheel: n = !0,
        smoothTouch: s = !1,
        syncTouch: o = !1,
        syncTouchLerp: l = 0.1,
        __iosNoInertiaSyncTouchLerp: u = 0.4,
        touchInertiaMultiplier: c = 35,
        duration: d,
        easing: h = (S) => Math.min(1, 1.001 - Math.pow(2, -10 * S)),
        lerp: f = !d && 0.1,
        infinite: p = !1,
        orientation: _ = "vertical",
        gestureOrientation: m = "vertical",
        touchMultiplier: T = 1,
        wheelMultiplier: w = 1,
        normalizeWheel: b = !1,
        autoResize: v = !0,
      } = {}) {
        (this.onVirtualScroll = ({ deltaX: S, deltaY: C, event: x }) => {
          if (x.ctrlKey) return;
          let M = x.type.includes("touch"),
            E = x.type.includes("wheel");
          if (
            (this.options.gestureOrientation === "both" &&
              S === 0 &&
              C === 0) ||
            (this.options.gestureOrientation === "vertical" && C === 0) ||
            (this.options.gestureOrientation === "horizontal" && S === 0) ||
            (M &&
              this.options.gestureOrientation === "vertical" &&
              this.scroll === 0 &&
              !this.options.infinite &&
              C <= 0)
          )
            return;
          let O = x.composedPath();
          if (
            ((O = O.slice(0, O.indexOf(this.rootElement))),
            O.find((z) => {
              var N;
              return (
                (z.hasAttribute == null
                  ? void 0
                  : z.hasAttribute("data-lenis-prevent")) ||
                (M &&
                  (z.hasAttribute == null
                    ? void 0
                    : z.hasAttribute("data-lenis-prevent-touch"))) ||
                (E &&
                  (z.hasAttribute == null
                    ? void 0
                    : z.hasAttribute("data-lenis-prevent-wheel"))) ||
                ((N = z.classList) == null ? void 0 : N.contains("lenis"))
              );
            }))
          )
            return;
          if (this.isStopped || this.isLocked) return void x.preventDefault();
          if (
            ((this.isSmooth =
              ((this.options.smoothTouch || this.options.syncTouch) && M) ||
              (this.options.smoothWheel && E)),
            !this.isSmooth)
          )
            return (this.isScrolling = !1), void this.animate.stop();
          x.preventDefault();
          let L = C;
          this.options.gestureOrientation === "both"
            ? (L = Math.abs(C) > Math.abs(S) ? C : S)
            : this.options.gestureOrientation === "horizontal" && (L = S);
          let P = M && this.options.syncTouch,
            K = M && x.type === "touchend" && Math.abs(L) > 1;
          K && (L = this.velocity * this.options.touchInertiaMultiplier),
            this.scrollTo(
              this.targetScroll + L,
              wo(
                { programmatic: !1 },
                P && {
                  lerp: K
                    ? this.syncTouchLerp
                    : this.options.__iosNoInertiaSyncTouchLerp,
                }
              )
            );
        }),
          (this.onScroll = () => {
            if (!this.isScrolling) {
              let S = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.velocity = 0),
                (this.direction = Math.sign(this.animatedScroll - S)),
                this.emit();
            }
          }),
          (window.lenisVersion = "1.0.27"),
          (t !== document.documentElement && t !== document.body) ||
            (t = window),
          (this.options = {
            wrapper: t,
            content: r,
            wheelEventsTarget: e,
            eventsTarget: i,
            smoothWheel: n,
            smoothTouch: s,
            syncTouch: o,
            syncTouchLerp: l,
            __iosNoInertiaSyncTouchLerp: u,
            touchInertiaMultiplier: c,
            duration: d,
            easing: h,
            lerp: f,
            infinite: p,
            gestureOrientation: m,
            orientation: _,
            touchMultiplier: T,
            wheelMultiplier: w,
            normalizeWheel: b,
            autoResize: v,
          }),
          (this.animate = new To()),
          (this.emitter = new jn()),
          (this.dimensions = new So({ wrapper: t, content: r, autoResize: v })),
          this.toggleClass("lenis", !0),
          (this.velocity = 0),
          (this.isLocked = !1),
          (this.isStopped = !1),
          (this.isSmooth = o || n || s),
          (this.isScrolling = !1),
          (this.targetScroll = this.animatedScroll = this.actualScroll),
          this.options.wrapper.addEventListener("scroll", this.onScroll, {
            passive: !1,
          }),
          (this.virtualScroll = new bo(i, {
            touchMultiplier: T,
            wheelMultiplier: w,
            normalizeWheel: b,
          })),
          this.virtualScroll.on("scroll", this.onVirtualScroll);
      }
      destroy() {
        this.emitter.destroy(),
          this.options.wrapper.removeEventListener("scroll", this.onScroll, {
            passive: !1,
          }),
          this.virtualScroll.destroy(),
          this.dimensions.destroy(),
          this.toggleClass("lenis", !1),
          this.toggleClass("lenis-smooth", !1),
          this.toggleClass("lenis-scrolling", !1),
          this.toggleClass("lenis-stopped", !1),
          this.toggleClass("lenis-locked", !1);
      }
      on(t, r) {
        return this.emitter.on(t, r);
      }
      off(t, r) {
        return this.emitter.off(t, r);
      }
      setScroll(t) {
        this.isHorizontal
          ? (this.rootElement.scrollLeft = t)
          : (this.rootElement.scrollTop = t);
      }
      resize() {
        this.dimensions.resize();
      }
      emit() {
        this.emitter.emit("scroll", this);
      }
      reset() {
        (this.isLocked = !1),
          (this.isScrolling = !1),
          (this.velocity = 0),
          this.animate.stop();
      }
      start() {
        (this.isStopped = !1), this.reset();
      }
      stop() {
        (this.isStopped = !0), this.animate.stop(), this.reset();
      }
      raf(t) {
        let r = t - (this.time || t);
        (this.time = t), this.animate.advance(0.001 * r);
      }
      scrollTo(
        t,
        {
          offset: r = 0,
          immediate: e = !1,
          lock: i = !1,
          duration: n = this.options.duration,
          easing: s = this.options.easing,
          lerp: o = !n && this.options.lerp,
          onComplete: l = null,
          force: u = !1,
          programmatic: c = !0,
        } = {}
      ) {
        if ((!this.isStopped && !this.isLocked) || u) {
          if (["top", "left", "start"].includes(t)) t = 0;
          else if (["bottom", "right", "end"].includes(t)) t = this.limit;
          else {
            var d;
            let h;
            if (
              (typeof t == "string"
                ? (h = document.querySelector(t))
                : (d = t) != null && d.nodeType && (h = t),
              h)
            ) {
              if (this.options.wrapper !== window) {
                let p = this.options.wrapper.getBoundingClientRect();
                r -= this.isHorizontal ? p.left : p.top;
              }
              let f = h.getBoundingClientRect();
              t = (this.isHorizontal ? f.left : f.top) + this.animatedScroll;
            }
          }
          if (typeof t == "number") {
            if (
              ((t += r),
              (t = Math.round(t)),
              this.options.infinite
                ? c && (this.targetScroll = this.animatedScroll = this.scroll)
                : (t = Zn(0, t, this.limit)),
              e)
            )
              return (
                (this.animatedScroll = this.targetScroll = t),
                this.setScroll(this.scroll),
                this.reset(),
                void (l == null || l(this))
              );
            if (!c) {
              if (t === this.targetScroll) return;
              this.targetScroll = t;
            }
            this.animate.fromTo(this.animatedScroll, t, {
              duration: n,
              easing: s,
              lerp: o,
              onStart: () => {
                i && (this.isLocked = !0), (this.isScrolling = !0);
              },
              onUpdate: (h, f) => {
                (this.isScrolling = !0),
                  (this.velocity = h - this.animatedScroll),
                  (this.direction = Math.sign(this.velocity)),
                  (this.animatedScroll = h),
                  this.setScroll(this.scroll),
                  c && (this.targetScroll = h),
                  f || this.emit(),
                  f &&
                    requestAnimationFrame(() => {
                      this.reset(), this.emit(), l == null || l(this);
                    });
              },
            });
          }
        }
      }
      get rootElement() {
        return this.options.wrapper === window
          ? this.options.content
          : this.options.wrapper;
      }
      get limit() {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
      get isHorizontal() {
        return this.options.orientation === "horizontal";
      }
      get actualScroll() {
        return this.isHorizontal
          ? this.rootElement.scrollLeft
          : this.rootElement.scrollTop;
      }
      get scroll() {
        return this.options.infinite
          ? ((this.animatedScroll % (t = this.limit)) + t) % t
          : this.animatedScroll;
        var t;
      }
      get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
      }
      get isSmooth() {
        return this.__isSmooth;
      }
      set isSmooth(t) {
        this.__isSmooth !== t &&
          ((this.__isSmooth = t), this.toggleClass("lenis-smooth", t));
      }
      get isScrolling() {
        return this.__isScrolling;
      }
      set isScrolling(t) {
        this.__isScrolling !== t &&
          ((this.__isScrolling = t), this.toggleClass("lenis-scrolling", t));
      }
      get isStopped() {
        return this.__isStopped;
      }
      set isStopped(t) {
        this.__isStopped !== t &&
          ((this.__isStopped = t), this.toggleClass("lenis-stopped", t));
      }
      get isLocked() {
        return this.__isLocked;
      }
      set isLocked(t) {
        this.__isLocked !== t &&
          ((this.__isLocked = t), this.toggleClass("lenis-locked", t));
      }
      get className() {
        let t = "lenis";
        return (
          this.isStopped && (t += " lenis-stopped"),
          this.isLocked && (t += " lenis-locked"),
          this.isScrolling && (t += " lenis-scrolling"),
          this.isSmooth && (t += " lenis-smooth"),
          t
        );
      }
      toggleClass(t, r) {
        this.rootElement.classList.toggle(t, r),
          this.emitter.emit("className change", this);
      }
    };
  var $c = (a, t) => {
      a.classList.toggle(t);
    },
    Pl = $c;
  function kl() {
    var e, i, n, s;
    let a,
      t = "stop-scroll";
    if (((e = window.Webflow) == null ? void 0 : e.env("editor")) === void 0) {
      let o = function (l) {
        a.raf(l), requestAnimationFrame(o);
      };
      var r = o;
      (a = new Jn({
        lerp: 0.4,
        wheelMultiplier: 1,
        gestureOrientation: "vertical",
        normalizeWheel: !1,
        smoothTouch: !1,
      })),
        requestAnimationFrame(o),
        a.on("scroll", B.update);
    }
    (i = document.querySelector("[data-lenis-start]")) == null ||
      i.addEventListener("click", () => {
        a.start();
      }),
      (n = document.querySelector("[data-lenis-stop]")) == null ||
        n.addEventListener("click", () => {
          a.stop();
        }),
      (s = document.querySelector("[data-lenis-toggle]")) == null ||
        s.addEventListener("click", (o) => {
          let l = o.target;
          Pl(l, t), l.classList.contains(t) ? a.stop() : a.start();
        });
  }
  var Rl = ".link-reveal_component",
    Ll = ".track-text",
    Kc = ".cta_marquee",
    Qc = ".cta_marquee-text",
    Zc = "--marquee-speed";
  function Al() {
    jc(), Jc();
  }
  function jc() {
    Eo(Rl, Ll),
      (window.fsAttributes = window.fsAttributes || []),
      window.fsAttributes.push([
        "cmsload",
        (a) => {
          let [t] = a;
          t.on("renderitems", (r) => {
            Eo(Rl, Ll);
          });
        },
      ]);
  }
  function Jc() {
    Eo(Kc, Qc);
  }
  function Eo(a, t) {
    document.querySelectorAll(a).forEach((r) => {
      var s;
      let e = r.querySelector(t);
      if (
        !e ||
        window.getComputedStyle(r).getPropertyValue("--marquee-speed") !== ""
      )
        return;
      let i =
        (s = e == null ? void 0 : e.textContent) == null ? void 0 : s.length;
      if (!i) return;
      let n = (i / 0.75).toFixed(2);
      r.style.setProperty(Zc, `${n}s`);
    });
  }
  function Co() {
    var a;
    (a = window.Webflow) == null ||
      a.push(() => {
        let t = document.querySelector(".nav_gradient");
        t == null || t.classList.add("hide"), Dl();
      }),
      document.addEventListener("scroll", Dl);
  }
  function Dl() {
    let a = document.querySelector(".nav_gradient"),
      t = document.querySelectorAll("[no-gradient]"),
      r = document.querySelector(".nav");
    if (!a || !r) return;
    let e = r.getBoundingClientRect();
    Array.from(t).some((n) => {
      let s = n.getBoundingClientRect();
      return !(e.bottom <= s.top || e.top >= s.bottom);
    })
      ? a == null || a.classList.add("hide")
      : a == null || a.classList.remove("hide");
  }
  function Il() {
    var a;
    (a = window.Webflow) == null ||
      a.push(() => {
        zl();
      }),
      document.addEventListener("scroll", zl);
  }
  function zl() {
    let a = document.querySelector(".nav"),
      t = document.querySelectorAll("[data-light-nav]");
    if (!Co || !a) return;
    let r = a.getBoundingClientRect();
    Array.from(t).some((i) => {
      let n = i.getBoundingClientRect();
      return !(r.bottom <= n.top || r.top >= n.bottom);
    })
      ? Array.from(a.querySelectorAll("*")).forEach(
          (i) => (i.style.color = "var(--swatch--white)")
        )
      : Array.from(a.querySelectorAll("*")).forEach(
          (i) => (i.style.color = "")
        );
  }
  var ts = ".nav",
    Yl = ".nav_reveal",
    tf = ".nav_chevron",
    ef = ".nav_dropdown-links",
    rf = ".nav_dropdown-label",
    Nl = ".nav_hamburger",
    Wl = ".nav_menu",
    Xl = ".nav_logo",
    Vl = ".nav_hamburger-icon",
    Le = "is-open";
  var Mi = document.querySelector(ts);
  function ql() {
    if (!Mi) {
      console.warn("Nav element not found", `selector ${ts}`);
      return;
    }
    Mi.addEventListener("mouseenter", () => {
      window.innerWidth <= 991 || Mi.classList.contains(Le) || Fl("open");
    }),
      Mi.addEventListener("mouseleave", () => {
        window.innerWidth <= 991 || (Mi.classList.contains(Le) && Fl("close"));
      });
    let a = document.querySelector(Nl);
    if (!a) {
      console.warn("Nav hamburger element not found", `selector ${Nl}`);
      return;
    }
    a.addEventListener("click", () => {
      window.innerWidth > 991 ||
        (Mi.classList.contains(Le) ? Bl("close") : Bl("open"));
    }),
      $(function () {
        $(".nav_dropdown-label").on("click", function (t) {
          if (window.innerWidth > 991) return;
          t.preventDefault();
          let r = $(this),
            e = r.closest(".nav_dropdown"),
            i = $(".nav_dropdown").not(e);
          i.find(".nav_dropdown-links").hasClass(Le)
            ? (i.find(".nav_dropdown-links").removeClass(Le),
              i.find(".nav_dropdown-label .nav_chevron").removeClass(Le),
              e.find(".nav_dropdown-links").addClass(Le),
              r.find(".nav_chevron").addClass(Le))
            : (e.find(".nav_dropdown-links").toggleClass(Le),
              r.find(".nav_chevron").toggleClass(Le));
        });
      });
  }
  function Fl(a = "open") {
    Ul([ts, Yl, tf, ef, rf, Wl, Xl, Vl], a);
  }
  function Bl(a = "open") {
    Ul([ts, Yl, Wl, Xl, Vl], a);
  }
  function Ul(a, t) {
    a.forEach((r) => {
      document.querySelectorAll(r).forEach((e) => {
        t === "open" ? e.classList.add(Le) : e.classList.remove(Le);
      });
    });
  }
  window.gsap = Ks;
  window.scrollTrigger = B;
  window.gsap.registerPlugin(B);
  Il();
  Co();
  Cl();
  ql();
  window.Webflow = window.Webflow || [];
  window.Webflow.push(() => {
    kl(), Ml(), Al(), Ol();
  });
})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
