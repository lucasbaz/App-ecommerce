import { Button } from "@mui/material"
import { useState } from 'react';

const ItemCount = ({stock, initialValue}) => {

    const [count, setCount] = useState (0)
    const [countStock, setStock] = useState ({stock})

    const addCount = () =>{
       // if (countStock > stock) {
        //}
        setCount(count + 1)

    }

    const restCount = () =>{
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='CountStyle'>
            <Button onClick={restCount} >-</Button>
            <p>{count}</p>
            <Button onClick={addCount}>+</Button>
        </div>
    )

}

export default ItemCount