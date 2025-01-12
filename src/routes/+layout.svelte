<script lang="ts">
	import { page } from '$app/stores';
	import NavLink from '$lib/NavLink.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="font-geistmono mx-2">
	<nav class="my-2 flex gap-2">
		<NavLink to="/" title="home" />
		<NavLink to="/twin" title="twin" />
		<NavLink to="/sensors" title="sensors" />
		<NavLink to="/readings" title="readings" />
	</nav>
	<p class="mb-2 text-2xl font-bold">{$page.url.pathname}</p>
	{@render children()}
</div>
