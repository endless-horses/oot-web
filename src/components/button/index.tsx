import { Wrapper } from './index.style';

interface ButtonProps {
  text: string;
  inversion?: boolean;
  onClick: React.MouseEventHandler<HTMLInputElement>;
}

function Button(props: ButtonProps) {
  return (
    <Wrapper type="button" inversion={props.inversion ? 'true' : 'false'} value={props.text} onClick={props.onClick} />
  );
}

export default Button;
