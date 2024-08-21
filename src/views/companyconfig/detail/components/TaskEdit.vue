<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="title"
    width="500px"
    @close="close"
  >
    <el-form ref="formRef" label-width="140px" :model="form" :rules="rules">
      <el-form-item label="任务名称" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="设计底部平台标高" prop="height">
        <el-input v-model="form.height" />
      </el-form-item>
      <el-form-item label="超深" prop="deep">
        <el-input v-model="form.deep" />
      </el-form-item>
      <el-form-item label="孔径" prop="hole_size">
        <el-input v-model="form.hole_size" />
      </el-form-item>
      <el-divider />
      <el-upload
        ref="uploadRef"
        class="upload-demo"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :auto-upload="false"
        :on-change="handleFileChange"
        :on-remove="handleFileRemove"
        :limit="1"
      >
        <template #trigger>
          <el-button
            style="margin-left: 20px"
            type="primary"
            :disabled="file !== null"
          >
            选择孔位文件(dat/txt/csv)
          </el-button>
        </template>
      </el-upload>
    </el-form>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
  import { taskAdd } from '@/api/task'

  export default defineComponent({
    name: 'DriverManagement',
    emits: ['fetch-data'],
    setup(props, { emit }) {
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        formRef: null,
        uploadRef: null,
        form: {
          id: '',
          name: '',
          height: '',
          deep: '',
          hole_size: '',
          datas: [],
        },
        file: null,
        rules: {
          name: [
            { required: true, trigger: 'blur', message: '请输入任务名称' },
          ],
          height: [
            {
              required: true,
              trigger: 'blur',
              message: '请输入设计底部平台标高',
            },
          ],
          deep: [{ required: true, trigger: 'blur', message: '请输入超深' }],
          hole_size: [
            { required: true, trigger: 'blur', message: '请输入孔径' },
          ],
        },
        title: '',
        dialogFormVisible: false,
        list: [],
        /* btnRoles demo */
      })
      const handleFileChange = (file) => {
        state.file = file
        console.log(file)
        if (beforeUpload(file)) {
          processFile(state.file)
        }
      }
      const handleFileRemove = () => {
        state.file = null
      }

      const showEdit = async (row) => {
        if (!row) {
          state.title = '添加'
        } else {
          state.title = '编辑'
          state.form = JSON.parse(JSON.stringify(row))
        }
        state.dialogFormVisible = true
      }
      const close = () => {
        state['formRef'].resetFields()
        state.form = {
          name: '',
          remark: '',
        }
        state.dialogFormVisible = false
      }
      const processFile = (file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          const content = e.target.result
          state.form.datas = parseDatFile(content) // 解析文件内容
          console.log(state.parsedData)
        }
        reader.readAsText(file.raw)
      }
      const parseDatFile = (content) => {
        // 假设 .dat 文件是逗号分隔的文本格式
        const lines = content.split('\n') // 将内容按行分隔
        return lines.map((line) => line.split(',')) // 每行按逗号分隔，形成二维数组
      }
      const save = () => {
        if (state.file === null) {
          $baseMessage('请上传孔位文件', 'error', 'vab-hey-message-error')
          return
        }
        const fileStatus = beforeUpload(state.file)
        if (!fileStatus) {
          return
        }
        console.log(state.parsedData)

        // 解析文件
        state['formRef'].validate(async (valid) => {
          if (valid) {
            const { msg } = await taskAdd({
              ...state.form,
            })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            emit('fetch-data')
            close()
          }
        })
      }
      const beforeUpload = (file) => {
        const isDat = file.name.endsWith('.dat')
        const isTxt = file.name.endsWith('.txt')
        const isCsv = file.name.endsWith('.csv')
        console.log(file.name)
        if (!isDat && !isTxt && !isCsv) {
          $baseMessage(
            '上传文件格式不正确，请上传dat/txt/csv文件!',
            'error',
            'vab-hey-message-error'
          )
          return false
        }
        return isDat || isTxt || isCsv
      }
      return {
        ...toRefs(state),
        showEdit,
        handleFileChange,
        handleFileRemove,
        beforeUpload,
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
