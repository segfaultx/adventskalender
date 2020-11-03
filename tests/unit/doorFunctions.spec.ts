import {ref} from "vue"
import useOpenDoor from "@/components/door/doorFunctions"

const playStub = jest.spyOn(window.HTMLMediaElement.prototype, 'play')
    .mockImplementation(async () => {
        window.dispatchEvent(new Event('ended', {bubbles: true}))
    })



describe("DoorFunctions", () => {
    it("function should change boolean to true", done => {
        const boolRef = ref(false)
        const canClick = ref(true)
        const day = new Date().getDate()
        const emitMock = jest.fn()
        const fn = useOpenDoor(boolRef, canClick, day, emitMock)
        fn().then(() => {
            expect(playStub).toHaveBeenCalled()
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