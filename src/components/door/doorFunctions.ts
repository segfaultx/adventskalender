import {Ref} from "@vue/reactivity"

export default function useOpenDoor(show: Ref<boolean>, canClick: Ref<boolean>, day: number, emit: (event: "update", ...args: unknown[]) => void): () => void {
    function openDoor(): void {
        show.value = true
        emit("update", {})
    }

    return function canOpenDoor(): void {
        if (canClick.value) {
            canClick.value = false
            if (day <= new Date().getDate()) {
                const soundEffect = new Audio(require("../../assets/christmas_bells.mp3"))
                soundEffect.onended = openDoor
                soundEffect.play()

            } else {
                const soundEffect = new Audio(require("../../assets/no.mp3"))
                soundEffect.play()
                canClick.value = true
            }
        }
    }
}


