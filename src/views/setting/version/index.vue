<template>
  <div class="role-management-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="12">
        <el-button :icon="Plus" type="primary" @click="handleEdit($event)">
          添加
        </el-button>
      </vab-query-form-left-panel>
    </vab-query-form>

    <el-table v-loading="listLoading" border :data="list">
      <el-table-column align="center" label="序号" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="单位名称"
        prop="company_name"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="版本号"
        prop="version_code"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="版本名称"
        prop="version_name"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="升级内容"
        prop="content"
        show-overflow-tooltip
      />
      <el-table-column align="center" label="强制升级" width="90">
        <template #default="{ row }">
          <el-tag :type="row.is_force === 1 ? 'danger' : 'success'">
            {{ row.is_force === 1 ? '是' : '否' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="状态" width="90">
        <template #default="{ row }">
          <el-tag :type="row.status === 1 ? 'success' : 'info'">
            {{ row.status === 1 ? '激活' : '非激活' }}
          </el-tag>
        </template>
      </el-table-column>
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
        width="250"
      >
        <template #default="{ row }">
          <el-button text type="primary" @click="handleEdit(row)">
            编辑
          </el-button>
          <el-button
            v-if="row.status === 0"
            text
            type="success"
            @click="handleStatus(row, 1)"
          >
            激活
          </el-button>
          <el-button v-else text type="warning" @click="handleStatus(row, 0)">
            禁用
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

<script>
  import { getNodes } from '@/api/company'
  import {
    doVersionDelete,
    getVersionList,
    setVersionStatus,
  } from '@/api/version'
  import { Delete, Plus, Search } from '@element-plus/icons-vue'

  export default defineComponent({
    name: 'Version',
    components: {
      Edit: defineAsyncComponent(() => import('./components/VersionEdit.vue')),
    },
    setup() {
      const $baseConfirm = inject('$baseConfirm')
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        editRef: null,
        list: [],
        companyList: [],
        listLoading: true,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        selectRows: '',
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          company_id: '',
          version_name: '',
        },
      })

      /**
       * 获取单位列表
       */
      const fetchCompanyList = async () => {
        try {
          const { data } = await getNodes()
          state.companyList = data
        } catch (error) {
          console.error('获取单位列表失败', error)
        }
      }

      const setSelectRows = (val) => {
        state.selectRows = val
      }

      /**
       * 处理编辑操作
       * @param {Object} row - 行数据
       */
      const handleEdit = (row) => {
        if (row.id) {
          state.editRef.showEdit(row)
        } else {
          state.editRef.showEdit()
        }
      }

      /**
       * 处理删除操作
       * @param {Object} row - 行数据
       */
      const handleDelete = (row) => {
        if (row.id) {
          $baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await doVersionDelete({ id: row.id })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            await fetchData()
          })
        }
      }

      /**
       * 处理状态变更操作
       * @param {Object} row - 行数据
       * @param {number} status - 状态值
       */
      const handleStatus = (row, status) => {
        if (row.id) {
          const statusText = status === 1 ? '激活' : '禁用'
          $baseConfirm(`你确定要${statusText}当前版本吗？`, null, async () => {
            const { msg } = await setVersionStatus({
              id: row.id,
              status: status,
            })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            await fetchData()
          })
        }
      }

      /**
       * 处理分页大小变更
       * @param {number} val - 页面大小
       */
      const handleSizeChange = (val) => {
        state.queryForm.pageSize = val
        fetchData()
      }

      /**
       * 处理页码变更
       * @param {number} val - 页码
       */
      const handleCurrentChange = (val) => {
        state.queryForm.pageNo = val
        fetchData()
      }

      /**
       * 查询数据
       */
      const queryData = () => {
        state.queryForm.pageNo = 1
        fetchData()
      }

      /**
       * 获取版本列表数据
       */
      const fetchData = async () => {
        state.listLoading = true
        try {
          const {
            data: { list, total },
          } = await getVersionList(state.queryForm)
          state.list = list
          state.total = total
        } catch (error) {
          console.error('获取版本列表失败', error)
        } finally {
          state.listLoading = false
        }
      }

      onMounted(() => {
        fetchCompanyList()
        fetchData()
      })

      return {
        ...toRefs(state),
        setSelectRows,
        handleEdit,
        handleDelete,
        handleStatus,
        handleSizeChange,
        handleCurrentChange,
        queryData,
        fetchData,
        Delete,
        Plus,
        Search,
      }
    },
  })
</script>
