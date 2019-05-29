import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Container, Wrapper } from "./styled";
import Card from "./Card";

function Posts({ posts = [], ...rest }) {
  return (
    <Wrapper>
      <Container>
        {
          posts.map(item => (
            <Fragment key={item.id}>
              <Card {...item} {...rest} />
            </Fragment>
          ))
        }
      </Container>
    </Wrapper>
  );
}

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
