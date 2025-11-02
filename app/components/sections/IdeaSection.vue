<template>
  <section
    id="philosophy"
    class="py-24 md:py-32"
  >
    <UContainer class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div
          class="w-full h-80 rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700"
        >
          <span class="text-gray-400">(Abstract "silhouette" visual)</span>
        </div>
      </div>
      <div class="max-w-xl">
        <h2 class="text-3xl md:text-4xl font-bold text-primary-500">
          {{ $t("philosophy.title") }}
        </h2>
        <p class="mt-6 text-lg text-gray-600 dark:text-gray-300">
          {{ $t("philosophy.text") }}
        </p>
      </div>
    </UContainer>
  </section>
</template>
