import { useSelector,useDispatch } from "react-redux";
import { increment,decrement,reset,incrementByAmount,decrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [amount,setAmount] = useState(0);

    return (
        <div>
            <h1>Counter with Redux</h1>
            <div>
                <p>{count}</p>            
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            <br></br>           
            <div>
                <div>
                    <label>Enter the amount</label>
                    <input type="number" onInput={(e)=> setAmount(Number(e.target.value))}/>
                </div>
                <div>
                    <button onClick={() => dispatch(incrementByAmount(amount))}>+</button>
                    <button onClick={() => dispatch(decrementByAmount(amount))}>-</button>
                </div>
            </div>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter;