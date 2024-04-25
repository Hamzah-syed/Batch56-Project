import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between p-4 '>
            <div>
                Hotel
            </div>
            <ul className='flex gap-4'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar