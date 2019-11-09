declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.svg' {
  import Vue from 'vue'
  class SVGIcon extends Vue {}
  export default SVGIcon
}

declare module 'vue-100vh' {
  import { Component, Prop } from 'vue-property-decorator'
  import Vue from 'vue'

  @Component
  class vue100vh extends Vue {
    @Prop() css: string
  }

  export default vue100vh
}
