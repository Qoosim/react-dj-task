import React from 'react'
import BarChart from '../../components/chart/BarChart';

const AdminDashboard = () => {
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
        <BarChart />
        <button className="w-full bg-[#6741D9] p-2 rounded-lg mt-10">Save</button>
      </div>
    </main>
  )
}
