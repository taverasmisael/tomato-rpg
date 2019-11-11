<template>
  <div class="timer screen">
    <h1 class="t-task--label">
      Resting from:
      <strong class="t-task--name">{{ taskName || 'Task name' }}</strong>
    </h1>
    <CountDown
      @tick="updateTime"
      @statusChange="updateStatus"
      :isRunning="isTimerRunning"
      :currentTime="currentTime"
    />
    <TaskInput :input="changeTaskName" :value="taskName" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskInput from '@/components/TaskInput.vue'
import CountDown from '@/components/CountDown.vue'

@Component({ components: { TaskInput, CountDown } })
export default class TimerScreen extends Vue {
  taskName = ''

  isTimerRunning = false
  currentTime = 260

  changeTaskName({ target }: any) {
    const taskName = target.value as string
    this.taskName = taskName
  }

  updateTime(seconds: number) {
    this.currentTime -= seconds
  }

  updateStatus(x: any) {
    this.isTimerRunning = !this.isTimerRunning
  }
}
</script>
