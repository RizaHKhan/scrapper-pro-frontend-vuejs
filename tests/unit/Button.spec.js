import { mount } from "@vue/test-utils";
import Button from "@/components/Button.vue";

describe("Button.vue", () => {
  it("should recieve props of text and display it", () => {
    const event = "doThis";
    const text = "Masta";
    const wrapper = mount(Button, {
      props: {
        text,
        event,
      },
    });
    expect(wrapper.html().includes("Masta")).toBe(true);
  });
  it("should display nothing if text prop is not sent", () => {
    const event = "doThis";
    const wrapper = mount(Button, {
      props: {
        text: "",
        event,
      },
    });
    expect(wrapper.html().includes("")).toBe(true);
  });
  it("should emit event when clicked", () => {
    const text = "Masta";
    const event = "doThis";
    const wrapper = mount(Button, {
      props: {
        event,
        text,
      },
    });

    wrapper.find("button").trigger("click");
    expect(wrapper.emitted()).toEqual({ "button-click": [["doThis"]] });
  });
});
