export class PaginatorModel{

    links: links;
    total_pages: number;

}

interface links {
    next?: string;
    previous?: string;
}