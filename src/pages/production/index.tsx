import Header from '@components/header';
import { Container } from './index.style';
import { useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Pattern } from '@api/pattern';
import TabMenu from './tab-menu';
import OptionSelector from './option-selector';
import Content from '@pages/production/content';

function CustomPattern() {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  const [patterns, setPatterns] = useState<PatternData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const patterns = await Pattern.list();
      setPatterns(patterns);
    };
    getData();
  }, []);

  // const handleItemClick = (index: number) => {
  //   setSelectedItem(index);
  // };

  return (
    <>
      <Container>
        <Header />
        <TabMenu step={1} />
        <Content data={patterns[selectedItem]} />
        <OptionSelector
          type="square"
          data={patterns}
          onClick={() => {
            console.log();
          }}
        />
      </Container>
    </>
  );
}

export default CustomPattern;
