import HistoryContextProvider from '@/caculator/app/context/historyContext.tsx';
import CalcSection from '@/caculator/section/calculator';
import HistorySection from '@/caculator/section/history';

import styled from 'styled-components';

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
  width: 100%;
  padding: 90px 0;
  height: 100vh;
  background-color: rgb(64 64 64);
`;
