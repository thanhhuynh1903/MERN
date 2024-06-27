import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import GetAllBrand from '../../api/getAllBrand';
import DeleteBrand from '../../api/DeleteBrand';
import Moreicon from "../../atom/MoreIcon/MoreIcon"

export default function TableListBrands({ open, handleClose, handleOpen, refresh }) {
    const [rowList, setRowList] = React.useState([]);

    const fetchApi = async () => {
        try {
            const response = await GetAllBrand();
            const rowsWithSequentialId = response.map((row, index) => ({
                id: index + 1,
                ...row,
            }));
            setRowList(rowsWithSequentialId);
        } catch (error) {
            console.error('Error fetching brand list:', error);
        }
    };

    React.useEffect(() => {
        fetchApi();
    }, [refresh]); // Re-fetch the list whenever refresh state changes

    const handleDeleteBrand = async (brandId) => {
        try {
            await DeleteBrand(brandId);
            fetchApi();
        } catch (error) {
            console.error('Error deleting brand:', error);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'brandName', headerName: 'Brand Name', width: 250 },
        {
            field: 'action',
            headerName: 'Action',
            description: 'Action Column',
            sortable: false,
            width: 160,
            renderCell: (params) => (
                <Moreicon
                    brandId={params.row._id}
                    handleOpen={handleOpen}
                    handleClose={handleClose}
                    refreshBrandList={fetchApi} // Pass refresh function to Moreicon
                />
            ),
        },
    ];

    return (
        <Box sx={{ height: 400, width: '99%' }}>
            <DataGrid
                rows={rowList}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                pagination
                disableSelectionOnClick
                sx={{
                    '& .MuiDataGrid-columnHeader': {
                        backgroundColor: '#2d3748',
                        color: '#FFFFFF',
                    },
                    '& .MuiDataGrid-filler': {
                        backgroundColor: '#2d3748',
                        color: '#FFFFFF',
                    },
                    '& .css-tgsonj': {
                        backgroundColor: '#FFF',
                    },
                }}
            />
        </Box>
    );
}
