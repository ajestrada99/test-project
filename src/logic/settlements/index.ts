import { api } from '@/logic'

export const services  = api.injectEndpoints({
    endpoints: (builder) => (
        {
            settlements: builder.query({ 
                query: ({worker, companies})  => ({
                    url: `/data/FAExpenseSettlementTables?cross-company=true&$filter=(OriginWorker eq ${worker} and dataAreaId eq '${companies}')`,
                    method: 'get',
                })
            }), 
            getDescription: builder.query({ 
                query: ({company})  => ({
                    url: `data/FAExpenseDimensionCombinations?cross-company=true&$filter=dataAreaId eq '${company}'&$select=Name,Description`,
                    method: 'get',
                })
            }), 
            getSupplier: builder.query({ 
                query: ({company})  => ({
                    url: `data/Vendors?cross-company=true&$filter=dataAreaId eq '${company}' &$select=VendorAccountNumber,VendorName`,
                    method: 'get',
                }) 
            }), 
            newRegister: builder.query({ 
                query: (body)  => (console.log(body),{
                    url: `data/FAExpenseSettlementTables?cross-company=true`,
                    method: 'post',
                    body:body
                }) 
            })
        }
    )
})

export const { useLazySettlementsQuery , useLazyGetDescriptionQuery, useLazyGetSupplierQuery , useLazyNewRegisterQuery } = services;