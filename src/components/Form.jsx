import React, { useState } from "react";
import { useDispatch } from "react-redux";
export default function Form() {
  let dispatch = useDispatch();
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <>
      {/* <form className="max-w-sm mx-auto"> */}
      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter name
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={name}
          onChange={(e) => {
            let data = e.target.value;
            setName(data);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "nameUpdate", payload: name });
            setName("");
          }}
          className="bg-red-500"
        >
          Upadte
        </button>
      </div>

      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter mobile
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={mobile}
          onChange={(e) => {
            let data = e.target.value;
            setMobile(data);
          }}
        />

        <button
          onClick={() => {
            dispatch({ type: "mobileUpdate", payload: mobile });
            setMobile("");
          }}
          className="bg-sky-500 rounded-xl"
        >
          Mobile update
        </button>
      </div>

      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter amount to deposit
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          value={amount}
          onChange={(e) => {
            let data = e.target.value;
            setAmount(data);
          }}
        />

        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: amount });
            setName("");
          }}
          className="bg-green-500 rounded-xl "
        >
          deposit Amount
        </button>
      </div>


      <div className="mb-5">
        <label
          htmlFor="base-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter amount to deposit
        </label>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

          value={amount}
          onChange={(e) => {
            let data = e.target.value;
            setAmount(data);
          }}
        />

        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: amount });
            setAmount("");
          }}
          className="bg-gray-500 rounded-xl "
        >
          withdraw Amount
        </button>
      </div>
      {/* </form> */}
    </>
  );
}
