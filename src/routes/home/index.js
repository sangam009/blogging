/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from "react";
import Home from "./Home";
import fetch from "node-fetch";
import Layout from "../../components/Layout";

async function action() {
  //let data = await fetch("http://130.211.202.127/data");
  return {
    title: "React Starter Kit",
    chunks: ["home"],
    component: <Home />
  };
}

export default action;
