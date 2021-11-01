import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '56985c056emsh3c6e1f6996ed767p15ba92jsnfaf94e2cf335'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url: string) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({
                newCategory,
            }) => createRequest(`/news/search?q=${newCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=44`)
        })
    })
})

export const { useGetCryptoNewsQuery }: any = cryptoNewsApi