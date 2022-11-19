import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const SectionHeader = () => (
  <div>
    <Header as="h3" textAlign="right">
      Float Right
    </Header>
    <Header as="h2" textAlign="left">
      <Icon name="settings" />
      <Header.Content>
        Account Settings
        <Header.Subheader>Manage your preferences</Header.Subheader>
      </Header.Content>
    </Header>
  </div>
);

export default SectionHeader;
