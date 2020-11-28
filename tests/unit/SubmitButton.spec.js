import { mount } from "@vue/test-utils";
import SubmitButton from "@/components/SubmitButton.vue";

describe("SubmitButton.vue", () => {
  it("should render msg prop and Not Authoized", () => {
    const wrapper = mount(SubmitButton, {
      props: { msg: "Penis" }
    });

    expect(wrapper.html().includes("Penis")).toBe(true);
    expect(wrapper.html().includes("Not Authorized")).toBe(true);
  });

  it("should render Admin Privileges with admin prop true", () => {
    const wrapper = mount(SubmitButton, {
      props: { msg: "Penis", isAdmin: true }
    });

    expect(wrapper.html().includes("Admin Privileges")).toBe(true);
    expect(wrapper.html().includes("Not Authorized")).not.toBe(true);
  });
});
