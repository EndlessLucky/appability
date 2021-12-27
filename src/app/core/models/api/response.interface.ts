import { Links } from './links.class';

export interface ResponseInterface {
    page: number;
    page_count: number;
    page_size: number;
    total_items: number;
    _embedded: {
        data: [];
    };
    _links: Links;

    getData(): [];
    getLinks(): [];
    getPaginator(): [];
    getPage(): number;
    getPageCount(): number;
    getPageSize(): number;
    getTotalItems(): number;
}
