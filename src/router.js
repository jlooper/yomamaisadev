import Vue from 'vue';
import Router from 'vue-router';
import DevMoms from './views/DevMoms.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: DevMoms,
		},
		{
			path: '/fur-moms',
			name: 'furmoms',
			component: () => import('./views/FurMoms.vue'),
		},
		{
			path: '/nominate',
			name: 'nominate',
			component: () => import('./views/Nominate.vue'),
		},
	],
});
