import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '4738f2776cmshfd52279e33d93d1p1ae204jsnc16e846b9ece');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChart: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartQuery } = shazamCoreApi;