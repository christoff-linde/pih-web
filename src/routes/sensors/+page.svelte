<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	let { data }: { data: PageData } = $props();

	console.log(data.sensors.data);

	onMount(() => {
		console.log('mounted');
	});
</script>

<div class="grid grid-cols-4">
	<p class="font-mono font-bold">sensor_id</p>
	<p class="font-mono font-bold">sensor_name</p>
	<p class="font-mono font-bold">created_at</p>
	<p class="font-mono font-bold">updated_at</p>
	{#each data.sensors.data as sensor}
		<p>{sensor.id}</p>
		<p>{sensor.sensor_name}</p>
		<p>{sensor.created_at}</p>
		<p>{sensor.updated_at}</p>
	{/each}
</div>
