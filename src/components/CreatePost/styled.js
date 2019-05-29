import styled from "styled-components";
import AntdSpin from "antd/lib/spin";
import CommonContainer from "../../common/Container";
import CommonAlert from "../../common/Alert";

const Container = styled(CommonContainer)`
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 64px);
  width: 100%;
  padding: 120px 100px;

  position: relative;
`;

const Text = styled.span`
  margin: 0 0 40px 0;
  font-size: 40px;
`;

const Spin = styled(AntdSpin)``;
const Alert = styled(CommonAlert)`
  width: 200px;
  position: absolute;
  z-index: 1000;
  top: -450px;
  left: 50%;
  transform: translate(-50%);
`;

export {
  Container,
  Text,
  Spin,
  Alert,
};
