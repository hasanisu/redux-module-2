import { decrement, increment } from "./redux/features/countSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="flex gap-5 border border-purple-500 p-10 bg-slate-300 rounded-md">
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-2 bg-green-500 text-white font-semibold text-2xl rounded-md"
        >
          Increment
        </button>
        <h1 className="flex justify-center items-center text-2xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-2 bg-red-500 text-white font-semibold text-2xl rounded-md"
        >
          Decrement
        </button>
      </div>
      {count >= 5 &&
        Array.from({ length: Math.floor(count / 5) }, (_, index) => (
          <div key={index} className="w-10 h-10 bg-red-500 ml-2 mr-2"></div>
        ))}
    </div>
  );
}

export default App;
