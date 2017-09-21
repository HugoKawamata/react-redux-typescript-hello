import * as React from "react";

// This is the props object that will be given to the Hello component.
// It is an object with both the mapStateToProps return value properties,
// and the mapDispatchToProps return value properties.
export interface HelloProps {
  greeting: String;
  language: String;
  onButtonClick: () => any;
};

// This is the actual component that is rendered. It takes a single
// argument called `props` and returns a JSX component.
//
// `onButtonClick` will execute a dispatch function, taking an action
// (which can be seen in `greetingActions.tsx`). It will be handled by
// `reducers/index.tsx`.
const Hello: React.SFC<HelloProps> = (props) => {
  return (
    <div>
      <div>
        {props.greeting}, World!
      </div>
      <button onClick={props.onButtonClick}>
        Change To German
      </button>
      <div>
        This greeting brought to you by the {props.language} language.
      </div>
    </div>
  );
}

export default Hello;