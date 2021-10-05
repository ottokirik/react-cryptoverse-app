import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from './helpers';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`, cryptoApiHeaders),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
