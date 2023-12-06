import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='flex py-10 sm:py-20 flex-col md:flex-row items-center'
    >
      <Image
        className='rounded-lg w-1/2 h-fit hidden md:block'
        src='/images/photo.png'
        width={430}
        height={580}
        alt='Picture of the author'
      />
      <div className='md:w-1/2 md:pl-10 flex flex-col'>
        <h1 className='font-bold text-5xl justify-self-start text-center md:text-left'>О проекте</h1>
        <p className='text-xl justify-self'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </motion.div>
  );
}
