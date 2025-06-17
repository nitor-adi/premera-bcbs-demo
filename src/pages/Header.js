import { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

export default function Header() {
    const [selectedDomain, setSelectedDomain] = useState('');

    const handleChange = (event) => {
        setSelectedDomain(event.target.value);
    };
    return (
        <div className="wrm-schedule-visit-header">
            <div className="wrm-schedule-visit-logo">
                <h1 className="wrm-schedule-visit-title">Schedule Visits</h1>
                <p className="wrm-schedule-visit-subtitle">Allen smith</p>
            </div>

            <div className="wrm-schedule-visit-header-right">
                <div>Domain</div>
                <FormControl
                    variant="outlined"
                    size="small"
                    sx={{ minWidth: 160, mt: 1 }}
                >
                    <InputLabel id="domain-select-label">Select</InputLabel>
                    <Select
                        labelId="domain-select-label"
                        id="domain-select"
                        value={selectedDomain}
                        onChange={handleChange}
                        label="Select"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="North">North</MenuItem>
                        <MenuItem value="South">South</MenuItem>
                        <MenuItem value="East">East</MenuItem>
                        <MenuItem value="West">West</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}
