import { useSelector } from "react-redux";

export default function Account2() {
  let data = useSelector((state) => {
    console.log(state);
    return state;
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-blue-500 mb-4">Account Details</h2>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Balance</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">{data.account.balance}</td>
            <td className="py-2 px-4 border-b">{data.account.fullName}</td>
            <td className="py-2 px-4 border-b">{data.account.mobile}</td>
          </tr>
        </tbody>
      </table>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              TimeStamp
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.transaction.map((tr, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tr.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tr.timestamp}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tr.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>




    </div>
  );
}
