import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({items}) => {
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
    {items.map(({name, id, capital, isIncrease, avatar}) =>(
      <ForbesListItem key={id}  name= {name} capital = {capital} avatar = {avatar} isIncrease = {isIncrease}/>
    ))}
  </LeaderBoardProfiles>
</LeaderBoard>;
};
