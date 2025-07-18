import { useState } from "react";
import "./App.css";

function App() {
  let [displayVal, setDisplayVal] = useState("0");

  function calc(e) {
    let value = e.target.value;
    if (!value) return;

    if (value === "c") {
      setDisplayVal("0");
    } else if (value === "=") {
      try {
        //! eval will produce a number
        setDisplayVal(eval(displayVal).toString());
      } catch {
        setDisplayVal("Error");
      }
    } else {
      if (displayVal === "0") {
        setDisplayVal(value);
      } else {
        value = displayVal + value;
        setDisplayVal(value);
      }
    }
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <main className="bg-black min-w-[350px]  rounded-md px-3 py-1">
          <section className=" py-3">
            <p className="text-center capitalize font-semibold py-4 text-xl text-white">
              calculator
            </p>
            <input
              className="w-full bg-slate-400 py-3 px-2 font-bold"
              type="text"
              readOnly
              placeholder="0"
              value={displayVal}
            />
          </section>
          <section
            className=" flex flex-col py-4 gap-3"
            onClick={function (e) {
              calc(e);
            }}
          >
            <div className="flex  gap-2">
              <button
                className="bg-red-200 py-4 px-6 text-center font-bold rounded-lg text-red-700 flex-1"
                value={"c"}
              >
                C
              </button>

              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg text-lg"
                value={"/"}
              >
                /
              </button>
            </div>
            <div className="flex  gap-2">
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"1"}
              >
                1
              </button>

              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"2"}
              >
                2
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"3"}
              >
                3
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center text-lg font-bold rounded-lg flex-1"
                value={"*"}
              >
                *
              </button>
            </div>
            <div className="flex  gap-2">
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"4"}
              >
                4
              </button>

              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"5"}
              >
                5
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"6"}
              >
                6
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center text-lg font-bold rounded-lg flex-1"
                value={"+"}
              >
                +
              </button>
            </div>
            <div className="flex  gap-2">
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"7"}
              >
                7
              </button>

              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"8"}
              >
                8
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"9"}
              >
                9
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center text-lg font-bold rounded-lg flex-1"
                value={"-"}
              >
                -
              </button>
            </div>
            <div className="flex  gap-2">
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"."}
              >
                .
              </button>

              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"0"}
              >
                0
              </button>
              <button
                className="bg-green-200 py-4 px-6 text-center font-medium rounded-lg flex-1"
                value={"00"}
              >
                00
              </button>
              <button
                className="bg-green-700 py-4 px-6 text-center text-lg font-bold text-white rounded-lg flex-1"
                value={"="}
              >
                =
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
