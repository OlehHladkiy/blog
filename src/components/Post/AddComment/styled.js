import styled from "styled-components";
import AntdForm from "antd/lib/form";
import AntdInput from "antd/lib/input";
import AntdButton from "antd/lib/button";
import CommonContainer from "../../../common/Container";

const Form = styled(AntdForm)``;
const Input = styled(AntdInput)``;
const Button = styled(AntdButton)``;
const Container = styled(CommonContainer)`
  margin: 10px;
  width: 400px;
  flex-direction: column;
`;

export {
  Form,
  Input,
  Button,
  Container,
};
