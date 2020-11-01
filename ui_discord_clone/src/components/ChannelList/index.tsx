import React from "react";
import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre " />
      <ChannelButton channelName="trabalho " />
      <ChannelButton channelName="estudos " />
      <ChannelButton channelName="network " />
      <ChannelButton channelName="reforço " />
    </Container>
  );
};

export default ChannelList;
