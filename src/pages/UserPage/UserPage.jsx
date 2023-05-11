import UserData from '../../shared/components/UserData/UserData';


const UserPage = () => {

    return (
    <>
      {/* ModalCongrats
      useEffect(() => {
      if (firstVisit) {
        <ModalCongrats />
      }
    }, []); */}
      <p>My information:</p>
      <div>
          <UserData />
        {/* <UserData />
            UserDataItem --- input типу файл, url object -предпросмотр, 
            дані користувача + кнопка для редагування
            клік на кнопку - елемент в режимі редагування + кнопка для відправки
            доступно 1 поле для редагування */}
        {/* <Logout /> По кліку відкривається модальне вікно ModalApproveAction (Already leaving?)
        Треба очистити redux стор після виходу !*/}
      </div>
      <p>My pets:</p>
      <div>
        {/* <PetsData /> */}
            {/* <Add pet/> кнопка посилання на AddPetPage */}
            {/* <PetsList - де взяти тих звірів?/> */}
              {/* PetsItem + ModalApproveAction (якщо так -*/}
      </div>
    </>
    );
  };
  
  
  export default UserPage;