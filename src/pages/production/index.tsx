import Header from '@components/header';
import { Container } from './index.style';
import TabMenu from './tab-menu';
import OptionSelector from './option-selector';
import Content from '@pages/production/content';
import ButtonGroup from './button-group';
import { useSearchParams } from 'react-router-dom';

function CustomPattern() {
  const [searchParams] = useSearchParams();
  const step: number = Number(searchParams.get('step'));

  if (step < 0 || step > 3) {
    return <div>올바르지 않은 접근입니다.</div>;
  }

  return (
    <>
      <Container>
        <Header />
        <TabMenu step={step} />
        <div className={`content_cntr ${step === 2 && 'row'}`}>
          {step !== 2 && <Content direction="row" />}
          {step === 2 && <Content direction="column" />}
          <div className="footer">
            {step === 0 && <OptionSelector shape="square" data={'pattern'} />}
            {step === 1 && <OptionSelector shape="square" data={'wheel'} />}
            {step === 2 && (
              <div className="side_cntr">
                <OptionSelector shape="circle" data={'font'} />
                <OptionSelector shape="circle" data={'color'} />
                <div>&nbsp;</div>
              </div>
            )}
            {step === 3 && <OptionSelector shape="square" data={'accessory'} />}
            {step === 2 ? <ButtonGroup step={step} position="absolute" /> : <ButtonGroup step={step} />}
          </div>
        </div>
      </Container>
    </>
  );
}

export default CustomPattern;
