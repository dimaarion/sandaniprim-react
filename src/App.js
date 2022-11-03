import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import ArticlesAll from "./pages/ArticlesAll";
import { get, scrollActive, resizeActive, imagesZoom } from "./action";
import { useDispatch, useSelector } from "react-redux";
import Pages from "./pages/Pages";
import Home from "./pages/Home";
import Message from "./message/Message";
import ImgZoom from "./images/ImgZoom";

function App() {
  const [menu, setMenu] = useState([{}]);
  const [articles, setArticles] = useState([{}]);
  // eslint-disable-next-line no-unused-vars
  const [artMenu, setArtMenu] = useState([{}]);
  const [icons, setIcons] = useState([{}]);
  const [tel, setTel] = useState("");
  const [homeJson, setHomeJson] = useState([{}]);
  const [sY, setSY] = useState(0);
  const [sX, setSX] = useState(0);
  const [imgZoom, setImgZoom] = useState({ src: "", alt: "" });

  const SELECTGETMENU = useSelector((state) => state.getMenu);
  const lang = useSelector((store) => store.lang);
  const SELECARTICLES = useSelector((store) => store.getArticles);
  const GETMENU = useDispatch();
  const GETMENUART = useDispatch();
  const GETARTICLES = useDispatch();
  const GETICONS = useDispatch();
  const HOMEJSON = useDispatch();
  useEffect(() => {
    get(setMenu, "menu.php");
    get(setTel, "tel.php");
    get(setArticles, "articles.php");
    get(setIcons, "icons.php");
    get(setHomeJson, "home.php");
    scrollActive(setSY);
    resizeActive(setSX);
  }, []);

  imagesZoom(setImgZoom);

  useEffect(() => {
    GETMENU({ type: "GETMENU", preload: menu });
  }, [menu, GETMENU]);

  useEffect(() => {
    GETMENUART({ type: "GETMENUART", preload: artMenu });
  }, [artMenu, GETMENUART]);

  useEffect(() => {
    GETARTICLES({ type: "GETARTICLES", preload: articles });
  }, [articles, GETARTICLES]);

  useEffect(() => {
    GETICONS({ type: "GETICONS", preload: icons });
  }, [icons, GETICONS]);

  useEffect(() => {
    HOMEJSON({ type: "HOMEJSON", preload: homeJson });
  }, [homeJson, HOMEJSON]);

  let windowWidth = true;
  let scrolls = true;
  let scrollN = 125;
  let winSize = 1600;
  if (sY < scrollN) {
    scrolls = false;
  } else {
    scrolls = true;
  }

  if (sX < winSize) {
    windowWidth = true;
  } else {
    windowWidth = false;
  }
  return (
    <div className="container-fluid text-center p-0">
      {imgZoom.src !== "" ? (
        <ImgZoom imgZoom={imgZoom} setImgZoom={setImgZoom} />
      ) : (
        ""
      )}
      <Switch>
        <Route
          exact
          path={"/"}
          render={(params) => (
            <Home
              {...params}
              sY={sY}
              scrollN={scrollN}
              menu={SELECTGETMENU}
              lang={lang}
              scroll={scrolls}
              sX={sX}
              winSize={winSize}
              resize={windowWidth}
              tel={tel}
            />
          )}
        />
        <Route
          exact
          path={"/principal/md"}
          render={(params) => (
            <Home
              {...params}
              sY={sY}
              scrollN={scrollN}
              menu={SELECTGETMENU}
              lang={lang}
              scroll={scrolls}
              sX={sX}
              winSize={winSize}
              resize={windowWidth}
              tel={tel}
            />
          )}
        />
        {SELECTGETMENU.map((x) => (
          <Route
            key={x.alias + 5}
            exact
            path={"/" + x.alias + "/:lang"}
            render={(params) => (
              <ArticlesAll
                {...params}
                sY={sY}
                scrollN={scrollN}
                menu={SELECTGETMENU}
                lang={lang}
                scroll={scrolls}
                sX={sX}
                winSize={winSize}
                resize={windowWidth}
                tel={tel}
              />
            )}
          />
        ))}
        {SELECARTICLES.map((x) => (
          <Route
            key={x.art_alias + 8}
            exact
            path={"/" + x.art_alias + "/" + x.art_lang}
            render={(params) => (
              <Pages
                {...params}
                sY={sY}
                scrollN={scrollN}
                menu={SELECTGETMENU}
                lang={lang}
                scroll={scrolls}
                sX={sX}
                winSize={winSize}
                resize={windowWidth}
                tel={tel}
              />
            )}
          />
        ))}
        <Route
          exact
          path="/connect/message/:lang"
          render={(params) => (
            <Message
              {...params}
              sY={sY}
              scrollN={scrollN}
              menu={SELECTGETMENU}
              lang={lang}
              scroll={scrolls}
              sX={sX}
              winSize={winSize}
              resize={windowWidth}
              tel={tel}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
