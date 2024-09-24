<template>
	<div class="loader-wrapper">
		<div class="loader">
		  	<span style="--i:1;"></span>
		  	<span style="--i:2;"></span>
		  	<span style="--i:3;"></span>
		  	<span style="--i:4;"></span>
		  	<span style="--i:5;"></span>
		  	<span style="--i:6;"></span>
		  	<span style="--i:7;"></span>
		  	<span style="--i:8;"></span>
		  	<span style="--i:9;"></span>
		  	<span style="--i:10;"></span>
		  	<span style="--i:11;"></span>
		  	<span style="--i:12;"></span>
		  	<span style="--i:13;"></span>
		  	<span style="--i:14;"></span>
		  	<span style="--i:15;"></span>
		  	<span style="--i:16;"></span>
		  	<span style="--i:17;"></span>
		  	<span style="--i:18;"></span>
		  	<span style="--i:19;"></span>
		  	<span style="--i:20;"></span>
		  	<div class="plane"></div>
		</div>
	</div>
</template>



<style>
	.loader-wrapper {
		display: flex;
	  	justify-content: center;
	  	align-items: center;
	  	min-height: 100vh;
	  	background: rgb(0, 0, 0, .5);
	}

	.loader {
		margin-left: 75px;
	    padding: 30px 0;
	    width: 150px;
	    height: 150px;
	    border: 1px solid rgba(125, 125, 125, 0.15);
	    border-radius: 100%;

	    position: relative;
	  	width: 120px;
	  	height: 120px;
	}

	.loader span {
		position: absolute;
	  	top: 0;
	  	left: 0;
	  	width: 100%;
	  	height: 100%;
	  	transform: rotate(calc(18deg * var(--i)));
	}

	.loader span:before {
		content: "";
	  	position: absolute;
	  	top: 0;
	  	left: 0;
	  	width: 15px;
	  	height: 15px;
	  	background: #5cb85c;
	  	border-radius: 50%;
	  	transform: scale(0);
	  	animation: animate 2s linear infinite;
	  	animation-delay: calc(0.1s * var(--i));
	}

	.loader .plane {
	  	position: absolute;
	  	top: 0;
	  	left: 0;
	  	width: 100%;
	  	height: 100%;
	  	animation: rotating 2s linear infinite;
	  	animation-delay: -1s;
	}

	.loader .plane:before {
		content: "";
	  	font-family: FontAwesome;
	  	position: absolute;
	  	top: 80px;
	  	left: 85px;
	  	color: #5cb85c;
	  	font-size: 60px;
	  	transform: rotate(180deg);
	}

	@keyframes animate {
	  	0% {
	    	transform: scale(0);
	  	}
	  	50% {
	    	transform: scale(1.2);
	  	}
	  	80%, 100% {
	    	transform: scale(0);
	  	}
	}

	@keyframes rotating {
	  	0% {
	    	transform: rotate(10deg);
	  	}
	  	100% {
	    	transform: rotate(370deg);
	  	}
	}
</style>