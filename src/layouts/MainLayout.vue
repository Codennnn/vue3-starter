<script setup lang="ts">
import MainHeader from './components/MainHeader/index.vue'
</script>

<template>
  <main id="main-layout">
    <aside></aside>

    <section>
      <header>
        <MainHeader />
      </header>

      <main>
        <router-view />
      </main>
    </section>
  </main>
</template>
