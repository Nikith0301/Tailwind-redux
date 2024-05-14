import React from "react";
import { useSelector } from "react-redux";
export default function Account() {
    let data = useSelector((state) => {
        return state;
      });

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pronav</td>
              <td>786845784</td>
              <td>5000</td>
            </tr>

            <tr>
              <td>{data.fullName}</td>
              <td>{data.mobile}</td>
              <td>{data.balance}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
