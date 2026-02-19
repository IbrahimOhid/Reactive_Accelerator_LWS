import { Suspense } from "react";
import Posts from "./component/Posts";
import Loading from "./component/loading";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./component/Error";

const App = () => {
  return (
    <div>
      <ErrorBoundary fallback={<Error/>}>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
