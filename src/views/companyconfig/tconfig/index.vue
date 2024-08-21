<template>
  <div class="role-management-container">
    <el-card v-loading="distanceLoading" shadow="hover">
      <template #header>
        <span style="font-weight: bold; font-size: medium">
          孔位引导误差，钻头和孔位在当前误差范围内认为有效
        </span>
      </template>

      <div style="display: flex; align-items: center">
        <el-input-number
          v-model="distance"
          label="孔位引导误差"
          :max="100"
          :min="10"
          :step="1"
          style="width: 160px"
        />

        <el-button
          v-if="!isAdmin"
          style="margin-left: 40px"
          type="primary"
          @click="updateDistance"
        >
          更新
        </el-button>

        <span v-if="isAdmin" style="margin-left: 40px">
          当前为管理员用户，显示默认配置
        </span>
      </div>
    </el-card>

    <el-card v-loading="deepLoading" shadow="hover">
      <template #header>
        <span style="font-weight: bold; font-size: medium">
          目标孔深误差，钻孔深度和目标孔深在当前误差范围内认为有效，可完成钻孔
        </span>
      </template>

      <div style="display: flex; align-items: center">
        <el-input-number
          v-model="deep"
          label="钻孔深度误差"
          :max="50"
          :min="10"
          :step="1"
          style="width: 160px"
        />

        <el-button
          v-if="!isAdmin"
          style="margin-left: 40px"
          type="primary"
          @click="updateDeep"
        >
          更新
        </el-button>

        <span v-if="isAdmin" style="margin-left: 40px">
          当前为管理员用户，显示默认配置
        </span>
      </div>
    </el-card>
    <el-card v-if="!isAdmin" v-loading="deepLoading" shadow="hover">
      <template #header>
        <span style="font-weight: bold; font-size: medium">
          钻孔作业强制结束原因配置
        </span>
      </template>
      <el-button :icon="Plus" type="primary" @click="handleEdit($event)">
        添加
      </el-button>

      <el-table
        v-loading="reasonLoading"
        border
        :data="reasons"
        style="width: 420px; margin-top: 20px"
      >
        <el-table-column align="center" label="序号" width="55">
          <template #default="{ $index }">
            {{ $index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          label="强制结束原因"
          prop="reason"
          show-overflow-tooltip
        />
        <el-table-column
          align="center"
          label="操作"
          show-overflow-tooltip
          width="100"
        >
          <template #default="{ row }">
            <el-button text type="primary" @click="handleDelete(row)">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <edit ref="editRef" @fetch-data="fetchReasons" />
  </div>
</template>

<script>
  import {
    getConfig,
    getReasons,
    reasonDelete,
    updateConfig,
  } from '@/api/config'
  import { Delete, Plus, Search } from '@element-plus/icons-vue'

  export default defineComponent({
    name: 'TConfig',
    components: {
      Edit: defineAsyncComponent(() => import('./components/ReasonEdit.vue')),
    },
    setup() {
      const $baseConfirm = inject('$baseConfirm')
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        editRef: null,
        distanceLoading: false,
        isAdmin: false,
        distance: 10,
        deepLoading: false,
        deep: 10,
        reasons: [],
        reasonLoading: false,
      })

      const updateDistance = async () => {
        state.distanceLoading = true
        const { msg } = await updateConfig({ distance: state.distance })
        $baseMessage(msg, 'success', 'vab-hey-message-success')
        state.distanceLoading = false
      }

      const updateDeep = async () => {
        state.deepLoading = true
        const { msg } = await updateConfig({ deep: state.deep })
        $baseMessage(msg, 'success', 'vab-hey-message-success')
        state.deepLoading = false
      }

      const handleDelete = (row) => {
        if (row.id) {
          $baseConfirm('你确定要删除当前项吗', null, async () => {
            const { msg } = await reasonDelete({ id: row.id })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            await fetchReasons()
          })
        }
      }
      const fetchData = async () => {
        const {
          data: { distance, deep, is_admin },
        } = await getConfig()
        state.isAdmin = is_admin === 1
        state.distance = distance
        state.deep = deep
      }
      const fetchReasons = async () => {
        state.reasonLoading = true
        const { data } = await getReasons()
        state.reasons = data
        state.reasonLoading = false
      }
      const handleEdit = () => {
        state['editRef'].showEdit()
      }
      onMounted(() => {
        fetchData()
        fetchReasons()
      })

      return {
        ...toRefs(state),
        handleDelete,
        fetchData,
        fetchReasons,
        updateDistance,
        updateDeep,
        handleEdit,
        Delete,
        Plus,
        Search,
      }
    },
  })
</script>
