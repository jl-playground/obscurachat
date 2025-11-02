<template>
  <header
    class="sticky top-0 z-50 bg-off-white/75 dark:bg-charcoal/75 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
  >
    <UContainer class="flex items-center justify-between h-16">
      <AppLogo @click="headerClicked" />

      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex items-center space-x-6">
          <ULink
            :to="{ hash: '#how-it-works' }"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500"
          >
            {{ $t("nav.how") }}
          </ULink>
          <ULink
            :to="{ hash: '#philosophy' }"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500"
          >
            {{ $t("nav.philosophy") }}
          </ULink>
        </nav>

        <!-- <UButton
          :label="$t('nav.waitlist')"
          variant="solid"
          size="sm"
          class="font-bold bg-primary-600 cursor-pointer"
          @click="openSignUp"
        /> -->
        <UButton
          :label="$t('nav.patreon')"
          variant="solid"
          size="sm"
          class="font-bold bg-primary-600 cursor-pointer"
          @click="patreonNavigator"
        />
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from "#app";
const router = useRouter();
// No script logic needed for this component as of now
const patreonNavigator = () => {
  window.open("https://www.patreon.com/obscurachat", "_blank");
};
const openSignUp = () => {
  console.log("\x1b[33m%s\x1b[0m", "sign up clicked --------------------");
};
const headerClicked = async () => {
  router.push({ hash: "#landing" });
};
</script>
