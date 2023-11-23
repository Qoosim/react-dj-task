import React, { useEffect, useState } from 'react'
import BarChart from '../../components/chart/BarChart';
import { useLocation } from "react-router-dom";

const USER_DATA_URL = "https://stg.dhunjam.in/account/admin/4";

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [newValue, setNewValue] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const token = location.state;
    const getUserData = async () => {
      try {
        const userRes = await fetch(USER_DATA_URL, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userRes.ok) {
          throw Error("failed to get user");
        }
        const result = await userRes.json();
        setUserData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [userData, location.state]);

  const UpdatePrice = async () => {
    try {
      const userToken = location.state;
      const parsedValue = parseInt(newValue);
      setUserData((prev) => ({
        ...prev,
        amount: { ...prev.amount, category_6: parsedValue },
      }));
      const updateData = { amount: userData?.amount };
      setNewValue("");

      const updateRes = await fetch(USER_DATA_URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(updateData),
      });

      if (!updateRes.ok) {
        throw Error("Failed to update price. Check your input and try again.");
      }
      console.log("Stored Data:", userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col items-center h-screen w-full pt-8">
      <h1 className="text-3xl font-bold my-4">Social, Hebbal on Dhan Jam</h1>
      <div className="w-[35%]">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm">Do you want to charge your <br />customers for requesting songs?</span>
          <div className="flex gap-4">
            <label htmlFor="" className="flex justify-center items-center gap-2">
              <input type="radio" className="w-4 h-4" name="radio" />
              Yes
            </label>
            <label htmlFor="" className="flex justify-center items-center gap-2">
              <input type="radio" className="w-4 h-4" name="radio" />
              No
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm">Custom songs request amount- </span>
          <div className="w-44 border border-slate-300 p-1 rounded-lg text-center">444</div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm">Regular song request amounts,<br />from high to low-</span>
          <div className="flex justify-center items-center gap-2">
            <div
              className="px-3 py-1 border border-slate-300 p-1 rounded-lg text-center"
            >
              199
            </div>
            <div
              className="px-3 py-1 border border-slate-300 p-1 rounded-lg text-center"
            >
              149
            </div>
            <div
              className="px-3 py-1 border border-slate-300 p-1 rounded-lg text-center"
            >
              99
            </div>
            <div
              className="px-3 py-1 border border-slate-300 p-1 rounded-lg text-center"
            >
              49
            </div>
          </div>
        </div>
        {userData && (
          <BarChart
            custom={userData.amount.category_6}
            category_7={userData.amount.category_7}
            category_8={userData.amount.category_8}
            category_9={userData.amount.category_9}
            category_10={userData.amount.category_10}
          />
        )}
        <button className="w-full bg-[#6741D9] p-2 rounded-lg mt-10">Save</button>
      </div>
    </main>
  )
}

export default AdminDashboard;