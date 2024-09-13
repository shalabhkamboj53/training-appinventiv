import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { store } from '@/redux/store'
import { Provider } from 'react-redux'
import WeatherCards from "@/components/WeatherCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <Provider store={store}>
        <Navbar />
        <WeatherCards />
      </Provider>
  );
}
