<template>
  <div class="main-layout-header">
    <div
      class="icon-toggle"
      :class="{ opened: store.state.isSiderOpened }"
      :title="store.state.isSiderOpened ? '收起菜单' : '展开菜单'"
      @click="handleToggleSider"
    >
      <IconMenuUnfold fill="#fff" size="18" />
    </div>

    <div class="user-nav">
      <div class="user-name">
        <span>欢迎，{{ username }}</span>
      </div>

      <ElDropdown>
        <div class="user-avatar">
          <img :src="avatar" alt="头像" />
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem>账号设置</ElDropdownItem>
            <ElDropdownItem>退出登录</ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuUnfold as IconMenuUnfold } from '@icon-park/vue-next'
import { ElDropdown, ElDropdownItem, ElDropdownMenu } from 'element-plus'
import { ref } from 'vue'
import { useStore } from 'vuex'

import DefaultAvatar from '@/assets/default-avatar.jpeg'

const store = useStore()

const username = ref('系统管理员')
const avatar = ref(DefaultAvatar)

function handleToggleSider() {
  if (store.state.isSiderOpened) {
    store.commit('closeSider')
  } else {
    store.commit('openSider')
  }
}
</script>

<style scoped lang="scss">
.main-layout-header {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  background: $color-primary;

  .icon-toggle {
    cursor: pointer;
    transition: transform 0.3s 0.2s;

    &.opened {
      transform: rotateY(180deg);
    }
  }

  .user-nav {
    display: flex;
    align-items: center;
    margin-left: auto;

    .user-name {
      margin-right: 16px;
      color: #fff;
      font-size: 13px;
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      overflow: hidden;
      background: #eee;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
