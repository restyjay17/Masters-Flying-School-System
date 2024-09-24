<script setup>
	
</script>


<template>
	<div class="all-flights">
		<div class="page-title">
			<h1 class="title">ALL FLIGHTS</h1>

			<button type="button">BOOK A FLIGHT</button>
		</div>


		<div class="table-wrapper">
			<table class="table table-bordered">
				<thead>
					<tr>
						<th>FLIGHT ID</th>
						<th>TIME</th>
						<th>STUDENT</th>
						<th>IDENT</th>
						<th>INSTRUCTOR</th>
						<th>STATUS</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1002</td>
						<td>0800H</td>
						<td>J. Dela Cruz</td>
						<td>RP-C9989</td>
						<td>Capt. Juan</td>
						<td>
							<span class="badge badge-primary">UPCOMING</span>
						</td>
					</tr>
					<tr>
						<td>1200</td>
						<td>0900H</td>
						<td>A. Flavio</td>
						<td>RP-C51</td>
						<td>Capt. Dela</td>
						<td>
							<span class="badge badge-success">COMPLETED</span>
						</td>
					</tr>
					<tr>
						<td>1111</td>
						<td>1100H</td>
						<td>A. Araulio</td>
						<td>RP-C2251</td>
						<td>Capt. Cruz</td>
						<td>
							<span class="badge badge-success">COMPLETED</span>
						</td>
					</tr>
					<tr>
						<td>899</td>
						<td>1400H</td>
						<td>D. Sta Ana</td>
						<td>RP-C100</td>
						<td>Capt. Juan</td>
						<td>
							<span class="badge badge-success">COMPLETED</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>