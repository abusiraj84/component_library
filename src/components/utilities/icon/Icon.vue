<template>
  <i class="material-icons-round">{{ icon }}</i>
</template>

<script>
export default {
  name: "icon",
  props: {
    icon: { type: String, required: true },
  },
};
</script>
