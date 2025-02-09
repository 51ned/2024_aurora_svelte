/*
	See https://kit.svelte.dev/docs/types#app
	for information about these interfaces
**/


declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			gtmId: string | null,
			scheme: string | null,
			vw: string | null
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Window {
		dataLayer: any[];
	}
}


export {}
