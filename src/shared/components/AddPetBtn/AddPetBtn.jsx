import { PlusIcon, PlusSmallIcon } from 'shared/utils/icons';
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';

const AddPetBtn = ({ text, path }) => {
  const [screenWidth] = useWindowSize();
  return (
    <Btn to={path}>
      {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusSmallIcon />}
    </Btn>
  );
};

export default AddPetBtn;
