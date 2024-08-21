<template>
  <div class="user-management-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="12">
        <el-button :icon="Plus" type="primary" @click="handleEdit($event)">
          添加
        </el-button>
      </vab-query-form-left-panel>
      <vab-query-form-right-panel :span="12">
        <el-form inline :model="queryForm" @submit.prevent>
          <el-form-item>
            <el-input
              v-model.trim="queryForm.username"
              clearable
              placeholder="请输入用户名"
            />
          </el-form-item>
          <el-form-item>
            <el-button :icon="Search" type="primary" @click="queryData">
              查询
            </el-button>
          </el-form-item>
        </el-form>
      </vab-query-form-right-panel>
    </vab-query-form>

    <el-table v-loading="listLoading" border :data="list">
      <el-table-column align="center" label="序号" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="用户名"
        prop="username"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="数据权限"
        prop="company_name"
        show-overflow-tooltip
      />
      <el-table-column align="center" label="角色" show-overflow-tooltip>
        <template #default="{ row }">
          <el-tag>
            {{ row.role_name }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="备注"
        prop="remark"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="更新时间"
        prop="utime"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="操作"
        show-overflow-tooltip
        width="200"
      >
        <template #default="{ row }">
          <el-button text type="primary" @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button text type="primary" @click="handleDelete(row)">
            删除
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        <el-empty class="vab-data-empty" description="暂无数据" />
      </template>
    </el-table>
    <el-pagination
      background
      :current-page="queryForm.pageNo"
      :layout="layout"
      :page-size="queryForm.pageSize"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <edit ref="editRef" @fetch-data="fetchData" />
  </div>
</template>

<script setup>
  import { doDelete, getList } from '@/api/userManagement'
  import { Plus, Search } from '@element-plus/icons-vue'

  const Edit = defineAsyncComponent(
    () => import('./components/UserManagementEdit')
  )
  const editRef = ref(null)
  const list = ref([])
  const listLoading = ref(true)
  const layout = 'total, sizes, prev, pager, next, jumper'
  const total = ref(0)
  const queryForm = reactive({
    pageNo: 1,
    pageSize: 10,
    username: '',
  })

  // 方法定义
  const $baseConfirm = inject('$baseConfirm')
  const $baseMessage = inject('$baseMessage')

  const handleEdit = (row) => {
    if (row.id) {
      editRef.value.showEdit(row)
    } else {
      editRef.value.showEdit()
    }
  }
  const handleDelete = (row) => {
    if (row.id) {
      $baseConfirm('你确定要删除当前项吗', null, async () => {
        const { msg } = await doDelete({ id: row.id })
        $baseMessage(msg, 'success', 'vab-hey-message-success')
        await fetchData()
      })
    }
  }
  const handleSizeChange = (val) => {
    queryForm.pageSize = val
    fetchData()
  }
  const handleCurrentChange = (val) => {
    queryForm.pageNo = val
    fetchData()
  }
  const formatNewLine = (text) => {
    return text.replace(/\n/g, '<br>')
  }
  const queryData = () => {
    queryForm.pageNo = 1
    fetchData()
  }
  const fetchData = async () => {
    listLoading.value = true
    const response = await getList(queryForm)
    list.value = response.data.list
    total.value = response.data.total
    listLoading.value = false
  }
  onMounted(() => {
    fetchData()
  })
</script>
<style>
  .wrap-text {
    white-space: pre-line; /* 使 \n 起作用 */
  }
</style>
