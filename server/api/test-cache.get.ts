let requestCount = 0

export default defineEventHandler(async (_event) => {
	requestCount++

	console.log(`API called - Request #${requestCount} at ${new Date().toISOString()}`)

	return {
		serverTime: new Date().toISOString(),
		randomId: Math.random().toString(36).substring(7),
		requestCount,
		message: `If this data is the same across page reloads, caching is working!`,
	}
})
