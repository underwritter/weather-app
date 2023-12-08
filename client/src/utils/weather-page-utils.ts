import {Hour} from "../store/api/weather.api/weather.api.types";

export const getElementByTime = (hour: Hour, currentDayTab: number) => {
  const selectedDate = new Date(hour.time);
  const selectedHour = selectedDate.getHours();
  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  return selectedHour === currentHour && currentDayTab === 0;
};

export const getContainerColorByDay = (isDay: number) => {
  return Boolean(isDay)
    ? {
        background:
          "linear-gradient(320deg, rgba(0,232,255,1) 0%, rgba(255,102,0,1) 100%)",
      }
    : {
        background:
          " linear-gradient(320deg, rgba(2,0,36,1) 44%, rgba(76,23,166,1) 100%)",
      };
};
