<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
  >
    <UContainer class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <AppLogo 
          @click="headerClicked"
          class="cursor-pointer hover:opacity-80 transition-opacity duration-200"
        />
      </div>

      <!-- Navigation -->
      <div class="flex items-center space-x-1 md:space-x-8 ml-auto">
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            :to="{ hash: '#how-it-works' }"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
          >
            {{ $t("nav.how") }}
          </UButton>
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            :to="{ hash: '#philosophy' }"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
          >
            {{ $t("nav.philosophy") }}
          </UButton>
        </nav>

        <!-- CTA Button -->
        <UButton
          :label="$t('nav.patreon')"
          variant="solid"
          size="md"
          @click="patreonNavigator"
          class="font-bold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white cursor-pointer transition-all duration-300 whitespace-nowrap"
        />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "#app";
const router = useRouter();

const patreonNavigator = () => {
  window.open("https://www.patreon.com/obscurachat", "_blank");
};

const headerClicked = async () => {
  router.push({ hash: "#landing" });
};
</script>
