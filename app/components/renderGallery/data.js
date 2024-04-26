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

const galleries = [
    {
        id: 1,
        name: "Ju Jitsu",
        image: "https://i.postimg.cc/6533WNZG/juJitsu.png",
        description: "Descrição da Galeria 1",
        status: "active"
    },
    {
        id: 2,
        name: "Boxing",
        image: "https://i.postimg.cc/qRTq4hck/boxing.png",
        description: "Descrição da Galeria 2",
        status: "active"
    },
    {
        id: 3,
        name: "Karate",
        image: "https://i.postimg.cc/RhC0Jkby/karate.jpg",
        description: "Descrição da Galeria 3",
        status: "paused"
    },
    {
        id: 4,
        name: "Kung Fu",
        image: "https://i.postimg.cc/WpSzc4dv/kungFu.jpg",
        description: "Descrição da Galeria 4",
        status: "vacation"
    },
    {
        id: 5,
        name: "Kick Boxing",
        image: "https://i.postimg.cc/Kj98P06z/kick-Boxing.jpg",
        description: "Descrição da Galeria 5",
        status: "active"
    },
    {
        id: 6,
        name: "Taekwondo",
        image: "https://i.postimg.cc/FRVRRrG0/taekwondo.jpg",
        description: "Descrição da Galeria 6",
        status: "active"
    }
]

export {columns, galleries, statusOptions};
