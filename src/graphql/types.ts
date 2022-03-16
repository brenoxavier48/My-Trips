import { Page, CMSPlace } from 'domain/abstractions'

export type GetPageResult = {
  pages: Page[]
}

export type GetPageBySlugResult = {
  page: Page
}

export type GetPlacesResult = {
  places: CMSPlace[]
}

export type GetPlaceBySlugResultResult = {
  place: CMSPlace
}
