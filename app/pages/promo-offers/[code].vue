<template>
	<div>
		<h1 class="text-2xl font-bold mb-4">
			Promo Offer: {{ code }}
		</h1>
		<p class="mb-4">
			Neat, hope you get a good bonus when you deposit with: {{ code }}
		</p>
	</div>
</template>

<script setup lang="ts">
const { code } = useRoute().params

const title = computed(() => `Promo Offer: ${code}`)
useHead({
	title,
})
</script>
