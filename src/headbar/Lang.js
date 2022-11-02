/* eslint-disable no-lone-blocks */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { urlMdRu } from "../action";
import "../css/lang.css";
export default function Lang(props) {
  const LANG = useDispatch();
  const MENUID = useDispatch();
  function block(params) {
    return (
      <div className="row">
        <div
          className={`col-2 fl p-0 ${
            urlMdRu(document.baseURI) === "ru" ? "langActive" : ""
          }`}
        >
          <Link
            onClick={() => {
              {
                LANG({ type: "LANG", lang: "ru" });
                MENUID({ type: "MENUID", payload: 1 });
              }
            }}
            to="/"
          >
            ru
          </Link>
        </div>
        <div
          className={`col-2 fl p-0 ${
            urlMdRu(document.baseURI) === "md" ? "langActive" : ""
          }`}
        >
          <Link
            onClick={() => {
              {
                LANG({ type: "LANG", lang: "md" });
                MENUID({ type: "MENUID", payload: 2 });
              }
            }}
            to="/principal/md"
          >
            md
          </Link>
        </div>
      </div>
    );
  }

  return <div className={`col-sm lang `}>{block(props)}</div>;
}
