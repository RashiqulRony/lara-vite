/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import axios  from 'axios';
import router from './route/index';
import Api    from './route/api';
import App    from './App.vue'

const app = createApp(App).use(router);
app.config.globalProperties.axios = axios;
app.config.globalProperties.API = Api;
app.mount('#app');
