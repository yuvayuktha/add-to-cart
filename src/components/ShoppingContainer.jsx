import React from 'react'
import { items } from "../cartdata";
import ShoppingItem from './ShoppingItem';

function ShoppingContainer() {
  return (
    <div className='section grid lg:grid-cols-3 lg:gird-cols-2 gap-6'>
        {
            items.map((item)=>{
                return <ShoppingItem key={item.id} item={item}/>
            })
        }
    </div>
  )
}

export default ShoppingContainer