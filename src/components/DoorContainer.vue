<template>
  <div class="container bgcolor">
    <DoorRow :door-items="[doorItem, doorItem, {...doorItem, isDummy: true}, doorItem, doorItem, doorItem]"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import DoorRow from "@/components/doorRowComponent/DoorRowComponent.vue"
import DoorItem from "@/components/doorComponent/DoorItem"

export default defineComponent({
  name: "DoorContainer",
  components: {
    DoorRow
  },
  props: {
    doorItem: {
      type: Object as () => DoorItem,
      required: false,
      default: {day: 25, content: "blup", isDummy: false}
    }
  }
})
</script>

<style scoped>
.bgcolor {
}
</style>
