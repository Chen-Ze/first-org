/**
 * This comment _supports_ [Markdown](https://marked.js.org/)
 * Standard links:
 * {@link Todo} or {@linkplain Todo} or [[Todo]]
 *
 * Code links: (Puts Todo inside tags)
 * {@linkcode Todo} or [[`Todo`]]
 *
 * Code blocks are great for examples
 *
 * ```typescript
 * // run typedoc --help for a list of supported languages
 * const instance = new MyClass();
 * ```
 *
 * @param x Just a number.
 * @returns Just a string.
 */
export function data(x = 1): string {
  return 'data';
}

export interface Todo {
  id: string;
  title: string;
}
