import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: () => import('../pages/nopriv/Login.vue')
	},
	{
		path: '/adm',
		component: () => import('../pages/nopriv/AdminLogin.vue')
	},
	{
		path: '/signup',
		component: () => import('../pages/nopriv/Signup.vue')
	},
	{
		path: '/forgot-password',
		component: () => import('../pages/nopriv/ForgotPassword.vue')
	},
	{
		path: '/change-password',
		component: () => import('../pages/nopriv/ChangePassword.vue')
	},
	{
		path: '/flights',
		component: () => import('../pages/student/Flights.vue')
	},
	{
		path: '/profile',
		component: import('../pages/student/Profile.vue')
	},
	{
		path: '/all-flights',
		component: () => import('../pages/student/AllFlights.vue')
	},
	{
		path: '/students',
		component: () => import('../pages/admin/Students.vue'),
		beforeEnter: (to, from, next) => {
			axios.get('/api/authenticated')
				.then(() => {
					next();
				}).catch(() => {
					window.location.href = '/adm';
				})
		}
	},
	{
		path: '/instructors',
		component: () => import('../pages/admin/Instructors.vue'),
		beforeEnter: (to, from, next) => {
			axios.get('/api/authenticated')
				.then(() => {
					next();
				}).catch(() => {
					window.location.href = '/adm';
				})
		}
	},
	{
		path: '/aircrafts',
		component: () => import('../pages/admin/Aircrafts.vue'),
		beforeEnter: (to, from, next) => {
			axios.get('/api/authenticated')
				.then(() => {
					next();
				}).catch(() => {
					window.location.href = '/adm';
				})
		}
	},
	{
		path: '/reports',
		component: () => import('../pages/admin/Reports.vue'),
		beforeEnter: (to, from, next) => {
			axios.get('/api/authenticated')
				.then(() => {
					next();
				}).catch(() => {
					window.location.href = '/adm';
				})
		}
	},
	{
		path: '/administrators',
		component: () => import('../pages/admin/Admin.vue'),
		beforeEnter: (to, from, next) => {
			axios.get('/api/authenticated')
				.then(() => {
					next();
				}).catch(() => {
					window.location.href = '/adm';
				})
		}
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import('../pages/NotFound.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'active'
});

export default router;