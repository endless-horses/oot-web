import Header from '@components/header';
import { Container } from './index.style';
import ProgressBar from './progress-bar';
import CustomGroup from '@components/custom-group';
import { useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Pattern } from '@api/pattern';
// import TireConfigulation from '@pages/custom-pattern/tire-configuration';

function CustomPattern() {
  // const [selectedItem, setSelectedItem] = useState<number>(0);
  const [patterns, setPatterns] = useState<PatternData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const patterns = await Pattern.list();
      setPatterns(patterns);
    };
    // const changeSelectedItem = async (item: number) => {
    //   setSelectedItem(item);
    // };
    getData();
    // changeSelectedItem(0);
  }, []);

  return (
    <>
      <Container>
        <Header />
        <ProgressBar step={1} />
        {/* <TireConfigulation data={patterns[1]} /> */}
        <CustomGroup data={patterns} />
      </Container>
    </>
  );
}

export default CustomPattern;
