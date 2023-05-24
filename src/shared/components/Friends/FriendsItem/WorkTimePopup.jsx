import { WorkTimeList, WorkTimeItem, WorkTimeText } from './FriendsItem.styled';

const WorkTimePopup = ({ shedule }) => {
  const workDays = shedule.map(item => (
    <WorkTimeItem key={item.day}>
      {item?.isOpen ? (
        <WorkTimeText>
          <span>{item.day}</span> {item.from}-{item.to}
        </WorkTimeText>
      ) : (
        <WorkTimeText>
          <span>{item.day}</span> Closed
        </WorkTimeText>
      )}
    </WorkTimeItem>
  ));
  return <WorkTimeList>{workDays}</WorkTimeList>;
};

export default WorkTimePopup;
