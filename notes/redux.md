## Background

Redux was created by Dan Abramov, who is currently a developer working on React at Facebook. Dan created Redux while working on a talk called “Hot Reloading with Time Travel for React Europe 2015."

Redux, however, eliminates the need for a dispatcher through the use of a single reducer, pure functions, and function composition.

In Redux there is only one store and one single source of state - referred to as the single source of truth. You can still manage state for different areas of the application, but in Redux you use reducers, and function composition, to achieve this.

With unidirectional data flow architectures like Flux and Redux, your state is contained in stores (a single store, in Redux) and updates to the state are managed through actions that describe how the state should be transformed. The view layer can then subscribe to the store(s) to receive new state whenever it’s changed.

## The 3 principles:
1. Single source of truth
2. State is read only
3. Changes are made with pure functions

The first principle of Redux is that there is a single source of truth for all state within your application. This single source of truth is a state tree, which is simply a container for the state, which is usually a plain old JavaScript object.

`const state = {
  todos: []
  }`

  This state tree is managed by another component called a store,
  In Redux there is a single store, and therefore a single location for all of our state.

  This is opposite to the approach that most traditional web applications take, where state is scattered throughout the application. For example, in a typical MVC application, state is stored in models, collections, and views.

  The second principle of Redux is that state is read only. This doesn’t mean that you can’t change the state of the application, it means that you should never modify the state tree directly outside of the store.

Instead, modifications to the state tree should be made by dispatching actions. An action is simply an object that describes the change you want to make to the state. They are dispatched with a simple method call, similar to dispatching an event with an event emitter.

One such benefit is the ability to rollback, commit, and replay actions to reproduce state, a concept called time travel debugging. It also helps to remove hard-to-debug race conditions where state has been changed in multiple locations in a non-deterministic way, which is a common problem in MVC architectures.

Centralizing changes to state is a different approach to your typical MVC architecture, where state changes can come from multiple places. For example, model state can be changed by the model itself, the model’s collection, or a view that presents the model.

The last Redux principle states that changes are made with pure functions. What this means is that the state tree, the single source of truth, can only be changed by passing it to a pure function that then applies the change and returns the new state.

A pure function is simply a function that provides the same output given the same input and has no side effects. In other words, a pure function does not change any external state or interact with the outside world in any way.

In Redux, these pure functions are called reducers. They are called reducers because they follow the same pattern as reducers from functional programming. This means they accept an accumulator and a value and return a new single value, for example the Array.reduce() method. The following is an example of a Redux reducer that exhibits these behaviors.

`function reducer(state = 0, action) {
  switch (action.type) {
    case 'multiply':
      return state * state;
    default:
      return state;
  }
}`
