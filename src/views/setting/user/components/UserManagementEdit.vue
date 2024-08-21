<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="title"
    width="500px"
    @close="close"
  >
    <el-form ref="formRef" label-width="80px" :model="form" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="form.username" placeholder="输入用户名" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model.trim="form.password"
          placeholder="输入密码"
          type="password"
        />
      </el-form-item>
      <el-form-item label="数据权限" prop="company_id">
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
      <el-form-item label="角色" prop="role_id">
        <el-select
          v-model="form.role_id"
          clearable
          placeholder="请选择"
          style="width: 100%"
        >
          <el-option
            v-for="item in roleNodes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item class="form-item" label="备注" prop="remark">
        <el-input
          v-model="form.remark"
          :autosize="{ minRows: 3, maxRows: 4 }"
          placeholder="请输入备注"
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

<script setup>
  import { inject, reactive, ref } from 'vue'
  import { doEdit } from '@/api/userManagement'
  import { getNodes } from '@/api/company'
  import { getRoleNodes } from '@/api/roleManagement'

  const emit = defineEmits(['fetch-data'])
  const $baseMessage = inject('$baseMessage')
  const formRef = ref(null)
  const form = reactive({
    id: '',
    username: '',
    password: '',
    company_id: '',
    role_id: '',
    remark: '',
  })
  const companyNodes = ref([])
  const roleNodes = ref([])
  const title = ref('')
  const dialogFormVisible = ref(false)
  const rules = reactive({
    username: [{ required: true, trigger: 'blur', message: '请输入用户名' }],
    password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
    company_id: [
      { required: true, trigger: 'blur', message: '请关联数据权限' },
    ],
    role_id: [{ required: true, trigger: 'blur', message: '请选择角色' }],
  })

  const showEdit = async (row) => {
    if (!row) {
      title.value = '添加'
    } else {
      title.value = '编辑'
      Object.assign(form, row)
    }
    dialogFormVisible.value = true
    await fetchCompanyNodes()
    await fetchRoleNodes()
  }

  async function fetchCompanyNodes() {
    const { data } = await getNodes()
    companyNodes.value = data
  }

  async function fetchRoleNodes() {
    const { data } = await getRoleNodes()
    roleNodes.value = data
  }

  const close = () => {
    formRef.value.resetFields()
    form.id = ''
    form.username = ''
    form.password = ''
    form.company_id = ''
    form.role_id = ''
    form.remark = ''
    dialogFormVisible.value = false
  }

  const save = () => {
    formRef.value.validate(async (valid) => {
      if (valid) {
        const { msg } = await doEdit(form)
        $baseMessage(msg, 'success', 'vab-hey-message-success')
        emit('fetch-data')
        close()
      }
    })
  }

  defineExpose({
    showEdit,
  })
</script>
