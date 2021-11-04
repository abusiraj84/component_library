<template>
  <div>
    <button
      @click="$emit('click')"
      class="text-white bg-blue-500 dark:bg-gray-800 py-2 px-4 rounded-full"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    label: { type: String, required: true, default: 'Click Me' },
  },
};
</script>
