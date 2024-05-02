"use client";

import React from 'react'
import { Button } from './ui/button'
import { placeOrder } from '@/actions/placeOrder';

const PurchaseButton = () => {


    return (
        <button onClick={() => placeOrder()} className='mt-3' >
            Purchase
        </button>
    )
}

export default PurchaseButton