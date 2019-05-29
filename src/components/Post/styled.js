import styled from "styled-components";
import CommonContainer from "../../common/Container";

const Container = styled(CommonContainer)`
  min-height: calc(100vh - 64px);
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

const Title = styled.span`
  margin: 10px;
  font-size: 40px;
`;
const Description = styled.p`
  font-size: 18px; 
`;

export {
  Container,
  Title,
  Description,
};
