import { connect } from "react-redux";
import { decrement, increment } from "../redux/counters/actions";

function Counter({ count, increment, decrement, id }) {
  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded shadow"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // if we send any data from parent component to child component still we can access that data using ownProps
  console.log(ownProps);
  return {
    count: state.value,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment(2)),
    decrement: () => dispatch(decrement(1)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
