import React, { ReactNode } from "react";
import { Header, Icon, Menu, Segment } from "semantic-ui-react";
type SectionHeaderProps = {
  text: string;
  description: string;
  children?: ReactNode;
};
const SectionHeader = ({ text, description, children }: SectionHeaderProps) => (
  <Menu secondary>
    <Menu.Item>
      <h2>
        {text} <span style={{ color: "grey" }}>{description}</span>
      </h2>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item>{children}</Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default SectionHeader;
