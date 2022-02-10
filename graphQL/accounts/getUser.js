import { useQuery } from '@apollo/client';
import { ALL_USERS_QUERY, CURRENT_USER_QUERY } from './queries';

/* 
  1. authentication-related functions
*/
const GetUser = () => {
  const { data } = useQuery(CURRENT_USER_QUERY);
  return data?.authenticatedItem;
};

const GetAllUsers = () => {
  const { data } = useQuery(ALL_USERS_QUERY);
  const allPeople = data?.allPeople;
  return allPeople;
};

export { GetUser, GetAllUsers };
