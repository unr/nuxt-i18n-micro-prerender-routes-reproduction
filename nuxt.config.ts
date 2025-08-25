import locales from "./app/utils/locales"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		"@nuxt/eslint",
		"@nuxt/scripts",
		"@nuxt/ui",
		"@vueuse/nuxt",
		// Comment this out, and it will correctly prerender routes
		// Enable this, and it will incorrectly prerender additional routes
		"nuxt-i18n-micro",
	],

	imports: {
		dirs: [
			"~/composables/**",
		],
	},
	devtools: { enabled: true },

	css: ["~/assets/css/main.css"],

	routeRules: {
		// Homepage - fully static, prerendered at build time
		"/": {
			prerender: true,
			headers: {
				"cache-control": "s-maxage=31536000", // Cache for 1 year
			},
		},

		// Weird issue with nuxt-i18n-micro, where it seems to crawls extra routes based on lang
		// /on/home gets crawled as /on/home, /on/on/home, /on/es/home, /on/pt/home
		// Commenting these out, reintroduces the issue.
		// "/on/on/**": { ssr: false, prerender: false },
		// "/on/es/**": { ssr: false, prerender: false },
		// "/on/pt/**": { ssr: false, prerender: false },
		// "/pt/on/**": { ssr: false, prerender: false },
		// "/pt/es/**": { ssr: false, prerender: false },
		// "/pt/pt/**": { ssr: false, prerender: false },
		// "/es/on/**": { ssr: false, prerender: false },
		// "/es/es/**": { ssr: false, prerender: false },
		// "/es/pt/**": { ssr: false, prerender: false },

		// Static marketing page with components test
		"/marketing-page": {
			prerender: true,
			headers: {
				"cache-control": "s-maxage=31536000", // Cache for 1 year
			},
		},

		// Static promo pages - prerendered at build time
		"/promo-offers/HELLOWORLD": {
			prerender: true,
			headers: {
				"cache-control": "s-maxage=300, stale-while-revalidate=3600", // 5min cache, 1hr stale
			},
		},
		"/promo-offers/EXAMPLETWO": {
			prerender: true,
			headers: {
				"cache-control": "s-maxage=300, stale-while-revalidate=3600", // 5min cache, 1hr stale
			},
		},

		// Dynamic promo pages - SSR for real-time data
		"/promo-offers/**": {
			ssr: true,
			prerender: false,
			headers: {
				"cache-control": "s-maxage=300, stale-while-revalidate=3600", // 5min cache, 1hr stale
			},
		},
	},

	// Enable experimental features for better ISR support
	experimental: {
		payloadExtraction: false,
	},
	compatibilityDate: "2025-07-15",

	nitro: {
		preset: "cloudflare-pages",
		prerender: {
			crawlLinks: false, // We'll control prerendering via routeRules
		},
	},

	hooks: {
		"prerender:routes": (ctx) => {
			console.log("[PRERENDER:ROUTES] Context:", ctx)
		},
	},

	// https://eslint.nuxt.com/packages/module#eslint-stylistic
	eslint: {
		config: {
			// https://eslint.style/guide/config-presets#configuration-factory
			stylistic: {
				indent: "tab",
				quotes: "double",
				braceStyle: "1tbs",
				semi: false,
			},
		},
	},

	i18n: {
		locales,
		defaultLocale: "en",
		translationDir: "app/i18n/locales",
		meta: true,
		strategy: "prefix_except_default",
	},
})
