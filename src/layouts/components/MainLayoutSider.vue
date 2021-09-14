<template>
  <div class="main-layout-sider">
    <div class="banner">
      <img
        class="banner-logo"
        alt="Logo"
        src="@/assets/logo.png"
        :class="{ opened: isSiderOpened }"
      />

      <span class="banner-text" :class="{ opened: isSiderOpened }">
        管理系统
      </span>
    </div>

    <MainLayoutSiderMenu />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import MainLayoutSiderMenu from './MainLayoutSiderMenu.vue'

const store = useStore()

const isSiderOpened = computed(() => store.state.isSiderOpened)
</script>

<style scoped lang="scss">
.main-layout-sider {
  height: 100%;
  background: #fff;

  .banner {
    position: relative;
    height: $layout-header-height;
    color: #fff;
    background: $color-primary;
    cursor: pointer;

    &-logo {
      position: absolute;
      top: 50%;
      left: 5px;
      width: 48px;
      height: 48px;
      transform: translateY(-50%);
      transition: left 0.5s;

      &.opened {
        left: 15px;
      }
    }

    &-text {
      position: absolute;
      top: 50%;
      left: 15px + 48px + 5px;
      max-width: 0;
      overflow: hidden;
      white-space: nowrap;
      transform: translateY(-50%);
      opacity: 0;
      transition: max-width 0.5s, opacity 0.5s;

      &.opened {
        max-width: 200px;
        opacity: 1;
      }
    }
  }
}
</style>
