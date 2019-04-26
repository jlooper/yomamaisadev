import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/my-mom',
			name: 'mymom',
			component: () => import('./views/MyMom.vue'),
		},
		{
			path: '/fur-moms',
			name: 'furmoms',
			component: () => import('./views/FurMoms.vue'),
		},
		{
			path: '/dev-moms',
			name: 'devmoms',
			component: () => import('./views/DevMoms.vue'),
		},
		{
			path: '/nominate',
			name: 'nominate',
			component: () => import('./views/Nominate.vue'),
		},
	],
});
