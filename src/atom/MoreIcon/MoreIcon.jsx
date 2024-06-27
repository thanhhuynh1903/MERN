import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteBrand from '../../api/DeleteBrand';
import UpdateBrandModal from '../UpdateBrandModal/UpdateBrandModal'; // Import the UpdateBrandModal component

export default function Moreicon({ brandId, handleOpen, handleClose, refreshBrandList }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleDelete = async () => {
        try {
            await DeleteBrand(brandId);
            handleCloseMenu();
            refreshBrandList(); // Trigger refresh after delete
        } catch (error) {
            console.error('Error deleting brand:', error);
            // Optionally: handle error (e.g., show an error message)
        }
    };

    return (
        <div>
            <Button
                aria-controls={anchorEl ? 'basic-menu' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreHorizIcon style={{ color: 'black' }} />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem
                    onClick={() => {
                        handleOpen();
                        handleCloseMenu();
                    }}
                >
                    <EditIcon className="mr-6" style={{ color: 'green' }} />
                    Edit
                </MenuItem>
                <MenuItem onClick={handleDelete}>
                    <ClearIcon className="mr-6" style={{ color: 'red' }} />
                    Delete
                </MenuItem>
            </Menu>

            {/* Modal for updating brand name */}
        </div>
    );
}
