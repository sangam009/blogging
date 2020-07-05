/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import useStyles from "isomorphic-style-loader/useStyles";
import AppBar from "../../components/Entroopy/Header/AppBar";
import LeftDrawer from "../../components/Entroopy/Drawer/LeftDrawer";
import React from "react";
import PropTypes from "prop-types";

export default function Home() {
  return (
    <div>
      <LeftDrawer />
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     title: PropTypes.string.isRequired,
  //     link: PropTypes.string.isRequired,
  //     content: PropTypes.string,
  //   }),
  // ).isRequired,
};
