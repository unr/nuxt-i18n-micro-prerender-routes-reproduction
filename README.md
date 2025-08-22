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





## Example Outputs

### Disabled `nuxt-i18n-micro`

```bash
[PRERENDER:ROUTES] Context: { routes:                                                                                                                                                                                                                                                                                                                      12:16:35 PM
   Set(4) { '/', '/marketing-page', '/promo-offers/HELLOWORLD', '/promo-offers/EXAMPLETWO' } }
ℹ Initializing prerenderer                                                                                                                                                                                                                                                                                                                          nitro 12:16:35 PM
ℹ Prerendering 4 routes                                                                                                                                                                                                                                                                                                                             nitro 12:16:36 PM
  ├─ / (353ms)                                                                                                                                                                                                                                                                                                                                       nitro 12:16:36 PM
  ├─ /promo-offers/EXAMPLETWO (353ms)                                                                                                                                                                                                                                                                                                                nitro 12:16:36 PM
  ├─ /promo-offers/HELLOWORLD (352ms)                                                                                                                                                                                                                                                                                                                nitro 12:16:36 PM
  ├─ /marketing-page (361ms)                                                                                                                                                                                                                                                                                                                         nitro 12:16:36 PM
ℹ Prerendered 4 routes in 1.223 seconds
```

### Enabled `nuxt-i18n-micro`

