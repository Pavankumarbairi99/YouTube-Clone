import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResult';
let approuter = createBrowserRouter([{
  path:"/",
  element:<Body />,
  children:[{
    path:"/",
    element:<MainContainer />,
    
  },
  {
    path:"/watch",
    element:<WatchPage />,
    
  },
  {
    path:"/Search",
    element:<SearchResults />,
    
  },
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div className="">
     <RouterProvider router={approuter}></RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
