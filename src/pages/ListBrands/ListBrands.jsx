import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TableListBrands from '../../atom/table/TableListBrands';
import { useState } from 'react';
import AddBrandModal from '../../atom/AddBrandModal/AddBrandModal';
import UpdateBrandModal from '../../atom/UpdateBrandModal/UpdateBrandModal';

function ListBrands() {
    const [openAdd, setOpenAdd] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [selectedBrandId, setSelectedBrandId] = useState(null);
    const [refresh, setRefresh] = useState(false); // State to trigger refresh

    const handleUpdateModalOpen = (brandId) => {
        setSelectedBrandId(brandId);
        setOpenUpdate(true);
    };

    const handleAddBrandSuccess = () => {
        setRefresh(!refresh); // Toggle refresh state
    };

    return (
        <>
            <div className="text-4xl font-sans font-semibold">Brands Management</div>
            <div className="flex mt-8 justify-between">
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        '& > :not(style)': { width: '100%' },
                        width: '500px',
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Search by..."
                        variant="outlined"
                        sx={{ fontStyle: 'italic' }}
                    />
                </Box>
                <Button
                    onClick={() => setOpenAdd(true)}
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon sx={{ fontWeight: '600' }} />}
                    sx={{
                        textTransform: 'none',
                        backgroundColor: '#2d3748',
                        height: '2.5rem',
                        fontWeight: '600',
                        '&:hover': {
                            backgroundColor: '#384964',
                        },
                        borderRadius: '10px',
                    }}
                >
                    Add Brand
                </Button>
            </div>
            <div className="mt-8">
                <TableListBrands
                    open={openUpdate}
                    handleClose={() => setOpenUpdate(false)}
                    handleOpen={handleUpdateModalOpen}
                    refresh={refresh} // Pass refresh state to TableListBrands
                />
            </div>
            <AddBrandModal
                open={openAdd}
                handleClose={() => setOpenAdd(false)}
                onAddBrandSuccess={handleAddBrandSuccess} // Pass onAddBrandSuccess to AddBrandModal
            />
            <UpdateBrandModal
                open={openUpdate}
                handleClose={() => setOpenUpdate(false)}
                brandId={selectedBrandId}
            />
        </>
    );
}

export default ListBrands;
