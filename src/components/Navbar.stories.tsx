import type { Meta, StoryObj } from 'storybook-solidjs';
import { BsGithub } from 'solid-icons/bs'
import Navbar from './Navbar';

const meta: Meta<typeof Navbar> = {
  component: Navbar,
}

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  render: () => <Navbar title="Jackson Salopek" items={[
    { text: "Resume", link: "#" },
    { text: "Apps", link: "#" },
    { text: "Blog", link: "#" },
    { icon: BsGithub, link: "https://github.com/jacksonsalopek" }
  ]} />,
};
