import MobileHeader from './mobile-header';
import DesktopHeader from './desktop-header';
import { Url } from 'next/dist/shared/lib/router/router';

interface ISection {
  name: string;
  path: Url;
}

export interface IHeaderHocProperties {
  sections: ISection[];
}

export default function HeaderHoc(props: IHeaderHocProperties) {
  return (
    <>
      <MobileHeader sections={props.sections} />
      <DesktopHeader sections={props.sections} />
    </>
  );
}
