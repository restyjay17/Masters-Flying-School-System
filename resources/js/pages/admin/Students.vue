<script setup>
	import { onMounted, ref, defineAsyncComponent, inject } from 'vue';
	import { AddFlightHoursModal, AddStudentModal } from '../../variables.js';
	import ModalSkeleton from '../../components/ModalSkeleton.vue';
import Swal from 'sweetalert2';

	const eventBus = inject('eventBus');

	let students = ref([]);

	let form = ref({
		'userid': []
	});

	let page = ref({
		'search': '',
		'userStatus': '',
		'tableLoading': false,
		'paginate': [],
		'totalData': '',
		'currentPage': ''
	});


	onMounted(async () => {
		eventBus.on('loadStudentsTable', () => {
			getStudents();
		});

		getStudents();
	});


	const FlyingHours = defineAsyncComponent({
		loader: () => import('../../components/FlyingHoursModal.vue'),
		//loadingComponent: LoadingComponent, /* shows while loading */
		delay: 200,
		//errorComponent: ErrorComponent, /* show if there's an error */
		timeout: 3000,
		onError: () => {},
		suspensible: true
	});


	const Student = defineAsyncComponent({
		loader: () => import('../../components/StudentModal.vue'),
		delay: 200,
		timeout: 3000,
		onError: () => {},
		suspensible: true
	});


	const getStudents = async (url = `/api/priv/students?page=1&search=${page.value.search}&status=${page.value.userStatus}`) => {
		page.value.tableLoading = true;
		await axios.get(url).then((response) => {
            
            if (response.data.data.length > 0) {
				students.value = response.data.data;
				page.value.paginate = response.data.links;
				page.value.totalData = response.data.total;
				page.value.currentPage = response.data.path + '?page=' + response.data.current_page;
				page.value.tableLoading = false;
			} else {
				students.value = [];
				page.value.tableLoading = false;
			}

		}).catch((error) => {

			students.value = [];
			page.value.tableLoading = false;

		});
	}


	const sendVerfication = async () => {
		var uid = form.value.userid;
		if (uid.length === 0) {
			toast.fire({
				icon: 'error',
				title: 'No student selected!'
			});
			return;
		}

		Swal.fire({
			text: 'Are you sure you want to send verification to selected student(s)?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes',
			cancelButtonText: 'No',
			showLoaderOnConfirm: true,
			preConfirm: function(result) {
				return new Promise(function(resolve) {
					if (result) {
						const formData = new FormData();
						formData.append('students', uid);

						axios.post('/api/priv/students/send_verification', formData)
							.then((response) => {
								form.value.userid = [];
								
								getStudents();

								toast.fire({
									icon: 'success',
									title: response.data.msg
								});
								
			          			setTimeout(function() { resolve(); }, 3000);
							}).catch((error) => {
								toast.fire({
									icon: 'error',
									title: 'Something went wrong while sending student email verification.'
								});
							});
					}
				});
			}
		});
	}
</script>


<template>
	<div class="students">
		<div class="page-title">
			<h1 class="title">STUDENTS</h1>

			<div class="title-buttons">
				<button type="button" @click="AddStudentModal = true">ADD STUDENT</button>
				<button type="button" @click="AddFlightHoursModal = true">ADD HOURS</button>
			</div>
		</div>


		<div class="table-wrapper table-responsive">
			<div class="filter-wrapper more">
				<div class="filter-group">
					<input type="text" name="search" placeholder="Search" autocomplete="off" v-model="page.search" @keyup="getStudents()">
					<select name="staus" v-model="page.userStatus" @change="getStudents()">
						<option value="">-- STATUS --</option>
						<option value="0">For Verification</option>
						<option value="1">Sent Verification</option>
						<option value="2">Active</option>
						<option value="3">Inactive</option>
					</select>
				</div>

				<div class="action-group">
					<button type="button" @click="sendVerfication()">SEND VERIFICATION</button>
				</div>
			</div>
			
			<table v-bind:class="(page.tableLoading) ? 'table table-bordered loading' : 'table table-bordered'">
				<thead>
					<tr>
						<th></th>
						<th>STUDENT ID</th>
						<th>NAME</th>
						<th>FLYING HOURS</th>
						<th>EMAIL</th>
						<th>CONTACT NUMBER</th>
						<th>STATUS</th>
						<th>ACTION</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in students" :key="item.id" v-if="students.length > 0">
						<td>
							<span>
								<i class="fa fa-check-circle" v-if="item.status === 2"></i>
								<i class="fa fa-times-circle" v-else-if="item.status === 3"></i>
								<input type="checkbox" name="user[]" v-model="form.userid" v-bind:value="item.userid" v-else>
							</span>
						</td>
						<td>
							<span>
								{{ item.studentid }}
							</span>
						</td>
						<td>
							<span>
								{{ item.name }}
							</span>
						</td>
						<td>
							<span>
								
							</span>
						</td>
						<td>
							<span>
								{{ item.email }}
							</span>
						</td>
						<td>
							<span>
								{{ item.contactnumber }}
							</span>
						</td>
						<td>
							<span class="badge badge-primary" v-if="item.status === 1">Sent Verification</span>
							<span class="badge badge-success" v-else-if="item.status === 2">Active</span>
							<span class="badge badge-danger" v-else-if="item.status === 3">Inactive</span>
							<span class="badge badge-default" v-else>For Verification</span>
						</td>
						<td>
							<span>
								<button type="button" title="VIEW"><i class="fa fa-eye"></i></button>
								<button type="button" title="EDIT"><i class="fa fa-pencil"></i></button>
							</span>
						</td>
					</tr>
					<tr class="no-data" v-else>
						<td colspan="8" v-if="page.tableLoading">loading...</td>
						<td colspan="8" v-else>No data available.</td>
					</tr>
				</tbody>
			</table>

			<div class="pagination" v-if="page.totalData > 10">
				<button type="button" v-for="item in page.paginate" :key="item.id" v-if="page.paginate.length > 0" v-bind:disabled="(item.active || item.url === null) ? true : false" v-bind:class="(item.active) ? 'active' : ''" @click="getStudents(item.url)">
					<span v-html="item.label"></span>
				</button>
			</div>
		</div>

		
		<Suspense v-if="AddFlightHoursModal">
			<FlyingHours />
			<template #fallback>
				<ModalSkeleton />
			</template>
		</Suspense>

		
		<Suspense v-if="AddStudentModal">
			<Student />
			<template #fallback>
				<ModalSkeleton />
			</template>
		</Suspense>
	</div>
</template>