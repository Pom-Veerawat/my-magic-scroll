import logo from "./logo.svg";
import "./App.css";
import { ScrollContainer, SequenceSection } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollContainer>
          <section
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Demo</h1>
          </section>
          <SequenceSection
            end="300%"
            imagesPath="/img1"
            imagesCount={74}
            imagesType="jpg"
          />
          <section
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Demo</h1>
          </section>
          <SequenceSection
            end="300%"
            imagesPath="/img2"
            imagesCount={101}
            imagesType="jpg"
          />
          <section
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Demo</h1>
          </section>
        </ScrollContainer>
      </header>
    </div>
  );
}

export default App;
