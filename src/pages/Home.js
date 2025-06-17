import Header from './Header';
import Filters from './Filters';
import ScheduleVisitsMap from './Map';

export default function Home() {
    return (
        <div className="wrm-schedule-visit-main-container">
            <Header />
            <Filters />
            <ScheduleVisitsMap />
        </div>
    );
}
