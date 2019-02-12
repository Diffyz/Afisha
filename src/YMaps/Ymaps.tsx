import { YMaps, Map } from 'react-yandex-maps';

const YandexMaps = () => (
  <YMaps>
    <div>My awesome application with maps!</div>
    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}></Map>
  </YMaps>
);

export default YandexMaps