<template>
  <div class="coordinate-params-container">
    <el-card v-loading="paramsLoading" shadow="hover">
      <template #header>
        <span style="font-weight: bold; font-size: medium">
          坐标转换七参数配置
        </span>
      </template>

      <div class="params-form">
        <el-form :model="paramsForm" label-width="180px">
          <!-- 平移参数 -->
          <div class="params-section">
            <div class="section-title">平移参数（单位：米）</div>
            <el-form-item label="X轴平移量 (ΔX)">
              <el-input
                v-model="paramsForm.translationX"
                placeholder="请输入X轴平移量"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
            <el-form-item label="Y轴平移量 (ΔY)">
              <el-input
                v-model="paramsForm.translationY"
                placeholder="请输入Y轴平移量"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
            <el-form-item label="Z轴平移量 (ΔZ)">
              <el-input
                v-model="paramsForm.translationZ"
                placeholder="请输入Z轴平移量"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
          </div>

          <!-- 旋转参数 -->
          <div class="params-section">
            <div class="section-title">旋转参数（单位：弧度）</div>
            <el-form-item label="X轴旋转角度 (ωx)">
              <el-input
                v-model="paramsForm.rotationX"
                placeholder="请输入X轴旋转角度"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
            <el-form-item label="Y轴旋转角度 (ωy)">
              <el-input
                v-model="paramsForm.rotationY"
                placeholder="请输入Y轴旋转角度"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
            <el-form-item label="Z轴旋转角度 (ωz)">
              <el-input
                v-model="paramsForm.rotationZ"
                placeholder="请输入Z轴旋转角度"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
          </div>

          <!-- 尺度参数 -->
          <div class="params-section">
            <div class="section-title">尺度参数（单位：ppm）</div>
            <el-form-item label="尺度因子 (s)">
              <el-input
                v-model="paramsForm.scale"
                placeholder="请输入尺度因子"
                style="width: 220px"
                :disabled="isAdmin"
              />
            </el-form-item>
          </div>

          <el-form-item>
            <el-button
              v-if="!isAdmin"
              type="primary"
              @click="updateParams"
              :loading="submitLoading"
            >
              更新参数
            </el-button>
            <span v-if="isAdmin" style="color: #909399; margin-left: 10px">
              当前为管理员用户，显示默认配置（不可编辑）
            </span>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { getCoordinateConfig, updateCoordinateConfig } from '@/api/config'

  export default defineComponent({
    name: 'LConfig',
    setup() {
      const $baseMessage = inject('$baseMessage')

      const state = reactive({
        paramsLoading: false,
        submitLoading: false,
        isAdmin: false,
        paramsForm: {
          translationX: '',
          translationY: '',
          translationZ: '',
          rotationX: '',
          rotationY: '',
          rotationZ: '',
          scale: '',
        },
      })

      /**
       * 获取七参数配置
       * @returns {Promise<void>}
       */
      const fetchParams = async () => {
        state.paramsLoading = true
        try {
          const {
            data: { coordinate_params, is_admin },
          } = await getCoordinateConfig()

          state.isAdmin = is_admin === 1

          if (coordinate_params) {
            state.paramsForm = {
              translationX: coordinate_params.translation_x || '',
              translationY: coordinate_params.translation_y || '',
              translationZ: coordinate_params.translation_z || '',
              rotationX: coordinate_params.rotation_x || '',
              rotationY: coordinate_params.rotation_y || '',
              rotationZ: coordinate_params.rotation_z || '',
              scale: coordinate_params.scale || '',
            }
          }
        } catch (error) {
          console.error('获取七参数配置失败:', error)
        } finally {
          state.paramsLoading = false
        }
      }

      /**
       * 更新七参数配置
       * @returns {Promise<void>}
       */
      const updateParams = async () => {
        state.submitLoading = true
        try {
          const params = {
            translation_x: state.paramsForm.translationX,
            translation_y: state.paramsForm.translationY,
            translation_z: state.paramsForm.translationZ,
            rotation_x: state.paramsForm.rotationX,
            rotation_y: state.paramsForm.rotationY,
            rotation_z: state.paramsForm.rotationZ,
            scale: state.paramsForm.scale,
          }

          const { msg } = await updateCoordinateConfig(params)
          $baseMessage(msg || '更新成功', 'success', 'vab-hey-message-success')
        } catch (error) {
          console.error('更新七参数配置失败:', error)
          $baseMessage('更新失败', 'error')
        } finally {
          state.submitLoading = false
        }
      }

      onMounted(() => {
        fetchParams()
      })

      // 添加路由钩子，确保每次进入页面时都刷新数据
      onActivated(() => {
        fetchParams()
      })

      return {
        ...toRefs(state),
        fetchParams,
        updateParams,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .coordinate-params-container {
    .params-form {
      max-width: 600px;
    }

    .params-section {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px dashed #ebeef5;

      &:last-child {
        border-bottom: none;
      }

      .section-title {
        font-weight: bold;
        margin-bottom: 15px;
        color: #409eff;
      }
    }
  }
</style>
