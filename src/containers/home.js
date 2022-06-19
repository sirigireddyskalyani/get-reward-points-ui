import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddExpenseModal from "../components/modal/addExpense";
import RewardsTable from "../components/table/rewardsTable";

const Home = () => {
  const navigate = useNavigate();
  const {data} = useSelector(state => state.expenses)

  return (
      <div className="min-w-full min-h-full card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
            <h2 className="card-title">Rewards</h2>
            <div className="h-full flex justify-center md:justify-end">
              <AddExpenseModal />
              <button
                className="btn btn-sm btn-warning ml-1"
                onClick={() => navigate("upload")}
              >
                Upload Bulk expense
              </button>
            </div>
          </div>
          <div className="min-w-full min-h-full">
            <RewardsTable data={data} />
          </div>
        </div>
      </div>
  );
};

export default Home;
