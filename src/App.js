import { HashRouter, Routes, Route } from "react-router-dom";
import Redirect from "./Redirect.js";
import Tbd from "./Tbd.js";

import "./App.css";

function App() {
  return (
    <HashRouter key="root">
      <Routes>
        <Route
          exact
          path="/antonia"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/7B21r9ohvC8jnlsJkJb5SU?si=14f4d1b3e3dc46e9" />
          }
        />
        <Route
          exact
          path="/colston"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/1pC5ZeW894yZSdNYWQ5ibS?si=3c26feef49774205" />
          }
        />
        <Route
          exact
          path="/emma"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/69RuqofLBowMJJexntfqot?si=577bfac7af55404e" />
          }
        />
        <Route
          exact
          path="/jackson"
          key="app"
          element={
            <Redirect to="https://music.apple.com/us/playlist/jacksons-holiday-card/pl.u-b3b8VdeUKP9RLg4" />
          }
        />
        <Route
          exact
          path="/jon"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/48fOQxCKtjxef7uzKw9we2?si=7ab851b9bd364175" />
          }
        />
        <Route
          exact
          path="/karty"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/7BlcTJXWuHPPSsuJVt0q0n?si=0fd010a860224001" />
          }
        />
        <Route
          exact
          path="/kevin"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/4ARxcDGvSDh4J1u5niOTAU?si=e76aa85750cf4f44" />
          }
        />
        <Route
          exact
          path="/lara"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/37TFLRCUAyGMg4FFOqndVF?si=7e3e516d8d774c09" />
          }
        />
        <Route
          exact
          path="/lotte"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/4PW1cvUDpaoiIFhdJJWDw2?si=9bc7fd094fa64100" />
          }
        />
        <Route
          exact
          path="/maddie"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/5wFSOmsAYMyooK3iOTobGW?si=d9af23965ec648ec" />
          }
        />
        <Route
          exact
          path="/randi"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/1wV1ptkYhUYoBoTstxaem1?si=28c895148b0249e9" />
          }
        />
        <Route
          exact
          path="/shreya"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/63MlIPFbs39pvVg6VWNof6?si=46d0faee4dda4ad5" />
          }
        />
        <Route
          exact
          path="/alex"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/5acPydIb0r5MDnnvMjK9tk?si=8fed13ea3cc14b9a" />
          }
        />
        <Route
          exact
          path="/leo"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/2foCUu6FWipX19HZQ4VJDE?si=abeea40e01fd4b4b" />
          }
        />
        <Route
          exact
          path="/nolan"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/2rf3ee0kCHOb3NHxKPm2fM?si=87c1fabdfee94694" />
          }
        />
        <Route
          exact
          path="/mom"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/2ZwBRGAcG0zCYgFNZQVDsL?si=20fc732492c14194" />
          }
        />
        <Route exact path="/becca" key="app" element={<Tbd found={true} />} />
        <Route exact path="/dad" key="app" element={<Tbd found={true} />} />
        <Route exact path="/ian" key="app" element={<Tbd found={true} />} />
        <Route
          exact
          path="/jeanette"
          key="app"
          element={<Tbd found={true} />}
        />
        <Route exact path="/zach" key="app" element={<Tbd found={true} />} />
        <Route exact path="/zain" key="app" element={<Tbd found={true} />} />

        <Route exact path="/*" key="app" element={<Tbd found={false} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
