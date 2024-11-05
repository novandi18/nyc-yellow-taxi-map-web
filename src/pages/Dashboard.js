import Map from './Map';
import Filter from './Filter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ToastRetry from '../components/ToastRetry';

function Dashboard() {
  const [trips, setTrips] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setIsRetrying(false);
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/trips', { params: filters });
        setTrips(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
  
    fetchTrips();
  }, [filters, isRetrying]);

  return (
    <div>
      {isError && (
        <div className='absolute bottom-0 z-50 mb-5 end-0 me-5'>
          <ToastRetry retry={() => setIsRetrying(true)} />
        </div>
      )}
      <Filter onFilterChange={setFilters} isLoading={!isLoading} />
      <Map trips={trips} />
    </div>
  );
}

export default Dashboard;