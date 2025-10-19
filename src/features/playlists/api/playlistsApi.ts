import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

import type {
  CreatePlaylistArgs,
  PlaylistData,
  //   FetchPlaylistsArgs,
  PlaylistsResponse
} from './playlistsApi.types'

export const playlistsApi = createApi({
  reducerPath: 'playlistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      'API-KEY': import.meta.env.VITE_API_KEY
    },
    prepareHeaders: headers => {
      headers.set(
        'Authorization',
        `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
      )
      return headers
    }
  }),
  endpoints: build => ({
    fetchPlaylists: build.query<PlaylistsResponse, void>({
      query: () => 'playlists'
    }),
    createPlaylist: build.mutation<
      { data: PlaylistData },
      CreatePlaylistArgs
    >({
      query: body => ({
        url: 'playlists',
        method: 'post',
        body
      })
    }),
    deletePlaylist: build.mutation<void, string>({
      query: playlistId => ({
        url: `playlist/${playlistId}`,
        method: 'delete'
      })
    })
  })
})

export const {
  useFetchPlaylistsQuery,
  useCreatePlaylistMutation,
  useDeletePlaylistMutation
} = playlistsApi
