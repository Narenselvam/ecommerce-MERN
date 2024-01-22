import { Alert } from "react-bootstrap";

const Message = ({ variant, message }) => {
  return <Alert variant={variant}>{message}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
