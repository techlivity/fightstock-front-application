"use client"
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import data from "../mockCategory.json";
import ProductList_Component from './listaProdutos';


export default function FilterTag({ categoria }) {
    //constantes criados apenas para teste, devo criar uma entidade depois para obtenção
    const filtros = [
        {
            value: "Nenhum"
        },
        {
            value: "Em destaques"
        },
        {
            value: "Em promoções"
        }
    ]
    const exibir = [
        {
            value: 10,
            label: "10"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 30,
            label: "30"
        },
        {
            value: 50,
            label: "50"
        }
    ]
    const ordenar = [
        {
            value: "Nenhum"
        },
        {
            value: "Ordem alfabetica"
        },
        {
            value: "novidades"
        }
    ]

    const [exibirQuantidade, setExibirQuantidade] = useState(10);
    const [nomeProduto, setNomeProduto] = useState('');
    const [produtoEncontrado, setProdutoEncontrado] = useState(null);

    const guardaExibirAlteracao = (quantidade) => {
      setExibirQuantidade(quantidade);
      console.log("DEBUG: " + quantidade)
    };

    const guardaNomeProduto = (nome) => {
        setNomeProduto(nome)
        console.log(nome)
    }

    const enviaEventoNomeProduto = () => {
        if(nomeProduto.trim() !== '') {
            const produtoEncontrado = data.produtos.find(produto => produto.name === nomeProduto);
            console.log(produtoEncontrado)
            if(produtoEncontrado) {
                console.log("DEBUG: " + "Produto encontrado:", produtoEncontrado);
                setProdutoEncontrado(produtoEncontrado);
            } else {
                console.log("DEBUG: " + "Produto não encontrado");
                setProdutoEncontrado(null); 
            }
        } else {
            console.log("DEBUG: " + "Nome do produto vazio");
            setProdutoEncontrado(null);
        }
    };

    const preencheEspecificacaoDaApi = () => {
        let produtosExibidos;
        if(produtoEncontrado) {
            produtosExibidos = [produtoEncontrado];
        } else {
            produtosExibidos = exibirQuantidade ? data.produtos.slice(0, exibirQuantidade) : data.produtos;
        }
        return produtosExibidos;
    };
    return (
        <>
        <div className="flex justify-center mt-8">
            <div className="bg-black-200 flex justify-between w-[75%]">
                <Input onChange={(e) => guardaNomeProduto(e.target.value)} className="pr-4 w-[150%]" type="search" label="pesquisa" placeholder="Pesquise através do nome" />
                <Button onClick={() => enviaEventoNomeProduto()} className="relative mt-3 pl-2 pr-5 px-10" size="md" color="primary">Pesquisar</Button>
                <label className='mt-3 pl-5 pr-5 font-signika font-semibold text-rose-600 decoration-solid'>Exibir: </label>
                <Select
                    className="mb-3 w-[40%]"
                    placeholder='10'
                    size='sm'
                    onChange={(e) => guardaExibirAlteracao(e.target.value)}
                    value={exibirQuantidade}
                >
                    {exibir.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
                <label className='pl-5 pr-5 font-signika font-semibold text-rose-600 decoration-solid'>Filtrar por: </label>
                <Select
                    className="mb-3 w-[40%]"
                    placeholder='filtro'
                    size='sm'
                >
                    {filtros.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.value}
                        </SelectItem>
                    ))}
                </Select>
                <label className='pl-5 pr-5 font-signika font-semibold text-rose-600 decoration-solid'>Ordenar por: </label>
                <Select
                    className="mb-3 w-[40%]"
                    placeholder='ordena'
                    size='sm'
                >
                    {ordenar.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.value}
                        </SelectItem>
                    ))}
                </Select>
            </div>
        </div>

        <ProductList_Component items={preencheEspecificacaoDaApi()}></ProductList_Component>
        </>
    )

}