<script setup>
    import { onMounted, ref, defineAsyncComponent, inject } from 'vue';
    import { AddAdminModal } from '../../variables.js';
    import ModalSkeleton from '../../components/ModalSkeleton.vue';

    const eventBus = inject('eventBus');

    let admins = ref([]);

    let page = ref({
        'search': '',
        'tableLoading': '',
        'paginate': '',
        'totalData': '',
        'currentPage': ''
    });


    onMounted(async () => {
        eventBus.on('loadAdminTable', () => {
            getAdmins();
        });

        getAdmins();
    });


    const AdminModal = defineAsyncComponent({
        loader: () => import('../../components/AdminModal.vue'),
        delay: 200,
        timeout: 3000,
        onError: () => {},
        suspensible: true
    });


    const getAdmins = async (url = `/api/priv/admins?page=1&search=${page.value.search}`) => {
        page.value.tableLoading = true;
        await axios.get(url).then((response) => {
            
            if (response.data.data.length > 0) {
                admins.value = response.data.data;
                page.value.paginate = response.data.links;
                page.value.totalData = response.data.total;
                page.value.currentPage = response.data.path + '?page=' + response.data.currentPage;
                page.value.tableLoading = false;
            } else {
                admins.value = [];
                page.value.tableLoading = false;
            }

        }).catch((error) => {

            admins.value = [];
            page.value.tableLoading = false;

        });
    }


    const handleEdit = async (e, id) => {
        AddAdminModal.value = true;

        if (e.target.nodeName === 'BUTTON') {
            e.target.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
        } else {
            e.srcElement.className = 'fa fa-spinner fa-spin';
        }

        await axios.get(`/api/priv/admin?target=${id}`).then((response) => {            
            setTimeout(() => {
                eventBus.emit('adminDetails', response.data.details);
            }, 800);
                     

            if (e.target.nodeName === 'BUTTON') {
                e.target.innerHTML = '<i class="fa fa-pencil"></i>';
            } else {
                e.srcElement.className = 'fa fa-pencil';
            }
        });
    }
</script>


<template>
    <div class="administrators">
        <div class="page-title">
            <h1 class="titles">ADMINISTRATORS</h1>

            <button type="button" @click="AddAdminModal = true">ADD ADMIN</button>
        </div>


        <div class="table-wrapper table-responsive">
            <div class="filter-wrapper">
                <input type="text" name="search" placeholder="Search" autocomplete="off" v-model="page.search" @keyup="getAdmins()">
            </div>

            <table v-bind:class="(page.tableLoading) ? 'table table-bordered loading' : 'table table-bordered'">
                <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>NAME</th>
                        <th>EMAIL ADDRESS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in admins" :key="item.id" v-if="admins.length > 0">
                        <td>
                            <span>
                                {{ item.a_uname }}
                            </span>
                        </td>
                        <td>
                            <span>
                                {{ item.a_name }}
                            </span>
                        </td>
                        <td>
                            <span>
                                {{ item.a_email }}
                            </span>
                        </td>
                        <td>
                            <span>
								<button type="button" title="EDIT" @click="handleEdit($event, item.id)">
                                    <i class="fa fa-pencil"></i>
                                </button>
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
                <button type="button" v-for="item in page.paginate" :key="item.id" v-if="page.paginate.length > 0" v-bind:disabled="(item.active || item.url === null) ? true : false" v-bind:class="(item.active) ? 'active' : ''" @click="getAdmins(item.url)">
                    <span v-html="item.label"></span>
                </button>
            </div>
        </div>


        <Suspense v-if="AddAdminModal">
            <AdminModal />
            <template #fallback>
                <ModalSkeleton />
            </template>
        </Suspense>
    </div>
</template>