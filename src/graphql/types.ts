import { Place, Page } from 'domain/abstractions'

export type GetPageResult = {
  pages: Page[]
}

export type GetPageBySlugResult = {
  page: Page
}

export type GetPlacesResult = {
  places: Place & {
    description: {
      html: string
    }
    gallery: {
      url: string
      height: number
      width: number
    }
  }
}
