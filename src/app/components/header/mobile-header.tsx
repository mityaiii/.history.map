import { useEffect, useState } from 'react';
import { IHeaderHocProperties } from './header.hoc';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollBlock } from '@/app/hooks/useScrollBlock';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const navigation = {
  hidden: {
    WebkitBackdropFilter: 'blur(0px)',
    backdropFilter: 'blur(0px)',
    height: 'auto',
  },
  show: {
    WebkitBackdropFilter: 'blur(100px)',
    backdropFilter: 'blur(100px)',
    height: '100%',
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

export default function MobileHeader(props: IHeaderHocProperties) {
  const [open, setOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (open) blockScroll();
    else allowScroll();
  }, [open, blockScroll, allowScroll]);

  return (
    <motion.div
      initial={false}
      variants={navigation}
      animate={open ? 'show' : 'hidden'}
      className='absolute lg:hidden w-full text-white z-10'
    >
      <div className='w-5/6 mx-auto'>
        <motion.div
          variants={container}
          initial='hidden'
          animate='show'
          className='flex h-20 justify-between w-full mx-auto items-center'
        >
          <Link className='text-xl' href={'/'}>
            blockadamap.ru
          </Link>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='w-10 h-10 flex justify-center items-center'
            onClick={() => setOpen(!open)}
          >
            <Image
              src={open ? '/icons/x.svg' : '/icons/burgermenu.svg'}
              width={40}
              height={40}
              alt=''
            ></Image>
          </motion.button>
        </motion.div>
        <hr />
        {props.sections.map((section, index) => {
          return (
            <motion.div key={index} variants={item}>
              <div
                className='text-xl h-20 flex items-center cursor-pointer'
                onClick={() => setOpen(false)}
              >
                <Link href={section.path}>{section.name}</Link>
              </div>
              <hr></hr>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
