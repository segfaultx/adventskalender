<template>
  <div class="container bgcolor">
    <DoorRow v-for="items in calendarItems" :key="items.index" :door-items="items"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import DoorRow from "@/components/doorRow/DoorRowComponent.vue"
import CalendarItems from "@/components/doorContainer/CalendarItems"

export default defineComponent({
  name: "DoorContainer",
  components: {
    DoorRow
  },
  props: {
    calendarItems: {
      type: Object as () => CalendarItems,
      required: true
    }
  }
})
</script>

<style scoped>
.bgcolor {
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
}
</style>
