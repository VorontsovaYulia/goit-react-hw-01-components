
import { FriendList } from "./FriendList/FriendList";
import { GlobalStyle } from "./GlobalStyle";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
      <GlobalStyle />
    </>
  );
};
