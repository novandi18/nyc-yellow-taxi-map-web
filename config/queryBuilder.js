const tripQuery = (queryParams) => {
  let whereClause = [];

  if (queryParams.pickup_datetime) {
    if (
      queryParams.pickup_datetime.startDate != null &&
      queryParams.pickup_datetime.endDate != null
    ) {
      whereClause.push(`pickup_datetime BETWEEN '${queryParams.pickup_datetime.startDate}T00:00:00.000' AND '${queryParams.pickup_datetime.endDate}T23:59:59.999'`);
    }
  }

  if (queryParams.fare_amount) {
    whereClause.push(`fare_amount ${queryParams.fare_amount}`);
  }

  if (queryParams.trip_distance) {
    whereClause.push(`trip_distance ${queryParams.trip_distance}`);
  }

  if (queryParams.payment_type) {
    whereClause.push(`payment_type = '${queryParams.payment_type}'`);
  }

  const whereString = whereClause.length > 0 ? `$where=${whereClause.join(' AND ')}` : '';

  const limit = queryParams.limit || 1000;
  const offset = queryParams.offset || 0;

  return `${whereString}&$limit=${limit}&$offset=${offset}`;
};

module.exports = { tripQuery };
