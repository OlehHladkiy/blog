import styled from "styled-components";
import Layout from "antd/lib/layout";
import AntdMenu from "antd/lib/menu";

const { Header: LayoutHeader } = Layout;

const Element = styled(LayoutHeader)`
  width: 100%;
`;

const Menu = styled(AntdMenu)`
  line-height: 64px;
  height: 100%;
`;

const MenuItem = styled(Menu.Item)``;

export {
  Element,
  Menu,
  MenuItem,
};
