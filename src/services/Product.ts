import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GetProductsResponse, ProductDetail } from '../@types/Product';
import { apiService } from '../utils/HelperUtils';
import { Buffer } from 'buffer';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiService() }),
  tagTypes: ['Products'],

  endpoints: (builder) => ({
    getProducts: builder.query<GetProductsResponse | ProductDetail, string>({
      query: (url) => ({
        url,
        headers: {
          contentType: 'application/json',
        },
      }),
      providesTags: ['Products'],
    }),
    editProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}?`,
        method: 'PUT',
        headers: {
          Authorization: `Basic ${Buffer.from('admin:admin').toString(
            'base64'
          )}`,
        },
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),
  }),
});

export const { useGetProductsQuery, useEditProductMutation } = productApi;
