import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Comment, Tooltip } from "./styled";

function CommentComponent({
  body = "",
  date = new Date(),
}) {
  const datetime = (
    <Tooltip
      title={moment(date)
        .subtract(2, "days")
        .format("YYYY-MM-DD HH:mm:ss")
      }
    >
      <span>
        {moment()
          .subtract(moment(date), "days")
          .from(moment(date))
        }
      </span>
    </Tooltip>
  );

  return (
    <Comment
      author="Anonyme"
      avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      content={<p>{body}</p>}
      datetime={datetime}
    />
  );
}
CommentComponent.propTypes = {
  body: PropTypes.string,
  date: PropTypes.string,
};


export default CommentComponent;
