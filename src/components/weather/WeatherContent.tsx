import React, { useEffect, useState } from "react";
import getApi from "../../adapters/commonApi";

export default function WeatherContent() {
  const [weatherKA3, setWeatherKA3] = useState<any | null>(null);
  const [weatherIV12, setWeatherIV12] = useState<any | null>(null);
  const [weatherDG7, setWeatherDG7] = useState<any | null>(null);

  useEffect(() => {
    getApi(
      "http://api.weatherapi.com/v1/current.json?key=0041aad7e9064842bc5195745211406&q=KA35PX&aqi=no"
    ).then((data: any) => {
      setWeatherKA3(data);
    });
  });

  useEffect(() => {
    getApi(
      "http://api.weatherapi.com/v1/current.json?key=0041aad7e9064842bc5195745211406&q=IV124TW&aqi=no"
    ).then((data: any) => {
      setWeatherIV12(data);
    });
  });

  useEffect(() => {
    getApi(
      "http://api.weatherapi.com/v1/current.json?key=0041aad7e9064842bc5195745211406&q=DG73HU&aqi=no"
    ).then((data: any) => {
      setWeatherDG7(data);
    });
  });

  return (
    <>
      <div className="col-sm-12">
        <h1>
          Weather: <code className="mx-4">KA3</code>|
          <code className="mx-4">IV12</code>|<code className="mx-4">DG7</code>
        </h1>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-cloud-sun mr-4" />
            {weatherKA3 ? weatherKA3.location.name : ""}
          </div>
          <div className="card-body">
            {weatherKA3 ? (
              <>
                <div className="float-start pr-4">
                  <img src={weatherKA3.current.condition.icon} alt="" />
                </div>
                <h2 className="float-end">
                  {weatherKA3.current.condition.text}
                </h2>
              </>
            ) : (
              <p>Loading data..</p>
            )}
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-cloud-sun mr-4" />
            {weatherIV12 ? weatherIV12.location.name : ""}
          </div>
          <div className="card-body">
            {weatherIV12 ? (
              <>
                <div className="float-start pr-4">
                  <img src={weatherIV12.current.condition.icon} alt="" />
                </div>
                <h2 className="float-end">
                  {weatherIV12.current.condition.text}
                </h2>
              </>
            ) : (
              <p>Loading data..</p>
            )}
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="card-header">
            <i className="bi bi-cloud-sun mr-4" />
            {weatherDG7 ? weatherDG7.location.name : ""}
          </div>
          <div className="card-body">
            {weatherDG7 ? (
              <>
                <div className="float-start pr-4">
                  <img src={weatherDG7.current.condition.icon} alt="" />
                </div>
                <h2 className="float-end">
                  {weatherDG7.current.condition.text}
                </h2>
              </>
            ) : (
              <p>Loading data..</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
