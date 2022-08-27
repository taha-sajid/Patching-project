import TopNavbar from "./Component/TopNavbar";
import HomeScreen from "./Screens/MainScreen/HomeScreen";


function App() {
  console.log('Taha sajid is a baap of all programmers');
  return (
    <div className="App border-red-500 border-1  w-[100%] flex flex-col">
     <TopNavbar/>
     <HomeScreen/>
    </div>
  );
}

export default App;
