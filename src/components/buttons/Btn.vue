<template>
  <button
    class="text-white bg-blue-500 dark:bg-gray-800 py-2 px-4 rounded-[8px] font-bold hover:brightness-110"
   @onClick="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    label: { type: String, required: true, default: 'تسجيل الدخول' },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
