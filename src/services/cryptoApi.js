import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_CRYPTO_API_URL,
        prepareHeaders: (headers, { getState }) => {
            headers.set('x-rapidapi-host', process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST);
            headers.set('x-rapidapi-key', process.env.REACT_APP_RAPIDAPI_KEY,
            );
            return headers
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => ({ url: `coins?limit=${count}` })
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => ({ url: `coin/${coinId}` })
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => ({ url: `coin/${coinId}/history?timeperiod=${timePeriod}` })
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
