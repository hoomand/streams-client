import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Header extends React.Component {
  state = {
    activeItem: "streamer"
  };
  handleItemClick = e => {
    console.log(e);
  };
  render() {
    const { activeItem } = this.state;
    return (
      <Menu secondary>
        <Menu.Item as={Link} to="/">
          streamer
        </Menu.Item>
        <Menu.Item position="right" as={Link} to="/streams/new">
          steams
        </Menu.Item>
        <Menu.Item
          position="right"
          name="login"
          active={activeItem === "login"}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default Header;
