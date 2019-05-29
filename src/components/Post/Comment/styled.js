import styled from "styled-components";
import AntdComment from "antd/lib/comment";
import AntdTooltip from "antd/lib/tooltip";

const Comment = styled(AntdComment)`
  border-bottom: 1px solid rgb(205, 205, 205);
  width: 50%;
`;

const Tooltip = styled(AntdTooltip)``;

export {
  Comment,
  Tooltip,
};
