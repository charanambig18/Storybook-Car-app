
import HotelGuestDashboard from "./HotelGuestDashboard";

export default {
  title: "Component/HotelGuestDashboard",
  component: HotelGuestDashboard,
};

const Template = (args) => <HotelGuestDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};
