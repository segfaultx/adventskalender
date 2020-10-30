<template>
  <DoorContainer :calendar-items="basicCalendarItems" :title="appConfig.title"/>
</template>

<script lang="ts">
import "bootstrap/dist/css/bootstrap.min.css"
import {defineComponent} from "vue"
import DoorContainer from "@/components/doorContainer/DoorContainer.vue"
import CalendarItems from "@/components/doorContainer/CalendarItems"
import calendarContent from "@/data/calendarContent.json"
import appConfig from "@/data/appConfig.json"

interface AppConfig {
  title: string
}

export default defineComponent({
  name: "App",
  components: {DoorContainer},
  props: {
    basicCalendarItems: {
      type: Object as () => CalendarItems,
      default: calendarContent
    },
    appConfig: {
      type: Object as () => AppConfig,
      default: appConfig
    }
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
