<script setup lang="ts">
import { ref, reactive } from 'vue'
import useLang from '../../hooks/useLang';
// import useDemo from '../../hooks/useDemo';


const buttonType = reactive({
  en: 'default',
  zh: 'default',
})
const { changeLang } = useLang()
// const {a} = useDemo()
</script>

<template>
  <el-button :type="buttonType.en" link @click="changeLang('en')">
    EN
  </el-button>
  <el-divider direction="vertical" />
  <el-button :type="buttonType.zh" link @click="changeLang('zh-CN')">
    中
  </el-button>
</template>

<style scoped></style>
