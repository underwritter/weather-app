import { MaxTemperatureType, MinTemperatureType, TemperatureType } from "./weather.types";

export const days = ["Вс.", "Пн.", "Вт.", "Ср.", "Чт.", "Пт.", "Сб."];
export const months = ["Янв.", "Фев.", "Мар.", "Апр.", "Май", "Июн.", "Июл.", "Авг.", "Сен.", "Окт.", "Ноя.", "Дек."]


export const getDegreeByType: Record<(TemperatureType | MaxTemperatureType | MinTemperatureType), string> = {
    temp_c: "°C",
    temp_f: "°F",
    maxtemp_c:"°C",
    maxtemp_f:"°F",
    mintemp_c:"°C",
    mintemp_f:"°F",
  };