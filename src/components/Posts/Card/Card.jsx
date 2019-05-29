import React from "react";
import PropTypes from "prop-types";
import { Card as CardStyled, Icon } from "./styled";

const { Meta } = CardStyled;

function Card({
  id,
  title,
  body,
  deletePostHandler,
  redirectToPostHandler,
}) {
  return (
    <CardStyled
      onClick={() => redirectToPostHandler(id)}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      style={{ margin: "15px auto" }}
      actions={
        // eslint-disable-next-line react/jsx-key
        [<Icon
          onClick={(e) => {
            e.stopPropagation();
            deletePostHandler(id);
          }}
          type="delete"/>]}
    >
      <Meta
        title={title}
        description={body.length > 25 ? body.split("").slice(0, 25).concat("...").join("") : body}
      />
    </CardStyled>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  deletePostHandler: PropTypes.func,
  redirectToPostHandler: PropTypes.func,
};

export default Card;
