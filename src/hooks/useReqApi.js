import { useEffect, useState } from 'react';
import api from '../utils/api';

const useReqApi = (url, auth = false) => {
  const [datas, setDatas] = useState(null);
  const [reqError, setReqError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const reqDatas = async () => {
      setLoading(true);
      await api
        .get(
          url,
          auth && {
            headers: {
              Authorization: `Bearer ${JSON.parse(
                localStorage.getItem('apiToken') || '',
              )}`,
            },
          },
        )
        .then((response) => {
          setDatas(response.data);
          setReqError(null);
          setLoading(false);
        })
        .catch((err) => {
          setReqError(err.response.data.message);
          setLoading(false);
          return;
        });
    };

    reqDatas();
  }, [url, auth]);

  return {
    datas,
    setDatas,
    reqError,
    setReqError,
    loading,
  };
};

export default useReqApi;
