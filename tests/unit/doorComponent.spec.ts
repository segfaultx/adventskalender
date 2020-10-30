import {shallowMount} from "@vue/test-utils"
import DoorComponent from "@/components/door/DoorComponent.vue"
import DoorItem from "@/components/door/DoorItem"

describe("DoorComponent.vue", () => {
    it("renders number correctly", () => {
        const props: DoorItem = {day: 25, content: "hi"}
        const wrapper = shallowMount(DoorComponent, {props: props})
        expect(wrapper.find("#door-front").text()).toBe(props.day.toString())
    })

    it("handler has been called", () => {
        const props: DoorItem = {day: 25, content: "hi"}
        //TODO: extract methods to mock them
    })
})