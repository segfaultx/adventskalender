import {Ref} from "@vue/reactivity"
// @ts-ignore
import christmasBellsSound from '@/assets/christmas_bells.mp3'
// @ts-ignore
import no from "@/assets/no.mp3"

export default function useOpenDoor(show: Ref<boolean>, canClick: Ref<boolean>, day: number, emit: (event: "update", ...args: unknown[]) => void): () => Promise<void> {
    function openDoor(): void {
        show.value = true
        emit("update", {})
    }

    return async function canOpenDoor(): Promise<void> {
        if (canClick.value) {
            canClick.value = false
            if (day <= new Date().getDate()) {
                const soundEffect = new Audio(christmasBellsSound)
                soundEffect.onended = openDoor
                await soundEffect.play()

            } else {
                const soundEffect = new Audio(no)
                await soundEffect.play()
                canClick.value = true
            }
        }
    }
}


