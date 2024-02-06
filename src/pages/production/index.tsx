import Header from '@components/header';
import { Container } from './index.style';
import { useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Pattern } from '@api/pattern';
import TabMenu from './tab-menu';
import OptionSelector from './option-selector';
import { selectedPatternIdState } from '@context/pattern';
import Content from '@pages/production/content';
import { useRecoilState } from 'recoil';
import ButtonGroup from './button-group';

function CustomPattern() {
  const [patterns, setPatterns] = useState<PatternData[]>([]);
  const [selectedItem] = useRecoilState(selectedPatternIdState);

  useEffect(() => {
    const getData = async () => {
      const patterns = await Pattern.list();
      setPatterns(patterns);
    };
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <TabMenu step={0} />
        <Content data={patterns[selectedItem]} />
        <div className="footer">
          <OptionSelector type="square" data={patterns} />
          <ButtonGroup step={0} />
        </div>
      </Container>
    </>
  );
}

export default CustomPattern;
