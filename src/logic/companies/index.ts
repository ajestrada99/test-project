import { api } from '@/logic'

export const services  = api.injectEndpoints({
    endpoints: (builder) => (
        {
            getCompanies: builder.query({ 
                query: ({userName})  => ({
                    url: `/data/FAExpenseSettlementUsers?$filter=name eq '${userName}'&cross-company=true`,
                    method: 'get',
                })
            })
        }
    )
})

export const { useLazyGetCompaniesQuery } = services;