<template>
  <button
    type="button"
    class="container"
    @click.prevent="$emit('statusChange')"
  >
    {{ displayTime }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator'

@Component
export default class CountDown extends Vue {
  // The amount of seconds
  @Prop() currentTime!: number
  @Prop() isRunning!: boolean

  private intervalId: number = 0

  @Emit()
  tick() {
    return 1
  }
  @Emit()
  statusChange() {
    return !this.isRunning
  }

  private runInteraval() {
    if (this.intervalId) {
      this.stopInteraval()
    } else {
      this.intervalId = setInterval(this.tick, 1000)
    }
  }

  private stopInteraval() {
    clearInterval(this.intervalId)
    this.intervalId = 0
  }

  mounted() {
    if (this.isRunning) {
      this.runInteraval()
    }
  }

  @Watch('isRunning')
  onPersonChanged2(val: boolean) {
    if (val) {
      this.runInteraval()
    } else {
      this.stopInteraval()
    }
  }

  get displayTime() {
    const n = this.currentTime || 0
    const mins = Math.floor(n / 60)
    const secs = Math.floor(n % 60)
      .toString()
      .padStart(2, '0')
    return `${mins}:${secs}`
  }
}
</script>

<style></style>
