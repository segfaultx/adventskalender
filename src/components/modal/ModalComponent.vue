<template>
  <transition name="modal-fade">
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          Details Türchen Nr.: {{ doorNumber }}

          <button
              type="button"
              class="btn-close"
              @click="close">
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          {{textDetails}}
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          <button
              type="button"
              class="btn-red"
              @click="close"
          >
            Schließen
          </button>
        </slot>
      </footer>
    </div>
  </div>
  </transition>
</template>

<script lang="ts">
import {defineComponent} from "vue"

interface Props {
  doorNumber: number,
  textDetails: string
}

export default defineComponent({
  name: 'modal',
  props: {
    doorNumber: Number,
    textDetails: String
  },
  methods: {
    close(): void {
      this.$emit('close')
    },
  },
})
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: absolute;
  left: 50%;
  right: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  width: 50vw;
  height: 70vh;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: darkred;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: darkred;
  background: transparent;
}

.btn-red {
  color: white;
  background: darkred;
  border: 1px solid darkred;
  border-radius: 2px;
}
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease
}
</style>
