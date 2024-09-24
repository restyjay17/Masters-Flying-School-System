<script setup>
    await new Promise((res) => setTimeout(res, 500));

    import { ref, inject, onMounted } from 'vue';
    import { AddAdminModal } from '../variables.js';

    const eventBus = inject('eventBus');

    let form = ref({
        'target': '',
        'uname': '',
        'pword': '',
        'name': '',
        'email': '',
		'showPassword': false,
        'submit': false
    });


    onMounted(() => {
        eventBus.on('adminDetails', (details) => {
            if (details.a_uname !== '' || details.a_uname !== undefined) {
                form.value.target = details.id;
                form.value.uname = details.a_uname;
                form.value.name = details.a_name;
                form.value.email = details.a_email;
            }
        });
    });

	
    const handleShowPassword = () => {

        if (form.value.showPassword) form.value.showPassword = false;
        else form.value.showPassword = true;

    }

    
    const saveAdmin = async (e) => {
        if (form.value.uname === '' || form.value.name === '' || form.value.email === '') {

            return;
            
        } else {
            if (form.value.target === '' && form.value.pword === '') return;

            e.preventDefault();

            form.value.submit = true;

            const formData = new FormData();
            formData.append('target', form.value.target);
            formData.append('uname', form.value.uname);
            formData.append('pword', form.value.pword);
            formData.append('name', form.value.name);
            formData.append('email', form.value.email);

            await axios.post('/api/priv/admin', formData)
                .then((response) => {
                    form.value.uname = '';
                    form.value.pword = '';
                    form.value.name = '';
                    form.value.email = '';

                    form.value.submit = false;

                    toast.fire({
                        icon: 'success',
                        title: response.data.msg
                    });

                    AddAdminModal.value = false;
                    eventBus.emit('loadAdminTable');
                }).catch((error) => {
                    toast.fire({
                        icon: 'error',
                        title: error.response.data.message
                    });

                    form.value.submit = false;
                });
        }
    }
</script>


<template>
    <div class="modal add-administrator">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="title">ADD ADMIN</h3>
            </div>


            <div class="modal-body">
                <form id="frmAddAdministrator">
                    <div class="form-group">
                        <label>USERNAME</label>
                        <input type="text" name="username" autocomplete="off" required v-model="form.uname" v-bind:disabled="form.submit" />
                    </div>

                    <div class="form-group">
                        <label>PASSWORD</label>
						<div class="password-group">
                            <input 
                                v-bind:type="(form.showPassword) ? 'text' : 'password'" 
                                name='password'
                                v-model="form.pword"
                                autoComplete='off'
                                v-bind:required="(form.target === '') ? true : false" 
                                v-bind:disabled="form.submit"
                            />
                            <button type="button" @click="handleShowPassword()" v-bind:disabled="form.submit">
                                <i class="fa fa-eye" v-if="form.showPassword"></i>
                                <i class="fa fa-eye-slash" v-else></i>
                            </button>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>NAME</label>
                        <input type="text" name="name" autocomplete="off" required v-model="form.name" v-bind:disabled="form.submit" />
                    </div>
                    
                    <div class="form-group">
                        <label>EMAIL ADDRESS</label>
                        <input type="email" name="email" autocomplete="off" required v-model="form.email" v-bind:disabled="form.submit" />
                    </div>

                    <div class="button-group">
                        <button type="button" @click="AddAdminModal = false" v-bind:disabled="form.submit">CANCEL</button>
						<button type="submit" class="submit" @click="saveAdmin($event)" v-bind:disabled="form.submit">
                            <span v-if="form.submit">SAVING <i class="fa fa-spinner fa-spin"></i></span>
						    <span v-else>SAVE</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>