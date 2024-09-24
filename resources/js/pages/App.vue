<script setup>
	import { onMounted, ref } from 'vue';
	import { useRouter } from 'vue-router';


	const router = useRouter();
	const currentPage = window.location.pathname.replace('/', '');

	let user = ref([]);

	let page = ref({
		'activeLink': currentPage,
		'logout': false
	});


	onMounted(async () => {
		if(page.activeLink === '' || page.activeLink === 'login' || page.activeLink === 'adm' || page.activeLink === 'signup' || page.activeLink === 'forgot-password' ||  page.activeLink === 'change-password') {

		} else {
			getUserDetails();
		}
	})
	

	const getUserDetails = async () => {
		await axios.get('/api/admin').then((response) => {
			user.value = response.data;
			user.value.access_type = 1;
		});
	}


	const handleLogout = async () => {
		page.value.logout = true;
		
		await axios.post('/api/auth/admin/logout').then((response) => {
			window.location.href = response.data.redirect;
		});
	}
</script>


<template>
	<div class="wrapper" v-if=" page.activeLink === '' || page.activeLink === 'login' || page.activeLink === 'adm' || page.activeLink === 'signup' || page.activeLink === 'forgot-password' ||  page.activeLink === 'change-password'">
		<router-view />
	</div>


	<div class="main" v-else>
		<div class="content">
			<div class="sidebar">
				<div class="logo">
					<div class="plane-loader">
					  	<div class="cloud cloud1"></div>
					  	<div class="cloud cloud4"></div>
					  	<div class="cloud cloud3"></div>
					  	<div class="plane"></div>
					  	<div class="cloud cloud2"></div>
					  	<div class="steam steam1">
					    	<div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
					  	</div>
					  	<div class="steam steam2">
					    	<div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
					  	</div>
					  	<div class="steam steam3">
					    	<div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
					  	</div>
					  	<div class="steam steam4">
					    	<div class="c1"></div><div class="c2"></div><div class="c3"></div><div class="c4"></div><div class="c5"></div><div class="c6"></div><div class="c7"></div><div class="c8"></div><div class="c9"></div><div class="c10"></div>
					  	</div>
					</div>


					<div class='title'>
						<h1>MASTERS FLYING SCHOOL</h1>
					</div>
				</div>

				<div class="nav">
					<router-link to="/flights" exact-active-class="active" v-if="user.access_type === 2">
						<i class="fa fa-plane"></i> <span>My Flights</span>
					</router-link>

					<router-link to="/profile" exact-active-class="active" v-if="user.access_type === 2">
						<i class="fa fa-user"></i> <span>My Profile</span>
					</router-link>

					<router-link to="/all-flights" exact-active-class="active" v-if="user.access_type === 2">
						<i class="fa fa-book"></i> <span>All Flights</span>
					</router-link>

					<router-link to="/students" exact-active-class="active" v-if="user.access_type === 1">
						<i class="fa fa-users"></i> <span>Students</span>
					</router-link>

					<router-link to="/instructors" exact-active-class="active" v-if="user.access_type === 1">
						<i class="fa fa-users"></i> <span>Instructors</span>
					</router-link>

					<router-link to="/aircrafts" exact-active-class="active" v-if="user.access_type === 1">
						<i class="fa fa-plane"></i> <span>Aircrafts</span>
					</router-link>

					<router-link to="/reports" exact-active-class="active" v-if="user.access_type === 1">
						<i class="fa fa-clipboard"></i> <span>Reports</span>
					</router-link>

					<router-link to="/administrators" exact-active-class="active" v-if="user.access_type === 1">
						<i class="fa fa-user-secret"></i> <span>Administrators</span>
					</router-link>
				</div>
			</div>


			<div class="body">

				<div class="header">
					<div class="right-pane">
						<p class="name">{{ user.a_name }}</p>
						<button type="button" class="btn-notifs" title="NOTIFICATIONS">
							<i class="fa fa-bell"></i>
						</button>
						<button type="button" class="btn-logout" title="LOGOUT" @click="handleLogout">
							<i v-bind:class="(page.logout) ? 'fa fa-spinner fa-spin' : 'fa fa-sign-out'"></i>
						</button>
					</div>
				</div>
				
				
				<div class="wrapper">
					<router-view />
				</div>

			</div>
		</div>				


		<footer>
			<p>&copy; 2024.</p>
		</footer>
	</div>
</template>