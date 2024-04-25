import React from 'react'

let books = [
    {
        name: "Book 1",
        author: "Hamzah"
    },
    {
        name: "Book 2",
        author: "Ali"
    },
    {
        name: "Book 3",
        author: "Hamzah"
    },
    {
        name: "Book 4",
        author: "Hamzah"
    },
]


const Cards = () => {

    console.log(books);

    return (
        <div className='flex items-center justify-center gap-x-8 my-16'>
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
        </div>
    )
}

export default Cards