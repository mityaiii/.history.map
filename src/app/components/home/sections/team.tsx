import Person from './person';

export default function Team() {
  return (
    <div>
      <h1 className='font-bold text-5xl text-center'>Наша команда</h1>
      <div className='flex justify-center flex-wrap'>
        <Person name={'Ivan Ivanov'} role={'Founder'} path={'/next.svg'} />
        <Person
          name={'Ivan Ivanov'}
          role={'Lead Designer'}
          path={'/next.svg'}
        />
        <Person
          name={'Ivan Ivanov'}
          role={'Lead Developer'}
          path={'/next.svg'}
        />
        <Person name={'Ivan Ivanov'} role={'Designer'} path={'/next.svg'} />
        <Person name={'Ivan Ivanov'} role={'Developer'} path={'/next.svg'} />
      </div>
    </div>
  );
}
