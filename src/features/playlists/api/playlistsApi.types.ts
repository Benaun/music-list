import type { CurrentUserReaction } from '@/common/enums'
import type { Images, Tag, User } from '@/common/types'

export interface PlaylistsResponse {
  data: PlaylistData[]
  meta: PlaylistMeta
}

export interface PlaylistData {
  id: string
  type: 'playlists'
  attributes: PlaylistAttributes
}

export interface PlaylistMeta {
  page: number
  pageSize: number
  totalCount: number
  pagesCount: number
}

export interface PlaylistAttributes {
  title: string
  description: string
  addedAt: string
  updatedAt: string
  order: number
  dislikesCount: number
  likesCount: number
  tags: Tag[]
  images: Images
  user: User
  currentUserReaction: CurrentUserReaction
}

export interface FetchPlaylistsArgs {
  pageNumber?: number
  pageSize?: number
  search?: string
  sortBy?: 'addedAt' | 'likesCount'
  sortDirection?: 'asc' | 'desc'
  tagsIds?: string[]
  userId?: string
  trackId?: string
}

export interface CreatePlaylistArgs {
  title: string
  description: string
}

export interface UpdatePlaylistArgs {
  title: string
  description: string
  tagIds: string[]
}
