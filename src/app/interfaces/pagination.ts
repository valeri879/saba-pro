export interface Pagination {
    totalDocuments: number,
    totalPages: number,
    currentPage: number,
    next: boolean,
    prev: boolean,
    limit: number,
    skip: number,
    pagesArray: number[]
}
