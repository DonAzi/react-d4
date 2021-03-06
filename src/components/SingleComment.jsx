import { ListGroup, Button } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWRjM2EzNmYyNjM3ODAwMTVlNTBkMWIiLCJpYXQiOjE2NDE5MzI0MTgsImV4cCI6MTY0MzE0MjAxOH0.i0D32_MiWljqUQyXC2j4CL0V4tMZRe9MbB5c64-eIwY",
        },
      }
    );
    if (response.ok) {
      alert("Deleted");
    } else {
      alert("failed to Delete..");
    }
  } catch (error) {
    alert("You have a problem, find it");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="btn-sm ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      DELTE
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
