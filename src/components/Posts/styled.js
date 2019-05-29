import styled from "styled-components";
import Layout from "antd/lib/layout";
import CommonContainer from "../../common/Container";

const { Content } = Layout;

const Container = styled(CommonContainer)`
  justify-content: flex-start;
  background: #fff;
  min-height: calc(100vh - 64px);
  height: auto;
`;

const Wrapper = styled(Content)`
  padding: 0 50px;
`;

export {
  Container,
  Wrapper,
};
