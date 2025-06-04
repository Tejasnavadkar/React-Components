import React from "react";
// import {logError} from "../lib/errorLib";
// import "./ErrorBoundary.css";

// we dont use this class based code we use  packege for functional component npm i react-error-boundary

export default class ErrorBoundaryClass extends React.Component<any, any> {
  state = { hasError: false };

  static getDerivedStateFromError(_error: unknown) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // logError(error, errorInfo);
    console.log("error is:",error)
    console.log("errorInfo:",errorInfo)
  }

  render() {
    if (this.state.hasError) { // if error true then show this fallback ui
      return <div>
        <h3>Sorry there was a problem loading this page</h3>
      </div>;
    } else {
      return this.props.children;
    }
  }
}

