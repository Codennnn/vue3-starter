<template>
  <main id="main-layout">
    <header class="main-layout__header" :class="{ opened: isSiderOpened }">
      <MainLayoutHeader />
    </header>

    <aside class="main-layout__aside" :class="{ opened: isSiderOpened }">
      <MainLayoutSider />
    </aside>

    <section class="main-layout__main" :class="{ opened: isSiderOpened }">
      <main class="main-content">
        <RouterView />
      </main>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import MainLayoutHeader from './components/MainLayoutHeader.vue'
import MainLayoutSider from './components/MainLayoutSider.vue'

const store = useStore()

const isSiderOpened = computed(() => store.state.isSiderOpened)
</script>

<style scoped lang="scss">
#main-layout {
  width: 100%;
  height: 100%;

  .main-layout__header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: calc(100% - 64px);
    height: $layout-header-height;
    transition: width 0.55s;

    &.opened {
      width: calc(100% - #{$layout-sider-width});
    }
  }

  .main-layout__aside {
    position: absolute;
    z-index: 10;
    width: 64px;
    height: 100%;
    transition: width 0.55s;

    &.opened {
      width: $layout-sider-width;
    }
  }

  .main-layout__main {
    height: 100%;
    padding-top: $layout-header-height;
    padding-left: 64px;
    transition: padding-left 0.55s;

    &.opened {
      padding-left: $layout-sider-width;
    }

    .main-content {
      height: 100%;
    }
  }
}
</style>
