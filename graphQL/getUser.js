import { useQuery } from '@apollo/client';
import { CURRENT_USER_QUERY } from './accountQueries';
import { ALL_USERS_QUERY } from 'graphQL/queries';

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
