/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import Button from "../elements/Button";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <p className="text-theme-blue text-4xl font-medium ">
        Craftium
        <span className="text-theme-purple">Labs</span>
      </p>
    </Button>
  );
}
