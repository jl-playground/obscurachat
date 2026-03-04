<template>
  <section
    id="how-it-works"
    class="py-20 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
  >
    <UContainer>
      <!-- Section header -->
      <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20">
        <h2 class="text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mb-4">
          {{ $t("how_it_works.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Experience a fresh approach to online dating
        </p>
      </div>

      <!-- Feature grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <!-- Step 1 -->
        <div class="group">
          <div class="relative h-full">
            <!-- Card background with hover effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <!-- Content -->
            <UCard class="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <!-- Step number badge -->
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full flex items-center justify-center text-lg">
                1
              </div>

              <template #header>
                <h3 class="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 pt-4">
                  {{ $t("how_it_works.step1_title") }}
                </h3>
              </template>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t("how_it_works.step1_desc") }}
              </p>
            </UCard>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="group">
          <div class="relative h-full">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <UCard class="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full flex items-center justify-center text-lg">
                2
              </div>

              <template #header>
                <h3 class="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 pt-4">
                  {{ $t("how_it_works.step2_title") }}
                </h3>
              </template>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t("how_it_works.step2_desc") }}
              </p>
            </UCard>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="group">
          <div class="relative h-full">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <UCard class="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full flex items-center justify-center text-lg">
                3
              </div>

              <template #header>
                <h3 class="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 pt-4">
                  {{ $t("how_it_works.step3_title") }}
                </h3>
              </template>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t("how_it_works.step3_desc") }}
              </p>
            </UCard>
          </div>
        </div>

        <!-- Step 4 -->
        <div class="group">
          <div class="relative h-full">
            <div class="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-gray-800 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <UCard class="relative bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div class="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-full flex items-center justify-center text-lg">
                4
              </div>

              <template #header>
                <h3 class="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 pt-4">
                  {{ $t("how_it_works.step4_title") }}
                </h3>
              </template>
              <p class="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {{ $t("how_it_works.step4_desc") }}
              </p>
            </UCard>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
