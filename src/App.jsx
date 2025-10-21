import Header from "./components/Header";
import Player from "./components/Player";
import TimeStopper from "./components/TimeStopper";
function App() {
  return (
    <>
      <Header />
      <Player />
      <div id="challenges">
        <TimeStopper title="Level 1" targetTime={1} />
        <TimeStopper title="Level 2" targetTime={5} />
        <TimeStopper title="Level 3" targetTime={10} />
        <TimeStopper title="Level 4" targetTime={15} />
      </div>
    </>
  );
}

export default App;
