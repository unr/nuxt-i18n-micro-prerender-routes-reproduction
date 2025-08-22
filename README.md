# Nuxt i18n micro prerender routes reproduction

When `nuxt-i18n-micro` is enabled, it ignores the predefined `routeRules` in `nuxt.config.ts` and instead crawls all routes for each language.

When `nuxt-i18n-micro` is disabled, it correctly prerenders the routes defined in `routeRules`.



## Steps to reproduce

`nuxt-i18n-micro` enabled, prerendering additional routes.

1. run `pnpm build`
2. See log for `[PRERENDER:ROUTES]`
3. See `Initializing prerenderer, Prerendering routes` log
4. Notice they are including `promo-offers/:code()` now in the prerender list

`nuxt-i18n-micro` disabled, prerender only specified routes.

1. Comment out the `nuxt-i18n-micro` module in `nuxt.config.ts`
2. run `pnpm build`
3. See log for `[PRERENDER:ROUTES]`
4. See `Initializing prerenderer, Prerendering routes` log
5. There are only the routes defined in `routeRules`


## Expected Behavior

When enabling `nuxt-i18n-micro`, it should respect the `routeRules` defined in `nuxt.config.ts`.
