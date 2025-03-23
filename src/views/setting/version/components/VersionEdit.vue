<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="title"
    width="500px"
    @close="close"
  >
    <el-form ref="formRef" label-width="80px" :model="form" :rules="rules">
      <el-form-item label="单位" prop="company_id">
        <el-select v-model="form.company_id" placeholder="请选择单位" clearable>
          <el-option
            v-for="item in companyList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="版本号" prop="version_code">
        <el-input
          v-model.number="form.version_code"
          placeholder="请输入版本号"
        />
      </el-form-item>
      <el-form-item label="版本名称" prop="version_name">
        <el-input v-model="form.version_name" placeholder="请输入版本名称" />
      </el-form-item>
      <el-form-item label="升级文件" prop="url">
        <el-input v-model="form.url" placeholder="请输入升级文件地址" />
      </el-form-item>
      <el-form-item label="强制升级" prop="is_force">
        <el-switch
          v-model="form.is_force"
          :active-value="1"
          :inactive-value="0"
          active-text="是"
          inactive-text="否"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-switch
          v-model="form.status"
          :active-value="1"
          :inactive-value="0"
          active-text="激活"
          inactive-text="非激活"
        />
      </el-form-item>
      <el-form-item class="form-item" label="升级提示" prop="content">
        <el-input
          v-model="form.content"
          :autosize="{ minRows: 3, maxRows: 4 }"
          placeholder="请输入升级提示内容"
          type="textarea"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
  import { getNodes } from '@/api/company'
  import { doVersionEdit } from '@/api/version'

  export default defineComponent({
    name: 'VersionEdit',
    emits: ['fetch-data'],
    setup(props, { emit }) {
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        formRef: null,
        companyList: [],
        form: {
          id: '',
          company_id: '',
          version_code: '',
          version_name: '',
          url: '',
          is_force: 0,
          status: 0,
          content: '',
        },
        rules: {
          company_id: [
            { required: true, message: '请选择单位', trigger: 'change' },
          ],
          version_code: [
            { required: true, message: '请输入版本号', trigger: 'blur' },
            { type: 'number', message: '版本号必须为数字', trigger: 'blur' },
          ],
          version_name: [
            { required: true, message: '请输入版本名称', trigger: 'blur' },
          ],
          url: [
            { required: true, message: '请输入升级文件地址', trigger: 'blur' },
          ],
        },
        title: '',
        dialogFormVisible: false,
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

      /**
       * 显示编辑对话框
       * @param {Object} row - 行数据
       */
      const showEdit = async (row) => {
        await fetchCompanyList()
        if (!row) {
          state.title = '添加'
        } else {
          state.title = '编辑'
          state.form = JSON.parse(JSON.stringify(row))
        }
        state.dialogFormVisible = true
      }

      /**
       * 关闭对话框
       */
      const close = () => {
        state.formRef.resetFields()
        state.form = {
          id: '',
          company_id: '',
          version_code: '',
          version_name: '',
          url: '',
          is_force: 0,
          status: 0,
          content: '',
        }
        state.dialogFormVisible = false
      }

      /**
       * 保存表单
       */
      const save = () => {
        state.formRef.validate(async (valid) => {
          if (valid) {
            const { msg } = await doVersionEdit({
              ...state.form,
            })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            emit('fetch-data')
            close()
          }
        })
      }

      onMounted(() => {
        fetchCompanyList()
      })

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
