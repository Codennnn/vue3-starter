<template>
  <ElMenu
    default-active="1-4-1"
    class="main-sider-menu"
    :collapse="!store.state.isSiderOpened"
    @select="handleSelectMenu"
  >
    <ElMenuItem index="/">
      <i class="el-icon-menu"></i>
      <template #title>工作台</template>
    </ElMenuItem>

    <ElMenuItem index="/product">
      <i class="el-icon-menu"></i>
      <template #title>产品中心</template>
    </ElMenuItem>

    <ElSubMenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>保单管理</span>
      </template>
      <ElMenuItem index="/car-policy">
        <i class="el-icon-menu"></i>
        <template #title>车险保单列表</template>
      </ElMenuItem>
    </ElSubMenu>
  </ElMenu>
</template>

<script lang="ts" setup>
import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const router = useRouter()

function handleSelectMenu(index: string) {
  router.push(index)
}
</script>

<style scoped lang="scss">
.main-sider-menu {
  border: none;
}
</style>
