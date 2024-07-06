import React from "react";

const ReferralForm = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-12 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Refer a Course</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer</label>
            <input
              id="referrer"
              type="text"
              className="w-full border rounded-xl shadow-sm px-12 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee</label>
            <input
              id="referee"
              type="text"
              className="w-full border rounded-xl shadow-sm px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border rounded-xl shadow-sm px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Course Name</label>
            <input
              id="coursename"
              type="text"
              className="w-full border rounded-xl shadow-sm px-3 py-2"
              required
            />
          </div>
          <div className="flex  items-center justify-center">
            <button
              type="button"
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
