<template>
  <div @click="show = isOk()">
    <div v-if="!show" class="flipcard_front">
      {{ this.doorItem.day }}
    </div>
    <div v-if="show" class="flipcard_back" @click="showModal">{
      { this.doorItem.content }}
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

    function isOk(): boolean {
      return props.doorItem.day <= new Date().getDate()
    }

    function showModal() {
      isModalVisible.value = true
    }

    function closeModal() {
      isModalVisible.value = false
    }

    return {show, isModalVisible, isOk, showModal, closeModal}
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
