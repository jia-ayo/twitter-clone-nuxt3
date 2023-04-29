<template>
  <div class=" border-x" :class="twitterBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
      <h2 class="text-lg font-bold text-grey-800 dark:text-grey-100">{{ props.title }}</h2>
    </div>
    <div v-if="props.loading" class="flex items-center justify-center p-4 border-b" :class="twitterBorderColor"> 
      <UiSpinner/>
    </div>
    <div v-else>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
const { twitterBorderColor } = useTailwindConfig();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
});
</script>
