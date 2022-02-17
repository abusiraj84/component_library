import { action } from '@storybook/addon-actions'
import Btn from './Btn.vue'
// import config
import btnConfig from './docs/btnConfig.json'
// action

// Describe card component
export default {
  title: 'JS/Button',
  component: Btn,
  args: btnConfig.args,
  argTypes: btnConfig.argTypes,
  decorators: [
    () => ({
      template:
        '<div style="display: flex; align-items: center; justify-content: center; height: 100vh;"><story /></div>',
    }),
  ],
  // parameters: {
  //   docs: {
  //     description: {
  //       component: readme,
  //     },
  //   },
  // },
}

// Define template for Btn Story
const BtnTemplate = (args, { argTypes }) => ({
  components: { Btn },
  props: Object.keys(argTypes),
  template: `
    <Btn
    :name="name"
    :type="type"
    :icon="icon"
    :is-icon="isIcon"
    @buttonClicked="action"
    >
    انضم للجلسة
    </Btn>
  `,
  methods: {
    action: action('button-clicked'),
  },
})

// named export Filled to create respective story
export const Filled = BtnTemplate.bind({})
// add source code for individual story
// parameters at story level
Filled.parameters = {
  docs: {
    source: {
      code: '`<Btn> ... </Btn>`',
    },
  },
}
