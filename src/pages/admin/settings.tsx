import React from "react";

// components

import CardSettings from "../../components/Cards/CardSettings";
import CardProfile from "../../components/Cards/CardProfile";

// layout for page

import Admin from "../../layouts/Admin";

export default function Settings() {
  return (
    <Admin>
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-8/12">
          <CardSettings />
        </div>
        <div className="w-full px-4 lg:w-4/12">
          <CardProfile />
        </div>
      </div>
    </Admin>
  );
}
