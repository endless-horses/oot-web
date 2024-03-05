import Button from '@components/button';
import { Container } from './index.style';
import { useNavigate } from 'react-router';
import { Result } from '@api/result';
import { useRecoilState } from 'recoil';
import { selectedPatternState } from '@context/pattern';
import { selectedWheelState } from '@context/wheel';
import { selectedFontState } from '@context/font';
import { selectedColorState } from '@context/color';
import { selectedAccessoryState } from '@context/accessory';
import { ResultInfo } from '@api/result.types';

interface ButtonGroupProps {
  step: number;
  position?: 'default' | 'absolute';
}

function ButtonGroup(props: ButtonGroupProps) {
  const navigate = useNavigate();
  const [selectedPattern] = useRecoilState(selectedPatternState);
  const [selectedWheel] = useRecoilState(selectedWheelState);
  const [selectedFont] = useRecoilState(selectedFontState);
  const [selectedColor] = useRecoilState(selectedColorState);
  const [selectedAccessory] = useRecoilState(selectedAccessoryState);

  return (
    <Container className="button_group" position={props.position}>
      {props.step > 0 ? (
        <Button text="이전" inversion onClick={() => navigate(`/production?step=${props.step - 1}`)} />
      ) : (
        <></>
      )}
      <Button
        text={props.step < 3 ? '다음 단계로' : '결과 확인하기'}
        onClick={() => {
          if (props.step < 3) {
            navigate(`/production?step=${props.step + 1}`);
          } else {
            Result.create({
              patternId: selectedPattern + 1,
              wheelId: selectedWheel + 1,
              fontId: selectedFont + 1,
              colorId: selectedColor + 1,
              accessoryId: selectedAccessory + 1,
            }).then((resultInfo: ResultInfo) => {
              navigate(`/results/${resultInfo.id}`);
            });
          }
        }}
      />
    </Container>
  );
}

export default ButtonGroup;
