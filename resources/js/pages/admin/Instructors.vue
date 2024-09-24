<script setup>
    import { onMounted, ref, defineAsyncComponent, inject } from 'vue';
    import { AddInstructorModal } from '../../variables.js';
    import ModalSkeleton from '../../components/ModalSkeleton.vue';

    const eventBus = inject('eventBus');

    let instructors = ref([]);

    let page = ref({
        'search': '',
        'tableLoading': '',
        'paginate': '',
        'totalData': '',
        'currentPage': ''
    });


    onMounted(async () => {
        eventBus.on('loadInstructorTable', () => {
            getInstructors();
        });

        getInstructors();
    });


    const InstructorModal = defineAsyncComponent({
        loader: () => import('../../components/InstructorModal.vue'),
        delay: 200,
        timeout: 3000,
        onError: () => {},
        suspensible: true
    });


    const getInstructors = async (url = `/api/priv/instructors?page=1&search=${page.value.search}`) => {
        page.value.tableLoading = true;
        await axios.get(url).then((response) => {
            
            if (response.data.data.length > 0) {
                instructors.value = response.data.data;
                page.value.paginate = response.data.links;
                page.value.totalData = response.data.total;
                page.value.currentPage = response.data.path + '?page=' + response.data.currentPage;
                page.value.tableLoading = false;
            } else {
                instructors.value = [];
                page.value.tableLoading = false;
            }

        }).catch((error) => {

            instructors.value = [];
            page.value.tableLoading = false;

        });
    }
</script>


<template>
    <div class="instructors">
        <div class="page-title">
            <h1 class="titles">INSTRUCTORS</h1>

            <button type="button" @click="AddInstructorModal = true">ADD INSTRUCTOR</button>
        </div>


        <div class="table-wrapper table-responsive">
            <div class="filter-wrapper">
                <input type="text" name="search" placeholder="Search" autocomplete="off" v-model="page.search" @keyup="getInstructors()">
            </div>

            <table v-bind:class="(page.tableLoading) ? 'table table-bordered loading' : 'table table-bordered'">
                <thead>
                    <tr>
                        <th>EMPLOYEE ID</th>
                        <th>NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>CONTACT NUMBER</th>
                        <th>ADDRESS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in instructors" :key="item.id" v-if="instructors.length > 0">
                        <td>
                            <span class="label">
                                {{ item.employeeid }}
                            </span>
                        </td>
                        <td>
                            <span class="label">
                                {{ item.name }}
                            </span>
                        </td>
                        <td>
                            <span class="label">
                                {{ item.email }}
                            </span>
                        </td>
                        <td>
                            <span class="label">
                                {{ item.contactnumber }}
                            </span>
                        </td>
                        <td>
                            <span class="label">
                                {{ item.address }}
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
                <button type="button" v-for="item in page.paginate" :key="item.id" v-if="page.paginate.length > 0" v-bind:disabled="(item.active || item.url === null) ? true : false" v-bind:class="(item.active) ? 'active' : ''" @click="getInstructors(item.url)">
                    <span v-html="item.label"></span>
                </button>
            </div>
        </div>


        <Suspense v-if="AddInstructorModal">
            <InstructorModal />
            <template #fallback>
                <ModalSkeleton />
            </template>
        </Suspense>
    </div>
</template>