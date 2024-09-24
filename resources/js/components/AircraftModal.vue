<script setup>
    await new Promise((res) => setTimeout(res, 500));

    import { ref, inject } from 'vue';
    import { AddAircraftModal } from '../variables.js';

    const eventBus = inject('eventBus');

    let form = ref({
        'flightid': '',
        'aircraft': '',
        ':type': '',
        'size': '',
        'status': '',
        'submit': false
    });


    const saveAircraft = async (e) => {

        if (form.value.flightid === '' || form.value.aircraft === '' || form.value.type === '' || form.value.size === '' || form.value.status === '') {

            return;
            
        } else {
            e.preventDefault();

            form.value.submit = true;

            const formData = new FormData();
            formData.append('flightid', form.value.flightid);
            formData.append('aircraft', form.value.aircraft);
            formData.append('type', form.value.type);
            formData.append('size', form.value.size);
            formData.append('status', form.value.status);

            await axios.post('/api/priv/aircraft', formData)
                .then((response) => {
                    form.value.flightid = '';
                    form.value.aircraft = '';
                    form.value.type = '';
                    form.value.size = '';
                    form.value.status = '';

                    form.value.submit = false;

                    toast.fire({
                        icon: 'success',
                        title: response.data.msg
                    });

                    AddAircraftModal.value = false;
                    eventBus.emit('loadAircraftsTable');
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
    <div class="modal add-aircraft">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="title">ADD AIRCRAFT</h3>
            </div>

            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label>FLIGHT ID</label>
                        <input type="text" name="flightid" autocomplete="off" required v-model="form.flightid" v-bind:disabled="form.submit" />
                    </div>
                    
                    <div class="form-group">
                        <label>AIRCRAFT</label>
                        <input type="text" name="aircraft" autocomplete="off" required v-model="form.aircraft" v-bind:disabled="form.submit" />
                    </div>

                    <div class="form-group">
                        <label>TYPE</label>
                        <select name="type" required v-model="form.type" v-bind:disabled="form.submit">
                            <option value=""></option>
                            <option value="Commercial">Commercial</option>
                            <option value="Cargo">Cargo</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>SIZE</label>
                        <select name="size" required v-model="form.size" v-bind:disabled="form.submit">
                            <option value=""></option>
                            <option value="1XL">1XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                            <option value="4XL">4XL</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label>STATUS</label>
                        <select name="status" required v-model="form.status" v-bind:disabled="form.submit">
                            <option value=""></option>
                            <option value="1">ACTIVE</option>
                            <option value="2">INACTIVE</option>
                        </select>
                    </div>

                    <div class="button-group">
                        <button type="button" @click="AddAircraftModal = false" v-bind:disabled="form.submit">CANCEL</button>
                        <button type="submit" class="submit" @click="saveAircraft($event)" v-bind:disabled="form.submit">
                            <span v-if="form.submit">SAVING <i class="fa fa-spinner fa-spin"></i></span>
                            <span v-else>SAVE</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>