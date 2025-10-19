import MyComponent from "./component/MyComponent";
import "./App.css";
import ChatRoom from "./component/ChatRoom";
import Comments from "./component/Comments";
import Putting from "./component/Putting";
import Basic from "./component/Basic";
import Example1 from "./component/Example1";
import Example4 from "./component/Example4";
import Example5 from "./component/Example5";
import Example7 from "./component/Example7";
import Example8 from "./component/Example8";
import SearchResult from "./component/SearchResult";
import DataFetch from "./component/DataFetch";
import NewChatRoom from "./component/NewChatRoom";
import Page from "./component/Page";
import { ShoppingCartContext } from "./contexts/ShoppingCart";
import Pointer from "./component/Pointer";
import Timer from "./component/Timer";
import StatusBar from "./component/StatusBar";
import SaveButton from "./component/SaveButton";
import Form from "./component/Form";

const App = () => {
  // const items = [
  //   {
  //     id: 1,
  //     title: 'Hp Laptop'
  //   }
  // ]
  return (
    <div>
      {/* <MyComponent /> */}
      {/* <ChatRoom/> */}
      {/* <Comments postId="4" /> */}
      {/* <Putting/> */}
      {/* <Basic/> */}
      {/* <Example1/> */}
      {/* <Example4/> */}
      {/* <Example5/> */}
      {/* <Example7/> */}
      {/* <Example8/> */}
      {/* <SearchResult/> */}
      {/* <DataFetch/> */}
      {/* <NewChatRoom/> */}
      {/* <ShoppingCartContext.Provider value={items}>
        <Page url={'/home'}/>
      </ShoppingCartContext.Provider> */}
      {/* <Pointer/> */}
      {/* <Timer/> */}
      <StatusBar/>
      <SaveButton/>
      <Form/>
    </div>
  );
};

export default App;
