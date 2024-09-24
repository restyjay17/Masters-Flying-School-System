<template>
	<div class="modal modal-skeleton">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="title"></h3>
			</div>


			<div class="modal-body">
				
			</div>
		</div>
	</div>
</template>



<style scoped>
	.modal.modal-skeleton .modal-content {
		-webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        	animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	}

	.modal .modal-content .modal-header h3 {
	    display: block;
	    width: 100%;
	    min-height: 25px;
	    font-size: 0.9rem;
	    color: transparent;
	    border-radius: 3px;
	    background: linear-gradient(to right, #f1f1f1 20%, #e3e3e3 50%, #f1f1f1 80%);
	    background-size: 500px 100px;
	    animation-name: moving-gradient;
	    animation-duration: 1s;
	    animation-iteration-count: infinite;
	    animation-timing-function: linear;
	    animation-fill-mode: forwards;
	}

	.modal .modal-content .modal-body {
		display: block;
	    width: 100%;
	    min-height: 280px;
	    color: transparent;
	    border-radius: 3px;
	    background: linear-gradient(to right, #f1f1f1 20%, #e3e3e3 50%, #f1f1f1 80%);
	    background-size: 500px 100px;
	    animation-name: moving-gradient;
	    animation-duration: 1s;
	    animation-iteration-count: infinite;
	    animation-timing-function: linear;
	    animation-fill-mode: forwards;
	}
</style>