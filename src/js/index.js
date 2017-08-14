import Vue from "vue";

import "../scss/index.scss";
import "bootstrap";
import modal from "./modal.vue";
import SVGEditor from "./svg-editor.vue";

Vue.component("modal", modal);
var app = new Vue(SVGEditor).$mount("#app");

window.app = app;