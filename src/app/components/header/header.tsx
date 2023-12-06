import HeaderHoc from './header.hoc';

export default function Header() {
  return (
    <HeaderHoc
      sections={[
        { name: 'о проекте', path: '/' },
        { name: 'карта', path: '/' },
        { name: 'цитаты', path: '/' },
        { name: 'персоналии', path: '/' },
      ]}
    />
  );
}
