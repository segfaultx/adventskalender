<template>
  <div class="container bgcolor">
    <div class="row">
      <div class="col-md-3">
        A
      </div>
      <div class="col-md-3">
        <DoorComponent v-bind:doorItem="this.doorItem" />
      </div>
      <div class="col-md-3">
        C
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DoorComponent from "@/components/DoorComponent/DoorComponent.vue";
import IDoorItem from "@/components/DoorComponent/IDoorItem";

export default defineComponent({
  name: "DoorContainer",
  components: {
    DoorComponent
  },
  props: {
    doorItem: {
      type: Object as () => IDoorItem,
      required: false,
      default: { day: 25, content: "blup" }
    }
  }
});
</script>

<style scoped>
.bgcolor {
  background-color: orange;
}
</style>
