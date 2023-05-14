import styled from 'styled-components';
import { Form } from 'formik';

export const AddForm = styled(Form)`
  height: 100%;
`;

export const AddFormTitle = styled.h1`
  padding-left: 12px;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;

  color: #111111;
`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-bottom: 24px;
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  flex-basis: calc((100% - 24px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color: #cce4fb;
    border-radius: 8px;
  }

  &.current::after {
    background-color: #54adff;
  }

  &.completed::after {
    background-color: #00c3ad;
  }
`;

export const AddFormStepName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;

  color: #cce4fb;

  ${AddFormItem}.current & {
    color: #54adff;
  }

  ${AddFormItem}.completed & {
    color: #00c3ad;
  }
`;

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: end;
    column-gap: 24px;
  }
`;
