import styled from 'styled-components';

export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 12px;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 8px;
    }
  }
`;

export const FormLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
`;

export const EditInpuButton = styled.button`
  position: absolute;
  overflow: visible;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: transparent;
  border: none;
`;

export const FormInput = styled.input`
  width: calc(100vw - 40vw);
  height: 28px;
  padding: 4px 12px;
  border: 1px solid #54adff;
  border-radius: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 320px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 255px;
    height: 32px;
  }
`;

export const InputName = styled.span`
  min-width: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }
`;
