function transformChartData(data) {
  const result = {};

  data.forEach(item => {
    if (!result[item.partnerIdentifier]) {
      result[item.partnerIdentifier] = { partner: item.partnerIdentifier };
    }

    result[item.partnerIdentifier][item.month] = item.Sum;
  });

  console.log(Object.values(result));
  
  return Object.values(result);
}

export default transformChartData;