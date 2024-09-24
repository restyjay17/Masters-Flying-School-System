<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

    let page = ref({
        'login': false,
        'error': false
    });

    let form = ref({
        'uname': '',
        'pword': '',
        'showErrorMsg': false
    });


	const goToForgotPassword = () => {
		router.push('/admin/forgot-password');
	}


    const handleLogin = async () => {
        if (form.value.uname === '') page.value.error = true;
        else page.value.error = false;

        if (form.value.pword === '') page.value.error = true;
        else page.value.error = false;

        page.value.login = true;

        const formData = new FormData();
        formData.append('uname', form.value.uname);
        formData.append('pword', form.value.pword);

        await axios.post('/api/auth/admin', formData)
            .then((response) => {
                if (!response.data.status) form.value.showErrorMsg = true;
                else window.location.href = '/students';

                setTimeout(() => {
                    form.value.showErrorMsg = false;
                    page.value.login = false;
                }, 2000);
            }).catch((error) => {
                form.value.showErrorMsg = true;

                setTimeout(() => {
                    form.value.showErrorMsg = false;
                    page.value.login = false;
                }, 2000);
            });
    }

</script>


<template>
	<div class='nopriv admin-login'>
		<div class='container'>
			<form>

                <div v-if="form.showErrorMsg" class="error show">
                    <p class="message">
                        <i class="fa fa-exclamation-triangle"></i>
                        <span>Invalid user credentials</span>
                    </p>
                </div>

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
                    <div class="input-icon-group">
                        <input 
                            type='text'
                            name='uname'
                            placeholder='Username'
                            autoComplete='off'
                            required
                            v-bind:class="(page.error && form.uname === '') ? 'required' : ''"
                            v-model="form.uname"
                            v-bind:disabled="page.login"
                        />
                        <i class='fa fa-user-secret'></i>
                    </div>

                    <div class="input-icon-group">
                        <input 
                            type='password'
                            name='pword'
                            placeholder='Password'
                            required
                            v-bind:class="(page.error && form.pword === '') ? 'required' : ''"
                            v-model="form.pword"
                            v-bind:disabled="page.login"
                        />
                        <i class='fa fa-user-secret'></i>
                    </div>

					<button @click="handleLogin($event)" v-bind:disabled="page.login">
                        <span v-if="page.login">VERIFYING <i class="fa fa-spinner fa-spin"></i></span>
                        <span v-else>LOGIN</span>
                    </button>
                    
                    <button type="button" @click="goToForgotPassword" class="btn-forgot-password">
						Forgot Password?
					</button>
				</div>
			</form>
		</div>


        <footer>
            <p>&copy; 2024.</p>
        </footer>
	</div>
</template>