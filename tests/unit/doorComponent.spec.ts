import {shallowMount, mount} from "@vue/test-utils"
import DoorComponent from "@/components/door/DoorComponent.vue"
import DoorItem from "@/components/door/DoorItem"
jest.mock("@/components/door/doorFunctions.ts")

const props: DoorItem = {day: 25, content: "hi"}

//TODO: properly mock doorFunctions module to be able to do more testing

describe("DoorComponent.vue", () => {
    it("renders a vue instance", () => {
        expect(shallowMount(DoorComponent, {props:props})).not.toBeNull()
    })
    it("renders number correctly", () => {
        const wrapper = shallowMount(DoorComponent, {props: props})
        expect(wrapper.find("#door-front").text()).toBe(props.day.toString())
    })
})