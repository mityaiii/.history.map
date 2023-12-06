import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface IPersonProperties {
  name: string;
  role: string;
  path: string | StaticImport;
}

export default function Person(props: IPersonProperties) {
  return (
    <div className='m-5 sm:m-10 w-20 sm:w-40 h-fit'>
      <Image
        className='w-20 h-20 sm:w-40 sm:h-40 rounded-full bg-slate-300'
        src={props.path}
        width={100}
        height={100}
        alt={`Picture of ${props.name}`}
      ></Image>
      <h3 className='text-sm sm:text-xl text-center'>{props.name}</h3>
      <p className='text-xs sm:text-lg text-center text-slate-400'>
        {props.role}
      </p>
    </div>
  );
}
