import btn from './index.js';
import '../../index.css';

export default {
  title: 'Buttons',
  component: btn,
  argTypes: {
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: 'Click Me',
      description: 'Text that is displayed in the button.',
      table: {
        type: { summary: 'Click Me' },
      },
      control: { type: 'text' },
    },
  },
};

const Template = (args) => ({
  components: { btn },

  setup() {
    return { args };
  },
  template: '<btn v-bind="args"/>',
});

export const Standard = Template.bind({});
Standard.args = {
  primary: true,
};
