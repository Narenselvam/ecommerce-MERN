import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getProductDetails: builder.query({
            query: (Id) => ({
                url: `${PRODUCTS_URL}/${Id}`
            }),
            keepUnusedDataFor: 5
        })
    })
})


export const { useGetProductsQuery, useGetProductDetailsQuery } = productApiSlice
