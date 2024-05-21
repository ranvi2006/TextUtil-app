import React from 'react';

export default function About() {
  return (
    <>
      <h1 style={{color:'black'}}>Discription</h1>
      <p style={{color:'black'}}>There are two rules of hooks22 which describe the characteristic code patterns that hooks rely on: 

"Only call hooks at the top level" — don't call hooks from inside loops, conditions, or nested statements so that the hooks are called in the same order each render.
"Only call hooks from React functions" — don't call hooks from plain JavaScript functions so that stateful logic stays with the component.
Although these rules can't be enforced at runtime, code analysis tools such as linters can be configured to detect many mistakes during development. The rules apply to both usage of Hooks and the implementation of custom Hooks,[23] which may call other Hooks.</p>
    </>
  );
}
