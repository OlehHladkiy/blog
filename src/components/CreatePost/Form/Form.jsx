import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form, Input, Button } from "./styled";

class CreatePostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.createPost(values);
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.createSuccess !== this.props.createSuccess && this.props.createSuccess) {
      this.props.form.resetFields();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {
            getFieldDecorator("title", {
              rules: [{ required: true, message: "Please input title" }, {
                max: 20,
                message: "Choose a shorter title (< 20 symbols)",
              }],
            })(
              <Input
                placeholder="title"
              />,
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator("body", {
              rules: [{ required: true, message: "Please input description" }],
            })(
              <Input.TextArea placeholder="Description" />,
            )
          }
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

CreatePostForm.propTypes = {
  form: PropTypes.object,
  createPost: PropTypes.func,
  createSuccess: PropTypes.bool,
};

CreatePostForm.defaultProps = {
  createSuccess: null,
};

const wrappedCreatePostForm = Form.create({ name: "create_post" })(CreatePostForm);

export default wrappedCreatePostForm;
