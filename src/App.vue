
<template>
 <div class="h-screen flex justify-center items-center">
  <Btn label="تسجيل الدخول" @click="onClick" />
 </div>
</template>
<script >
import Btn from "./components/buttons/Btn.vue";
export default {
    name: "btn",
    props: {
        label: { type: String, required: true, default: "تسجيل الدخول" },
    },
    methods: {
        onClick() {
           console.log(this);
        },
    },
    components: { Btn }
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

</script>

<style>

</style>
