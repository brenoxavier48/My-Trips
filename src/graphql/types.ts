export type Page = {
  id: string
  heading: string
  slug: string
  body: {
    html: string
  }
}
export type GetPageResult = {
  pages: Page[]
}

export type GetPageBySlugResult = {
  page: Page
}
