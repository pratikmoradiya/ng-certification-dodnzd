export interface WeatherData {
  id: number;
  name: string;
  zipcode: string;
  main: {
    temp: string;
    temp_max: string;
    temp_min: string;
  };
  weather: {
    description: string;
    main: string;
  }[];
}
