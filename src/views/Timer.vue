<template>
  <div class="timer screen">
    <h1 class="t-task--label">
      Resting from:
      <strong class="t-task--name">{{ taskName || 'Task name' }}</strong>
    </h1>

    <TaskInput :input="changeTaskName" :value="taskName" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskInput from '@/components/TaskInput.vue'

@Component({ components: { TaskInput } })
export default class TimerScreen extends Vue {
  taskName = ''

  changeTaskName({ target }: any) {
    const taskName = target.value as string
    this.taskName = taskName
  }
}
</script>
