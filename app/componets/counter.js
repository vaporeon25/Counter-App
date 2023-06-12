import { useState } from "react"

const Counter = () => {

const IncrementCounter = ()=>{
    setCount(count + 1);
}

    const [ count, setCount ] = useState(0);
return (
<div>
    <h1 className="componetheading">Counter</h1>
    <p className="counterLable">Count:{count}</p>
    <button className="fancybutton" onClick={() => IncrementCounter()}>Increment</button>
    <button className="fancybutton">Decrement</button>
    <button className="fancybutton">Reset</button>
</div>
)
}
export default Counter;