<template>
  <div @click="canOpenDoor" class="door-container" id="door-wrapper">
    <div v-if="!show" class="door door_front" id="door-front">
      {{ this.doorItem.day }}
    </div>
    <div v-if="show" class="door door_back"
         :style="{background: 'url(./door_bgs/' + this.doorItem.backgroundImage + ') no-repeat', 'background-size': '100%' }"
         @click="showModal">
      <span class="tooltiptext">
              Click Me!
      </span>
    </div>
    <modal v-show="isModalVisible"
           :door-number="this.doorItem.day"
           :text-details="this.doorItem.content"
           :voucher-name="this.doorItem.voucherName"
           @close="closeModal"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue"
import DoorItem from "@/components/door/DoorItem"
import modal from "@/components/modal/ModalComponent.vue"
import useOpenDoor from "@/components/door/doorFunctions"

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
    const canOpenDoor = useOpenDoor(show, canClick, props.doorItem.day, emit)

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

.door_back .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 90%;
  left: 33%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip arrow */
.door_back .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Show the tooltip text when you mouse over the tooltip container */
.door_back:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>
