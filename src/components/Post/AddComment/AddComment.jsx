import React from "react";
import PropTypes from "prop-types";
import {
  Form, Input, Button, Container,
} from "./styled";

const { TextArea } = Input;

function AddComment({
  onChange,
  onSubmit,
  value,
}) {
  return (
    <Container>
      <Form.Item>
        <TextArea placeholder="Enter comment..." rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Container>
  );
}

AddComment.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AddComment;
