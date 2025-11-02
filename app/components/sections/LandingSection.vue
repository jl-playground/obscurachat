<template>
  <section class="py-24 md:py-32">
    <UContainer class="text-center max-w-3xl">
      <h1
        class="text-4xl md:text-6xl font-bold tracking-tighter text-charcoal dark:text-white"
      >
        {{ $t("hero.title") }}
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
        {{ $t("hero.subtitle") }}
      </p>
      <UButton
        :label="$t('hero.cta')"
        color="primary"
        size="xl"
        class="mt-10 font-bold"
      />
    </UContainer>
  </section>
</template>
