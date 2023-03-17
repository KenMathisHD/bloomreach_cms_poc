// External
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrPage } from "@bloomreach/react-sdk";
import { ContentPage } from "./components/ContentPage";

// Components
import { KenTestComponent } from "./components/KenTestComponent";
import { SimpleImageComponent } from "./components/SimpleImageComponent";
import { OpenHTML } from "./components/OpenHTML";

// CSS/Assets
import "./dc_mod.scss";

const kenTestToken = "d393d9a9-caac-4b3b-b173-014c36b250d7";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrPage
          configuration={{
            path: `${window.location.pathname}${window.location.search}`,
            endpoint:
              "https://trial-xdfd57qq.bloomreach.io/delivery/site/v1/channels/ken-test-channel/pages",
            httpClient: axios,
          }}
          mapping={{
            ContentPage,
            KenTestComponent,
            SimpleImageComponent,
            OpenHTML,
          }}
        ></BrPage>
      </header>
    </div>
  );
}

export default App;
