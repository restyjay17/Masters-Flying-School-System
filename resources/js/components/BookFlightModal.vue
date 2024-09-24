<script setup>
	await new Promise((res) => setTimeout(res, 500));

	import { ref } from 'vue';
	import { BookFlightModal } from '../variables.js';

	var currentDateWithFormat = new Date().toJSON().slice(0,10).replace(/-/g,'-');
</script>


<template >
	<div class="modal book-flight">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="title">BOOK FLIGHT</h3>
			</div>


			<div class="modal-body">
				<form>
					<div class="form-group">
						<label>DATE</label>
						<input type="date" name="date" autocomplete="off" :min="currentDateWithFormat" required>
					</div>

					<div class="form-group">
						<label>AIRCRAFT</label>
						<select name="aircraft" required>
							<option value=""></option>
						</select>
					</div>

					<div class="form-group">
						<label>REMARKS / SPECIAL REQUEST</label>
						<textarea name="remarks" cols="5" rows="3"></textarea>
					</div>

					<div class="button-group">
						<button type="button" @click="BookFlightModal = false">CANCEL</button>
						<button type="submit">SUBMIT</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>