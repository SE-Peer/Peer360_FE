import { useEffect, useState } from 'react';
import axios from 'axios';

import { ReactComponent as Location } from '@/assets/location.svg';

const { naver } = window;
export default function Map() {
  const [myLocation, setMyLocation] = useState<{ latitude: number; longitude: number } | string>(
    '',
  );

  // get current position
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== 'string') {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: true,
      });
    }
  }, [myLocation]);
  const [geoUrl, setGeoUrl] = useState(''); // open API를 호출할 때 쓰이는 url

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setGeoUrl(
          'https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?coords=' +
            `${position.coords.latitude},${position.coords.longitude}` +
            '&orders=addr&output=json',
        );
      });
    } else {
      window.alert('현재위치를 알수 없습니다.');
    }
  }, []);

  useEffect(() => {
    console.log('geoURL:::', geoUrl);
    const getAddress = async () => {
      axios
        .request({
          url: geoUrl,
          method: 'GET',
          headers: {
            'X-NCP-APIGW-API-KEY-ID': import.meta.env.VITE_NMF_CLIENT_ID as string, // 앱 등록 시 발급받은 Client ID
            'X-NCP-APIGW-API-KEY': import.meta.env.VITE_NMF_SECRET_CLIENT as string, // 앱 등록 시 발급받은 Client Secret
          },
        })
        .then((res) => {
          console.log(res.data);
        });
    };
    getAddress();
  });
  return (
    <div>
      <div
        id="map"
        className="rounded-xl"
        style={{
          width: '650px',
          height: '350px',
          zIndex: '2',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Location className="absolute z-40" />
      </div>
    </div>
  );
}
