import React from "react";
import streamThumbnail from "../../images/stream_thumbnail.jpg";
import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamRow,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem: React.FC = () => (
    <StreamContainer>
      <StreamThumbnail source={streamThumbnail} />
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>helen_df</StreamUsername>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Front-end mobile com React Native
          </StreamDescription>
          <StreamCategory numberOfLines={1}>
            Tecnology and Education
          </StreamCategory>
        </StreamRow>

        <TagRow>
          <TagView>
            <TagText>Portuguese</TagText>
          </TagView>

          <TagView>
            <TagText>React Native</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );

  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
