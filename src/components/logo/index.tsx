import { Wrapper } from './index.style';
import defaultLogo from '@assets/icon/logo-default.svg';
import inversionLogo from '@assets/icon/logo-inversion.svg';

interface LogoProps {
  inversion: boolean;
  type?: 'small' | 'large';
}

function Logo(props: LogoProps) {
  return <Wrapper className="logo" image={props.inversion ? inversionLogo : defaultLogo} type={props.type} />;
}

export default Logo;
