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
            <Redirect to="https://open.spotify.com/playlist/7B21r9ohvC8jnlsJkJb5SU?si=cc6874ffe7bc4d8a&pt=30baf32a0559ff78746f3a251cbdbda5" />
          }
        />
        <Route
          exact
          path="/colston"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/1pC5ZeW894yZSdNYWQ5ibS?si=b79df83590184209&pt=5099e95a7771fbf5c197ed49c4059298" />
          }
        />
        <Route
          exact
          path="/emma"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/69RuqofLBowMJJexntfqot?si=a4b5ac86f4874213&pt=6eeb75e1e836027ed0f330e5aa65f888" />
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
            <Redirect to="https://open.spotify.com/playlist/48fOQxCKtjxef7uzKw9we2?si=c89ca35919fe4e71&pt=205ae213ee927b4863e5a45e4071fc28" />
          }
        />
        <Route
          exact
          path="/karty"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/7BlcTJXWuHPPSsuJVt0q0n?si=711fac0532ef41e3&pt=3f428235baeb7192d55d6be8a57fe34c" />
          }
        />
        <Route
          exact
          path="/kevin"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/4ARxcDGvSDh4J1u5niOTAU?si=bf38a74775784024&pt=6e9ba003dbe94a17c93b0a4fdf70b918" />
          }
        />
        <Route
          exact
          path="/lara"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/37TFLRCUAyGMg4FFOqndVF?si=e15285eae22d492f&pt=4c6edc015e5493c402fff63ae54a9736" />
          }
        />
        <Route
          exact
          path="/lotte"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/4PW1cvUDpaoiIFhdJJWDw2?si=379bfca041f84138&pt=dc9a27bfe3918fbe83f97d392b5509a5" />
          }
        />
        <Route
          exact
          path="/maddie"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/5wFSOmsAYMyooK3iOTobGW?si=9e235cc02947416c&pt=4e643140974b77cf39cc15fe66279d0f" />
          }
        />
        <Route
          exact
          path="/randi"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/1wV1ptkYhUYoBoTstxaem1?si=b8f96f2c799c4421&pt=11cc8e1ec8fade52b784eea8f47b64b7" />
          }
        />
        <Route
          exact
          path="/shreya"
          key="app"
          element={
            <Redirect to="https://open.spotify.com/playlist/63MlIPFbs39pvVg6VWNof6?si=813f50c1a6eb4c49&pt=796d2ad89c6fdf02fea98053a638ad6f" />
          }
        />

        <Route exact path="/alex" key="app" element={<Tbd found={true} />} />
        <Route exact path="/becca" key="app" element={<Tbd found={true} />} />
        <Route exact path="/dad" key="app" element={<Tbd found={true} />} />
        <Route exact path="/ian" key="app" element={<Tbd found={true} />} />
        <Route
          exact
          path="/jeanette"
          key="app"
          element={<Tbd found={true} />}
        />
        <Route exact path="/leo" key="app" element={<Tbd found={true} />} />
        <Route exact path="/mom" key="app" element={<Tbd found={true} />} />
        <Route exact path="/nolan" key="app" element={<Tbd found={true} />} />
        <Route exact path="/zach" key="app" element={<Tbd found={true} />} />
        <Route exact path="/zain" key="app" element={<Tbd found={true} />} />

        <Route exact path="/*" key="app" element={<Tbd found={false} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
