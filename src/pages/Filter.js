import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import TextField from "../components/TextField";
import { ArrowTrendingUpIcon, BanknotesIcon } from "@heroicons/react/16/solid";
import Select from "react-tailwindcss-select";
import moment from "moment";
import Spinner from "../components/Spinner";

const paymentOptions = [
  { label: "Credit Card", value: "CRD" },
  { label: "Cash", value: "CSH" },
  { label: "No Charge", value: "NOC" },
  { label: "Unknown", value: "UNK" }
]

function Filter({ onFilterChange, isLoading }) {
  const [pickupTime, setPickupTime] = useState({ 
    startDate: null, 
    endDate: null
  });
  const [fareAmount, setFareAmount] = useState('');
  const [tripDistance, setTripDistance] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const handleClearFilter = () => {
    setPickupTime({
      startDate: null, 
      endDate: null
    });
    setFareAmount('');
    setTripDistance('');
    setPaymentType('');
    onFilterChange({});
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filters = {};

    if (pickupTime) filters.pickup_datetime = pickupTime;
    if (fareAmount && !isNaN(fareAmount)) filters.fare_amount = `> ${fareAmount}`;
    if (tripDistance && !isNaN(tripDistance)) filters.trip_distance = `< ${tripDistance}`;
    if (paymentType) filters.payment_type = paymentType.value;

    if (filters.pickup_datetime) {
      if (
        filters.pickup_datetime.startDate === 'Invalid date' || 
        filters.pickup_datetime.endDate === 'Invalid date'
      ) delete filters.pickup_datetime
    }

    onFilterChange(filters);
  };

  return (
    <div className="absolute top-0 z-50 w-full px-5 py-2 bg-transparent">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="grid items-center grid-cols-2 gap-2 lg:grid-cols-4 place-content-between">
          <Datepicker
            separator="to"
            value={pickupTime}
            onChange={(newPickupTime) => setPickupTime({
              startDate: moment(newPickupTime.startDate).format("YYYY-MM-DD"),
              endDate: moment(newPickupTime.endDate).format("YYYY-MM-DD"),
            })}
            showShortcuts={true}
            placeholder="Pickup Date"
            inputClassName="focus:border-blue-600 text-sm rounded-md w-full border-gray-400"
          />
          <TextField 
            title="Fare Amount (USD)" 
            inputType="number" 
            icon={<BanknotesIcon className="w-5 h-5" />}
            value={fareAmount}
            onValueChange={(e) => setFareAmount(e.target.value)}
          />
          <TextField 
            title="Trip Distance (Mil)" 
            inputType="number"
            icon={<ArrowTrendingUpIcon className="w-5 h-5" />}
            value={tripDistance}
            onValueChange={(e) => setTripDistance(e.target.value)}
          />
          <Select
            placeholder="Payment Type"
            value={paymentType}
            options={paymentOptions}
            onChange={newPayment => setPaymentType(newPayment)}
            isClearable
          />
        </div>

        <div className="flex items-center gap-2">
          <button 
            type="submit" 
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border-blue-700 rounded-md shadow-md hover:bg-blue-700 hover:border-b-blue-800 active:bg-blue-800"
          >
            Filter
          </button>
          <button 
            type="button" 
            onClick={handleClearFilter}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border-gray-200 rounded-md shadow-md hover:bg-gray-200 hover:border-gray-300 active:bg-gray-300"
          >
            Clear Filter
          </button>
          <Spinner hidden={isLoading} />
        </div>
      </form>
    </div>
  );
}

export default Filter;