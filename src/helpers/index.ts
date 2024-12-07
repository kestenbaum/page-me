import React from "react";

export function filterCards (array: WorkItem[] | undefined, category: string): WorkItem[] {
    return Array.isArray(array)
        ? array.filter(item => item.category === category)
        : [];
}

export function renderItemsList<T>(array: T[] | undefined, Component: React.ComponentType<{ item: T; idx: number }>) {
    if (!Array.isArray(array)) return null;

    return array.map((item, idx) => React.createElement(Component, { key: idx, item, idx }));
}