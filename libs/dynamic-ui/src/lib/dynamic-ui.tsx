import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface DynamicUiProps {}

const StyledDynamicUi = styled.div`
  color: pink;
`;

export function DynamicUi(props: DynamicUiProps) {
  return (
    <StyledDynamicUi>
      <h1>Welcome to DynamicUi!</h1>
    </StyledDynamicUi>
  );
}

export default DynamicUi;
