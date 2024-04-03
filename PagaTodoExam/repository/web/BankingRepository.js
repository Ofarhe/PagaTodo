import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStoredData = async () => {
  const stored = await AsyncStorage.getItem('BankingList');
  const storedData = await JSON.parse(stored);
  return storedData;
};

export const saveStoredData = async fetchData => {
  await AsyncStorage.setItem('BankingList', JSON.stringify(fetchData));
  console.log(`Stored data list with ${fetchData.length} items`);
};

export const fetchAPIData = async () => {
  const response = await fetch(
    'https://dev.obtenmas.com/catom/api/challenge/banks',
    {
      method: 'GET',
    },
  );
  const fetchData = await response.json();
  return fetchData;
};
