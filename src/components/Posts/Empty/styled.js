import styled from "styled-components";
import AntdEmpty from "antd/lib/empty";
import CommonContainer from "../../../common/Container";

const Container = styled(CommonContainer)`
  height: 100%;
  min-height: 90vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

const Empty = styled(AntdEmpty)``;

export {
  Container,
  Empty,
};
