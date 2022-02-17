import vvBtn from "./index.js";
import "../../index.css";
import { action } from "@storybook/addon-actions";

export default {
  title: "Buttons",
  component: vvBtn,
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: true },
      defaultValue: "تسجيل الدخول",
      description: "Text that is displayed in the button.",
    },
    click: {
      name: "Click",
      type: { name: "object", required: true },
      defaultValue: "تسجيل الدخول",
      description: "Text that is displayed in the button.",
    },
  },
};

const Template = (args) => ({
  components: { vvBtn },

  //   setup() {
  //     return { args };
  //   },
  template: '<vv-btn v-bind="args" @click="action" />',
  methods: {
    action: action("button-clicked"),
  },
});

export const Simple = Template.bind({});
