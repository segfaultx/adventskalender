<template>
  <div @click="show = isOk()">
    <div v-if="!show" class="flipcard_front">
      This is the Front
    </div>
    <div v-if="show" class="flipcard_back">{{ doorItem.content }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import DoorItem from "@/components/DoorComponent/DoorItem"

interface Props {
  doorItem: DoorItem
}

export default defineComponent({
  name: "DoorComponent",
  props: {
    doorItem: {
      type: Object as () => DoorItem,
      default: {day: 25, content: "hi"}
    }
  },
  setup(props: Props) {
    const show = ref(false)

    function isOk(): boolean {
      return props.doorItem.day <= new Date().getDate()
    }

    return {show, isOk}
  }
})
</script>

<style scoped>
.flipcard_front {
  background-color: red;
}

.flipcard_back {
  background-color: green;
}
</style>