```bash
[PRERENDER:ROUTES] Context: { routes:                                                                                                                                                                                                                                                                                                                      12:17:20 PM
   Set(16) {
     '/',
     '/marketing-page',
     '/promo-offers/HELLOWORLD',
     '/promo-offers/EXAMPLETWO',
     '/es',
     '/pt',
     '/on',
     '/es/marketing-page',
     '/pt/marketing-page',
     '/on/marketing-page',
     '/es/promo-offers/HELLOWORLD',
     '/pt/promo-offers/HELLOWORLD',
     '/on/promo-offers/HELLOWORLD',
     '/es/promo-offers/EXAMPLETWO',
     '/pt/promo-offers/EXAMPLETWO',
     '/on/promo-offers/EXAMPLETWO' } }
ℹ Initializing prerenderer                                                                                                                                                                                                                                                                                                                          nitro 12:17:20 PM
ℹ Prerendering 88 routes                                                                                                                                                                                                                                                                                                                            nitro 12:17:21 PM
  ├─ /_locales/general/pt/data.json (42ms)                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /_locales/isr-debug/on/data.json (42ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  ├─ /_locales/promo-offers-code/es/data.json (44ms)                                                                                                                                                                                                                                                                                                 nitro 12:17:21 PM
  ├─ /_locales/promo-offers-static-code/pt/data.json (42ms)                                                                                                                                                                                                                                                                                          nitro 12:17:21 PM
  ├─ /_locales/index/on/data.json (41ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /_locales/marketing-page/on/data.json (42ms)                                                                                                                                                                                                                                                                                                    nitro 12:17:21 PM
  ├─ /_locales/general/on/data.json (42ms)                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /_locales/promo-offers-code/on/data.json (42ms)                                                                                                                                                                                                                                                                                                 nitro 12:17:21 PM
  ├─ /_locales/promo-offers-static-code/on/data.json (42ms)                                                                                                                                                                                                                                                                                          nitro 12:17:21 PM
  ├─ /_locales/index/en/data.json (40ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /_locales/promo-offers-code/en/data.json (41ms)                                                                                                                                                                                                                                                                                                 nitro 12:17:21 PM
  ├─ /_locales/marketing-page/es/data.json (41ms)                                                                                                                                                                                                                                                                                                    nitro 12:17:21 PM
  ├─ /_locales/index/es/data.json (41ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /_locales/general/en/data.json (41ms)                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /_locales/marketing-page/en/data.json (42ms)                                                                                                                                                                                                                                                                                                    nitro 12:17:21 PM
  ├─ /_locales/isr-debug/en/data.json (41ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  ├─ /_locales/isr-debug/es/data.json (41ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  ├─ /_locales/general/es/data.json (43ms)                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /_locales/index/pt/data.json (42ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /_locales/isr-debug/pt/data.json (42ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  ├─ /_locales/promo-offers-static-code/es/data.json (42ms)                                                                                                                                                                                                                                                                                          nitro 12:17:21 PM
  ├─ /_locales/promo-offers-code/pt/data.json (41ms)                                                                                                                                                                                                                                                                                                 nitro 12:17:21 PM
  ├─ /_locales/promo-offers-static-code/en/data.json (43ms)                                                                                                                                                                                                                                                                                          nitro 12:17:21 PM
  ├─ /_locales/marketing-page/pt/data.json (41ms)                                                                                                                                                                                                                                                                                                    nitro 12:17:21 PM
  ├─ /isr-debug (420ms)                                                                                                                                                                                                                                                                                                                              nitro 12:17:21 PM
  ├─ /on (478ms)                                                                                                                                                                                                                                                                                                                                     nitro 12:17:21 PM
  ├─ /es (478ms)                                                                                                                                                                                                                                                                                                                                     nitro 12:17:21 PM
  ├─ /pt (478ms)                                                                                                                                                                                                                                                                                                                                     nitro 12:17:21 PM
  ├─ / (478ms)                                                                                                                                                                                                                                                                                                                                       nitro 12:17:21 PM
  ├─ /pt/promo-offers/HELLOWORLD (477ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /promo-offers/HELLOWORLD (483ms)                                                                                                                                                                                                                                                                                                                nitro 12:17:21 PM
  ├─ /es/isr-debug (418ms)                                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /es/promo-offers/HELLOWORLD (477ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /on/isr-debug (417ms)                                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /on/promo-offers/HELLOWORLD (477ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /pt/isr-debug (418ms)                                                                                                                                                                                                                                                                                                                           nitro 12:17:21 PM
  ├─ /promo-offers/EXAMPLETWO (483ms)                                                                                                                                                                                                                                                                                                                nitro 12:17:21 PM
  ├─ /on/promo-offers/EXAMPLETWO (482ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /pt/promo-offers/EXAMPLETWO (482ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /es/promo-offers/EXAMPLETWO (482ms)                                                                                                                                                                                                                                                                                                             nitro 12:17:21 PM
  ├─ /marketing-page (496ms)                                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  ├─ /on/marketing-page (496ms)                                                                                                                                                                                                                                                                                                                      nitro 12:17:21 PM
  ├─ /pt/marketing-page (497ms)                                                                                                                                                                                                                                                                                                                      nitro 12:17:21 PM
  ├─ /es/marketing-page (497ms)                                                                                                                                                                                                                                                                                                                      nitro 12:17:21 PM
  ├─ /es/promo-offers-static/:code() (446ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /pt/promo-offers-static/:code() (438ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /promo-offers-static/:code() (449ms)                                                                                                                                                                                                                                                                                                            nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /on/promo-offers-static/:code() (438ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
                                                                                                                                                                                                                                                                                                                                                     nitro 12:17:21 PM
Errors prerendering:
  ├─ /es/promo-offers-static/:code() (446ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /pt/promo-offers-static/:code() (438ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /promo-offers-static/:code() (449ms)                                                                                                                                                                                                                                                                                                            nitro 12:17:21 PM
  │ └── [500] Server Error
  ├─ /on/promo-offers-static/:code() (438ms)                                                                                                                                                                                                                                                                                                         nitro 12:17:21 PM
  │ └── [500] Server Error
                                                                                                                                                                                                                                                                                                                                                     nitro 12:17:21 PM

 ERROR  Exiting due to prerender errors.                                                                                                                                                                                                                                                                                                                   12:17:21 PM

    at prerender (node_modules/.pnpm/nitropack@2.12.4_@netlify+blobs@9.1.2/node_modules/nitropack/dist/core/index.mjs:2206:11)
    at async node_modules/.pnpm/nuxt@4.0.3_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.3.0_@vue+compiler-_0dea5f6ff2070fc370959ccee4bc4b8a/node_modules/nuxt/dist/index.mjs:4493:5
    at async build (node_modules/.pnpm/nuxt@4.0.3_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.3.0_@vue+compiler-_0dea5f6ff2070fc370959ccee4bc4b8a/node_modules/nuxt/dist/index.mjs:7147:3)
    at async Object.run (node_modules/.pnpm/@nuxt+cli@3.28.0_magicast@0.3.5/node_modules/@nuxt/cli/dist/chunks/build.mjs:76:5)
    at async runCommand (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:316:16)
    at async runCommand (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:307:11)
    at async runMain (node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs:445:7) 



 ERROR  Exiting due to prerender errors.
```
