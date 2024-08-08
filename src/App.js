
import './App.css';
import Nav from './MyComponents/Nav';
import AddNotes from './MyComponents/AddNotes';
import Notes from './MyComponents/Notes';

import {
  createBrowserRouter,
  RouterProvider,
  

} from "react-router-dom";




function App() {
  const router = createBrowserRouter([
    
        {
          path:"/",
          element: <Nav/>,
          
        children:[
          {
            path: "/",
            element: <Notes/>,
           
            
          },
          {
            path: "/addNote",
            element: <AddNotes/>,
           
          }
        ]
      
      
    
      },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
  
      
    </>
  );
}

export default App;
