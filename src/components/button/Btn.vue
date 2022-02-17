<template>
  <div class="text-[14px] font-bold">
    <!-- Button Text -->
    <div
      v-if="type === 'text'"
      class="py-[0px] px-[0px] w-fit border-b-[1.5px]"
      :class="[
        icon && 'flex items-center gap-x-[12px]',
        disabled
          ? 'text-disabled cursor-not-allowed'
          : 'text-base-color cursor-pointer border-inverted hover:border-primary hover:text-active',
      ]"
      @click="clickButton"
    >
      <span>
        <span> {{ name }}</span></span
      >
      <i class="material-icons text-[18px]">{{ icon }}</i>

      <!-- <img src="https://i.pravatar.cc" class="h-6 w-6" /> -->
    </div>

    <!-- Button Contained -->

    <div
      v-if="type === 'contained'"
      class="rounded-[12px] py-[6px] px-[11px] w-fit"
      :class="[
        icon && 'flex items-center gap-x-[12px]',
        disabled
          ? 'cursor-not-allowed  bg-disabled  text-disabled'
          : ' cursor-pointer bg-primary text-inverted hover:brightness-110',
        bg === 'secondary' && 'bg-secondary',
      ]"
      @click="clickButton"
    >
      <span> {{ name }}</span>
      <i class="material-icons text-[18px]">{{ icon }}</i>
    </div>

    <!-- Button outlined -->

    <div
      v-if="type === 'outlined'"
      class="
        rounded-[12px]
        py-[4px]
        px-[11px]
        w-fit
        cursor-pointer
        border-[2px]
      "
      :class="[
        icon && 'flex items-center gap-x-[12px]',
        disabled
          ? 'cursor-not-allowed  text-disabled'
          : ' border-base text-base-color hover:bg-muted',
      ]"
      @click="clickButton"
    >
      <span> {{ name }}</span>
      <i class="material-icons text-[18px]">{{ icon }}</i>
    </div>

    <!-- Button Icon -->

    <div
      v-if="type === 'icon'"
      :class="icon && 'flex items-center gap-x-[12px]'"
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

      <i class="material-icons text-[18px]">{{ icon }}</i>
    </div>
  </div>
</template>

<script>
import Icon from "../utilities/icon/Icon.vue";
export default {
  components: { Icon },
  props: {
    name: {
      type: String,
      default: "لا يوجد إسم للزر",
    },
    icon: {
      type: String,
      default: "",
    },

    type: {
      type: String,
      default: "contained",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: "primary",
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
