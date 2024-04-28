"use client"
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import data from "./mockCategory.json";
import ProductList_Component from '../listaProdutos';
import { filtros, ordenar, exibir } from './datas.js'


export default function FilterTag({ categoria }) {
    // tratar {categoria} para obtenção dos produtos referente a categoria clicada. (usando axios)

    const [exibirQuantidade, setExibirQuantidade] = useState(16);

    const [nomeProduto, setNomeProduto] = useState('');
    const [produtoEncontrado, setProdutoEncontrado] = useState(null);

    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [emPromocao, setPromocao] = useState(false);
    const [emDestaque, setDestaque] = useState(false);

    const [emOrdemAlfabetica, setOrdemAlfabetica] = useState(false);
    const [emNovidades, setNovidades] = useState(false);

    const guardaOrdenar = (ordenar) => {
        const ordenaParaEstado = {
            "Alfabetica": { alfabetica: true, novidades: false },
            "Novidades": { alfabetica: false, novidades: true },
            default: { alfabetica: false, novidades: false }
        };
        console.log(ordenaParaEstado[ordenar])
        const { alfabetica, novidades } = ordenaParaEstado[ordenar] || ordenaParaEstado.default;
        console.log(alfabetica)
        console.log(novidades)
        setOrdemAlfabetica(alfabetica);
        setNovidades(novidades)
        console.log("DEBUG guardaOrdenar  " + ordenar);
    }
    const guardaExibirAlteracao = (quantidade) => {
        if(quantidade != '') {
            setExibirQuantidade(quantidade);
        }else if(quantidade == '') {
            setExibirQuantidade(16)
        } else {
            setExibirQuantidade(null)
        }
    };
    const guardaFiltroAlteracao = (filtro) => {
        const filtroParaEstado = {
            "Em destaques": { destaque: true, promocao: false },
            "Em promoções": { destaque: false, promocao: true },
            default: { destaque: false, promocao: false }
        };

        const { destaque, promocao } = filtroParaEstado[filtro] || filtroParaEstado.default;
        setDestaque(destaque);
        setPromocao(promocao);
        console.log("DEBUG guardaFiltroAlteracao  " + filtro);
    };

    const guardaNomeProduto = (nome) => {
        setNomeProduto(nome)
        console.log("DEBUG guardaNomeProduto  " + nome)
    }

    const eventoClickBotaoTrataNomeProduto = () => {
        if (nomeProduto.trim() !== '') {
            const produtoEncontrado = data.produtos.find(produto => produto.name === nomeProduto);
            console.log(produtoEncontrado)
            if (produtoEncontrado) {
                console.log("DEBUG: eventoClickBotaoTrataNomeProduto  " + "Produto encontrado:", produtoEncontrado);
                setProdutoEncontrado(produtoEncontrado);
                setIsInvalid(false);
                setErrorMessage('');
            } else {
                console.log("DEBUG: eventoClickBotaoTrataNomeProduto  " + "Produto não encontrado");
                setProdutoEncontrado(null);
                setIsInvalid(true);
                setErrorMessage('O produto não foi encontrado.');
            }
        } else {
            console.log("DEBUG:eventoClickBotaoTrataNomeProduto " + "Nome do produto vazio");
            setProdutoEncontrado(null);
            setIsInvalid(true);
            setErrorMessage('O produto não foi encontrado.');
        }

        setTimeout(() => {
            setIsInvalid(false);
            setErrorMessage('');
        }, 3000);
    };

    const preencheEspecificacaoDaApi = () => {
        let produtosExibidos = [];
        if (produtoEncontrado) {
            produtosExibidos = [produtoEncontrado];
        }
        produtosExibidos = exibirQuantidade ? data.produtos.slice(0, exibirQuantidade) : data.produtos;
        if (emDestaque) {
            produtosExibidos = produtosExibidos.filter(produto => produto.featured === emDestaque);
        } else if (emPromocao) {
            produtosExibidos = produtosExibidos.filter(produto => produto.promocao === emPromocao);
        }else if(emNovidades) {
            let listaFiltrada = [];
            let dataAtual = new Date();
            let umMesAtras = new Date();
            umMesAtras.setMonth(umMesAtras.getMonth() - 1);
            produtosExibidos.forEach(produto => {
                let dataCriacao = new Date(produto.createdOn);
                if (dataCriacao >= umMesAtras && dataCriacao <= dataAtual) {
                    listaFiltrada.push(produto);
                }
            });
            produtosExibidos = listaFiltrada;
        }else if(emOrdemAlfabetica) {
            produtosExibidos.sort((a, b) => {
                let nomeA = a.name.toUpperCase();
                let nomeB = b.name.toUpperCase();
                if (nomeA < nomeB) {
                    return -1;
                }
                if (nomeA > nomeB) {
                    return 1;
                }
                return 0;
            });
        }
        console.log(produtosExibidos)
        console.log("Em destaque ?  " + emDestaque);
        console.log("em promocao ?" + emPromocao);
        console.log("Em Ordem alfabetica ?  " + emOrdemAlfabetica);
        console.log("em Novidades ?  " + emNovidades);
        return produtosExibidos;

    };

    return (
        <>
            <div className="flex justify-center mt-8">
                <div className="bg-black-200 flex justify-between w-[75%]">
                    <Input
                        isInvalid={isInvalid}
                        errorMessage={errorMessage}
                        onChange={(e) => guardaNomeProduto(e.target.value)}
                        className="pr-4 w-[150%]" type="search" label="pesquisa" placeholder="Pesquise através do nome" />
                    <Button onClick={() => eventoClickBotaoTrataNomeProduto()} className="relative mt-3 pl-2 pr-5 px-10" size="md" color="primary">Pesquisar</Button>
                    <label className='mt-3 pl-5 pr-5 font-signika font-semibold text-rose-600 decoration-solid'>Exibir: </label>
                    <Select
                        className="mb-3 w-[40%]"
                        placeholder='16'
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
                        placeholder='nenhum'
                        size='sm'
                        onChange={(e) => guardaFiltroAlteracao(e.target.value)}
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
                        placeholder='nenhum'
                        size='sm'
                        onChange={(e) => guardaOrdenar(e.target.value)}
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