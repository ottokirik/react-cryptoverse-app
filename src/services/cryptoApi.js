import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createRequest } from './helpers';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequestCryptoApi = (url) => createRequest(url, cryptoApiHeaders);

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequestCryptoApi(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinID) => createRequestCryptoApi(`/coin/${coinID}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinID, timePeriod }) => createRequestCryptoApi(`/coin/${coinID}/history/${timePeriod}`),
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
