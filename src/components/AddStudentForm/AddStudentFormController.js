import React, { useState } from "react";

import AddStudentFormView from "./AddStudentFormView";
import AddStudentFormModel from "./AddStudentFormModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudentFormController = () => {
  const navigate = useNavigate();
  const model = new AddStudentFormModel();
  const [form, setForm] = useState(model.state);
  const [error, setError] = useState(model.error);

  const onInputChange = (field, value) => {
    var newState = { ...form };
    newState[field] = value;
    setForm(newState);
  };

  const getFormValue = (field) => {
    return form[field];
  };

  const onSubmit = (event) => {
    event.preventDefault();
    /* validation */
    if (validateString(form.firstName).status === 400) {
      var newError = { ...error };
      newError["field"] = "firstName";
      newError["message"] = validateString(form.firstName).message;
      setError(newError);
      return;
    }
    if (validateString(form.lastName).status === 400) {
      var newError = { ...error };
      newError["field"] = "lastName";
      newError["message"] = validateString(form.lastName).message;
      setError(newError);
      return;
    }
    if (validateNumber(form.studentNumber).status === 400) {
      var newError = { ...error };
      newError["field"] = "studentNumber";
      newError["message"] = validateNumber(form.studentNumber).message;
      setError(newError);
      return;
    }
    axios
      .post("http://localhost:3004/students", form)
      .then((res) => navigate("/"))
      .catch((err) => {});
  };

  const validateString = (string) => {
    if (string.length < 3) {
      return {
        status: 400,
        message: "Uzunluk en az 3 karakter olmalıdır",
      };
    }
    return {
      status: 200,
      message: "Geçerli",
    };
  };

  const validateNumber = (number) => {
    if (number.length === 0) {
      return {
        status: 400,
        message: "Öğrenci numarası boş bırakılamaz",
      };
    }
    return {
      status: 200,
      message: "Geçerli",
    };
  };

  return (
    <AddStudentFormView
      onSubmit={onSubmit}
      getFormValue={getFormValue}
      onInputChange={onInputChange}
      error={error}
    />
  );
};

export default AddStudentFormController;
