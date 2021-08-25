import React from "react";
import {
  List,
  ChannelContainer,
  LeftSide,
  RightSide,
  Coluna,
  Avatar,
  Username,
  Info,
  WhiteCircle,
} from "./styles";

const ChanneList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Coluna>
          <Username>helen_df</Username>
          <Info>15 new videos</Info>
        </Coluna>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </ChannelContainer>
  );
  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChanneList;
