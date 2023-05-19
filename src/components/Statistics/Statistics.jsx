import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import { TitleBottom } from 'components/ForbesList/ForbesList.styled';

export const Statistics = ({ title = 'no title', stats }) => {
  return (
    <>
      <div>
        <StatisticTitle>{title}</StatisticTitle>

        <StatisticsList>
          {stats.map(({ id, title, total }) => (
            <StatisticItem key={id} title={title} total={total}></StatisticItem>
          ))}
        </StatisticsList>
      </div>
    </>
  );
};
