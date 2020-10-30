<template>
  <div class="container">
    <div class="row header-row">{{title}}</div>
    <div class="container bgcolor">
      <DoorRow v-for="(items, index) in calendarItems" :key="index" :door-items="items"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import DoorRow from "@/components/doorRow/DoorRowComponent.vue"
import CalendarItems from "@/components/doorContainer/CalendarItems"

export default defineComponent({
  name: "DoorContainer",
  components: {DoorRow},
  props: {
    calendarItems: {
      type: Object as () => CalendarItems,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.bgcolor {
  display: flex;
  flex-direction: column;
}
.header-row {
  font-family: "ChristmasFont", serif;
  font-size: 10em;
  color: white;
  display: flex;
  justify-content: center;
}
</style>
