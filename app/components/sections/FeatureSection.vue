<template>
  <section id="how-it-works" class="py-24">
    <UContainer>
      <div class="text-center max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold dark:text-primary-500">
          {{ $t("how_it_works.title") }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        <UCard>
          <template #header>
            <h3 class="text-lg font-bold text-primary-500">
              {{ $t("how_it_works.step1_title") }}
            </h3>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ $t("how_it_works.step1_desc") }}
          </p>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-bold text-primary-500">
              {{ $t("how_it_works.step2_title") }}
            </h3>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ $t("how_it_works.step2_desc") }}
          </p>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-bold text-primary-500">
              {{ $t("how_it_works.step3_title") }}
            </h3>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ $t("how_it_works.step3_desc") }}
          </p>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-bold text-primary-500">
              {{ $t("how_it_works.step4_title") }}
            </h3>
          </template>
          <p class="text-sm text-gray-600 dark:text-gray-300">
            {{ $t("how_it_works.step4_desc") }}
          </p>
        </UCard>
      </div>
    </UContainer>
  </section>
</template>
