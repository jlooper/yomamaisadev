import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import router from './router';
Vue.use(Vuetify, {
	theme: {
		primary: '#E15A97',
		secondary: '#EEABC4',
		accent: '#861388',
		error: '#FF5252',
		info: '#2196F3',
		success: '#4CAF50',
		warning: '#FFC107',
	},
});
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
