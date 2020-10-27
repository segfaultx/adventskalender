<template>
<div class="row">
  <div class="col" v-for="item in this.doorItems" :key="item.day">
    <DoorComponent v-if="!item.isDummy" :door-item="item"/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import DoorItem from "../doorComponent/DoorItem"
import DoorComponent from "@/components/doorComponent/DoorComponent.vue"

export default defineComponent({
      name: "DoorRow",
      components: {DoorComponent},
      props: {
        doorItems: Object as () => DoorItem[]
      }
})

</script>

<style scoped>

</style>
