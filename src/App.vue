<template>
  <DoorContainer/>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import { defineComponent } from "vue"
import DoorContainer from "@/components/DoorContainer.vue"

export default defineComponent({
  name: "App",
  components: {
    DoorContainer
  }
})
</script>

<style>
body {
  background: url("~@/assets/background.jpg") no-repeat center center fixed;
  background-size: cover;
}
@font-face {
  font-family: 'ChristmasFont';
  src: local("ChristmasFont"), url('~@/assets/Reindeer Christmas - Personal Use.otf') format("opentype");
}
</style>
