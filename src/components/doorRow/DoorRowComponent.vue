<template>
  <div class="row">
    <div class="col" v-for="(item, index) in this.doorItems" :key="index">
      <DoorComponent v-if="item != null" :door-item="item" @update="handleUpdate"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"
import DoorItem from "../door/DoorItem"
import DoorComponent from "@/components/door/DoorComponent.vue"

export default defineComponent({
  name: "DoorRow",
  components: {DoorComponent},
  props: {
    doorItems: Object as () => DoorItem[]
  },
  emits: ["update"],
  setup(_, {emit}){
    function handleUpdate(){
      emit("update")
    }
    return {handleUpdate}
  }
})

</script>

<style scoped>
.row {
}
</style>
