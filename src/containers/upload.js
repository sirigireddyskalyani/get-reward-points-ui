import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { expensesFileData } from "../store/expensesSlice";

const Upload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errors, setErrors, setValues, handleSubmit } = useFormik({
    initialValues: { file: null },
    validate: (values) => {
      const errors = {};
      if (!values.file) {
        errors.file = "Please upload valid JSON file";
      }
      return errors;
    },
    onSubmit: (value) => {
      expensesFileData(value.file)(dispatch);
      navigate("/");
    },
  });

  const handleOnFileUpload = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsText(event.currentTarget.files[0], "UTF-8");
    fileReader.onload = (e) => {
      try {
        const fileData = JSON.parse(e.target.result);
        if (fileData && fileData.data && fileData.data[0].username) {
          setValues({ file: fileData });
        } else {
          setValues({ file: null });
          setErrors({ file: "Invalid file format" });
        }
      } catch (e) {
        setValues({ file: null });
        setErrors({ file: "Invalid file format" });
      }
    };
  };

  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex flex-row">
            <button
              className="btn btn-sm m-2 w-16"
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <h2 className="card-title">Upload</h2>
          </div>
          <div className="flex flex-col mt-4">
            <div className="w-full m-1 flex justify-end">
              <a
                href="./expense_data.json"
                className="btn btn-link btn-sm"
                download
              >
                Download Sample JSON
              </a>
            </div>
            <div className="w-full m-1">
              <label htmlFor="formFile" className="form-label inline-block mb-2">
                Upload Expenses JSON file
              </label>
              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                type="file"
                id="formFile"
                onChange={handleOnFileUpload}
                accept=".json"
              />
              {errors && errors.file && (
                <label className="label">
                  <span className="label-text-alt text-red-600">{errors.file}</span>
                </label>
              )}
            </div>
            <div className="w-full m-1 flex justify-center">
              <button
                className="btn btn-sm btn-success m-2 w-24"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
