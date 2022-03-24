import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from './miragejs/server';

makeServer('development');

createApp(App).mount('#app')
