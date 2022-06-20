import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { addExpense } from "../../store/expensesSlice";

const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "Please add name";
  } else if (!values.expenses) {
    errors.expenses = "Please add valid expense";
  }

  return errors;
};

const AddExpense = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState("");
  const { errors, handleChange, handleBlur, handleSubmit, isValid } =
    useFormik({
      initialValues: {
        username: "",
        description: "",
        expenses: 0,
      },
      validate,
      onSubmit: (value) => {
        addExpense(value)(dispatch);
        setShowModal("modal-close");
      },
    });

  return (
    <>
      <label
        data-testid="add-expense-btn"
        className="btn btn-sm btn-info modal-button"
        onClick={() => setShowModal("modal-open")}
      >
        Add Expense
      </label>

      <div className={`modal modal-bottom ${showModal} sm:modal-middle`}>
        <div className="modal-box">
          <div className="relative">
            <div className="flex justify-between">
              <h2 className="font-bold text-lg">Add Expense</h2>
              <label
                onClick={() => setShowModal("modal-close")}
                data-testid="add-expense-modal-close-btn"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Name</span>
                <span className="label-text-alt text-red-600">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                data-testid="add-expense-username-input"
                placeholder="Name ex..customer name"
                className="input input-bordered w-full"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors && errors.username && (
                <label className="label">
                  <span className="label-text-alt text-red-600">{errors.username}</span>
                </label>
              )}
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                id="description"
                name="description"
                placeholder="About expense details"
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Amount</span>
                <span className="label-text-alt text-red-600">*</span>
              </label>
              <input
                type="number"
                id="expenses"
                name="expenses"
                placeholder="Amount"
                className="input input-bordered w-full"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors && errors.expenses && (
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors.expenses}
                  </span>
                </label>
              )}
            </div>
            <div
              className="flex justify-end m-2"
              disabled={Object.keys(errors).length > 0 || !isValid}
              onClick={handleSubmit}
            >
              <button
                data-testid="add-expense-submit-btn"
                className="btn btn-sm btn-success m-2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
