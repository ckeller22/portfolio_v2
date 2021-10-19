import tw from "tailwind-styled-components";
import { links } from "../../data/statics";

import Icon from "./Icon";
import SideBar from "../layout/SideBar";

const LinkSideBar = () => {
  const icons = links.map((link) => {
    return <Icon url={link.url}>{link.svg}</Icon>;
  });

  const List = tw.ul(`
    flex
    flex-col
    space-y-5
  text-earth-gray-200
  `);

  return (
    <SideBar location="left">
      <List>{icons}</List>
    </SideBar>
  );
};

export default LinkSideBar;
