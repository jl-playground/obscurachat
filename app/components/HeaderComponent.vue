<template>
  <header class="sticky top-0 z-50 bg-off-white/75 dark:bg-charcoal/75 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex items-center justify-between h-16">
      <AppLogo />

      <div class="flex items-center space-x-4">
        <nav class="hidden md:flex items-center space-x-6">
          <ULink
            :to="{ hash: '#how-it-works' }"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500"
          >
            {{ $t('nav.how') }}
          </ULink>
          <ULink
            :to="{ hash: '#philosophy' }"
            class="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary-500"
          >
            {{ $t('nav.philosophy') }}
          </ULink>
        </nav>

        <UButton
          :label="$t('nav.waitlist')"
          color="primary"
          variant="solid"
          size="sm"
          class="font-bold"
        />
      </div>
    </UContainer>
  </header>
</template>
