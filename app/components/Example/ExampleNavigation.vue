<template>
	<UNavigationMenu
		:items="items"
		class="w-full justify-center"
	/>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const items = ref<NavigationMenuItem[]>([
	{
		label: "Home",
		icon: "i-lucide-book-open",
		to: "/",
	},
	{
		label: "Static",
		icon: "i-lucide-database",
		to: "/marketing-page",
		children: [
			{
				label: "Marketing Page",
				icon: "i-lucide-file-text",
				description: "Simple page with some components for testing when static.",
				to: "/marketing-page",
			},
			{
				label: "Static Promo Offers",
				icon: "i-lucide-file-text",
				description: "Pre rendered page displaying a list of promos.",
				to: "/fetch-data-static",
			},
		],
	},
	{
		label: "Full SSR",
		icon: "i-lucide-box",
		to: "/promo-offers/LEGACYCASINODEPOSITCAD",
		children: [
			{
				label: "Fetch Data SSR",
				icon: "i-lucide-file-text",
				description: "Full SSR list of promo offers",
				to: "/fetch-data-ssr",
			},
			{
				label: "SSR Promo Code",
				icon: "i-lucide-file-text",
				description: "Random staging-1 promo code, available via SSR.",
				to: "/promo-offers/LEGACYCASINODEPOSITCAD",
			},
		],
	},
	{
		label: "ISR Data Fetching",
		icon: "i-lucide-box",
		to: "/fetch-data",
		children: [
			{
				label: "Fetch Data",
				icon: "i-lucide-file-text",
				description: "Data fetching with incremental static regeneration. Might fail on CF Pages.",
				to: "/fetch-data",
			},
		],
	},
])
</script>
