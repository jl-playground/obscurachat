<template>
  <footer class="py-12 bg-charcoal text-off-white">
    <UContainer class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div class="mb-4 md:mb-0">
        <p class="text-sm text-gray-400">
          {{ $t('footer.copyright') }}
        </p>
      </div>
      <div>
        <ULink class="text-sm text-gray-400 hover:text-white">{{ $t('footer.links') }}</ULink>
      </div>
    </UContainer>
  </footer>
</template>
