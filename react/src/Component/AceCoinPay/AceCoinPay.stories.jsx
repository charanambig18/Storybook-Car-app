import AceCoinPay from "./AceCoinPay";

export default {
  title: "Componant/AceCoinPay",
  component: AceCoinPay,
};

const Template = (args) => <AceCoinPay {...args} />;

export const Default = Template.bind({});
Default.args = {};
