export interface ForcastData {
  city: {
    name: string;
  };
  list: {
    dt: number;
    temp: {
      day: string;
      min: string;
      max: string;
    };
    weather: {
      description: string;
      main: string;
    }[];
  }[];
}
