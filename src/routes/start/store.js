import { writable } from 'svelte/store';

export const count = writable(0);
export const path = writable(false);
export const balance = writable(false);
export const home = writable([]);
export const writableArray = writable([]);