import { WorkTimeList, WorkTimeItem, Text } from './FriendsItem.styled';

const WorkTimePopup = ({ shedule }) => {
  const workDays = shedule.map(item => (
    <WorkTimeItem key={item.day}>
      {item?.isOpen ? (
        <Text>
          <span>{item.day}</span> {item.from}-{item.to}
        </Text>
      ) : (
        <Text>
          <span>{item.day}</span> Closed
        </Text>
      )}
    </WorkTimeItem>
  ));
  return <WorkTimeList>{workDays}</WorkTimeList>;
};

export default WorkTimePopup;
