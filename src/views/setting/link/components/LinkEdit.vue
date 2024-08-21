<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="title"
    width="500px"
    @close="close"
  >
    <el-form ref="formRef" label-width="80px" :model="form" :rules="rules">
      <el-form-item label="选择单位" prop="company_id">
        <el-select
          v-model="form.company_id"
          clearable
          filterable
          placeholder="请选择"
          style="width: 100%"
        >
          <el-option
            v-for="item in companyNodes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="选择设备" prop="device_id">
        <el-select
          v-model="form.device_id"
          clearable
          filterable
          placeholder="请选择"
          style="width: 100%"
        >
          <el-option
            v-for="item in deviceNodes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
  import { doEdit } from '@/api/company'
  import {
    doDeviceLink,
    getCompanyNodes,
    getUnBindDeviceNodes,
  } from '@/api/common'

  export default defineComponent({
    name: 'RoleManagementEdit',
    emits: ['fetch-data'],
    setup(props, { emit }) {
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        formRef: null,
        treeRef: null,
        form: {
          id: '',
          device_id: '',
          company_id: '',
        },
        rules: {
          company_id: [
            { required: true, trigger: 'blur', message: '请选择单位' },
          ],
          device_id: [
            { required: true, trigger: 'blur', message: '请选择设备' },
          ],
        },
        title: '',
        companyNodes: [],
        deviceNodes: [],
        dialogFormVisible: false,
        list: [],
        /* btnRoles demo */
      })

      const showEdit = async (row) => {
        if (!row) {
          state.title = '添加'
        } else {
          state.title = '编辑'
          state.form = JSON.parse(JSON.stringify(row))
        }
        state.dialogFormVisible = true
        await fetchCompanyNodes()
        await fetchUnBindDeviceNodes()
      }
      const close = async () => {
        state['formRef'].resetFields()
        state.form = {
          name: '',
          remark: '',
        }
        state.dialogFormVisible = false
      }

      async function fetchCompanyNodes() {
        const { data } = await getCompanyNodes()
        state.companyNodes = data
      }
      async function fetchUnBindDeviceNodes() {
        const { data } = await getUnBindDeviceNodes()
        state.deviceNodes = data
      }
      const save = () => {
        state['formRef'].validate(async (valid) => {
          if (valid) {
            const { msg } = await doDeviceLink({
              ...state.form,
            })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            emit('fetch-data')
            close()
          }
        })
      }
      return {
        ...toRefs(state),
        showEdit,
        close,
        save,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .vab-tree-border {
    width: 100%;
    height: 250px;
    padding: $base-padding;
    overflow-y: auto;
    border: 1px solid #dcdfe6;
    border-radius: $base-border-radius;
  }
</style>
