import React from 'react'
import { Button } from './ui/button'
import PurchaseButton from './PurchaseButton';

interface IBook {
    id: number
    name: string
    type: string
    available: boolean
}

const Cards = async () => {

    let res = await fetch("https://simple-books-api.glitch.me/books");

    let books: IBook[] = await res.json();

    return (
        <div>
            {
                books.map((book) => {
                    return (
                        <div key={book.id} className='border p-4 rounded m-4'>
                            <h2 >{book.name}</h2>
                            <PurchaseButton />
                        </div>)
                })
            }
        </div>
    )
}

export default Cards
{/* <div className='flex items-center justify-center gap-x-8 my-16'>
{
    books.map((book) => {
        return <div className='border-2 bg-slate-500 h-[200px]  w-40 p-2'>

            <h2 className='mb-4' >{book.name}</h2>
            <h2>{book.author}</h2>
        </div>
    })
}



{/* Card 1 */}
{/* <div className='h-48 border rounded bg-blue-500 flex-1'>
</div> */}
// </div >