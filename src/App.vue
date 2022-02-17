<template>
  <div class="h-screen flex justify-center items-center gap-x-5" dir="rtl">
    <Btn name="تسجيل الدخول" type="contained" @click="onClick"></Btn>
    <Btn name="عضو جديد" type="outlined" @click="onClick"></Btn>
    <Btn name="تجاهل" type="text" @click="onClick"></Btn>
  </div>
</template>
<script>
import Btn from "./components/button/Btn.vue";
export default {
  methods: {
    onClick() {
      console.log(this);
    },
  },
  components: { Btn },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<style></style>
