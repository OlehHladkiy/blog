import React from "react";
import PropTypes from "prop-types";
import { Container, Text, Alert } from "./styled";
import Form from "./Form";

function CreatePost(props) {
  return (
    <Container>
      <Text>Create new Post</Text>
      <Form {...props} />
      {
        props.createSuccess
          ? <Alert
              message="Post created successfully"
              closable
              type="success"
              showIcon
            />
          : null
      }
    </Container>
  );
}
CreatePost.propTypes = {
  createSuccess: PropTypes.bool,
};

export default CreatePost;
