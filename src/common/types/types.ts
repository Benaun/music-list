export interface Tag {
  id: string
  name: string
}

export interface Images {
  main: Cover[]
}

export interface Cover {
  type: 'original' | 'medium' | 'thumbnail'
  width: number
  height: number
  fileSize: number
  url: string
}

export interface User {
  id: string
  name: string
}
