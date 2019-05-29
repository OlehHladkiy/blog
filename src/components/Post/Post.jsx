import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Title, Description } from "./styled";
import Comment from "./Comment";
import AddComment from "./AddComment";

function Post({
  id,
  title = "",
  body = "",
  comments = [],
  ...rest
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{body}</Description>
      {
        comments.map(item => (
          <Fragment key={item.id}>
            <Comment {...item} />
          </Fragment>
        ))
      }
      <AddComment postId={id} {...rest}/>
    </Container>
  );
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string,
  comments: PropTypes.array,
};

export default Post;
