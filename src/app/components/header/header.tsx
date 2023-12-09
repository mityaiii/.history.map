import HeaderHoc from './header.hoc';

export default function Header() {

  const sections = [
    { name: 'о проекте', path: '/' },
    { name: 'карта', path: '/map' },
    { name: 'цитаты', path: '/' },
    { name: 'персоналии', path: '/' },
  ]

  return (
    <HeaderHoc
      sections={sections}
    />
  );
}
