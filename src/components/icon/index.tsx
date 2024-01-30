import { Wrapper } from './index.style';

interface IconProps {
  text: string;
  icon: string;
}

function Icon(props: IconProps) {
  return (
    <>
      <Wrapper className="icon" icon={props.icon} />
      <div>{props.text}</div>
    </>
  );
}

export default Icon;
