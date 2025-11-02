<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UColorModeButton />

      <UButton
        to="https://github.com/nuxt-ui-templates/starter"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UHeader>
</template>
<script setup lang="ts">
//* VUE
/* import {ref} from 'vue'; */

//* COMPOSABLES

//* GRAPHQL

//* VUELIDATE

//* CUSTOM

//* COMPONENTS

//* CONTROLLERS

//* LOAD INITIAL

//* VARIABLES

//* QUERYS

//* COMPUTED

//* METHODS

//* MOUNTED

//* CREATED
</script>
