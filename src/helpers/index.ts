export function filterCards (array: Card[] | undefined, category: string): Card[] {
    return Array.isArray(array)
        ? array.filter(item => item.category === category)
        : [];
}