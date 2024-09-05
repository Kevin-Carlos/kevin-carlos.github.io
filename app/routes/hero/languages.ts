type Coord = { lat: number; long: number };

type Greeting = {
  greeting: string;
  coord: Coord | Coord[];
};

export const helloInLanguages: Greeting[] = [
  {
    greeting: 'Hi',
    coord: [
      { lat: 39.5299, long: -119.8143 }, // Reno
      { lat: 40.7128, long: -74.0060 }, // New York
    ],
  },
  {
    greeting: 'Bonjour',
    coord: { lat: 48.8575, long: 2.3514 },
  },
  {
    greeting: 'Dia duit',
    coord: { lat: 53.4129, long: -8.2439 },
  },
  {
    greeting: 'Hej',
    coord: { lat: 60.1282, long: 18.6435 },
  },
  {
    greeting: 'Hola',
    coord: [
      { lat: -34.920345, long: -57.969559 }, // Buenos Aires
      { lat: 23.6345, long: -102.5528 }, // Mexico
      { lat: 40.4637, long: -3.7492 }, // Spain
    ],
  },
  // 'Здравейте',
  {
    greeting: 'Kamusta',
    coord: { lat: 14.6091, long: 121.0223 },
  },
  {
    greeting: 'Aloha',
    coord: {
      lat: 9.8987,
      long: -155.6659,
    },
  },
  // 'Halló',
  // 'مرحبا',
  // 'Ahoj',
  // 'Ciao',
  {
    greeting: '你好',
    coord: { lat: 22.3193, long: 114.1694 },
  },
  {
    greeting: '안녕',
    coord: {
      lat: 37.5503,
      long: 126.9971,
    },
  },
  {
    greeting: 'こんにちは',
    coord: { lat: 35.652832, long: 139.839478 },
  },
  // 'Χαίρετε',
  // 'שלום',
  // 'हैलो',
  // 'Сайн уу',
  {
    greeting: 'Привет',
    coord: { lat: 55.7558, long: 37.6173 },
  },
  // 'Hallå',
  // 'xin chào',
  {
    greeting: 'malo',
    coord: { lat: -13.7590, long: -172.1046 },
  },
  {
    greeting: 'hæ',
    coord: { lat: 64.9631, long: -19.0208 },
  },
  {
    greeting: 'hei',
    coord: { lat: 60.4720, long: 8.4689 },
  },
  {
    greeting: 'CHÀO',
    coord: { lat: 14.0583, long: 108.2772 },
  },
  {
    greeting: 'नमस्ते',
    coord: { lat: 20.5937, long: 78.9629 },
  },
] as const;
