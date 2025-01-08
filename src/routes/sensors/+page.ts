import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`http://localhost:8080/v1/sensors/`);
	const sensors = await res.json();

	return { sensors };
};
