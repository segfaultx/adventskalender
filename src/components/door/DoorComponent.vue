<template>
  <div @click="canOpenDoor" class="door-container">
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
import DoorItem from "@/components/door/DoorItem"
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
      default: {day: 25, content: "hi", isDummy: false}
    }
  },
  emits: ["update"],
  setup(props: Props, {emit}) {
    const show = ref<boolean>(false)
    const isModalVisible = ref<boolean>(false)
    const canClick = ref<boolean>(true)

    function openDoor(): void {
      show.value = true
      emit("update")
    }

    function canOpenDoor(): void {
      if (canClick.value) {
        canClick.value = false
        if (props.doorItem.day <= new Date().getDate()) {
          const soundEffect = new Audio(require("@/assets/christmas_bells.mp3"))
          soundEffect.onended = openDoor
          soundEffect.play()

        } else {
          const soundEffect = new Audio(require("@/assets/no.mp3"))
          soundEffect.play()
          canClick.value = true
        }
      }
    }

    function showModal() {
      isModalVisible.value = true
    }

    function closeModal() {
      isModalVisible.value = false
    }

    return {show, isModalVisible, canOpenDoor, showModal, closeModal}
  }
})
</script>

<style scoped>
.door {
  width: 7vw;
  height: 7vh;
  max-height: 7vh;
  max-width: 7vw;
}

.door:hover {
  cursor: pointer;
}

.door_front {
  font-family: "ChristmasFont", serif;
  font-size: 4em;
  color: darkred;
  display: flex;
  justify-content: center;
  align-items: center;
  border: darkred 3px solid;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, .75);
}

.door_back {
  background-color: green;
}

.door-container {
  margin-top: 1em;
}
</style>
