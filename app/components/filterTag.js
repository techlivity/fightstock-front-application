"use client"
import * as React from 'react';
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";


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

    return (
        <div className="flex justify-center mt-8">
            <div className="bg-black-200 flex justify-between w-[75%]">
                <Input className="pr-4 w-[150%]" type="search" label="pesquisa" placeholder="Pesquise através do nome" />
                <Button className="relative mt-3 pl-2 pr-5 px-10" size="md" color="primary">Pesquisar</Button>
                <label className='mt-3 pl-5 pr-5 font-signika font-semibold text-rose-600 underline decoration-solid'>Exibir: </label>
                <Select
                    className="mb-3 w-[40%]"
                    placeholder='10'
                    size='sm'
                >
                    {exibir.map(item => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </Select>
                <label className='pl-5 pr-5 font-signika font-semibold text-rose-600 underline decoration-solid'>Filtrar por: </label>
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
                <label className='pl-5 pr-5 font-signika font-semibold text-rose-600 underline decoration-solid'>Ordenar por: </label>
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
    )

}