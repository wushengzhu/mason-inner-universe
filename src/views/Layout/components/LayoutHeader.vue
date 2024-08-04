<template>
    <el-header class="layout-header">
        <component :is="DefaultNavBar"></component>
    </el-header>
</template>
<script setup lang="ts">
import DefaultNavBar from '@/views/Layout/components/navBar/DefaultNav.vue'

</script>

<style scoped lang="scss">
.layout-header {
    height: auto;
    padding: 0;
}
</style>
