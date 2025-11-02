<template>
  <section id="landing" class="py-24 md:py-32">
    <UContainer class="text-center max-w-3xl">
      <h1
        class="text-4xl md:text-6xl font-bold tracking-tighter text-charcoal dark:text-primary-500"
      >
        {{ $t("hero.title") }}
      </h1>
      <p class="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
        {{ $t("hero.subtitle") }}
      </p>
      <!-- <UButton
        :label="$t('hero.cta')"
        color="primary"
        size="xl"
        class="mt-10 font-bold mr-4 cursor-pointer"
        @click="openSignUp"
      /> -->
      <UButton
        :label="$t('nav.patreon')"
        variant="solid"
        size="xl"
        @click="patreonNavigator"
        class="fmt-10 font-bold ml-4 cursor-pointer"
      />
    </UContainer>
  </section>
</template>

<script setup lang="ts">
// No script logic needed for this component as of now
const patreonNavigator = () => {
  window.open("https://www.patreon.com/obscurachat", "_blank");
};
const openSignUp = () => {
  console.log("\x1b[33m%s\x1b[0m", "sign up clicked --------------------");
};
</script>
