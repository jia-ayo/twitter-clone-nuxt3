<template>
  <button
    class="flex justify-center text-white bg-blue-400 rounded-full hover:bg-blue-500 font-sm disabled:bg-blue-300 disabled:cursor-not-allowed"
    :disabled="props.disabled"
    :class="classes"
    @click="handleClick"
    :type="props.type"
  >
    <span :class="textFontSize">
      <slot />
    </span>
  </button>
</template>

<script setup>
const emits = defineEmits(["onClick"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "md",
  },
  liquid: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button"
  }
});
const textFontSize = computed(() => {
  switch (props.size) {
    case "lg":
      return "text-md";
    default:
      return "text-sm";
  }
});
const paddingClasses = computed(() => {
  switch (props.size) {
    case "sm":
      return "px-3 py-2";
    case "lg":
      return "px-4 py-3";
    default:
      return "px-2 py-2";
  }
});

const defaultwidth = computed(() => {
  switch (props.size) {
    default:
      return "w-min";
  }
});
const classes = computed(
  () =>
    `${paddingClasses.value} ${props.liquid ? "w-full" : defaultwidth.value}`
);

function handleClick(event) {
  emits("onClick", event);
}
</script>
