<script setup>
	import { ref, defineAsyncComponent } from 'vue';
	import { BookFlightModal } from '../../variables.js';
	import ModalSkeleton from '../../components/ModalSkeleton.vue';

	//const isModalActive = ref(null);

	const BookFlight = defineAsyncComponent({
		loader: () => import('../../components/BookFlightModal.vue'),
		//loadingComponent: LoadingComponent, /* shows while loading */
		delay: 200,
		//errorComponent: ErrorComponent, /* show if there's an error */
		timeout: 3000,
		onError: () => {},
		suspensible: true
	});
</script>


<template>
	<div class="flights">
		<div class="page-title">
			<h1 class="title">MY FLIGHTS</h1>

			<button type="button" @click="BookFlightModal = true">BOOK A FLIGHT</button>
		</div>


		<div class="table-wrapper">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>FLIGHT ID</th>
						<th>DATE</th>
						<th>TIME</th>
						<th>IDENT</th>
						<th>INSTRUCTOR</th>
						<th>STATUS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><span>1002</span></td>
						<td><span>November 15, 2023</span></td>
						<td><span>0800H</span></td>
						<td><span>RP-C9989</span></td>
						<td><span>Capt. Juan</span></td>
						<td>
							<span>
								<span class="badge badge-primary">UPCOMING</span>
							</span>
						</td>
					</tr>
					<tr>
						<td><span>1200</span></td>
						<td><span>November 13, 2023</span></td>
						<td><span>0900H</span></td>
						<td><span>RP-C51</span></td>
						<td><span>Capt. Dela</span></td>
						<td>
							<span>
								<span class="badge badge-success">COMPLETED</span>
							</span>
						</td>
					</tr>
					<tr>
						<td><span>1111</span></td>
						<td><span>November 11, 2023</span></td>
						<td><span>1100H</span></td>
						<td><span>RP-C2251</span></td>
						<td><span>Capt. Cruz</span></td>
						<td>
							<span>
								<span class="badge badge-success">COMPLETED</span>
							</span>
						</td>
					</tr>
					<tr>
						<td><span>899</span></td>
						<td><span>November 10, 2023</span></td>
						<td><span>1400H</span></td>
						<td><span>RP-C100</span></td>
						<td><span>Capt. Juan</span></td>
						<td>
							<span>
								<span class="badge badge-success">COMPLETED</span>
							</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		
		<Suspense v-if="BookFlightModal">
			<BookFlight />
			<template #fallback>
				<ModalSkeleton />
			</template>
		</Suspense>
	</div>
</template>