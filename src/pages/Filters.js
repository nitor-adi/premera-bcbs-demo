import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from '@mui/material';
import {
    ArrowBackIos,
    ArrowForwardIos,
    CalendarToday,
} from '@mui/icons-material';

const Filters = ({
    resourceType,
    resource,
    day,
    onChange,
    onBack,
    onForward,
}) => {
    return (
        <div className="wrm-filters-container">
            <Button variant="outlined" className="back-button">
                BACK TO SCHEDULE
            </Button>

            <div className="filters-center-dropdowns">
                <FormControl size="small" className="filter-field">
                    <InputLabel>Resource type</InputLabel>
                    <Select
                        value={resourceType}
                        label="Resource type"
                        onChange={(e) =>
                            onChange('resourceType', e.target.value)
                        }
                    >
                        <MenuItem value="OT">OT</MenuItem>
                        <MenuItem value="PT">PT</MenuItem>
                    </Select>
                </FormControl>

                <FormControl size="small" className="filter-field">
                    <InputLabel>Resource</InputLabel>
                    <Select
                        value={resource}
                        label="Resource"
                        onChange={(e) => onChange('resource', e.target.value)}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="John">John</MenuItem>
                        <MenuItem value="Jane">Jane</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    type="date"
                    size="small"
                    className="filter-field"
                    value={day}
                    onChange={(e) => onChange('day', e.target.value)}
                    label="Day"
                    InputLabelProps={{ shrink: true }}
                />
            </div>

            <div className="calendar-range">
                <ArrowBackIos
                    fontSize="small"
                    className="nav-icon"
                    onClick={onBack}
                />
                <span className="date-label">01/23/2021 – 01/27/2021</span>
                <ArrowForwardIos
                    fontSize="small"
                    className="nav-icon"
                    onClick={onForward}
                />
                <CalendarToday fontSize="small" className="calendar-icon" />
            </div>
        </div>
    );
};

export default Filters;
