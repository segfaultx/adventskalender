import {ref} from "vue"
import useOpenDoor from "@/components/door/doorFunctions"

window.HTMLMediaElement.prototype.play = async () => { dispatchEvent(new Event("ended"))}

describe("DoorFunctions",  () => {
    it("function should change boolean to true", async () => {
        const boolRef = ref(false)
        const canClick = ref(true)
        const day = new Date().getDate()
        const emitMock = jest.fn()
        const fn = useOpenDoor(boolRef, canClick, day, emitMock)

        //TODO: Configure jest so the require function doesnt cause errors
        await fn()
        expect(boolRef.value).toBeTruthy()
        expect(emitMock).toHaveBeenCalled()
    })
    it("function shouldnt change boolean", async () => {
        const boolRef = ref(false)
        const day = new Date().getDate() + 1
        const emitMock = jest.fn()
        const fn = useOpenDoor(boolRef, boolRef, day, emitMock)
        await fn()
        expect(boolRef.value).toBeFalsy()
        expect(emitMock).not.toHaveBeenCalled()
    })
})