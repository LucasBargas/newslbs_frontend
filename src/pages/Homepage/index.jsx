import React from 'react';
import useReqApi from '../../hooks/useReqApi';
import Showcase from '../../components/Showcase';
import Loading from '../../components/Loading';
import NoNews from '../../components/NoNews';
import Head from '../../components/Head';

const Homepage = () => {
  const { datas, loading } = useReqApi('/news');

  if (loading) return <Loading title="NewsLBS" />;

  if (!datas || datas.length === 0)
    return (
      <>
        <Head title="NewsLBS" />
        <NoNews />;
      </>
    );

  return (
    datas && (
      <>
        <Head title="NewsLBS" />
        <section>
          <Showcase datas={datas} accessBtn />
        </section>
      </>
    )
  );
};

export default Homepage;
