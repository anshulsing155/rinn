export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [];

export const dictionary = {
		"/": [~3],
		"/admin": [~4],
		"/api": [5],
		"/start": [~6,[2]],
		"/start/Executive": [8,[2]],
		"/start/Financial-Institution": [9,[2]],
		"/start/Master-plan": [11,[2]],
		"/start/Property-Location": [13,[2]],
		"/start/Property-Type": [14,[2]],
		"/start/ROI": [16,[2]],
		"/start/Referral": [15,[2]],
		"/start/Working-Location": [17,[2]],
		"/start/details": [7,[2]],
		"/start/home-loan": [10,[2]],
		"/start/properties-owned": [12,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';