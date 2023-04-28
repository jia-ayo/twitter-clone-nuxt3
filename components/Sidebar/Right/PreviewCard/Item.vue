<template>
  <div
    class="p-2 cursor-pointer border-b hover:bg-gray-100 dark:text-white dark:hover:bg-dim-300"
    :class="wrapperClasses"
  >
   <slot></slot>
  </div>
</template>

<script setup>
const { defaultTransition, twitterBorderColor } = useTailwindConfig();

const wrapperClasses = computed(
  () => `${defaultTransition} ${twitterBorderColor}`
);
</script>
