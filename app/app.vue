<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import { useCookie } from "#app"; // Nuxt composable for cookies
import { onMounted } from "vue";

const title = "Obscura - Connection first. Appearance second.";
const description =
  "Obscura is the dating app for those who value chemistry over cliché. Start with a conversation, not just a photo.";

// SEO + head setup
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap",
    },
  ],
  bodyAttrs: {
    class: "bg-off-white dark:bg-charcoal text-charcoal dark:text-off-white",
  },
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "/og-image.png",
  twitterImage: "/og-image.png",
  twitterCard: "summary_large_image",
});

// --- language detection + cookie update ---
onMounted(() => {
  const userLang = navigator?.language || navigator?.userLanguage;
  const browserLanguage = userLang?.split("-")[0] || "en";

  const langCookie = useCookie("obscura_i18n_redirected", { path: "/" });

  langCookie.value = browserLanguage;

  document.documentElement.lang = browserLanguage;
});
</script>

<template>
  <div class="antialiased">
    <HeaderComponent class="cursor-pointer" />
    <NuxtPage />
    <FooterComponent />
  </div>
</template>
