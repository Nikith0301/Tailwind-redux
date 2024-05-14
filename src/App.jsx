import { useState } from "react";

import "./App.css";
import Account from "./components/Account";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    //     <div class="bg-indigo-400 ">
    //       <div class="flex flex-row">
    //         <div class=" px-1 rounded  w-1/4 h-32 bg-green-500">01</div>
    //         <div class=" py-3 rounded-full w-1/4 bg-orange-400">02</div>
    //         <div class=" rounded-xl w-1/2 bg-gray-400">03</div>
    //         <button class="bg-sky-500/100 ">Markam</button>
    //       </div>

    //       <div class="py-4 flex flex-col">
    //         <div class="basis-1/4">01</div>
    //         <div class="basis-1/4">02</div>
    //         <div class="basis-1/2">03</div>
    //       </div>

    //       <div class="grid grid-cols-3 gap-4 bg-sky-700 size-80  rounded-xl" >
    //   <div class="flex justify-start">01</div>
    //   <div class=" h-3">2</div>
    //   <div>3</div>
    //   <div>4</div>
    //   <div>8</div>
    //   <div>6</div>
    //   <div>7</div>
    //   <div>5</div>
    //   <div>9</div>
    // </div>

    //     </div>
  <>
  <Form/>
  <Account/>
  </>

  );
}

export default App;
