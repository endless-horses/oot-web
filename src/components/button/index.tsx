import { Wrapper } from './index.style';

interface ButtonProps {
  text: string;
  inversion?: boolean;
}

function Button(props: ButtonProps) {
  return <Wrapper type="button" inversion={props.inversion ? 'true' : 'false'} value={props.text} />;
}

export default Button;
