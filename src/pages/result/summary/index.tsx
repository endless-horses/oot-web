import { ResultData } from '@api/result.types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Result } from '@api/result';

function formatCurrency(price: number) {
  return '+ ' + price.toLocaleString('ko-KR') + '원';
}

function Summary() {
  const { id } = useParams();
  const [result, setResult] = useState<ResultData>();
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const getData = async () => {
      if (id) {
        const resultData = await Result.read(id);
        setResult(resultData);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    if (result) {
      const total = result.pattern.price + result.wheel.price + result.font.price + result.accessory.price;
      setSum(total);
    }
  }, [result]);

  if (!result) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sumary">
      <div className="t1">
        <p>견적 요약</p>
        <p className="small">예상 견적 금액</p>
        <p>{formatCurrency(sum)}</p>
      </div>
      <div>
        <div className="t2">
          <p>패턴 디자인</p>
          <p>{formatCurrency(result?.pattern.price)}</p>
        </div>
        <div className="t3">
          <p>{result?.pattern.name}</p>
          <p>{result?.pattern.price}</p>
        </div>
      </div>
      <div>
        <div className="t2">
          <p>휠 모양</p>
          <p>{formatCurrency(result?.wheel.price)}</p>
        </div>
        <div className="t3">
          <p>{result?.wheel.name}</p>
          <p>{formatCurrency(result?.wheel.price)}</p>
        </div>
      </div>
      <div>
        <div className="t2">
          <p>측면 디자인</p>
          <p>{result?.font.price}</p>
        </div>
        <div className="t3">
          <p>{result?.font.name}</p>
          <p>{formatCurrency(result?.font.price)}</p>
        </div>
      </div>
      <div>
        <div className="t2">
          <p>액세서리</p>
          <p>{formatCurrency(result?.accessory.price)}</p>
        </div>
        <div className="t3">
          <p>{result?.accessory.name}</p>
          <p>{formatCurrency(result?.accessory.price)}</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
