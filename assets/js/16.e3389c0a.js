(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{186:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("You should see a message in your console that says:")]),e._v(" "),e._m(2),a("p",[e._v("That means that the dev-server successfully started.")]),e._v(" "),a("p",[e._v("You have to wait for a second message that indicates that the client and the isomorphic code is successfully compiled:")]),e._v(" "),e._m(3),a("p",[e._v("Now you know that everything works as expected, to see the "),a("code",[e._v("vuesion")]),e._v(" in action, go to "),a("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3000"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(4),e._v(" "),a("p",[e._v("Your application runs now in development mode, that means that webpack watches for changes.")]),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("That guarantees a really good dev-experience and will make you much more productive.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),a("p",[e._v("The application can be served via docker too.")]),e._v(" "),a("p",[e._v("In order to build the image run:")]),e._v(" "),e._m(10),a("p",[e._v("When building is complete, you can proceed with firing up the docker container:")]),e._v(" "),e._m(11),a("p",[e._v("You have to wait for the message:")]),e._v(" "),e._m(12),a("p",[e._v("Docker is available at port: 3001 so a developer can have both docker and local server running at the same time")]),e._v(" "),a("p",[e._v("Now you know that everything works as expected, to see the "),a("code",[e._v("vuesion")]),e._v(" in action, go to "),a("a",{attrs:{href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3001"),a("OutboundLink")],1),e._v(".")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"run-the-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-application","aria-hidden":"true"}},[this._v("#")]),this._v(" Run the application")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Of course, you want to know if the application that you just downloaded works.\nIn order to test if everything works as expected run the following command: "),t("code",[this._v("npm run dev")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" info: server started at http://localhost:3000\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("[")]),this._v("1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("]")]),this._v(" ℹ ｢wdm｣: Compiled successfully.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"development-mode-and-hot-reloading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-mode-and-hot-reloading","aria-hidden":"true"}},[this._v("#")]),this._v(" Development mode and hot reloading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Every file in the "),t("code",[this._v("./src")]),this._v(" directory will be hot reloaded, so you don't have to reload your browser or restart the dev server during development.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("i18n")]),this._v(" "),t("p",[this._v("the only files that are not hot-reloaded are the files in the "),t("code",[this._v("./i18n")]),this._v(" directory, you have to reload your browser to reflect the changes.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"change-web-server-port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-web-server-port","aria-hidden":"true"}},[this._v("#")]),this._v(" Change web-server port")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Your app runs on port "),a("code",[e._v("3000")]),e._v(" by default, set the "),a("code",[e._v("PORT")]),e._v(" environment variable to configure a different port\ne.g. "),a("code",[e._v("npm run dev -- --port 8080")]),e._v(" in development mode or "),a("code",[e._v("PORT=8080 npm start")]),e._v(" for your production build.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"run-your-application-with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-your-application-with-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Run your application with docker")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install vuepress if you need the docs")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run ci "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" docker build -t "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"vue/starter:latest"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v(".")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("docker run -it --name vuesion -p 3001:3000 vue/starter:latest\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("info: node server started at http://localhost:3000\n")])])])}],!1,null,null,null);t.default=r.exports}}]);