import React from "react";

const AddStudentFormView = ({ onInputChange, getFormValue,onSubmit,error }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstName">Öğrenci adı</label>
        <input
          value={getFormValue("firstName")}
          onChange={(event) => onInputChange("firstName", event.target.value)}
          id="firstName"
          type={"text"}
        />
        {
            error.field === "firstName" && <p>{error.message}</p>
        }
      </div>
      <div>
        <label htmlFor="lastName">Öğrenci soyadı</label>
        <input
          value={getFormValue("lastName")}
          onChange={(event) => onInputChange("lastName", event.target.value)}
          id="lastName"
          type={"text"}
        />
        {
            error.field === "lastName" && <p>{error.message}</p>
        }
      </div>
      <div>
        <label htmlFor="studentNumber">Öğrenci Numarası</label>
        <input
          value={getFormValue("studentNumber")}
          onChange={(event) => onInputChange("studentNumber", event.target.value)}
          id="studentNumber"
          type={"text"}
        />
        {
            error.field === "studentNumber" && <p>{error.message}</p>
        }
      </div>
      <div>
        <button type="submit">Kaydet</button>
      </div>
    </form>
  );
};

export default AddStudentFormView;
