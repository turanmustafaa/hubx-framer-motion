"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
const Advanced = () => {
    return (
        <div className='custom-class flex'>
            <motion.div className='relative w-[300px] custom-phone'
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Image src={'/assets/phone-2.png'} width={300} height={200} />

                <motion.div
                    className='absolute top-36 left-[-10px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/left-bar.png'} width={25} height={200} />
                </motion.div>
                <motion.div
                    className='absolute top-36 right-[-10px]'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Image src={'/assets/right-bar.png'} width={25} height={200} />
                </motion.div>

            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-col items-end text-end gap-2 custom-text'>
                <span className=' text-blue-500 text-sm'>ADVANCED FILTERS</span>
                <span className='text-lg'>Unique Filters</span>
                <span className='text-sm'>Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.</span>
                <span className='px-4 py-2 border-gray-100 border block w-fit cursor-pointer'> Learn More</span>
            </motion.div>
        </div>
    )
}

export default Advanced