<template>
  <div>
    <ElTable :data="tableData" border>
      <ElTableColumn fixed prop="date" label="日期"> </ElTableColumn>
      <ElTableColumn prop="name" label="姓名" width="120"> </ElTableColumn>
      <ElTableColumn prop="province" label="省份" width="120"> </ElTableColumn>
      <ElTableColumn prop="city" label="市区" width="120"> </ElTableColumn>
      <ElTableColumn prop="address" label="地址" width="600"> </ElTableColumn>
      <ElTableColumn prop="zip" label="邮编" width="120"> </ElTableColumn>
      <ElTableColumn fixed="right" label="操作" width="100">
        <template #default="scope">
          <ElButton type="text" size="small">查看</ElButton>
          <ElButton type="text" size="small">编辑</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<script lang="ts" setup>
import { ElButton, ElTable, ElTableColumn } from 'element-plus'
import { reactive, ref } from 'vue'

const tableData = reactive([
  {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333,
  },
  {
    date: '2016-05-04',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1517 弄',
    zip: 200333,
  },
  {
    date: '2016-05-01',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1519 弄',
    zip: 200333,
  },
  {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1516 弄',
    zip: 200333,
  },
])
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  padding: 2px 4px;
  color: #304455;
  background-color: #eee;
  border-radius: 4px;
}
</style>
