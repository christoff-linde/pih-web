import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const day_res = await fetch(`http://localhost:8080/v1/sensor_reading/day/`);
	const daily_readings = await day_res.json();

	const hour_res = await fetch(`http://localhost:8080/v1/sensor_reading/hour/`);
	const hourly_readings = await hour_res.json();

	const min_res = await fetch(`http://localhost:8080/v1/sensor_reading/minute/`);
	const minute_readings = await min_res.json();

	return { daily_readings, hourly_readings, minute_readings };
};
