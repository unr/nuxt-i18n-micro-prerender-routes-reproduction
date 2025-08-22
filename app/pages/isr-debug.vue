<template>
	<div class="p-8">
		<h1>ISR Test Page</h1>

		<div class="bg-gray-100 p-4 rounded mb-4 text-neutral-900">
			<h2>Server Data (Changes Every Request if NOT Cached)</h2>
			<p><strong>Server Time:</strong> {{ data.serverTime }}</p>
			<p><strong>Random ID:</strong> {{ data.randomId }}</p>
			<p><strong>Request Count:</strong> {{ data.requestCount }}</p>
		</div>

		<div class="bg-blue-100 p-4 rounded mb-4 text-neutral-900">
			<h2>Client Info</h2>
			<p><strong>Client Time:</strong> {{ clientTime }}</p>
			<p><strong>Page Loaded:</strong> {{ mounted ? 'Yes' : 'No' }}</p>
		</div>

		<button
			class="bg-blue-500 text-white px-4 py-2 rounded mr-2"
			@click="refresh()"
		>
			Refresh Data
		</button>
		<button
			class="bg-red-500 text-white px-4 py-2 rounded"
			@click="hardReload"
		>
			Hard Reload Page
		</button>
	</div>
</template>

<script setup>
const mounted = ref(false)
const clientTime = ref("")

const { data, refresh } = await useAsyncData("fetch-data", async () => {
	// This should return the SAME data if cached, DIFFERENT data if not cached
	const response = await $fetch("/api/test-cache")
	return response
}, {
	server: false, // Client-side fetching (since page is prerendered)
	lazy: true, // Don't block page render
	default: () => ({
		serverTime: "Loading...",
		randomId: "Loading...",
		requestCount: 0,
	}),
})

onMounted(() => {
	mounted.value = true
	clientTime.value = new Date().toISOString()
})

function hardReload() {
	window.location.reload()
}
</script>
