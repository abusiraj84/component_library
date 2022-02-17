<template>
  <div class="text-[14px] font-bold">
    <!-- Button Text -->
    <div
      v-if="type === 'text'"
      :class="icon && 'flex items-center gap-x-[12.9px]'"
      class="
        py-[0px]
        px-[0px]
        w-fit
        cursor-pointer
        text-base-color
        hover:text-active
        hover:border-primary
        border-b-[1.5px] border-inverted
      "
      @click="clickButton"
    >
      <span>
        <span> {{ name }}</span></span
      >
      <svg-icon v-if="icon" :icon-class="icon" class="text-base-color" />

      <!-- <img src="https://i.pravatar.cc" class="h-6 w-6" /> -->
    </div>

    <!-- Button Contained -->

    <div
      v-if="type === 'contained'"
      class="
        rounded-[12px]
        py-[6px]
        px-[11px]
        w-fit
        cursor-pointer
        bg-primary
        text-inverted
        hover:brightness-110
      "
      :class="icon && 'flex items-center gap-x-[12.9px]'"
      @click="clickButton"
    >
      <span> {{ name }}</span>
      <svg-icon v-if="icon" :icon-class="icon" class="text-inverted" />
    </div>

    <!-- Button outlined -->

    <div
      v-if="type === 'outlined'"
      :class="icon && 'flex items-center gap-x-[12.9px]'"
      class="
        rounded-[12px]
        py-[6px]
        px-[11px]
        w-fit
        cursor-pointer
        border-[2px] border-base
        text-base-color
        hover:bg-muted
      "
      @click="clickButton"
    >
      <span> {{ name }}</span>
      <svg-icon v-if="icon" :icon-class="icon" class="text-base-color" />
    </div>

    <!-- Button Icon -->

    <div
      v-if="type === 'icon'"
      :class="icon && 'flex items-center gap-x-[12.9px]'"
      class="
        rounded-[12px]
        py-[6px]
        px-[11px]
        w-fit
        cursor-pointer
        border-[2px] border-base
        text-base-color
        hover:bg-muted
      "
    >
      <span> {{ name }}</span>

      <svg-icon v-if="icon" :icon-class="icon" class="text-base-color" />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: "انضم للجلسة",
    },
    icon: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "contained",
    },
  },
  data() {
    return {};
  },
  head: {},
  computed: {
    contained() {
      return `bg-primary text-inverted`;
    },
    outlined() {
      return `border-[1.5px] border-base text-base-color`;
    },
  },
  watch: {},
  mounted() {},
  methods: {
    clickButton() {
      this.$emit("buttonClicked", `لقد قمت بالضغط على زر تسجيل الدخول`);
    },
  },
};
</script>
