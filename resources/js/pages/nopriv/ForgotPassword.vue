<script setup>
	import { ref } from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

</script>


<template>
	<div class='nopriv forgot-password'>
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
					<input 
						type='email'
						name='email'
						placeholder='Email Address'
						autoComplete='off'
						required
					/>
					<button>FORGOT PASSWORD</button>
				</div>
			</form>
		</div>
	</div>
</template>