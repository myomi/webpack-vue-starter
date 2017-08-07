import Vue from "vue";
import MyComponent from './test.vue';

var app = new Vue(MyComponent).$mount('#app');

window.app = app;