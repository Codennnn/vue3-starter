<template>
  <div>
    <div class="table-search-area">
      <ElForm ref="formRef" :model="form">
        <ElFormItem label="产品名称">
          <ElInput v-model="form.name" />
        </ElFormItem>
      </ElForm>

      <div @click="handleResetForm">重置</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import { onMounted, reactive, ref } from 'vue'

import { getProducts } from '@/services/product'

const formRef = ref(null)

const form = reactive({
  name: '123',
})

onMounted(() => {
  getProducts()
  console.log(formRef.value.validate())
})

function handleResetForm() {
  formRef.value.resetFields()
  console.log(form)
}
</script>

<style scoped lang="scss">
.table-search-area {
  background: #fff;
}
</style>
