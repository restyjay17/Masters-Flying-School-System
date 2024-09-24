"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_nopriv_ChangePassword_vue"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ChangePassword',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      'pword1': '',
      'pword2': '',
      'showPassword': false,
      'invalidPassword': false,
      'matchPassword': true,
      'submit': false
    });
    var handleShowPassword = function handleShowPassword() {
      if (form.value.showPassword) form.value.showPassword = false;else form.value.showPassword = true;
    };
    var validatePassword = function validatePassword() {
      var uppercase = /[A-Z]/.test(form.value.pword1);
      var lowercase = /[a-z]/.test(form.value.pword1);
      var isnumber = /[0-9]/.test(form.value.pword1);
      var length = form.value.pword1.length;
      if (uppercase && lowercase && isnumber && length > 5) {
        form.value.invalidPassword = false;
      } else {
        form.value.invalidPassword = true;
      }
    };
    var confirmPassword = function confirmPassword() {
      if (form.value.pword1 === form.value.pword2) form.value.matchPassword = true;else form.value.matchPassword = false;
    };
    var __returned__ = {
      get form() {
        return form;
      },
      set form(v) {
        form = v;
      },
      handleShowPassword: handleShowPassword,
      validatePassword: validatePassword,
      confirmPassword: confirmPassword,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "nopriv change-password"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  id: "frmLogin"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"plane-loader\"><div class=\"cloud cloud1\"></div><div class=\"cloud cloud4\"></div><div class=\"cloud cloud3\"></div><div class=\"plane\"></div><div class=\"cloud cloud2\"></div><div class=\"steam steam1\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam2\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam3\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam4\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div></div><div class=\"title\"><h1>MASTERS FLYING SCHOOL</h1></div>", 2);
var _hoisted_6 = {
  "class": "inputs-container"
};
var _hoisted_7 = {
  "class": "form-group"
};
var _hoisted_8 = {
  "class": "password-group"
};
var _hoisted_9 = ["type", "disabled"];
var _hoisted_10 = ["disabled"];
var _hoisted_11 = {
  key: 0,
  "class": "fa fa-eye"
};
var _hoisted_12 = {
  key: 1,
  "class": "fa fa-eye-slash"
};
var _hoisted_13 = {
  key: 0,
  "class": "errMsg"
};
var _hoisted_14 = {
  "class": "form-group"
};
var _hoisted_15 = ["disabled"];
var _hoisted_16 = {
  key: 0,
  "class": "errMsg"
};
var _hoisted_17 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.form.showPassword ? 'text' : 'password',
    name: "password1",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.pword1 = $event;
    }),
    placeholder: "New Password",
    autoComplete: "off",
    required: "",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.form.invalidPassword ? 'error' : ''),
    onInput: _cache[1] || (_cache[1] = function ($event) {
      return $setup.validatePassword();
    }),
    disabled: $setup.form.submit
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_9), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.form.pword1]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.handleShowPassword();
    }),
    disabled: $setup.form.submit
  }, [$setup.form.showPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_11)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_12))], 8 /* PROPS */, _hoisted_10)]), $setup.form.invalidPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_13, "Password must contain at least one uppercase, one lowercase, one number, and a minimum of 6 characters")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "password",
    name: "password2",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.pword2 = $event;
    }),
    placeholder: "Re-type Password",
    autoComplete: "off",
    required: "",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(!$setup.form.matchPassword ? 'error' : ''),
    onInput: _cache[4] || (_cache[4] = function ($event) {
      return $setup.confirmPassword();
    }),
    disabled: $setup.form.submit
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_15), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.pword2]]), !$setup.form.matchPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_16, "Password not match")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $setup.form.submit || $setup.form.invalidPassword || !$setup.form.matchPassword
  }, "CHANGE", 8 /* PROPS */, _hoisted_17)])])])]);
}

/***/ }),

/***/ "./resources/js/pages/nopriv/ChangePassword.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/nopriv/ChangePassword.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_20d1dff1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=20d1dff1 */ "./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1");
/* harmony import */ var _ChangePassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ChangePassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ChangePassword_vue_vue_type_template_id_20d1dff1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/nopriv/ChangePassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangePassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangePassword_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangePassword.vue?vue&type=script&setup=true&lang=js */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1 ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangePassword_vue_vue_type_template_id_20d1dff1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ChangePassword_vue_vue_type_template_id_20d1dff1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ChangePassword.vue?vue&type=template&id=20d1dff1 */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/ChangePassword.vue?vue&type=template&id=20d1dff1");


/***/ })

}]);