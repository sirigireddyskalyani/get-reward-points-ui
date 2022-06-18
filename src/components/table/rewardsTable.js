import React from "react";

const RewardsTable = ({ data }) => {
  return (
    <div className="overflow-auto min-w-full min-h-full">
      <table className="table min-w-full min-h-full">
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Description</th>
            <th>Expense</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {!data ||
            (data && data.length === 0 && (
              <tr>
                <td colSpan={5}>
                  <div className="w-100 h-100 flex justify-center text-red">
                    <h3>No Records Found</h3>
                  </div>
                </td>
              </tr>
            ))}
          {data &&
            data.map((rec, index) => {
              return (
                <tr key={`${new Date().getTime()}_${index}_${Math.random()}`}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="https://api.lorem.space/image/face?hash=28212"
                            alt={rec.username}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{rec.username}</div>
                      </div>
                    </div>
                  </td>
                  <td>{rec.description}</td>
                  <td>{rec.expenses}</td>
                  <td>{rec.rewardPoints}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;
