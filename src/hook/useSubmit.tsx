import { useState } from "react";
import axios from "axios";
import { CommentFormType } from "@/components/CommentSection";

const useCommentSubmit = () => {
  const [loading, setLoading] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = async (
    data: CommentFormType,
    currentComment: any,
    reset: any
  ) => {
    // console.log("Dữ liệu gửi:", { ...data, rootComment: currentComment });
    try {
      setLoading(true);
      const res = await axios.post("http://14.225.205.200:2228/insert-excel" || "", {
        ...data,
        sheet_id: "1qKZ02of1fnr4Anc1QNB5fHVoPW_i3ke4q07RkS7j4Eg",
        sheet_name: "Blanca",
      });
      setLoading(false);
      reset();
      setSnackbarMessage(
        "Gửi thành công, chúng tôi sẽ liên hệ trong thời gian sớm nhất!"
      );
      setSnackbarSeverity("success");
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);

      // console.log("res", res);
    } catch (error) {
      // console.log("error", error);
      setLoading(false);
      setSnackbarMessage("Gửi thông tin thất bại. Vui lòng thử lại sau.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      setTimeout(() => {
        setOpenSnackbar(false);
      }, 3000);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return {
    loading,
    snackbarMessage,
    snackbarSeverity,
    openSnackbar,
    onSubmit,
    handleCloseSnackbar,
  };
};

export default useCommentSubmit;
