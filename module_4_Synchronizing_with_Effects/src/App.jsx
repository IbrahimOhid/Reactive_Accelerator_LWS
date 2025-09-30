import MyComponent from "./component/MyComponent";
import "./App.css";
import ChatRoom from "./component/ChatRoom";
import Comments from "./component/Comments";
import Putting from "./component/Putting";

const App = () => {
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <ChatRoom/> */}
      {/* <Comments postId="4" /> */}
      <Putting/>
    </div>
  );
};

export default App;
