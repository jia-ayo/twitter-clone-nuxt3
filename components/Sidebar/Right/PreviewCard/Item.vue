<template>
  <div
    class="p-3 coursor-pointer border-b  hover:bg-grey-100 dark:text-white dark:hover:bg-dim-350"
    :class="wrapperClasses"
  >
    Item
  </div>
</template>

<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig();

const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
);
</script>
