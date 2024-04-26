"use client"
import React from "react";
const columns = [
  {name: "ID", uid: "id", sortable: true},
  {name: "NAME", uid: "name", sortable: true},
  {name: "HASH", uid: "hash"},
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

const products = [
    {
        id: 1,
        hash: "SKU12345",
        name: "bastão em espiral",
        image: "https://i.postimg.cc/CKfrdhs7/bastao.jpg",
        description: "Este bastão em espiral é uma arma de treinamento ideal para praticantes de artes marciais que desejam aprimorar suas habilidades de defesa pessoal. Feito de materiais duráveis, apresenta um design em espiral que proporciona uma aderência confortável e segura durante o uso. Seu tamanho e peso o tornam adequado para treinamento tanto em ambientes fechados quanto ao ar livre.",
        status: "active",
        promotional: true,
        featured: true,
    },
    {
        id: 2,
        hash: "PDQ67890",
        name: "nunchako dragão",
        image: "https://i.postimg.cc/0j5CGPDL/nunchaku.jpg",
        description: "O nunchaku, também conhecido como nunchako, é uma arma tradicionalmente associada às artes marciais asiáticas. Este modelo específico apresenta um design de dragão entalhado em sua estrutura, o que o torna tanto uma ferramenta prática quanto uma peça de arte. Feito de materiais resistentes, este nunchako é adequado para treinamento e exibição.",
        status: "active",
        promotional: false,
        featured: true,
    },
    {
        id: 3,
        hash: "BLU45678",
        name: "conjunto triplo - katanas",
        image: "https://i.postimg.cc/90NyGTW7/triple-Katana.jpg",
        description: "Este conjunto triplo de katanas é uma homenagem às lendárias espadas japonesas utilizadas pelos samurais. Cada katana é cuidadosamente trabalhada com lâminas afiadas e punhos ornamentados, proporcionando uma combinação impressionante de beleza e funcionalidade. Pertenciam ao famoso espadachim Roronoa Zoro, um dos personagens icônicos do anime e mangá One Piece. Ideal para colecionadores ou entusiastas das artes marciais, este conjunto é uma adição elegante a qualquer coleção.",
        status: "active",
        promotional: true,
        featured: false,
    },
    {
        id: 4,
        hash: "SHO90123",
        name: "tanto bushido",
        image: "https://i.postimg.cc/Ssd6x33V/tanto.jpg",
        description: "O tanto é uma faca japonesa de lâmina única, frequentemente associada às artes marciais e à cultura samurai. Este tanto bushido apresenta um design elegante e uma lâmina afiada, perfeita para treinamento ou exibição. Seu punho envolto em corda oferece uma aderência confortável e segura durante o uso.",
        status: "active",
        promotional: false,
        featured: false,
    },
    {
        id: 5,
        hash: "BAG78901",
        name: "canivete karambit",
        image: "https://i.postimg.cc/NffNm7x5/karambit.png",
        description: "O canivete karambit é uma ferramenta versátil e eficaz, frequentemente usada em artes marciais e atividades ao ar livre. Seu design curvo e lâmina afiada facilitam uma variedade de tarefas, desde cortes precisos até técnicas de autodefesa. Feito com materiais duráveis, este canivete é uma escolha confiável para qualquer entusiasta de equipamentos táticos.",
        status: "active",
        promotional: true,
        featured: true,
    },
    {
        id: 6,
        hash: "WAT23456",
        name: "kimono world combat",
        image: "https://i.postimg.cc/YCvbyrZ7/kimono.jpg",
        description: "O kimono World Combat é projetado para proporcionar conforto e mobilidade durante a prática de artes marciais. Feito de tecido resistente e respirável, este kimono oferece durabilidade e liberdade de movimento. Seu design elegante e tradicional é adequado para treinamento ou competição em uma variedade de disciplinas de combate.",
        status: "active",
        promotional: false,
        featured: true,
    },
    {
        id: 7,
        hash: "TBL56789",
        name: "faixas ju-jitsu profissional",
        image: "https://i.postimg.cc/T1TtkrMN/faixas.jpg",
        description: "Estas faixas de ju-jitsu são projetadas para atender às demandas dos praticantes mais dedicados deste esporte. Feitas com materiais de alta qualidade, oferecem resistência e durabilidade para suportar o rigor do treinamento diário. Disponíveis em uma variedade de cores, estas faixas são ideais para identificar o nível de habilidade de cada lutador.",
        status: "active",
        promotional: true,
        featured: false,
    },
    {
        id: 8,
        hash: "PHN34567",
        name: "luva de boxe",
        image: "https://i.postimg.cc/mZNLtRdT/luvaBoxe.jpg",
        description: "Esta luva de boxe é projetada para oferecer proteção e desempenho durante os treinos e competições. Feita com materiais duráveis e acolchoamento de alta qualidade, proporciona conforto e absorção de impacto. Seu design ergonômico e fecho seguro garantem um ajuste personalizado para cada lutador.",
        status: "active",
        promotional: false,
        featured: false,
    },
];

export {columns, products, statusOptions};
