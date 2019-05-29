import styled from "styled-components";
import Layout from "antd/lib/layout";
import CommonContainer from "../../common/Container";

const Container = styled(CommonContainer)`
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Wrapper = styled(Layout)`
`;

export {
  Container,
  Wrapper,
};
