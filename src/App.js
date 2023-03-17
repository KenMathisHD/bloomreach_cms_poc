import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrPage } from "@bloomreach/react-sdk";
import { ContentPage } from "./components/ContentPage";
import { KenTestComponent } from "./components/KenTestComponent";
import { SimpleImageComponent } from "./components/SimpleImageComponent";
import { OpenHTML } from "./components/OpenHTML";

const kenTestToken = "d393d9a9-caac-4b3b-b173-014c36b250d7";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <BrPage
          configuration={{
            path: `${window.location.pathname}${window.location.search}`,
            endpoint:
              "https://trial-xdfd57qq.bloomreach.io/delivery/site/v1/channels/home-poc-refspa/pages",
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

