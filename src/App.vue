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
  background-image: url("~@/assets/background.jpg");
  background-size: cover;
}
</style>
