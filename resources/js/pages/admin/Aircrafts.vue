<script setup>
	import { onMounted, ref, defineAsyncComponent, inject } from 'vue';
	import { AddAircraftModal } from '../../variables.js';
	import ModalSkeleton from '../../components/ModalSkeleton.vue';

	const eventBus = inject('eventBus');

	let aircrafts = ref([]);

	let page = ref({
		'search': '',
		'tableLoading': false,
		'paginate': [],
		'totalData': '',
		'currentPage': ''
	});


	onMounted(async () => {
		eventBus.on('loadAircraftsTable', () => {
			getAircrafts();
		})
		
		getAircrafts();
	});

	const AircraftModal = defineAsyncComponent({
		loader: () => import('../../components/AircraftModal.vue'),
		delay: 200,
		timeout: 3000,
		onError: () => {},
		suspensible: true
	});


	const getAircrafts = async (url = `/api/priv/aircrafts?page=1&search=${page.value.search}`) => {
		page.value.tableLoading = true;
		await axios.get(url).then((response) => {
            
            if (response.data.data.length > 0) {
				aircrafts.value = response.data.data;
				page.value.paginate = response.data.links;
				page.value.totalData = response.data.total;
				page.value.currentPage = response.data.path + '?page=' + response.data.currentPage;
				page.value.tableLoading = false;
			} else {
				aircrafts.value = [];
            	page.value.tableLoading = false;
			}
			
		}).catch((error) => {

			aircrafts.value = [];
			page.value.tableLoading = false;

		});
	}
</script>


<template>
	<div class="flights">
		<div class="page-title">
			<h1 class="title">AIRCRAFTS</h1>

			<button type="button" @click="AddAircraftModal = true">ADD AIRCRAFT</button>
		</div>


		<div class="table-wrapper table-responsive">
			<div class="filter-wrapper">
				<input type="text" name="search" placeholder="Search" autocomplete="off" v-model="page.search" @keyup="getAircrafts()">
			</div>

			<table v-bind:class="(page.tableLoading) ? 'table table-bordered loading' : 'table table-bordered'">
				<thead>
					<tr>
						<th>FLIGHT ID</th>
						<th>AIRCRAFT</th>
						<th>TYPE</th>
						<th>SIZE</th>
						<th>STATUS</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in aircrafts" :key="item.id" v-if="aircrafts.length > 0">
						<td>
							<span class="label">
								{{ item.flight_id }}
							</span>
						</td>
						<td>
							<span class="label">
								{{ item.aircraft }}
							</span>
						</td>
						<td>
							<span class="label">
								{{ item.type }}
							</span>
						</td>
						<td>
							<span class="label">
								{{ item.size }}
							</span>
						</td>
						<td>
							<span class="label">
								<span class="badge badge-success" v-if="
								item.status === 1">ACTIVE</span>
									<span class="badge badge-danger" v-else>INACTIVE</span>
							</span>
						</td>
					</tr>
					<tr class="no-data" v-else>
						<td colspan="5" v-if="page.tableLoading">loading...</td>
						<td colspan="5" v-else>No data available.</td>
					</tr>
				</tbody>
			</table>

			<div class="pagination" v-if="page.totalData > 10">
				<button type="button" v-for="item in page.paginate" :key="item.id" v-if="page.paginate.length > 0" v-bind:disabled="(item.active || item.url === null) ? true : false" v-bind:class="(item.active) ? 'active' : ''" @click="getAircrafts(item.url)">
					<span v-html="item.label"></span>
				</button>
			</div>
		</div>

		
		<Suspense v-if="AddAircraftModal">
			<AircraftModal />
			<template #fallback>
				<ModalSkeleton />
			</template>
		</Suspense>
	</div>
</template>