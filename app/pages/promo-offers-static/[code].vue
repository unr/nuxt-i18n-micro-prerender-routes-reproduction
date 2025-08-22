<template>
	<div>
		<h1 class="text-2xl font-bold mb-4">Promo Offer: {{ code }}</h1>
		<p class="mb-4">This is a dynamic route for a promo offer, loaded from /app/promo-offers/{{ code }}. This one is _not_ prerendered, and instead should load like a regular spa page.</p>
		<pre v-if="promo">{{ promo }}</pre>
	</div>
</template>

<script setup lang="ts">
const { code } = useRoute().params
const { $api } = useNuxtApp()
const { data: promo } = await $api.promos.getPromo(code as string)

const title = computed(() => `Promo Offer: ${code}`)
useHead({
	title,
})
</script>