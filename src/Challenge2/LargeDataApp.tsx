import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Chart from 'react-native-chart-kit';
import useCount from '../hooks/useCount';

const LargeDataApp = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useCount(0, false, () => console.log('Memory leak potential'));

  useEffect(() => {
    const getLargeData = async () => {
      try {
        const res = (await fetch(
          'https://api.example.com/large-dataset',
        )) as any;

        if (res.status === 200) {
          const resData = await res.json();
          console.log(resData);
          setData(resData);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getLargeData();
  }, []);

  // useEffect(() => {
  //   // Memory leak: Event listeners not cleaned up
  //   const interval = setInterval(() => {
  //     console.log('Memory leak potential');
  //   }, 1000);

  //   return () => {
  //     // Missing cleanup
  //     clearInterval(interval);
  //   };
  // }, []);

  const processData = () => {
    setIsProcessing(true);
    // Heavy computation performed on the main thread
    const sortedData = data.sort((a, b) => b.value - a.value);
    const aggregatedData = sortedData.map(item => ({
      label: item.name,
      value: item.value,
    }));

    setChartData(aggregatedData);
    setIsProcessing(false);
  };

  const chart = useMemo(() => {
    return {
      labels: chartData.map(item => item.label),
      datasets: [{data: chartData.map(item => item.value)}],
    };
  }, [chartData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Visualization</Text>
      <Button title="Process Data" onPress={processData} />
      {isProcessing && <Text>Processing...</Text>}
      <Chart data={chart} width={300} height={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16},
  title: {fontSize: 24, marginBottom: 16},
});

export default LargeDataApp;
