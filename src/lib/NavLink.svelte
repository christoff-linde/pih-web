<script lang="ts">
	interface Props {
		title: string;
		to: string;
	}
	let { title, to }: Props = $props();
</script>

<a class="rounded-md bg-gray-200 p-2 transition-all hover:bg-gray-300 hover:font-semibold" href={to}
	>{title}</a
>
