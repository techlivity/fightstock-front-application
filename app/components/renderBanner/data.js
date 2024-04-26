"use client"
import React from "react";

const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "IMAGE", uid: "image"},
  {name: "DESCRIPTION", uid: "description"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

const banners = [
    {
        id: 1,
        name: "Kimono",
        image: "https://i.postimg.cc/K8P5mLBz/promo.png",
        url: "/Vestimentas",
        description: "KimonoPromo",
        status: "active"
    },
    {
        id: 2,
        name: "LuvaBoxe",
        image: "https://i.postimg.cc/ydcRTCjN/promo2.png",
        url: "/produto2",
        description: "LuvaBoxePromo",
        status: "paused"
    }
]

export {columns, banners, statusOptions};
