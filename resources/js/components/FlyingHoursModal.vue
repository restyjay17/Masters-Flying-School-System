<script setup>
	await new Promise((res) => setTimeout(res, 500));

	import { ref } from 'vue';
	import { AddFlightHoursModal } from '../variables.js';
</script>


<template >
	<div class="modal add-flight-hours">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="title">ADD FLYING HOURS</h3>
			</div>


			<div class="modal-body">
				<form>
					<div class="form-group">
						<label>STUDENT</label>
						<select name="student" required>
							<option value=""></option>
						</select>
					</div>

					<div class="form-group">
						<label>AIRCRAFT</label>
						<select name="aircraft" required>
							<option value=""></option>
						</select>
					</div>

					<div class="form-group">
						<label>HOURS</label>
						<input type="number" name="hours" min="1" autocomplete="off" required>
					</div>

					<div class="button-group">
						<button type="button" @click="AddFlightHoursModal = false">CANCEL</button>
						<button type="submit">SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>