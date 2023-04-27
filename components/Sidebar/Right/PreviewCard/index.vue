<template>
  <div
    class="m-2 overflow-hidden border bg-gray-50 rounded-xl dark:bg-dim-700"
    :class="twitterBorderColor"
  >
    <h1
      class="p-3 text-lg font-extrabold text-grey-900 border-b dark:text-white"
      :class="twitterBorderColor"
    >
      {{ props.title }}
    </h1>
    <slot> </slot>
    <div
      class="p-3 text-sm text-blue-400 coursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300"
      :class="defaultTransition"
    >
      show more
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor, defaultTransition } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
