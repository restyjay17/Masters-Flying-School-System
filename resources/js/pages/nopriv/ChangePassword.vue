<script setup>
	import { ref } from 'vue';


	let form = ref({
		'pword1': '',
		'pword2': '',
		'showPassword': false,
		'invalidPassword': false,
		'matchPassword': true,
		'submit': false
	});

	
	const handleShowPassword = () => {

		if (form.value.showPassword) form.value.showPassword = false;
		else form.value.showPassword = true;

	}


	const validatePassword = () => {
		const uppercase = /[A-Z]/.test(form.value.pword1);
		const lowercase = /[a-z]/.test(form.value.pword1);
		const isnumber = /[0-9]/.test(form.value.pword1);
		const length = form.value.pword1.length;

		if (uppercase && lowercase && isnumber && length > 5) {
			form.value.invalidPassword = false;
		} else {
			form.value.invalidPassword = true;
		}
	}


	const confirmPassword = () => {

		if (form.value.pword1 === form.value.pword2) form.value.matchPassword = true;
		else form.value.matchPassword = false;

	}
</script>


<template>
	<div class='nopriv change-password'>
		<div class='container'>
			<form id='frmLogin'>

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


				<div class='inputs-container'>
					<div class="form-group">
						<div class="password-group">
							<input 
								v-bind:type="(form.showPassword) ? 'text' : 'password'" 
								name='password1'
								v-model="form.pword1"
								placeholder='New Password'
								autoComplete='off'
								required 
								v-bind:class="(form.invalidPassword) ? 'error' : ''"
								v-on:input="validatePassword()"
								v-bind:disabled="form.submit"
							/>
							<button type="button" @click="handleShowPassword()" v-bind:disabled="form.submit">
								<i class="fa fa-eye" v-if="form.showPassword"></i>
								<i class="fa fa-eye-slash" v-else></i>
							</button>
						</div>
						<p class="errMsg" v-if="form.invalidPassword">Password must contain at least one uppercase, one lowercase, one number, and a minimum of 6 characters</p>
					</div>

					<div class="form-group">
						<input 
							type='password'
							name='password2'
							v-model="form.pword2"
							placeholder='Re-type Password'
							autoComplete='off'
							required
							v-bind:class="(!form.matchPassword) ? 'error' : ''"
							v-on:input="confirmPassword()"
							v-bind:disabled="form.submit"
						/>
						<p class="errMsg" v-if="!form.matchPassword">Password not match</p>
					</div>

					<button v-bind:disabled="form.submit || form.invalidPassword || !form.matchPassword">CHANGE</button>
				</div>
			</form>
		</div>
	</div>
</template>