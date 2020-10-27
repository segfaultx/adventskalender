<template>
  <div @click="show = isOk()">
    <div v-if="!show" class="door door_front">
          {{ this.doorItem.day }}
    </div>
    <div v-if="show" class="door door_back" @click="showModal">
      {{ this.doorItem.content }}
    </div>
    <modal v-show="isModalVisible"
           :door-number="this.doorItem.day"
           :text-details="this.doorItem.content"
           @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import DoorItem from "@/components/doorComponent/DoorItem"
import modal from "@/components/modal/ModalComponent.vue"

interface Props {
  doorItem: DoorItem
}

export default defineComponent({
  name: "DoorComponent",
  components: {modal},
  props: {
    doorItem: {
      type: Object as () => DoorItem,
      default: {day: 25, content: "hi"}
    }
  },
  setup(props: Props) {
    const show = ref(false)
    const isModalVisible = ref(false)

    function canOpenDoor(): boolean {
      return props.doorItem.day <= new Date().getDate()
    }

    function showModal() {
      isModalVisible.value = true
    }

    function closeModal() {
      isModalVisible.value = false
    }

    return {show, isModalVisible, isOk: canOpenDoor, showModal, closeModal}
  }
})
</script>

<style scoped>
.door {
  width: 10vw;
  height: 10vh;
  max-height: 10vh;
  max-width: 10vw;
}

.door_front {
  font-family: "ChristmasFont", serif;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
}

.door_back {
  background-color: green;
}
</style>
