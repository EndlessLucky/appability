export class Paginator {
    page = 0;
    page_count = 0;
    page_size = 0;
    total_items = 0;
    length = 0;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }

    getPageCount() : number {
        return this.page_count;
    }

    getTotalItems() : number {
        return this.total_items;
    }

    getPageSize() : number {
        return this.page_size;
    }
}
