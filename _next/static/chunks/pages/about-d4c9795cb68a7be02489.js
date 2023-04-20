_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [11],
  {
    "/0+H": function (e, t, r) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = c),
        (t.useAmp = function () {
          return c(a.default.useContext(i.AmpStateContext));
        });
      var n,
        a = (n = r("q1tI")) && n.__esModule ? n : { default: n },
        i = r("lwAK");
      function c() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          r = void 0 !== t && t,
          n = e.hybrid,
          a = void 0 !== n && n,
          i = e.hasQuery,
          c = void 0 !== i && i;
        return r || (a && c);
      }
    },
    "7W2i": function (e, t, r) {
      var n = r("SksO");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && n(e, t);
      };
    },
    "8Kt/": function (e, t, r) {
      "use strict";
      r("lSNA");
      (t.__esModule = !0), (t.defaultHead = d), (t.default = void 0);
      var n,
        a = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var i = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              i && (i.get || i.set)
                ? Object.defineProperty(r, a, i)
                : (r[a] = e[a]);
            }
          (r.default = e), t && t.set(e, r);
          return r;
        })(r("q1tI")),
        i = (n = r("Xuae")) && n.__esModule ? n : { default: n },
        c = r("lwAK"),
        o = r("FYa8"),
        s = r("/0+H");
      function l() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [a.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function u(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var m = ["name", "httpEquiv", "charSet", "itemProp"];
      function p(e, t) {
        return e
          .reduce(function (e, t) {
            var r = a.default.Children.toArray(t.props.children);
            return e.concat(r);
          }, [])
          .reduce(u, [])
          .reverse()
          .concat(d(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return function (a) {
                var i = !0;
                if (
                  a.key &&
                  "number" !== typeof a.key &&
                  a.key.indexOf("$") > 0
                ) {
                  var c = a.key.slice(a.key.indexOf("$") + 1);
                  e.has(c) ? (i = !1) : e.add(c);
                }
                switch (a.type) {
                  case "title":
                  case "base":
                    t.has(a.type) ? (i = !1) : t.add(a.type);
                    break;
                  case "meta":
                    for (var o = 0, s = m.length; o < s; o++) {
                      var l = m[o];
                      if (a.props.hasOwnProperty(l))
                        if ("charSet" === l) r.has(l) ? (i = !1) : r.add(l);
                        else {
                          var d = a.props[l],
                            u = n[l] || new Set();
                          u.has(d) ? (i = !1) : (u.add(d), (n[l] = u));
                        }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var r = e.key || t;
            return a.default.cloneElement(e, { key: r });
          });
      }
      function f(e) {
        var t = e.children,
          r = (0, a.useContext)(c.AmpStateContext),
          n = (0, a.useContext)(o.HeadManagerContext);
        return a.default.createElement(
          i.default,
          {
            reduceComponentsToState: p,
            headManager: n,
            inAmpMode: (0, s.isInAmpMode)(r),
          },
          t
        );
      }
      f.rewind = function () {};
      var h = f;
      t.default = h;
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    FYa8: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var a = (
        (n = r("q1tI")) && n.__esModule ? n : { default: n }
      ).default.createContext({});
      t.HeadManagerContext = a;
    },
    Ijbi: function (e, t, r) {
      var n = r("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return n(e);
      };
    },
    Juyh: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "__N_SSG", function () {
          return M;
        });
      var n = r("1OyB"),
        a = r("vuIU"),
        i = r("JX7q"),
        c = r("Ji7U"),
        o = r("md7G"),
        s = r("foSv"),
        l = r("rePB"),
        d = r("nKUr"),
        u = r("q1tI"),
        m = r.n(u),
        p = r("g4pe"),
        f = r.n(p),
        h = r("EVdn"),
        b = r.n(h),
        j = r("hUol"),
        v = r.n(j),
        x = r("qoWs"),
        O = r("CafY"),
        g = r("cmSt"),
        y = r("WLEU");
      function N(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function w(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? N(Object(r), !0).forEach(function (t) {
                Object(l.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : N(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function C(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = Object(s.a)(e);
          if (t) {
            var a = Object(s.a)(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return Object(o.a)(this, r);
        };
      }
      var S = (function (e) {
          Object(c.a)(r, e);
          var t = C(r);
          function r(e) {
            var a;
            return (
              Object(n.a)(this, r),
              (a = t.call(this, e)),
              Object(l.a)(Object(i.a)(a), "state", {
                career: {
                  name: "",
                  mobileNo: "",
                  position: "",
                  experience: "",
                  message: "",
                },
                selectedFileName: "",
                file: null,
                isDisabledBtn: !1,
              }),
              Object(l.a)(Object(i.a)(a), "handleChange", function (e) {
                var t = Object(i.a)(a),
                  r = t.state.career;
                (r[e.target.name] = e.target.value), t.setState({ career: r });
              }),
              Object(l.a)(Object(i.a)(a), "handleFileChange", function (e) {
                var t = Object(i.a)(a),
                  r = e.target.files;
                if (r && r.length) {
                  var n = r[0];
                  if ((t.setState({ file: n }), n && n.size > 5242880))
                    return (
                      v.a.error("File size is too large"), t.removeFile(), !1
                    );
                  t.setState({
                    selectedFileName: e.target.value.replace(/^.*[\\\/]/, ""),
                  });
                } else t.removeFile();
              }),
              Object(l.a)(Object(i.a)(a), "removeFile", function (e) {
                var t = Object(i.a)(a);
                b()("#resume").val(""),
                  t.setState({ selectedFileName: "", file: null });
              }),
              Object(l.a)(Object(i.a)(a), "handleSubmit", function (e) {
                e.preventDefault();
                var t = Object(i.a)(a),
                  r = t.state,
                  n = r.career,
                  c = r.file;
                t.setState({ isDisabledBtn: !0 });
                var o = function (e) {
                  grecaptcha.ready(function () {
                    grecaptcha
                      .execute("6Le9Z1IcAAAAAHts2SxoKSrMU4dBv4WdEw3v14Pa", {
                        action: "submit",
                      })
                      .then(function (r) {
                        r &&
                          ((e.captcha = r),
                          x.a.addCareer(e, function (e, r) {
                            r && r.data && r.data.success
                              ? (t.removeFile(),
                                t.setState({
                                  isDisabledBtn: !1,
                                  career: {
                                    name: "",
                                    mobileNo: "",
                                    position: "",
                                    experience: "",
                                    message: "",
                                  },
                                }),
                                v.a.success(
                                  "Thank you for applying, we will get back to you soon."
                                ))
                              : (t.setState({ isDisabledBtn: !1 }),
                                v.a.error(
                                  'Please try again or email us at <a href="mailto:megtalks@mail.com">megtalks@mail.com</a>'
                                ));
                          }));
                      });
                  });
                };
                c
                  ? x.a.uploadNewFile(c, function (e, r) {
                      e
                        ? (t.setState({ isDisabledBtn: !1 }),
                          v.a.error("Unable to upload your resume file"))
                        : (console.log(r.data, "RES"),
                          (n.resume = r.data.url),
                          o(n));
                    })
                  : o(n);
              }),
              a
            );
          }
          return (
            Object(a.a)(r, [
              {
                key: "componentDidMount",
                value: function () {
                  new WOW.WOW({ offset: 100, mobile: !1, live: !0 }).init(),
                    (window.isAnimated = !1);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    r = t.works,
                    n = t.visions,
                    a = t.positions,
                    i = this.state,
                    c = i.career,
                    o = i.selectedFileName,
                    s = i.isDisabledBtn;
                  return Object(d.jsxs)(
                    O.a,
                    w(
                      w({}, t),
                      {},
                      {
                        children: [
                          Object(d.jsxs)(f.a, {
                            children: [
                              Object(d.jsx)("title", {
                                children: "About | Megtalks International",
                              }),
                              Object(d.jsx)("meta", {
                                name: "description",
                                content:
                                  "We offer CRM Services (Salesforce & Veeva), Complete eCommerce Solutions, and provide excellent services in Web, Mobile development.",
                              }),
                              Object(d.jsx)("meta", {
                                name: "keywords",
                                content: "mahardhi, about",
                              }),
                              Object(d.jsx)("meta", {
                                property: "og:title",
                                content: "About | Megtalks International",
                              }),
                              Object(d.jsx)("meta", {
                                itemProp: "name",
                                content: "About | Megtalks International",
                              }),
                              Object(d.jsx)("meta", {
                                property: "twitter:title",
                                content: "About | Megtalks International",
                              }),
                              Object(d.jsx)("meta", {
                                property: "og:description",
                                content:
                                  "We offer CRM Services (Salesforce & Veeva), Complete eCommerce Solutions, and provide excellent services in Web, Mobile development.",
                              }),
                              Object(d.jsx)("meta", {
                                itemProp: "description",
                                content:
                                  "We offer CRM Services (Salesforce & Veeva), Complete eCommerce Solutions, and provide excellent services in Web, Mobile development.",
                              }),
                              Object(d.jsx)("meta", {
                                name: "twitter:description",
                                content:
                                  "We offer CRM Services (Salesforce & Veeva), Complete eCommerce Solutions, and provide excellent services in Web, Mobile development.",
                              }),
                              Object(d.jsx)("meta", {
                                property: "og:url",
                                content:
                                  "https://www.https://megtalksinternational.com//about",
                              }),
                            ],
                          }),
                          Object(d.jsxs)("div", {
                            className: "about-page",
                            children: [
                              Object(d.jsx)(y.a, {
                                title: "ABOUT US",
                                text: "MEGTALKS IS A GREAT OPPORTUNITY TO FIND OR CHANGE TO A NEW JOB, LEARN FROM THE BEST EXPERTS IN THE IT & DIGITAL INDUSTRY AND TO NETWORK WITH YOUR PEERS.",
                              }),
                              Object(d.jsx)("section", {
                                className:
                                  "main-section clearfix p-y-100 bg-primary",
                                children: Object(d.jsx)("div", {
                                  className: "container",
                                  children: Object(d.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      Object(d.jsxs)("div", {
                                        className: "col-md-12 col-lg-6",
                                        children: [
                                          Object(d.jsx)("h3", {
                                            className:
                                              "title-text text-center d-block d-lg-none",
                                            children:
                                              "Welcome to Our Company Megtalks",
                                          }),
                                          Object(d.jsx)("img", {
                                            src: "/images/about/about-top.png",
                                            alt: "about",
                                            className: "img-fluid",
                                          }),
                                        ],
                                      }),
                                      Object(d.jsxs)("div", {
                                        className: "col-md-12 col-lg-6",
                                        children: [
                                          Object(d.jsx)("h3", {
                                            className:
                                              "title-text d-none d-lg-block",
                                            children:
                                              "Welcome to Our Company Megtalks",
                                          }),
                                          Object(d.jsxs)("div", {
                                            className:
                                              "sub-text pr-xl-2 mt-5 mt-lg-0",
                                            children: [
                                              Object(d.jsx)("div", {
                                                className: "mt-4",
                                                children:
                                                  "Meg talks is a platform to empower brands and bring talent under the single roof. Founded Young professionals, Mr. Sai Kumar & JaganKumar, Meg Talks which is based in India, has grown leaps and bounds. With a strong emphasis on IT and digital domains, Meg talks with an acronym of MT, commenced its first edition in Hyderabad, Telangana 2019. In 2019, MT operates with a core team at Hyderabad with event based engagement with local professionals in various cities pertaining to job fairs& corporate events. Date and aspire to reach the goal of 10,000 by 2023. MT is on a mission to provide companies an opportunity to improve their brand equity, recall and recognition by providing cost effective hiring and branding solutions. MT’s esteemed clients are able to assess professionals from students, junior professionals to strategic positions. In context to job seekers, we can be pillars of support to provide them with employer choices and interaction exposure, so that they are able to make the right decisions at the right time. Customer's needs and provide best solutions to make their presence an exhilarating experience for them as well as prospects. Guided by or personal attention to customer's requirements, we ensure 100% satisfaction in every interaction.s",
                                              }),
                                              Object(d.jsx)("div", {
                                                className: "mt-4",
                                                children:
                                                  "In our job fair 100+ top tech companies are actively hiring software developers, devops specialists engineers and engineering leaders. Find ideal job roles as data scientists, software trainees, developers, digital marketers, analysts, engineer trainces.Get hired on IT Job roles such as backend & Frontend development, unwi design, network, data analytics and more.Find Specialists job opportunities for business development, sales manager, customer success programs, account management, and more.Grow the scope of your job application and get hired on positions like SEM.SEO. Content Marketing Social Media Marketing, Branding, Influencer Marketing Specialists etc.Get hired on tech Focused top tech companies on positions product owners, project manager, program manager, Technical",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                              r &&
                                r.length > 0 &&
                                Object(d.jsx)("section", {
                                  className:
                                    "work-section clearfix py-5 bg-secondary",
                                  id: "workSection",
                                  children: Object(d.jsx)("div", {
                                    className: "container",
                                    children: Object(d.jsx)("div", {
                                      className: "row",
                                      children: r.map(function (e, t) {
                                        return Object(d.jsxs)(
                                          "div",
                                          {
                                            className:
                                              "col-sm-6 col-md-3 text-center mb-5 mb-md-0 work-wrapper",
                                            children: [
                                              Object(d.jsx)("div", {
                                                className:
                                                  "work-icon-wrapper mx-auto",
                                                style: {
                                                  backgroundColor:
                                                    e.backgroundColor,
                                                },
                                                children: Object(d.jsx)("i", {
                                                  className: "fa ".concat(
                                                    e.icon
                                                  ),
                                                }),
                                              }),
                                              Object(d.jsx)("h1", {
                                                className: "work-total",
                                                children: e.total,
                                              }),
                                              Object(d.jsx)("span", {
                                                className: "work-title",
                                                children: e.title,
                                              }),
                                            ],
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  }),
                                }),
                              n &&
                                n.length > 0 &&
                                Object(d.jsx)("section", {
                                  className:
                                    "vision-section clearfix p-y-100 bg-primary",
                                  children: Object(d.jsx)("div", {
                                    className: "container",
                                    children: Object(d.jsx)("div", {
                                      className: "row",
                                      children: n.map(function (e, t) {
                                        return Object(d.jsx)(
                                          "div",
                                          {
                                            className:
                                              "col-md-12 col-lg-6 mt-4 mt-lg-0",
                                            children: Object(d.jsxs)("div", {
                                              className:
                                                "vision-wrapper d-flex align-items-start mx-auto h-100 wow animate__animated ".concat(
                                                  t % 2 !== 0
                                                    ? "animate__fadeInRight"
                                                    : "animate__fadeInLeft"
                                                ),
                                              children: [
                                                Object(d.jsx)("img", {
                                                  src: e.icon,
                                                  alt: "vision",
                                                  className:
                                                    "img-fluid vision-icon",
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "m-l-50 vision-right",
                                                  children: [
                                                    Object(d.jsx)("h4", {
                                                      className:
                                                        "info-text mb-2",
                                                      children: e.title,
                                                    }),
                                                    Object(d.jsx)("div", {
                                                      className: "sub-text",
                                                      children: e.text,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          },
                                          t
                                        );
                                      }),
                                    }),
                                  }),
                                }),
                              Object(d.jsx)("section", {
                                className:
                                  "career-application-section clearfix p-b-100 bg-primary",
                                children: Object(d.jsxs)("div", {
                                  className: "container",
                                  children: [
                                    Object(d.jsxs)("div", {
                                      className: "text-center",
                                      children: [
                                        Object(d.jsx)("h3", {
                                          className: "title-text mb-2",
                                          children: "Careers",
                                        }),
                                        Object(d.jsx)("span", {
                                          className: "title-border-bottom",
                                        }),
                                      ],
                                    }),
                                    Object(d.jsxs)("div", {
                                      className: "text-center",
                                      children: [
                                        Object(d.jsx)("img", {
                                          src: "/images/about/career-1.png",
                                          className:
                                            "img-fluid mx-auto p-t-100",
                                        }),
                                        Object(d.jsx)("div", {
                                          className:
                                            "row justify-content-center",
                                          children: Object(d.jsx)("div", {
                                            className: "col-md-8 col-lg-8",
                                            children: Object(d.jsxs)("div", {
                                              className: "info-text p-y-100",
                                              children: [
                                                Object(d.jsx)("div", {
                                                  className: "career-text mb-4",
                                                  children: "Join with us",
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className: "career-sub-text",
                                                  children: [
                                                    "Reach us at ",
                                                    Object(d.jsx)("a", {
                                                      href: "mailto:megtalks@mail.com",
                                                      children:
                                                        "megtalks@mail.com",
                                                    }),
                                                    " | 95811 23111 or apply here.",
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(d.jsxs)("div", {
                                      className: "row align-items-center",
                                      children: [
                                        Object(d.jsx)("div", {
                                          className: "col-md-12 col-lg-6",
                                          children: Object(d.jsx)("div", {
                                            className: "career-form",
                                            children: Object(d.jsxs)("form", {
                                              onSubmit: function (t) {
                                                return e.handleSubmit(t);
                                              },
                                              children: [
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "form-group required",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children: "Full Name",
                                                    }),
                                                    Object(d.jsx)("input", {
                                                      type: "text",
                                                      className: "form-control",
                                                      name: "name",
                                                      value: c.name,
                                                      onChange:
                                                        this.handleChange,
                                                      placeholder:
                                                        "Enter your full name",
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "form-group required",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children: "Mobile No",
                                                    }),
                                                    Object(d.jsx)("input", {
                                                      type: "number",
                                                      className: "form-control",
                                                      name: "mobileNo",
                                                      value: c.mobileNo,
                                                      onChange:
                                                        this.handleChange,
                                                      placeholder:
                                                        "Enter your Mobile Number",
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "form-group required",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children:
                                                        "Position To Apply",
                                                    }),
                                                    Object(d.jsx)("div", {
                                                      className:
                                                        "select-wrapper position-relative",
                                                      children: Object(d.jsxs)(
                                                        "select",
                                                        {
                                                          className:
                                                            "form-control",
                                                          name: "position",
                                                          value: c.position,
                                                          onChange:
                                                            this.handleChange,
                                                          required: !0,
                                                          children: [
                                                            Object(d.jsx)(
                                                              "option",
                                                              {
                                                                value: "",
                                                                disabled: !0,
                                                                children:
                                                                  "Select Position",
                                                              }
                                                            ),
                                                            a &&
                                                              a.length > 0 &&
                                                              a.map(function (
                                                                e,
                                                                t
                                                              ) {
                                                                return Object(
                                                                  d.jsx
                                                                )(
                                                                  "option",
                                                                  {
                                                                    value: e,
                                                                    children: e,
                                                                  },
                                                                  t
                                                                );
                                                              }),
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "form-group required",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children:
                                                        "Working Experience",
                                                    }),
                                                    Object(d.jsx)("input", {
                                                      type: "number",
                                                      className: "form-control",
                                                      name: "experience",
                                                      min: "0",
                                                      step: "0.1",
                                                      value: c.experience,
                                                      onChange:
                                                        this.handleChange,
                                                      placeholder:
                                                        "Enter Exp in years",
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className:
                                                    "form-group required",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children: "Message",
                                                    }),
                                                    Object(d.jsx)("textarea", {
                                                      className:
                                                        "form-control message-box",
                                                      name: "message",
                                                      value: c.message,
                                                      onChange:
                                                        this.handleChange,
                                                      rows: "5",
                                                      placeholder:
                                                        "Enter Message",
                                                      required: !0,
                                                    }),
                                                  ],
                                                }),
                                                Object(d.jsxs)("div", {
                                                  className: "form-group",
                                                  children: [
                                                    Object(d.jsx)("label", {
                                                      children:
                                                        "Upload Resume File",
                                                    }),
                                                    Object(d.jsx)("label", {
                                                      className:
                                                        "resume-btn pointer w-100 text-center",
                                                      htmlFor: "resume",
                                                      children:
                                                        "Click here to browse ( max size: 5MB )",
                                                    }),
                                                    Object(d.jsx)("input", {
                                                      id: "resume",
                                                      className: "d-none",
                                                      type: "file",
                                                      accept:
                                                        ".doc, .docx, .txt, .pdf",
                                                      onChange: function (t) {
                                                        return e.handleFileChange(
                                                          t
                                                        );
                                                      },
                                                    }),
                                                    o &&
                                                      Object(d.jsxs)("div", {
                                                        className: "ml-2",
                                                        children: [
                                                          Object(d.jsx)(
                                                            "span",
                                                            {
                                                              className:
                                                                "file-name-text",
                                                              children: o,
                                                            }
                                                          ),
                                                          Object(d.jsx)("i", {
                                                            className:
                                                              "fa fa-close file-remove-icon pl-2 pointer",
                                                            onClick: function (
                                                              t
                                                            ) {
                                                              return e.removeFile(
                                                                t
                                                              );
                                                            },
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                                Object(d.jsx)("button", {
                                                  type: "submit",
                                                  disabled: s,
                                                  className:
                                                    "btn apply-btn btn-mt-primary position-relative",
                                                  children: s
                                                    ? Object(d.jsx)(g.a, {})
                                                    : "Apply",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                        Object(d.jsx)("div", {
                                          className:
                                            "col-md-12 col-lg-6 pt-5 pt-lg-0",
                                          children: Object(d.jsx)("img", {
                                            src: "/images/about/career.png",
                                            alt: "career",
                                            className:
                                              "img-fluid mx-auto d-block carrer-right-img wow animate__animated animate__fadeInUp",
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }
                    )
                  );
                },
              },
            ]),
            r
          );
        })(m.a.Component),
        M = !0;
      t.default = S;
    },
    Nsbk: function (e, t) {
      function r(t) {
        return (
          (e.exports = r =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          r(t)
        );
      }
      e.exports = r;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    RIqP: function (e, t, r) {
      var n = r("Ijbi"),
        a = r("EbDI"),
        i = r("ZhPi"),
        c = r("Bnag");
      e.exports = function (e) {
        return n(e) || a(e) || i(e) || c();
      };
    },
    WLEU: function (e, t, r) {
      "use strict";
      var n = r("nKUr");
      r("q1tI");
      t.a = function (e) {
        return Object(n.jsxs)("div", {
          className: "clearfix bread-crumb-section-outer position-relative",
          children: [
            Object(n.jsxs)("div", {
              className: "bread-crumb-section text-center",
              children: [
                e.title &&
                  Object(n.jsx)("div", {
                    className: "bread-crumb-title",
                    children: e.title,
                  }),
                e.text &&
                  Object(n.jsx)("div", {
                    className: "bread-crumb-text",
                    children: e.text,
                  }),
              ],
            }),
            Object(n.jsx)("div", {
              className: "curved-shape",
              children: Object(n.jsx)("svg", {
                viewBox: "0 0 317 42.03",
                children: Object(n.jsx)("path", {
                  fill: "#fff",
                  fillOpacity: "1",
                  d: "M 0 42.03125 C 0 42.03125 42.5 37.53125 74 23.03125 C 74 23.03125 127 -5.71875 174 1.03125 C 174 1.03125 197.5 0.03125 241 23.03125 C 241 23.03125 278.5 40.53125 317 42.03125 ",
                }),
              }),
            }),
          ],
        });
      };
    },
    Xuae: function (e, t, r) {
      "use strict";
      var n = r("RIqP"),
        a = r("lwsE"),
        i = r("W8MJ"),
        c = (r("PJYZ"), r("7W2i")),
        o = r("a1gu"),
        s = r("Nsbk");
      function l(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var r,
            n = s(e);
          if (t) {
            var a = s(this).constructor;
            r = Reflect.construct(n, arguments, a);
          } else r = n.apply(this, arguments);
          return o(this, r);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var d = r("q1tI"),
        u = (function (e) {
          c(r, e);
          var t = l(r);
          function r(e) {
            var i;
            return (
              a(this, r),
              ((i = t.call(this, e))._hasHeadManager = void 0),
              (i.emitChange = function () {
                i._hasHeadManager &&
                  i.props.headManager.updateHead(
                    i.props.reduceComponentsToState(
                      n(i.props.headManager.mountedInstances),
                      i.props
                    )
                  );
              }),
              (i._hasHeadManager =
                i.props.headManager && i.props.headManager.mountedInstances),
              i
            );
          }
          return (
            i(r, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(d.Component);
      t.default = u;
    },
    a1gu: function (e, t, r) {
      var n = r("cDf5"),
        a = r("PJYZ");
      e.exports = function (e, t) {
        return !t || ("object" !== n(t) && "function" !== typeof t) ? a(e) : t;
      };
    },
    cmSt: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return a;
      });
      var n = r("nKUr");
      function a() {
        return Object(n.jsx)("div", {
          className: "loader-outer",
          children: Object(n.jsx)("svg", {
            className: "loader-inner",
            viewBox: "0 0 50 50",
            children: Object(n.jsx)("circle", {
              className: "loader",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none",
              strokeWidth: "3.6",
            }),
          }),
        });
      }
    },
    g4pe: function (e, t, r) {
      e.exports = r("8Kt/");
    },
    lSNA: function (e, t) {
      e.exports = function (e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      };
    },
    lwAK: function (e, t, r) {
      "use strict";
      var n;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var a = (
        (n = r("q1tI")) && n.__esModule ? n : { default: n }
      ).default.createContext({});
      t.AmpStateContext = a;
    },
    rB5V: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about",
        function () {
          return r("Juyh");
        },
      ]);
    },
  },
  [["rB5V", 0, 2, 3, 1, 4]],
]);
