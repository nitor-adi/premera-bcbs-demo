export default function Resources() {
    return (
        <div className="wrm-resources-container">
            <div className="wrm-info-cards">
                <div className="wrm-card">
                    <div className="wrm-card-info-container">
                        <p className="wrm-card-title">
                            <strong>Kathy Earl</strong>
                        </p>
                        <p className="wrm-card-sub-title">
                            4 appointments, nearest 2.8 mi
                        </p>
                        <p className="wrm-card-sub-title">
                            12 prior appointments with Betty Addison
                        </p>
                    </div>
                    <button className="wrm-select-button">Select</button>
                </div>
                <div className="wrm-card">
                    <div className="wrm-card-info-container">
                        <p className="wrm-card-title">
                            <strong>Kevin Fox</strong>
                        </p>
                        <p className="wrm-card-sub-title">
                            3 appointments, nearest 6.2 mi
                        </p>
                        <p className="wrm-card-sub-title">
                            New to Betty Addison
                        </p>
                    </div>
                    <button className="wrm-select-button">Select</button>
                </div>
            </div>
        </div>
    );
}
