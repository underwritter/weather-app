import {ResponseWeather} from "../../../store/api/weather.api/weather.api.types";
import {setWeatherForecastDay} from "../../../store/slices/weather.slice";
import {InputField} from "../../form-fields/input-field/input-field";
import {
  useForecastWeatherByIpQuery,
  useSearchByCityNameMutation,
} from "../../../store/api/weather.api/weather.api";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";
import {useDebounce} from "../../../hooks/debounce";
import {useAppDispatch} from "../../../hooks/redux";
import {searchSchema} from "./search-form.schema";
import { ISearchField } from "../weather.types";
import React, {useEffect} from "react";
import "../style.sass";

export const SearchForm = () => {
  const {data} = useForecastWeatherByIpQuery("");
  const [searchByCityName] = useSearchByCityNameMutation();
  const searchDebounce = useDebounce(400);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setWeatherForecastDay(data));
    }
  }, [data]);

  const searchByName = (body: ISearchField) => {
    searchDebounce(async () => {
      await searchByCityName(body.nameByCity)
        .unwrap()
        .then((resp: ResponseWeather) => dispatch(setWeatherForecastDay(resp)))
        .catch(() =>
          setError("nameByCity", {
            type: "custom",
            message: `убедитесь что вы имелли в виду ${body.nameByCity}`,
          })
        );
    });
  };

  const name = data?.location?.name ?? "";

  const INITIAL_STATE = {
    nameByCity: "",
  };

  

  const {
    control,
    handleSubmit,
    formState: {errors, isDirty, isValid}, //объект с состоянием формы
    getValues, //получить весь объект формы
    setValue, //сетит в определенное поле значение
    watch, //на  onChange показывает состояние определенного поля
    clearErrors, //при вызове чистит все ошибки формы
    setError, //устанавливает ошибку определенному полю
    setFocus, //фокус на определенном поле
    reset,
  } = useForm<ISearchField>({
    resolver: yupResolver(searchSchema),
    reValidateMode: "onChange",
    defaultValues: INITIAL_STATE,
  });

  return (
    <form className="search_form" onChange={handleSubmit(searchByName)}>
      <div className="search_form_wrapper">
        <Controller
          name="nameByCity"
          control={control}
          render={({field: {value, onChange}}) => (
            <InputField
              name="nameByCity"
              value={value}
              onChange={onChange}
              errors={errors}
              type="text"
              placeholder={name}
              className={"input_variant_L"}
            />
          )}
        />

        <div className="btn_search"></div>
      </div>
    </form>
  );
};
