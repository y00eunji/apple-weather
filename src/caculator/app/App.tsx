import styled from 'styled-components';

import CalcSection from '../section/calculator';
import HistorySection from '../section/history';
import HistoryContextProvider from './context/historyContext.tsx';

export default function Calculator() {
  return (
    <HistoryContextProvider>
      <Wrapper>
        <CalcSection />
        <HistorySection />
      </Wrapper>
    </HistoryContextProvider>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  padding: 90px 0;
  height: 100%;
  background-color: #cccccc;
`;
