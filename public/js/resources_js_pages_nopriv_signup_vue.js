"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_nopriv_Signup_vue"],{

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Signup',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)({
      'uname': '',
      'pword': '',
      'email': '',
      'lname': '',
      'fname': '',
      'mname': '',
      'address': '',
      'showPassword': false,
      'invalidPassword': false,
      'matchPassword': true,
      'submit': false
    });
    var handleShowPassword = function handleShowPassword() {
      if (form.value.showPassword) form.value.showPassword = false;else form.value.showPassword = true;
    };
    var validatePassword = function validatePassword() {
      var uppercase = /[A-Z]/.test(form.value.pword);
      var lowercase = /[a-z]/.test(form.value.pword);
      var isnumber = /[0-9]/.test(form.value.pword);
      var length = form.value.pword.length;
      if (uppercase && lowercase && isnumber && length > 5) {
        form.value.invalidPassword = false;
      } else {
        form.value.invalidPassword = true;
      }
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

/***/ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4 ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "nopriv signup"
};
var _hoisted_2 = {
  "class": "container"
};
var _hoisted_3 = {
  id: "frmSignup"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"logo-container\"><div class=\"plane-loader\"><div class=\"cloud cloud1\"></div><div class=\"cloud cloud4\"></div><div class=\"cloud cloud3\"></div><div class=\"plane\"></div><div class=\"cloud cloud2\"></div><div class=\"steam steam1\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam2\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam3\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div><div class=\"steam steam4\"><div class=\"c1\"></div><div class=\"c2\"></div><div class=\"c3\"></div><div class=\"c4\"></div><div class=\"c5\"></div><div class=\"c6\"></div><div class=\"c7\"></div><div class=\"c8\"></div><div class=\"c9\"></div><div class=\"c10\"></div></div></div><div class=\"title\"><h1>MASTERS FLYING SCHOOL</h1></div></div>", 1);
var _hoisted_5 = {
  "class": "inputs-container"
};
var _hoisted_6 = {
  "class": "form-group"
};
var _hoisted_7 = ["disabled"];
var _hoisted_8 = {
  "class": "form-group"
};
var _hoisted_9 = {
  "class": "password-group"
};
var _hoisted_10 = ["type", "disabled"];
var _hoisted_11 = ["disabled"];
var _hoisted_12 = {
  key: 0,
  "class": "fa fa-eye"
};
var _hoisted_13 = {
  key: 1,
  "class": "fa fa-eye-slash"
};
var _hoisted_14 = {
  key: 0,
  "class": "errMsg"
};
var _hoisted_15 = {
  "class": "form-group"
};
var _hoisted_16 = ["disabled"];
var _hoisted_17 = {
  "class": "form-group"
};
var _hoisted_18 = ["disabled"];
var _hoisted_19 = {
  "class": "form-group"
};
var _hoisted_20 = ["disabled"];
var _hoisted_21 = {
  "class": "form-group"
};
var _hoisted_22 = ["disabled"];
var _hoisted_23 = {
  "class": "form-group"
};
var _hoisted_24 = ["disabled"];
var _hoisted_25 = {
  "class": "button-group"
};
var _hoisted_26 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "uname",
    placeholder: "Username",
    autocomplete: "off",
    required: "",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.uname = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_7), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.uname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: $setup.form.showPassword ? 'text' : 'password',
    name: "password",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.pword = $event;
    }),
    placeholder: "Password",
    autoComplete: "off",
    required: "",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.form.invalidPassword ? 'error' : ''),
    onInput: _cache[2] || (_cache[2] = function ($event) {
      return $setup.validatePassword();
    }),
    disabled: $setup.form.submit
  }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_10), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelDynamic, $setup.form.pword]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    type: "button",
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $setup.handleShowPassword();
    }),
    disabled: $setup.form.submit
  }, [$setup.form.showPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_12)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("i", _hoisted_13))], 8 /* PROPS */, _hoisted_11)]), $setup.form.invalidPassword ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("p", _hoisted_14, "Password must contain at least one uppercase, one lowercase, one number, and a minimum of 6 characters")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "email",
    name: "email",
    placeholder: "Email Address",
    autocomplete: "off",
    required: "",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.email = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_16), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "lname",
    placeholder: "Last Name",
    autocomplete: "off",
    required: "",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.lname = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_18), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.lname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "fname",
    placeholder: "First Name",
    autocomplete: "off",
    required: "",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.fname = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_20), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.fname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    type: "text",
    name: "mname",
    placeholder: "Middle Name",
    autocomplete: "off",
    required: "",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.mname = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_22), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.mname]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    name: "address",
    rows: "2",
    cols: "5",
    placeholder: "Address",
    required: "",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.address = $event;
    }),
    disabled: $setup.form.submit
  }, null, 8 /* PROPS */, _hoisted_24), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.address]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: $setup.form.submit || $setup.form.invalidPassword
  }, "SIGNUP", 8 /* PROPS */, _hoisted_26)])])])])]);
}

/***/ }),

/***/ "./resources/js/pages/nopriv/Signup.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/nopriv/Signup.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signup_vue_vue_type_template_id_7a0003c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=7a0003c4 */ "./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4");
/* harmony import */ var _Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Signup_vue_vue_type_template_id_7a0003c4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/nopriv/Signup.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signup.vue?vue&type=script&setup=true&lang=js */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4 ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_template_id_7a0003c4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Signup_vue_vue_type_template_id_7a0003c4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Signup.vue?vue&type=template&id=7a0003c4 */ "./node_modules/laravel-mix/node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/nopriv/Signup.vue?vue&type=template&id=7a0003c4");


/***/ })

}]);