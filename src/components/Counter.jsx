import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count</h1>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
        </div>
    );
}

export default Counter;