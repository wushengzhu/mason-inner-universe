<template>
    <el-aside :class="'layout-aside-' + 'default' + ' ' + 'shrink'">
        <Logo />
        <!-- <MenuVerticalChildren /> -->
        <MenuVertical />
    </el-aside>
</template>

<script setup lang="ts">
import Logo from '@/views/Layout/components/navBar/logo.vue'
import MenuVertical from '@/views/Layout/components/menus/MenuVertical.vue'
// import MenuVerticalChildren from '@/views/Layout/components/menus/MenuVerticalChildren.vue'

const menuWidth = '200px'
</script>

<style scoped lang="scss">
.layout-aside-Default {
    background: var(--ba-bg-color-overlay);
    margin: 16px 0 16px 16px;
    height: calc(100vh - 32px);
    box-shadow: var(--el-box-shadow-light);
    border-radius: var(--el-border-radius-base);
    overflow: hidden;
    transition: width 0.3s ease;
    width: v-bind(menuWidth);
}
.layout-aside-Classic,
.layout-aside-Double {
    background: var(--ba-bg-color-overlay);
    margin: 0;
    height: 100vh;
    overflow: hidden;
    transition: width 0.3s ease;
    width: v-bind(menuWidth);
}
.shrink {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
}
</style>
