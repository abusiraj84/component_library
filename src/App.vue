<template>
  <div
    class="h-screen flex flex-col gap-y-5 justify-center items-center"
    dir="rtl"
  >
    <!-- Primary -->
    <div class="flex gap-x-5 items-start">
      <Btn
        name="تسجيل الدخول"
        type="contained"
        icon="person"
        @click="onClick"
      ></Btn>
      <Btn
        name="تسجيل الدخول"
        type="contained"
        disabled="true"
        icon="home"
        @click="onClick"
      ></Btn>
      <Btn name="عضو جديد" type="outlined" @click="onClick"></Btn>
      <Btn
        name="عضو جديد"
        type="outlined"
        disabled="true"
        @click="onClick"
      ></Btn>
      <Btn name="تجاهل" type="text" @click="onClick"></Btn>
      <Btn name="تجاهل" type="text" disabled="true" @click="onClick"></Btn>
    </div>
    <!-- Secondary -->
    <div class="flex gap-x-5 items-start">
      <Btn
        name="تسجيل الدخول"
        type="contained"
        icon="lock"
        bg="secondary"
        @click="onClick"
      ></Btn>
      <Btn
        name="عضو جديد"
        type="contained"
        disabled="true"
        icon="key"
        @click="onClick"
      ></Btn>
      <Btn name="عضو جديد" type="outlined" @click="onClick"></Btn>
      <Btn
        name="عضو جديد"
        type="outlined"
        disabled="true"
        @click="onClick"
      ></Btn>
      <Btn name="تجاهل" type="text" @click="onClick"></Btn>
      <Btn name="تجاهل" type="text" disabled="true" @click="onClick"></Btn>
    </div>
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
