export interface ICollection<T> {

    add(value: T): void;

    clear(): void;

    contains(item: T):  boolean;

    get(i: number): T;

    remove(item: T): boolean;

    indexOf(item: T, index: number, count:number): number;

    /**
     * Returns <tt>true</tt> if this set contains no elements.
     *
     * @return <tt>true</tt> if this set contains no elements
     */
    isEmpty(): boolean;

    /**
     * Returns the number of elements in this set (its cardinality).  If this
     * set contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
     * <tt>Integer.MAX_VALUE</tt>.
     *
     * @return the number of elements in this set (its cardinality)
     */
    size(): number;
}