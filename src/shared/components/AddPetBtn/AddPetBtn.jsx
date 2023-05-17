import { PlusIcon, PlusSmallIcon } from 'shared/utils/icons';
import { useWindowSize } from 'hooks/useResize';
import { Btn } from './AddPetBtn.styled';
import { useLocation } from 'react-router-dom';

const AddPetBtn = ({ text, path }) => {
  const location = useLocation();
  const [screenWidth] = useWindowSize();

  return (
    <Btn to={path} state={{ from: location }}>
      {screenWidth < 768 && <PlusIcon />}
      {text}
      {screenWidth >= 768 && <PlusSmallIcon />}
    </Btn>
  );
};

export default AddPetBtn;
