export function mapResourceToDomain<T, U>(items: T[], mapper: (item: T) => U): U[] {
    return items.map(mapper);
}