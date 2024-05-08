"use client"
import React, { useEffect, useState } from 'react';
import { getProduct } from './getProduct';
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Pagination, Select, SelectItem } from "@nextui-org/react";
import ProductList_Component from '../listaProdutos';
import { filtros, ordenar, exibir } from './datas.js'


export default function FilterTag({ categoria }) {
    // tratar {categoria} para obtenção dos produtos referente a categoria clicada. (usando axios)

    const [quantityDisplayed, setQuantityDisplayed] = useState(16);
    const [productsCategory, setProductsCategory] = useState([])
    const [page, setPage] = useState(1)
    const [productName, setProductName] = useState('');
    const [productFound, setProductFound] = useState(null);

    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [onPromotion, setOnPromotion] = useState(false);
    const [onFeatured, setFeatured] = useState(false);
    const [inAlphabeticalOrder, setInAlphabeticalOrder] = useState(false);
    const [isNewProduct, setIsNewProduct] = useState(false);

    useEffect(() => {
        getProduct().then((product) => {
            setProductsCategory(product.produtos);
        });
    }, []);

    const saveOrder = (ordenar) => {
        const ordenaParaEstado = {
            "Alfabetica": { alfabetica: true, novidades: false },
            "Novidades": { alfabetica: false, novidades: true },
            default: { alfabetica: false, novidades: false }
        };
        const { alfabetica, novidades } = ordenaParaEstado[ordenar] || ordenaParaEstado.default;
        setInAlphabeticalOrder(alfabetica);
        setIsNewProduct(novidades)
    }

    const saveViewChange = (quantity) => {
        if (quantity != '') {
            setQuantityDisplayed(quantity);
        } else if (quantity == '') {
            setQuantityDisplayed(16)
        } else {
            setQuantityDisplayed(null)
        }
    };

    const saveChangedFilter = (filtro) => {
        const filtroParaEstado = {
            "Em destaques": { destaque: true, promocao: false },
            "Em promoções": { destaque: false, promocao: true },
            default: { destaque: false, promocao: false }
        };
        const { destaque, promocao } = filtroParaEstado[filtro] || filtroParaEstado.default;
        setFeatured(destaque);
        setOnPromotion(promocao);
    };

    const saveNameProduct = (nome) => {
        setProductName(nome)
    }

    const treatsProductNameOnButton = () => {
        if (productName.trim() !== '') {
            const productFounded = productsCategory.find(produto => produto.name === productName);
            if (productFounded) {
                handleProductFounded(productFounded)
            } else {
                handleProductNotFound()
            }
        } else {
            handleProductWithEmptyName()
        }

        setTimeout(resetState, 3000);
    };

    const handleProductFounded = (product) => {
        setProductFound(product);
        setIsInvalid(false);
        setErrorMessage('');
    }

    const handleProductNotFound = () => {
        setProductFound(null);
        setIsInvalid(true);
        setErrorMessage('O produto não foi encontrado.');
    }

    const handleProductWithEmptyName = () => {
        setProductFound(null);
        setIsInvalid(true);
        setErrorMessage('O produto não foi encontrado.');
    }

    const resetState = () => {
        setIsInvalid(false);
        setErrorMessage('');
    }

    const fillProductsToComponent = () => {
        let productsDisplayed = [];
        if (productFound) {
            productsDisplayed = [productFound];
        } else {
            productsDisplayed = filterProducts();
        }
        return productsDisplayed;
    };

    const filterProducts = () => {
        let filteredProducts = productsCategory;

        if (quantityDisplayed) {
            filteredProducts.slice(0, quantityDisplayed);
        }
        if(page) {
            filteredProducts = handleProductsToCurrentPage(quantityDisplayed, page)
        }
        if (onFeatured) {
            filteredProducts = filteredProducts.filter(produto => produto.featured === onFeatured);
        } else if (onPromotion) {
            filteredProducts = filteredProducts.filter(produto => produto.promocao === onPromotion);
        } else if (isNewProduct) {
            filteredProducts = filterProductsOnFeatured(filteredProducts);
        } else if (inAlphabeticalOrder) {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        }
        return filteredProducts
    };

    const filterProductsOnFeatured = (products) => {
        const umMesAtras = new Date();
        umMesAtras.setMonth(umMesAtras.getMonth() - 1);
        const dataAtual = new Date();
        return products.filter(products => {
            const dataCriacao = new Date(products.createdOn);
            return dataCriacao >= umMesAtras && dataCriacao <= dataAtual;
        });
    }
    const handlePageChange = (page) => {
        setPage(page)
    };

    function handleProductsToCurrentPage(quantidade, numeroPagina) {
        var indiceInicial = (numeroPagina - 1) * quantidade;
        var indiceFinal = Math.min(indiceInicial + quantidade, productsCategory.length);
    
        return productsCategory.slice(indiceInicial, indiceFinal)
    }
    
    return (
        <>
            <div className="flex justify-center mt-8">
                <div className="bg-black-200 flex justify-between w-[75%]">
                    <Input
                        isInvalid={isInvalid}
                        errorMessage={errorMessage}
                        onChange={(e) => saveNameProduct(e.target.value)}
                        className="pr-4 w-[150%]" type="search" label="pesquisa" placeholder="Pesquise através do nome" />
                    <Button onClick={() => treatsProductNameOnButton()} className="relative mt-3 pl-2 pr-5 px-10" size="md" color="primary">Pesquisar</Button>
                    <label className='mt-3 pl-5 pr-5 font-signika font-semibold text-rose-600 decoration-solid'>Exibir: </label>
                    <Select
                        className="mb-3 w-[40%]"
                        placeholder='16'
                        size='sm'
                        onChange={(e) => saveViewChange(e.target.value)}
                        value={quantityDisplayed}
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
                        onChange={(e) => saveChangedFilter(e.target.value)}
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
                        onChange={(e) => saveOrder(e.target.value)}
                    >
                        {ordenar.map(item => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.value}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
            </div>

            <ProductList_Component items={fillProductsToComponent()}></ProductList_Component>
            <div className="flex justify-center mt-8">
                <Pagination 
                    loop 
                    showControls 
                    total={Math.ceil(productsCategory.length / quantityDisplayed)} 
                    initialPage="1" 
                    onChange={handlePageChange} 
                />
            </div>
        </>
    )

}