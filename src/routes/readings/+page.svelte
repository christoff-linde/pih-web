<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();

	function formatDate(date: Date) {
		const newDate = new Date(date);

		const year = newDate.getFullYear();
		const month = String(newDate.getMonth() + 1).padStart(2, '0');
		const day = String(newDate.getDate()).padStart(2, '0');
		const hours = String(newDate.getHours()).padStart(2, '0');
		const minutes = String(newDate.getMinutes()).padStart(2, '0');
		const seconds = String(newDate.getSeconds()).padStart(2, '0');

		return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
	}

	console.log(data);
</script>

<h2 class="text-xl font-semibold lowercase">daily</h2>
<div class="grid grid-cols-8 font-mono">
	<p class="font-bold">sensor_id</p>
	<p class="font-bold">day</p>
	<p class="font-bold">min_temperature</p>
	<p class="font-bold">avg_temperature</p>
	<p class="font-bold">max_temperature</p>
	<p class="font-bold">min_humidity</p>
	<p class="font-bold">avg_humidity</p>
	<p class="font-bold">max_humidity</p>
	{#each data.daily_readings.data as sensor_reading}
		<p>{sensor_reading.sensor_id}</p>
		<p>{formatDate(sensor_reading.day)}</p>
		<p>{sensor_reading.min_temperature.toFixed(2)}</p>
		<p>{sensor_reading.avg_temperature.toFixed(2)}</p>
		<p>{sensor_reading.max_temperature.toFixed(2)}</p>
		<p>{sensor_reading.min_humidity.toFixed(2)}</p>
		<p>{sensor_reading.avg_humidity.toFixed(2)}</p>
		<p>{sensor_reading.max_humidity.toFixed(2)}</p>
	{/each}
</div>
<h2 class="text-xl font-semibold lowercase">hourly</h2>
<div class="grid grid-cols-8 font-mono">
	<p class="font-bold">sensor_id</p>
	<p class="font-bold">hour</p>
	<p class="font-bold">min_temperature</p>
	<p class="font-bold">avg_temperature</p>
	<p class="font-bold">max_temperature</p>
	<p class="font-bold">min_humidity</p>
	<p class="font-bold">avg_humidity</p>
	<p class="font-bold">max_humidity</p>
	{#each data.hourly_readings.data as sensor_reading}
		<p>{sensor_reading.sensor_id}</p>
		<p>{formatDate(sensor_reading.hour)}</p>
		<p>{sensor_reading.min_temperature.toFixed(2)}</p>
		<p>{sensor_reading.avg_temperature.toFixed(2)}</p>
		<p>{sensor_reading.max_temperature.toFixed(2)}</p>
		<p>{sensor_reading.min_humidity.toFixed(2)}</p>
		<p>{sensor_reading.avg_humidity.toFixed(2)}</p>
		<p>{sensor_reading.max_humidity.toFixed(2)}</p>
	{/each}
</div>

<h2 class="text-xl font-semibold lowercase">minutes</h2>
<div class="grid grid-cols-8 font-mono">
	<p class="font-bold">sensor_id</p>
	<p class="font-bold">minutes</p>
	<p class="font-bold">min_temperature</p>
	<p class="font-bold">avg_temperature</p>
	<p class="font-bold">max_temperature</p>
	<p class="font-bold">min_humidity</p>
	<p class="font-bold">avg_humidity</p>
	<p class="font-bold">max_humidity</p>
	{#each data.minute_readings.data as sensor_reading}
		<p>{sensor_reading.sensor_id}</p>
		<p>{formatDate(sensor_reading.minute)}</p>
		<p>{sensor_reading.min_temperature.toFixed(2)}</p>
		<p>{sensor_reading.avg_temperature.toFixed(2)}</p>
		<p>{sensor_reading.max_temperature.toFixed(2)}</p>
		<p>{sensor_reading.min_humidity.toFixed(2)}</p>
		<p>{sensor_reading.avg_humidity.toFixed(2)}</p>
		<p>{sensor_reading.max_humidity.toFixed(2)}</p>
	{/each}
</div>
