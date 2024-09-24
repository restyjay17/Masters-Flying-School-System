"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_nopriv_login_vue"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'login',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    var goToForgotPassword = function goToForgotPassword() {
      router.push('/forgot-password');
    };
    var __returned__ = {
      router: router,
      goToForgotPassword: goToForgotPassword,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get useRouter() {
        return vue_router__WEBPACK_IMPORTED_MODULE_1__.useRouter;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "nopriv login"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"plane-loader\"><div class=\"cloud cloud1\"></div><div class=\"cloud cloud4\"></div><div class=\"cloud cloud3\"></div><div class=\"plane\"></div><div class=\"cloud cloud2\"></div><div class=\"steam steam1\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam2\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam3\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam4\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div></div><div class=\"title\"><h1>MASTERS FLYING SCHOOL</h1></div>", 2);
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "text",
  id: "uname",
  placeholder: "Username",
  autoComplete: "off",
  required: ""
}, null, -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
  type: "password",
  id: "pword",
  placeholder: "Password",
  required: ""
}, null, -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", null, "LOGIN", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "container"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    id: "frmLogin"
  }, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "inputs-container"
  }, [_hoisted_4, _hoisted_5, _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: $setup.goToForgotPassword,
    "class": "btn-forgot-password"
  }, " Forgot Password? ")])])])]);
}

/***/ }),

/***/ "./resources/js/components/nopriv/login.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/nopriv/login.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login_vue_vue_type_template_id_78fc7956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=78fc7956 */ "./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956");
/* harmony import */ var _login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_login_vue_vue_type_template_id_78fc7956__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/nopriv/login.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=script&setup=true&lang=js */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956":
/*!********************************************************************************!*\
  !*** ./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_78fc7956__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_login_vue_vue_type_template_id_78fc7956__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./login.vue?vue&type=template&id=78fc7956 */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/nopriv/login.vue?vue&type=template&id=78fc7956");


/***/ })

}]);