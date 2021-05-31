import { addToArray, removeFromArray } from '../utils/utils';

describe('Test the utils functions:', () => {
    describe('TEST: addToArray(arrayTarget, toBeAdded)', () => {
        it('will error if not an array', () => {
            const targetArray = {};
            const toBeAdded = { "value": "abc", "label": "xyz" };
            const result = addToArray(targetArray, toBeAdded);
            expect(result).toEqual('Error: Not an array');
        });

        it('can add to an empty array', () => {
            const emptyArray = [];
            const toBeAdded = { 'value': 'Plan', 'label': 'Plan' };
            const result = addToArray(emptyArray, toBeAdded);
            expect(result).toBe(1);
        });

        it('can add to an existing array', () => {
            const existingArray = [{ 'value': 'Plan', 'label': 'Plan' }];
            const toBeAdded = { 'value': 'Build', 'label': 'Build' };
            const result = addToArray(existingArray, toBeAdded);
            expect(result).toBe(2);
        });
    });

    describe('TEST: removeFromArray(arrayTarget, toBeRemoved)', () => {
        it('will error if not an array', () => {
            const targetArray = {};
            const toBeRemoved = { "value": "abc", "label": "xyz" };
            const result = removeFromArray(targetArray, toBeRemoved);
            expect(result).toEqual('Error: Not an array');
        });

        it('can remove from an existing array with two items', () => {
            const existingArray = [{"value": "Build", "label": "Build"}, {"value": "Maintain", "label": "Maintain"}];
            const toBeRemoved = { "value": "Maintain", "label": "Maintain" };
            const result = removeFromArray(existingArray, toBeRemoved);
            expect(result).toEqual([{ "value": "Build", "label": "Build" }]);
        });

        it('can remove from an array of one item', () => {
            const existingArray = [{ "value": "Maintain", "label": "Maintain" }];
            const toBeRemoved = { "value": "Maintain", "label": "Maintain" };
            const result = removeFromArray(existingArray, toBeRemoved);
            expect(result).toEqual([]);
        });
    });
});