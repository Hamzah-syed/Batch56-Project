import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { Mail } from 'lucide-react'
const Hero = () => {
    return (

        <div className='flex flex-col gap-7 md:flex-row min-h-[300px] 
        bg-green-500 
        sm:bg-purple-500
        lg:bg-blue-500
         items-center px-4 justify-between '>
            {/* Left Side */}
            <div className='flex flex-col items-start gap-2'    >
                <h1 className='font-bold text-3xl'>
                    Hello Welcome to my website
                </h1>
                <p className='w-96'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ad praesentium culpa enim soluta voluptate eos incidunt voluptatibus nesciunt in inventore nulla dicta corrupti, minima rem, dolorum doloremque ducimus fuga!
                </p>

                <Button variant={"outline"} >
                    <Mail className="mr-2 h-4 w-4" /> Login with Email
                </Button>

            </div>

            {/* Right Side */}
            <div>
                <Image
                    width={400}
                    height={400}
                    src={"/hero-image.jpg"}
                    alt='Book Website' />
            </div>
        </div>
    )
}

export default Hero