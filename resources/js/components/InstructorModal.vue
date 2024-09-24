<script setup>
    await new Promise((res) => setTimeout(res, 500));

    import { ref, inject } from 'vue';
    import { AddInstructorModal } from '../variables.js';

    const eventBus = inject('eventBus');

    let form = ref({
        'employeeid': '',
        'lname': '',
        'fname': '',
        'mname': '',
        'email': '',
        'submit': false
    });

    
    const saveInstructor = async (e) => {
        if (form.value.employeeid === '' || form.value.lname === '' || form.value.fname === '' || form.value.mname === '' || form.value.email === '') {
            return;
        } else {
            e.preventDefault();

            form.value.submit = true;

            const formData = new FormData();
            formData.append('employeeid', form.value.employeeid);
            formData.append('lname', form.value.lname);
            formData.append('fname', form.value.fname);
            formData.append('mname', form.value.mname);
            formData.append('email', form.value.email);

            await axios.post('/api/priv/instructor', formData)
                .then((response) => {
                    form.value.employeeid = '';
                    form.value.lname = '';
                    form.value.fname = '';
                    form.value.mname = '';
                    form.value.email = '';

                    form.value.submit = false;

                    toast.fire({
                        icon: 'success',
                        title: response.data.msg
                    });

                    AddInstructorModal.value = false;
                    eventBus.emit('loadInstructorTable');
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
    <div class="modal add-instructor">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="title">ADD INSTRUCTOR</h3>
            </div>


            <div class="modal-body">
                <form id="frmAddInstructor">
                    <div class="form-group">
                        <label>EMPLOYEE ID</label>
                        <input type="text" name="employeeid" autocomplete="off" required v-model="form.employeeid" v-bind:disabled="form.submit" />
                    </div>

                    <div class="form-group">
                        <label>LAST NAME</label>
                        <input type="text" name="lname" autocomplete="off" required v-model="form.lname" v-bind:disabled="form.submit" />
                    </div>
                    
                    <div class="form-group">
                        <label>FIRST NAME</label>
                        <input type="text" name="fname" autocomplete="off" required v-model="form.fname" v-bind:disabled="form.submit" />
                    </div>
                    
                    <div class="form-group">
                        <label>MIDDLE NAME</label>
                        <input type="text" name="mname" autocomplete="off" required v-model="form.mname" v-bind:disabled="form.submit" />
                    </div>
                    
                    <div class="form-group">
                        <label>EMAIL ADDRESS</label>
                        <input type="email" name="email" autocomplete="off" required v-model="form.email" v-bind:disabled="form.submit" />
                    </div>

                    <div class="button-group">
                        <button type="button" @click="AddInstructorModal = false" v-bind:disabled="form.submit">CANCEL</button>
						<button type="submit" class="submit" @click="saveInstructor($event)" v-bind:disabled="form.submit">
                            <span v-if="form.submit">SAVING <i class="fa fa-spinner fa-spin"></i></span>
						    <span v-else>SAVE</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>