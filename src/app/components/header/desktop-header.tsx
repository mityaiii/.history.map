import { motion } from 'framer-motion';
import { IHeaderHocProperties } from './header.hoc';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    translateY: 10,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export default function DesktopHeader(props: IHeaderHocProperties) {
  return (
    <div className='hidden lg:block absolute w-full bg-gray-700 bg-opacity-20 backdrop-blur-md text-white z-10'>
      <div className='w-5/6 mx-auto'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex h-20 justify-between mx-auto items-center'
        >
          <motion.div variants={item} className='text-xl px-5'>
            <Link href={'/'}>blockadamap.ru</Link>
          </motion.div>
          {props.sections.map((section, index) => {
            return (
              <motion.div key={index} variants={item} className='text-xl px-5'>
                <Link href={section.path}>{section.name}</Link>
              </motion.div>
            );
          })}
        </motion.div>
        <hr></hr>
      </div>
    </div>
  );
}
