import { useState } from "react";
import { deposit, withdraw, updateName, updateMobile, reset } from "./bank";
import { addTransaction } from "./bank";
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");


const accntName=useSelector((state)=>{return state.account.fullName})

  let dispatch = useDispatch();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Account Form</h2>
      
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="form-input w-full px-4 py-2 border rounded mr-2"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => {
            dispatch(withdraw(amount))
            dispatch(
             addTransaction({
              timestamp: new Date().toISOString(),
              type: "debit",
              accountName: accntName,
              amount: amount,
             }))
            setAmount("");
          }}
        >
          Withdraw
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            dispatch(deposit(amount));
            dispatch(
              addTransaction({
                timestamp: new Date().toISOString(),
                type: "credit",
                accountName: accntName,
                amount: amount,
              })
            );

            setAmount("");
          }}
        >
          Deposit
        </button>
      </div>
      
      <div className="flex items-center mb-4">
        <input
          type="text"
          className="form-input w-full px-4 py-2 border rounded mr-2"
          placeholder="Enter name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            dispatch(updateName(fullName));
            setFullName("");
          }}
        >
          Update
        </button>
      </div>
      
      <div className="flex items-center mb-4">
        <input
          type="number"
          className="form-input w-full px-4 py-2 border rounded mr-2"
          placeholder="Enter mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            dispatch(updateMobile(mobile));
            setMobile("");
          }}
        >
          Update
        </button>
      </div>
      
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            dispatch(reset());
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
