import {ref} from "vue"
import useOpenDoor from "@/components/door/doorFunctions"

window.HTMLMediaElement.prototype.play = async () => {
    dispatchEvent(new Event("ended"))
}

function sleep(ms: number): Promise<Promise<void>> {
    return new Promise<Promise<void>>(() => setTimeout(() => {
    }, ms))
}

describe("DoorFunctions", () => {
    jest.disableAutomock()
    it("function should change boolean to true", done => {
        const boolRef = ref(false)
        const canClick = ref(true)
        const day = new Date().getDate()
        const emitMock = jest.fn()
        const fn = useOpenDoor(boolRef, canClick, day, emitMock)
        fn().then(() => {
            expect(boolRef.value).toBeTruthy()
            expect(emitMock).toHaveBeenCalled()
            done()
        })
    })
})
it("function shouldn't change boolean", async () => {
    const boolRef = ref(false)
    const day = new Date().getDate() + 1
    const emitMock = jest.fn()
    const fn = useOpenDoor(boolRef, boolRef, day, emitMock)
    await fn()
    expect(boolRef.value).toBeFalsy()
    expect(emitMock).not.toHaveBeenCalled()
})