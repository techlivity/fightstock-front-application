"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import data from '../api.json'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';


export default function FilterTag({ categoria }) {

    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className="flex flex-wrap justify-center gap-10 mt-8">
            <div className="bg-gray-200 flex justify-between w-[75%] h-auto">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                ></Box>
                <TextField fullWidth sx={{ m: 1 }}
                    id="filled-search"
                    label="Pesquise o produto"
                    type="search"
                />
                <Button color="primary" size="medum" variant="contained">Pesquisar</Button>
                <label className='text-rose-600 underline decoration-solid'>Exibir: </label>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={value}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value={""}>
                            <em>10</em>
                        </MenuItem>
                        <MenuItem value={10}></MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={100}>Máximo</MenuItem>
                    </Select>
                </FormControl>
                <label className='text-rose-600 underline decoration-solid'>Filtrar por: </label>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'alfabetica'}>Ordem alfabetica a-Z</MenuItem>
                        <MenuItem value={'Em destaques'}>Em destaques</MenuItem>
                        <MenuItem value={'Em promoções'}>Em promoções</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    )

}