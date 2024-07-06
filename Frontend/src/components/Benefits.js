import React from "react";

const Benefits = () => {
  return (
    <div className="py-10 px-6 w-full h-[785px]">
      <div className="text-center mb-8">
        <p className="text-3xl font-semibold">
          What Are The <span className="text-blue-500">Referral Benefits?</span>
        </p>
      </div>
      <div className="flex p-12">
        <div className="w-3/10 bg-white shadow-md rounded-lg p-4">
          <h3 className="font-semibold text-lg bg-blue-100 mb-4">
            All Programs
          </h3>
          <ul className="text-left space-y-2">
            <li className="py-2 px-4  rounded cursor-pointer">
              Product Management
            </li>
            <li className="py-2 px-4 cursor-pointer">Strategy & Leadership</li>
            <li className="py-2 px-4 cursor-pointer">Business Management</li>
            <li className="py-2 px-4 cursor-pointer">Fintech</li>
            <li className="py-2 px-4 cursor-pointer">Senior Management</li>
            <li className="py-2 px-4 cursor-pointer">Data Science</li>
            <li className="py-2 px-4 cursor-pointer">Digital Transformation</li>
            <li className="py-2 px-4 cursor-pointer">Business Analytics</li>
          </ul>
        </div>

        <div className="w-4/5 ">
          <div className="flex items-center justify-end ">
            <p className="mr-2">Enrolled</p>
            <input type="checkbox" className="toggle-checkbox" />
          </div>
          <div className="flex justify-between items-center bg-[#EBF3FF59] shadow-md rounded-lg p-4 ml-4  ">
            <table className="table-auto w-full text-left">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2">Programs</th>
                  <th className="px-4 py-2">Referrer Bonus</th>
                  <th className="px-4 py-2">Referee Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">
                    Professional Certificate Program in Product Management
                  </td>
                  <td className="border px-4 py-2">₹7,000</td>
                  <td className="border px-4 py-2">₹9,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    PG Certificate Program in Strategic Product Management
                  </td>
                  <td className="border px-4 py-2">₹9,000</td>
                  <td className="border px-4 py-2">₹11,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Executive Program in Data Driven Product Management
                  </td>
                  <td className="border px-4 py-2">₹10,000</td>
                  <td className="border px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Executive Program in Product Management and Digital
                    Transformation
                  </td>
                  <td className="border px-4 py-2">₹10,000</td>
                  <td className="border px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Executive Program in Product Management
                  </td>
                  <td className="border px-4 py-2">₹10,000</td>
                  <td className="border px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Advanced Certification in Product Management
                  </td>
                  <td className="border px-4 py-2">₹10,000</td>
                  <td className="border px-4 py-2">₹10,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Executive Program in Product Management and Project
                    Management
                  </td>
                  <td className="border px-4 py-2">₹10,000</td>
                  <td className="border px-4 py-2">₹10,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white py-2 px-8 mt-8 rounded-lg  shadow-lg hover:bg-blue-400">
              Refer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
