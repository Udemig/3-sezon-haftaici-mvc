import axios from "axios";
import { useEffect, useState } from "react";

export const useGetStudents = () => {
  const [students, setStudents] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    setPending(true)
    axios
      .get("http://localhost:3004/students")
      .then((res) => {
        setTimeout(() => {
          setPending(false);
          setStudents(res.data);
          setSuccess(true);
        }, 2000);
      })
      .catch((err) => {
        setPending(false);
        setError(true);
        setErrorMessage("Students verisi çekilirken bir hata oluştu");
      });
  }, []);
  return { students, pending, error, errorMessage, success };
};
