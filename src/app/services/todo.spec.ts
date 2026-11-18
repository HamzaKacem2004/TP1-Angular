import type { Todo } from './todo';

describe('Todo', () => {
  it('should accept a Todo value', () => {
    const todo = {} as Todo;
    expect(todo).toBeTruthy();
  });
});
