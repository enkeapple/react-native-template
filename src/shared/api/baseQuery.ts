import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import Config from 'react-native-config';

const { API_URL } = Config;

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});
