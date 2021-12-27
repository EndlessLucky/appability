export interface DeserializableInterface {
    deserialize(input: any): this;
    getKeys(): string[];
    getRelations(): EmptyObject;
    getRelation(name): Deserializable;
}

type EmptyObject = {
    [K in any] : never
}

export class Deserializable implements DeserializableInterface {
    getKeys() {
        throw new Error('Method getKeys() not implemented yet.');
        return ['id'];
    }

    /**
     * Removes _links and other underscored properties from the object
     */
    removeUnderscored(object) {
        for (const key of Object.keys(object)) {
            if (key[0] === '_') {
                delete object[key];
            }
        }

        return object;
    }

    /**
     * Move _embedded objects lower in the structure
     */
    flatten(input: any) {
        if (input._embedded) {
            for (const key of Object.keys(input._embedded)) {
                input[key] = this.flatten(this.removeUnderscored(input._embedded[key]));
            }
        }

        return input;
    }

    deserialize(input: any): this {
        input = this.flatten(input);

        for (const prop of this.getKeys()) {
            this[prop] = input[prop];
        }

        return this;
    }

    getRelations() {
        return {};
    }

    getRelation(name) {
        const relations = this.getRelations();
        if (Object.prototype.hasOwnProperty.call(relations, 'name')) {
            return relations[name];
        }

        return false;
    }
}
