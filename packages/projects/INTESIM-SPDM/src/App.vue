<template>
    <a-config-provider :locale="localeType">
        <router-view></router-view>
    </a-config-provider>
</template>

<script setup>
import zh_CN from "ant-design-vue/es/locale/zh_CN";
import en_US from "ant-design-vue/es/locale/en_US";
import { ref } from "vue";
const localeType = ref(en_US);

</script>