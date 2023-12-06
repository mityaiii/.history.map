import Image from 'next/image';

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export default function Sections({ children } : Props) {
  return (
    <div>
      <div className='bg-white h-[2vh] rounded-t-3xl translate-y-[calc(-2vh+1px)]'>
        <Image
          className='mx-auto translate-y-[-40%]'
          src='/icons/mouse.svg'
          width={50}
          height={80}
          alt='Mouse icon'
        />
      </div>
      <div className='w-[90vw] lg:w-[60vw] mx-auto'>
        { children }
      </div>
    </div>
  );
}
