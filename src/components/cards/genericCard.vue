<template>
  <RouterLink
    :to="'/cadastrar/' + redirect"
    class="block p-12 max-w-lg bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {{ title }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ description }}
    </p>
  </RouterLink>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    redirect: {
      type: String,
      required: true,
    },
  },

  components: {
    RouterLink,
  },
};
</script>
