import * as React from "react";
import { List, Subheader, ListItem, Avatar, FontIcon } from "react-md";

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

class VideoList extends React.Component {
  render() {
    return (
      <div className="md-grid">
        <List className="md-cell md-paper md-paper--1">
          <Subheader primaryText="Top AvCom Videos:" primary />
          <ListItem
            leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
            rightIcon={<InfoIcon />}
            primaryText="Brunch this weekend?"
            secondaryText={
              "Ali Connors\nI'll be in your neighborhood sometime this week"
            }
            threeLines
          />
          <ListItem
            leftAvatar={<Avatar suffix="green">Q</Avatar>}
            rightIcon={<StarIcon />}
            primaryText="Summer BBQ"
            secondaryText={
              "to Alex, Scott, Jennifer\nWish I could come, but I'm out of town this weekend."
            }
            threeLines
          />
          <ListItem
            leftAvatar={<Avatar suffix="orange">A</Avatar>}
            rightIcon={<StarIcon />}
            primaryText="Oui Oui"
            secondaryText="Sandra Adams - Do you have Paris recommendations? Have you ever been?"
            threeLines
          />
        </List>
      </div>
    );
  }
}

export default VideoList;
