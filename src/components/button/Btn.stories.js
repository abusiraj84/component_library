import { action } from "@storybook/addon-actions";
import Btn from "./Btn.vue";
// import config
import btnConfig from "./docs/btnConfig.json";
// action

// Describe card component
export default {
  title: "JS/Button",
  component: Btn,
  args: btnConfig.args,
  argTypes: btnConfig.argTypes,

  decorators: [
    () => ({
      template:
        "<div class='flex justify-center items-center h-[200px]'><story /></div>",
    }),
  ],
  // parameters: {
  //   docs: {
  //     description: {
  //       component: readme,
  //     },
  //   },
  // },
};

// Define template for Btn Story
const BtnTemplate = (args) => ({
  components: { Btn },

  setup() {
    return { args };
  },

  template: `
    <Btn
    v-bind="args"
    @buttonClicked="action"
    >
    انضم للجلسة
    </Btn>
  `,
  methods: {
    action: action("button-clicked"),
  },
});

// named export Filled to create respective story
export const Filled = BtnTemplate.bind({});
// add source code for individual story
// parameters at story level
// Filled.parameters = {
//   docs: {
//     source: {
//       code: `<Btn
//       :name="name"
//       :type="type"
//       :icon="icon"
//       :is-icon="isIcon"
//       @buttonClicked="action"
//       >
//       انضم للجلسة
//       </Btn>`,
//     },
//   },
// };
