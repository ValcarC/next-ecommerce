import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div className='relative w-full h-80'>

            <Image src='https://images.pexels.com/photos/29784884/pexels-photo-29784884/free-photo-of-acogedor-cafe-con-leche-de-invierno-en-graz-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
             />

            <Image src='https://images.pexels.com/photos/11550773/pexels-photo-11550773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md'
             />

        </div>

        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>
            My Description
        </div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-zinc-50'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div className='relative w-full h-80'>

            <Image src='https://images.pexels.com/photos/29784884/pexels-photo-29784884/free-photo-of-acogedor-cafe-con-leche-de-invierno-en-graz-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
             />

            <Image src='https://images.pexels.com/photos/11550773/pexels-photo-11550773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md'
             />

        </div>

        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>
            My Description
        </div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-zinc-50'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div className='relative w-full h-80'>

            <Image src='https://images.pexels.com/photos/29784884/pexels-photo-29784884/free-photo-of-acogedor-cafe-con-leche-de-invierno-en-graz-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
             />

            <Image src='https://images.pexels.com/photos/11550773/pexels-photo-11550773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md'
             />

        </div>

        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>
            My Description
        </div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-zinc-50'>Add to Cart</button>

        </Link>

        <Link href='/test' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>

        <div className='relative w-full h-80'>

            <Image src='https://images.pexels.com/photos/29784884/pexels-photo-29784884/free-photo-of-acogedor-cafe-con-leche-de-invierno-en-graz-austria.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
             />

            <Image src='https://images.pexels.com/photos/11550773/pexels-photo-11550773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            alt='' 
            fill 
            sizes='25vw' 
            className='absolute object-cover rounded-md'
             />

        </div>

        <div className='flex justify-between'>
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>
            My Description
        </div>
        <button className='rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-zinc-50'>Add to Cart</button>

        </Link>

    </div>
  )
}
