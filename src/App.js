import "./App.css";
import Tweet from "./Tweet/Tweet";
import Navbar from "./Navbar/Navbar";

function App() {
  const isLoggedIn = window.localStorage.getItem("user");
  if (!isLoggedIn) window.location.href = "login";

  const tempData = [
    { avatar: null, Name: "Arun", time: "3", message: "What a great day" },
    {
      avatar: null,
      Name: "Jaswanth",
      time: "14",
      message: "politics polictics politics",
    },
    {
      avatar: null,
      Name: "John",
      time: "5",
      message: "Some day I will be a doctor",
    },
    {
      avatar: null,
      Name: "Geeta",
      time: "10",
      message: "It can not always be night",
    },
    {
      avatar: null,
      Name: "Boman",
      time: "1",
      message: "it is a wonderful day",
    },
    {
      avatar: null,
      Name: "Shruti",
      time: "4",
      message: "one extra tweet for fun",
    },
  ];
  return (
    <div>
      <Navbar active={1}/>
      <div className="container">
        <div className="row">
          <div className="col-4">Profile Picture</div>
          <div className="col-8">
            {tempData.map((item) => (
              <Tweet tweets={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
