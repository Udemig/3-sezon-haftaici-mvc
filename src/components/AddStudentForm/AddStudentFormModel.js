class AddStudentFormModel{
    state = {
        id: String(new Date().getTime()),
        firstName: "",
        lastName: "",
        studentNumber: ""
    }
    error = {
        field:"",
        message:""
    }
}

export default AddStudentFormModel



