import { ResponseInterface } from './response.interface';
import { Deserializable, DeserializableInterface } from '../deserializable';
import { Links } from './links.class';

export class Response extends Deserializable implements ResponseInterface, DeserializableInterface {
    _embedded: {
        data: [];
    };
    _links: Links;
    page = 0;
    page_count = 0;
    page_size = 0;
    total_items = 0;

    getData(): [] {
        return this._embedded.data;
    }

    getLinks(): [] {
        return [];
    }

    getPage(): number {
        return this.page;
    }

    getPageCount(): number {
        return this.page_count;
    }

    getPageSize(): number {
        return this.page_size;
    }

    getPaginator(): [] {
        return [];
    }

    getTotalItems(): number {
        return this.total_items;
    }

    deserialize(input: any): any {
        return Object.assign(this, input);
    }

    getKeys(): string[] {
        return ['_links', '_embedded'];
    }

    toCollection(modelString: string, model: any) {
        const len = this._embedded[modelString].length;
        const collection = [];
        for (let i = 0; i < len; i++) {
            collection.push(new model().deserialize(this._embedded[modelString][i]));
        }

        return collection;
    }
}
