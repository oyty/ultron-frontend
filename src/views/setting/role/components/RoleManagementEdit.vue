<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="title"
    width="500px"
    @close="close"
  >
    <el-form ref="formRef" label-width="80px" :model="form" :rules="rules">
      <el-form-item label="角色码" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="菜单">
        <div class="vab-tree-border">
          <el-tree
            ref="treeRef"
            v-model="menuIds"
            :data="list"
            :default-expanded-keys="[]"
            node-key="id"
            show-checkbox
          >
            <template #default="{ data }">
              <span>{{ data.meta.title }}</span>
            </template>
          </el-tree>
        </div>
      </el-form-item>
      <el-form-item label="按钮权限">
        <el-checkbox-group v-model="form.btnRolesCheckedList">
          <el-checkbox
            v-for="item in btnRoles"
            :key="item.value"
            :label="item.value"
          >
            {{ item.lable }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
  import { getList } from '@/api/router'
  import { nextTick } from 'vue'
  import { doEdit } from '@/api/roleManagement'

  export default defineComponent({
    name: 'RoleManagementEdit',
    emits: ['fetch-data'],
    setup(props, { emit }) {
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        formRef: null,
        treeRef: null,
        form: {
          btnRolesCheckedList: [],
        },
        menuIds: [],
        rules: {
          name: [
            { required: true, trigger: 'blur', message: '请输入角色名称' },
          ],
        },
        title: '',
        dialogFormVisible: false,
        list: [],
        /* btnRoles demo */
        btnRoles: [
          {
            lable: '读',
            value: 'read:system',
          },
          {
            lable: '写',
            value: 'write:system',
          },
          {
            lable: '删',
            value: 'delete:system',
          },
        ],
      })

      const showEdit = async (row) => {
        if (!row) {
          state.title = '添加'
        } else {
          state.title = '编辑'
          state.form = JSON.parse(JSON.stringify(row))
          state.form.btnRolesCheckedList = row.permissions.split(',')
          nextTick(() => {
            row.menu_ids.split(',').forEach((item) => {
              const node = state.treeRef.getNode(item)
              if (node.isLeaf) {
                state.treeRef.setChecked(node, true)
              }
            })
          })
        }
        state.dialogFormVisible = true
      }
      const close = () => {
        state['formRef'].resetFields()
        state['treeRef'].setCheckedKeys([])
        state.form = {
          btnRolesCheckedList: [],
        }
        state.dialogFormVisible = false
      }
      const fetchData = async () => {
        const {
          data: { list },
        } = await getList()
        state.list = list
      }
      const save = () => {
        state['formRef'].validate(async (valid) => {
          if (valid) {
            const tree = state['treeRef']
              .getCheckedNodes(false, true)
              .map((i) => i.id)
            state.form.permissions = state.form.btnRolesCheckedList.join(',')
            state.form.menu_ids = tree.join(',')
            const { msg } = await doEdit({
              ...state.form,
            })
            $baseMessage(msg, 'success', 'vab-hey-message-success')
            emit('fetch-data')
            close()
          }
        })
      }
      onMounted(() => {
        fetchData()
      })
      return {
        ...toRefs(state),
        showEdit,
        close,
        fetchData,
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
