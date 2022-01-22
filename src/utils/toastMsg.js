import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastMsg = (message, type) => {
  let msg = "";
  switch (type) {
    case "success":
      msg = `${message}. Success`;
      break;
    case "warn":
      msg = `${message}. Warning`;
      break;
    case "info":
      msg = `${message}. Info`;
      break;
    default:
      break;
  }

  toast[type](msg, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toastMsg;
