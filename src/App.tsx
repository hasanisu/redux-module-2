import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/countSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className=" flex border border-purple-500 p-10">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 rounded-md bg-green-500 text-xl font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 rounded-md bg-red-500 text-xl font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
