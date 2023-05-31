import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api  = createApi({
    reducerPath: 'splitApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_PROXY_URL }),
    endpoints: () => ({}),
})