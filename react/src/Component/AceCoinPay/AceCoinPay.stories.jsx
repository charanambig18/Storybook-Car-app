import { fn } from "@storybook/test";
import AceCoinPay from "./AceCoinPay";

export default {
  component: AceCoinPay,
  title: "Componant/AceCoinPay",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    onArchiveTask: fn(),
    onPinTask: fn(),
  },
};

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_ARCHIVED",
    },
  },
};
