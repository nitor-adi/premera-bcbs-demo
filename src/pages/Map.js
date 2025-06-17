import { useMemo } from 'react';
import {
    GoogleMap,
    Marker,
    OverlayView,
    useLoadScript,
} from '@react-google-maps/api';
import Resources from './Resources';

const containerStyle = {
    width: '100%',
    height: '500px',
};

const center = {
    lat: 33.4152,
    lng: -111.8315,
};

const getInitials = (fullName) => {
    const parts = fullName.trim().split(' ');
    if (parts.length < 2) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
};

const primaryPatientName = 'Betty Addison';

const markerData = [
    {
        id: 1,
        lat: 33.4192,
        lng: -111.8315,
        name: 'Betty Addison',
        color: '#00BCC9',
    },
    {
        id: 2,
        lat: 33.4272,
        lng: -111.94,
        name: 'Kathy Earl',
        color: 'green',
    },
    {
        id: 3,
        lat: 33.392,
        lng: -111.831,
        name: 'Kevin Fox',
        color: 'orange',
    },
];

// 🔹 Clinician circle marker SVG
const generateClinicianSVG = (initials, fillColor) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36">
            <circle cx="18" cy="18" r="16" fill="${fillColor}" />
            <text x="18" y="22" font-size="12" text-anchor="middle" fill="white" font-weight="bold" font-family="Segoe UI, sans-serif">${initials}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

// 🔹 Patient marker SVG (pin shape)
const generatePatientSVG = (labelText, fillColor) => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <path d="M24 0C14 0 6 8 6 18c0 10.5 18 30 18 30s18-19.5 18-30C42 8 34 0 24 0z" fill="${fillColor}"/>
            <text x="24" y="22" font-size="10" text-anchor="middle" fill="white" font-weight="bold" font-family="Segoe UI, sans-serif">${labelText}</text>
        </svg>
    `;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

const ScheduleVisitsMap = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const markers = useMemo(() => {
        if (!isLoaded || !window.google) return [];

        return markerData.map(({ id, lat, lng, name, color }) => {
            const isPrimary = name === primaryPatientName;
            const initials = getInitials(name);

            const icon = isPrimary
                ? {
                      url: generatePatientSVG(initials, color),
                      scaledSize: new window.google.maps.Size(48, 48),
                      anchor: new window.google.maps.Point(24, 48),
                  }
                : {
                      url: generateClinicianSVG(initials, color),
                      scaledSize: new window.google.maps.Size(36, 36),
                      anchor: new window.google.maps.Point(18, 18),
                  };

            return {
                id,
                lat,
                lng,
                name,
                icon,
                isPrimary,
            };
        });
    }, [isLoaded]);

    if (!isLoaded) return <div className="loading">Loading Map...</div>;

    return (
        <div className="schedule-visits-map-container">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
            >
                {markers.map((marker) =>
                    marker.isPrimary ? (
                        <OverlayView
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <img
                                    src={marker.icon.url}
                                    alt={marker.name}
                                    width="48"
                                    height="48"
                                />
                                <span
                                    style={{
                                        marginLeft: '6px',
                                        // background: 'white',
                                        // padding: '2px 6px',
                                        // borderRadius: '4px',
                                        // fontWeight: '600',
                                        fontSize: '18px',
                                        color: '#00BCC9',
                                        // boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                                    }}
                                >
                                    {marker.name}
                                </span>
                            </div>
                        </OverlayView>
                    ) : (
                        <Marker
                            key={marker.id}
                            position={{ lat: marker.lat, lng: marker.lng }}
                            icon={marker.icon}
                        />
                    )
                )}
            </GoogleMap>
            <Resources />
        </div>
    );
};

export default ScheduleVisitsMap;
