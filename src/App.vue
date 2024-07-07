<template>
  <el-config-provider :locale="messages[locale]">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import {i18nConfig} from './lang';
import { RouterView } from 'vue-router'
const { locale, messages } = i18nConfig
</script>
