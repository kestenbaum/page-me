export function filterCards (array: WorkItem[] | undefined, category: string): WorkItem[] {
    return Array.isArray(array)
        ? array.filter(item => item.category === category)
        : [];
}