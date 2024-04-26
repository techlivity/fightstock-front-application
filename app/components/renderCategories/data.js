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

const categories = [
    {
        id: 1,
        name: "Equipamentos",
        image: "https://i.postimg.cc/bvCbXktF/equipamentos.jpg",
        description: "Descrição da Categoria 1",
        status: "active"
    },
    {
        id: 2,
        name: "Suplementos",
        image: "https://i.postimg.cc/nczkCVHm/suplementos.jpg",
        description: "Descrição da Categoria 2",
        status: "active"
    },
    {
        id: 3,
        name: "Vestimentas",
        image: "https://i.postimg.cc/8kydQ8hz/vestimentas.webp",
        description: "Descrição da Categoria 3",
        status: "paused"
    },
    {
        id: 4,
        name: "Armas",
        image: "https://i.postimg.cc/ht8JKspX/armas.jpg",
        description: "Descrição da Categoria 4",
        status: "vacation"
    }
]

export {columns, categories, statusOptions};
