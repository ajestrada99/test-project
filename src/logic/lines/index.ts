import { api } from '@/logic'

export const services  = api.injectEndpoints({
    endpoints: (builder) => (
        {
            getLines: builder.query({ 
                query: ({company, expenseSettlementId})  => (console.log(company,expenseSettlementId),{
                    url: `/data/FAExpenseSettlementTrans?cross-company=true&$filter=ExpenseSettlementId eq '${expenseSettlementId}' and dataAreaId eq '${company}'`,
                    method: 'get',
                })
            }), 
        }
    )
})

export const { useLazyGetLinesQuery } = services;