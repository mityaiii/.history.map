import HeaderHoc from './header.hoc';

export default function Header() {

  const sections = [
    { name: 'о проекте', path: '/home' },
    { name: 'карта', path: '/' },
    { name: 'цитаты', path: '/' },
    { name: 'персоналии', path: '/' },
  ]

  return (
    <HeaderHoc
      sections={sections}
    />
  );
}
