<template>
  <div class="detail-container">
    <el-page-header
      :content="'【' + route.query.name + '】详情页'"
      @back="goBack"
    />
    <el-descriptions border :column="2">
      <el-descriptions-item>
        <template #label>设计底部平台标高</template>
        {{ route.query.height }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>超深</template>
        {{ route.query.deep }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>孔径</template>
        {{ route.query.hole_size }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>状态</template>
        {{ route.query.finished_count }} / {{ route.query.total_count }}
      </el-descriptions-item>
    </el-descriptions>
    <el-table
      v-loading="state.listLoading"
      style="margin-top: 20px"
      border
      :data="state.list"
    >
      <el-table-column align="center" label="序号" width="55">
        <template #default="{ $index }">
          {{ $index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        label="编号"
        prop="hole_no"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="北坐标(N)"
        prop="north_coord"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="东坐标(E)"
        prop="east_coord"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="高程(Z)"
        prop="height"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="设计孔深(m)"
        prop="design_deep"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="设计角度"
        prop="design_angle"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="实际孔深"
        prop="final_deep"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="实际角度"
        prop="final_angle"
        show-overflow-tooltip
      />
      <el-table-column
        align="center"
        label="是否新增"
        prop="is_new_desc"
        show-overflow-tooltip
      />
      <el-table-column align="center" label="状态" show-overflow-tooltip>
        <template #default="{ row }">
          <el-tag v-if="row.status === 0" type="info" size="mini">
            {{ row.status_desc }}
          </el-tag>
          <el-tag v-if="row.status === 1" type="warning" size="mini">
            {{ row.status_desc }}
          </el-tag>
          <el-tag v-if="row.status === 2" type="danger" size="mini">
            {{ row.status_desc }}
          </el-tag>
          <el-tag v-if="row.status === 3" type="success" size="mini">
            {{ row.status_desc }}
          </el-tag>
        </template>
      </el-table-column>
      <template #empty>
        <!--  <el-image
          class="vab-data-empty"
          :src="require('@/assets/empty_images/data_empty.png')"
        /> -->
        <el-empty class="vab-data-empty" description="暂无数据" />
      </template>
    </el-table>
    <el-pagination
      background
      :current-page="state.queryForm.pageNo"
      :layout="state.layout"
      :page-size="state.queryForm.pageSize"
      :total="state.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script lang="ts" setup>
  import { useTabsStore } from '@/store/modules/tabs'
  import { handleActivePath } from '@/utils/routes'
  import { getList } from '@/api/hole.ts'

  defineOptions({
    name: 'Detail',
  })

  const route: any = useRoute()
  const $pub = inject<any>('$pub')
  const tabsStore = useTabsStore()
  const { changeTabsMeta, delVisitedRoute } = tabsStore
  const state = reactive({
    list: [],
    listLoading: false,
    layout: 'total, sizes, prev, pager, next, jumper',
    total: 0,
    selectRows: '',
    queryForm: {
      pageNo: 1,
      pageSize: 10,
      id: '',
    },
  })
  const goBack = async () => {
    await delVisitedRoute(handleActivePath(route, true))
    history.back()
  }

  const handleSizeChange = (val) => {
    state.queryForm.pageSize = val
    fetchHoleData()
  }
  const handleCurrentChange = (val) => {
    state.queryForm.pageNo = val
    fetchHoleData()
  }

  const handleDelete = async (row: any) => {
    // await $baseConfirm('确定删除吗？')
    // await doDelete(row.id)
    // fetchData()
  }

  const fetchHoleData = async () => {
    state.listLoading = true
    const {
      data: { list, total },
    } = await getList(state.queryForm)
    state.list = list
    state.total = total
    state.listLoading = false
  }
  onMounted(() => {
    changeTabsMeta({
      title: '详情页',
      meta: {
        title: `${route.query.name} 详情页`,
      },
    })
    state.queryForm.id = route.query.id
    fetchHoleData()
  })
</script>

<style lang="scss" scoped>
  .default-table-detail-container {
    :deep() {
      .el-form--inline {
        .el-form-item {
          margin-right: 10px;
        }
      }

      .el-descriptions__label {
        min-width: 80px !important;
        text-align: right;
      }
    }
  }
</style>
