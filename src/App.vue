<template>
  <el-config-provider :locale="messages[locale]">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import useI18n from './lang';
import { RouterView } from 'vue-router'
const { locale, messages } = useI18n()
</script>
