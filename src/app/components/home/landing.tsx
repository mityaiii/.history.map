import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Landing() {
  return (
    <div className='text-white bg-[url("/images/landing.png")] 
    h-[95vh] bg-center bg-no-repeat bg-cover flex flex-col pt-20'>
      <div className='flex justify-center items-center h-full'>
        <div className='lg:w-2/3'>
          <motion.h1
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className='text-2xl lg:text-5xl font-bold text-center'
          >
            Интерактивная карта архивных дневников блокадного Ленинграда
          </motion.h1>
          <h1 className='text-lg lg:text-xl text-center lg:w-2/3 mx-auto py-10'>
            Интерактивная карта архивных дневников блокадного Ленинграда
          </h1>
          <motion.button
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            className='bg-white text-black p-5 rounded-lg flex mx-auto'
          >
            <div className='pr-4'>перейти к карте</div>
            <Image
              src='/icons/location-icon.svg'
              width={20}
              height={20}
              alt='Map icon'
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
