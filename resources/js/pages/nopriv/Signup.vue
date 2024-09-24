<script setup>
	import { ref } from 'vue';


	let form = ref({
		'uname': '',
		'pword': '',
		'email': '',
		'lname': '',
		'fname': '',
		'mname': '',
		'address': '',
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
		const uppercase = /[A-Z]/.test(form.value.pword);
		const lowercase = /[a-z]/.test(form.value.pword);
		const isnumber = /[0-9]/.test(form.value.pword);
		const length = form.value.pword.length;

		if (uppercase && lowercase && isnumber && length > 5) {
			form.value.invalidPassword = false;
		} else {
			form.value.invalidPassword = true;
		}
	}
</script>


<template>
	<div class="nopriv signup">
		<div class="container">
			<form id="frmSignup">
				<div class="logo-container">
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


				<div class='inputs-container'>
					<div class="form-group">
						<input type="text" name="uname" placeholder="Username" autocomplete="off" required v-model="form.uname" v-bind:disabled="form.submit" />
					</div>

					<div class="form-group">
						<div class="password-group">
							<input 
								v-bind:type="(form.showPassword) ? 'text' : 'password'" 
								name='password'
								v-model="form.pword"
								placeholder='Password'
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
						<input type="email" name="email" placeholder="Email Address" autocomplete="off" required v-model="form.email" v-bind:disabled="form.submit" />
					</div>

					<div class="form-group">
						<input type="text" name="lname" placeholder="Last Name" autocomplete="off" required v-model="form.lname" v-bind:disabled="form.submit" />
					</div>

					<div class="form-group">
						<input type="text" name="fname" placeholder="First Name" autocomplete="off" required v-model="form.fname" v-bind:disabled="form.submit" />
					</div>

					<div class="form-group">
						<input type="text" name="mname" placeholder="Middle Name" autocomplete="off" required v-model="form.mname" v-bind:disabled="form.submit" />
					</div>

					<div class="form-group">
						<textarea name="address" rows="2" cols="5" placeholder="Address" required v-model="form.address" v-bind:disabled="form.submit"></textarea>
					</div>

					<div class="button-group">
						<button v-bind:disabled="form.submit || form.invalidPassword">SIGNUP</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>