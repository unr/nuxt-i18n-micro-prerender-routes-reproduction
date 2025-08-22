<template>
	<div>
		<p v-if="$t">
			Translation Examples: {{ $t("word.casino") }}, {{ $t("word.wager") }}, {{ $t("word.sportsbook") }}
		</p>
		<p v-else>
			nuxt-i18n-micro disabled
		</p>

		<div class="flex gap-4 mt-8">
			Should be prerendered:
			<UButton
				to="/promo-offers/HELLOWORLD"
				label="Bonus: HELLOWORLD"
			/>
			<UButton
				to="/promo-offers/EXAMPLETWO"
				label="Bonus: EXAMPLETWO"
			/>
		</div>
	</div>
</template>
