import {
    Grid,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField
} from '@mui/material';
import React, { useState } from 'react';
import { StandardInput, FileUploader } from './components/atoms/Input/InputMUI';
import { Titulos } from './components/atoms/Title/Titulos';
import { BotonMUI } from './components/atoms/Button/BotonMUI';
import { AgregarMateriaUniOrigen } from './AgregarMateriaUniOrigen';
import { FormUniOrigen } from './FormUniOrigen';
import { nanoid } from 'nanoid';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import IconButton from '@mui/material/IconButton';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

const ExtrasUniOrigen = ({
    formValue,
    handleChangeArray,
    formValueArray,
    key2
}) => {
    const [value, setValue] = useState('');

    return (
        <Grid
            item
            container
            xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
        >
            <Grid
                item
                container
                md={12}
                lg={5.8}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    marginTop: '10px'
                }}
            >
                <Grid item container xs={5.6}>
                    {/* <StandardInput
                        key={formValueArray.key}
                        required
                        name="anioAprobacion"
                        size="small"
                        label="Año aprobación"
                        variant="outlined"
                        type="number"
                        value={formValueArray.anioAprobacion}
                        onChange={(event) => handleChangeArray(event, key2)}
                    /> */}

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            views={['year']}
                            label="Año aprobación"
                            name="datepicker"
                            onChange={(newValue) => setValue(newValue)}
                            value={value}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    key={formValueArray.key}
                                    required
                                    name="anioAprobacion"
                                    sx={{
                                        marginTop: '15px'
                                    }}
                                    size="small"
                                    variant="outlined"
                                    type="number"
                                    value={(formValueArray.anioAprobacion = new Date(
                                        value
                                    ).getFullYear()).toString()}
                                    onClick={(event) =>
                                        handleChangeArray(event, key2)
                                    }
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item container xs={5.6}>
                    <StandardInput
                        key={formValueArray.key}
                        required
                        name="cargaHorariaTotal"
                        size="small"
                        label="Carga horaria total"
                        variant="outlined"
                        type="number"
                        value={formValueArray.cargaHorariaTotal}
                        onChange={(event) => handleChangeArray(event, key2)}
                    />
                </Grid>
            </Grid>

            <Grid
                item
                container
                md={12}
                lg={5.8}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                    marginTop: '10px'
                }}
            >
                <Grid item container xs={5.6}>
                    <StandardInput
                        key={formValueArray.key}
                        required
                        name="notaAprobacion"
                        size="small"
                        label="Nota aprobación"
                        variant="outlined"
                        type="number"
                        value={formValueArray.notaAprobacion}
                        onChange={(event) => handleChangeArray(event, key2)}
                    />
                </Grid>

                <Grid
                    item
                    container
                    justifyContent="center"
                    alignItems="flex-end"
                    xs={5.6}
                    marginTop="7px"
                >
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ fontSize: '14px' }}>
                            ¿Tiene certificado?
                        </FormLabel>
                        <RadioGroup
                            required
                            row
                            aria-label="bool"
                            name="certificado"
                            onChange={(event) => handleChangeArray(event, key2)}
                            value={formValueArray.certificado}
                        >
                            <FormControlLabel
                                value={true}
                                control={<Radio size="small" />}
                                label="Si"
                            />
                            <FormControlLabel
                                value={false}
                                control={<Radio size="small" />}
                                label="No"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>

            <Grid
                item
                container
                xs={12}
                sx={{
                    marginTop: '16px'
                }}
            >
                <Grid item container xs={12}>
                    <Titulos
                        titulolabel
                        variant="h3"
                        fontSize={{
                            xs: '14px',
                            sm: '16px'
                        }}
                    >
                        Adjuntar programa de la materia .pdf
                    </Titulos>
                </Grid>

                <Grid item container xs={12} sx={{ marginTop: '16px' }}>
                    <label
                        htmlFor="contained-button-file"
                        style={{ width: '100%' }}
                    >
                        <BotonMUI
                            sx={{
                                marginRight: '12px'
                            }}
                            buttonupload
                            variant="outlined"
                            component="span"
                        >
                            Cargar
                        </BotonMUI>
                        {/* <IconButton
                            sx={{
                                marginRight: '12px'
                            }}
                            buttonupload
                            variant="outlined"
                            component="span"
                        >
                            <AttachFileOutlinedIcon />
                        </IconButton> */}
                        <FileUploader
                            id="contained-button-file"
                            multiple
                            size="small"
                            variant="standard"
                            type="file"
                            accept="application/pdf, application/vnd.ms-Excel"
                        />
                    </label>
                </Grid>
            </Grid>

            {/* <AgregarMateriaUniOrigen /> */}
        </Grid>
    );
};

export { ExtrasUniOrigen };
