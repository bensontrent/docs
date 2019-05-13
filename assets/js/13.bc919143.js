(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{189:function(e,t,i){"use strict";i.r(t);var a=i(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("For a better user experience and search engine optimisation we recommend this method for your deployment.\nThis project is optimised to produce isomorphic web-apps. All features are available for this kind of deployment.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("This will create a build that only contains the client side application and pre-renders an "),i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/architecture/app-shell",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppShell"),i("OutboundLink")],1),e._v(".\nBy default it takes the route "),i("code",[e._v("/")]),e._v(" as the AppShell.")]),e._v(" "),e._m(7),e._v(" "),e._m(8)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"isomorphic-web-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isomorphic-web-application","aria-hidden":"true"}},[this._v("#")]),this._v(" Isomorphic Web Application")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To create an isomorphic web-app that you can deploy to an Heroku dyno, AWS EC2 instance or any other managed server,\nrun the command "),t("code",[this._v("npm run build")]),this._v(". This will create a server application that serves and renders the app.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Folders and files to include in your deployments:")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("package.json")]),e._v(" "),i("li",[e._v("./dist")]),e._v(" "),i("li",[e._v("./i18n")]),e._v(" "),i("li",[e._v("./.vuesion/config.json")]),e._v(" "),i("li",[e._v("./node_modules (only production dependencies)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"single-page-application-with-static-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-page-application-with-static-html","aria-hidden":"true"}},[this._v("#")]),this._v(" Single Page Application with static HTML")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Sometimes it's enough to deploy a static version of your application without server-side-rendering.\nFor example if you want to host your application on a CDN or a file storage like Netlify, Github pages or AWS S3, run the command "),t("code",[this._v("npm run build:spa")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Configure AppShell")]),this._v(" "),t("p",[this._v("You can configure the AppShell and additional static routes in the "),t("code",[this._v(".vuesion/config.json")]),this._v(" file.")]),this._v(" "),t("p",[this._v("This enables you to create, for example, a blog or a static marketing page")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[e._v("Limitations and Caveats")]),e._v(" "),i("ul",[i("li",[e._v("You need a web-server to serve the static files")]),e._v(" "),i("li",[e._v("You can not render pages that have route guards or a redirects (e.g. /dashboard)")]),e._v(" "),i("li",[e._v("You might have issues with "),i("code",[e._v("prefetch")]),e._v(" (e.g. if the server you try to hit is not available during the rendering)")]),e._v(" "),i("li",[e._v("You can not use the "),i("code",[e._v("App/Runtime Config")]),e._v(" features because they depend on the server component\n"),i("ul",[i("li",[e._v("That means that you have to replace all references to the vuex state "),i("code",[e._v("app.config")]),e._v(" with a static value\n:::")])])])]),e._v(" "),i("p",[i("strong",[e._v("Folders and files to include in your deployments:")])]),e._v(" "),i("ul",[i("li",[e._v("./dist")])])])}],!1,null,null,null);t.default=n.exports}}]);