import MyComponent from "./component/MyComponent";
import "./App.css";
import ChatRoom from "./component/ChatRoom";
import Comments from "./component/Comments";

const App = () => {
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <ChatRoom/> */}
      <Comments postId="4" />
    </div>
  );
};

export default App;
