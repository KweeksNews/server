import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error502() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Gerbang Salah - KweeksNews Network"
      description="Mohon maaf, terjadi kesalahan pada respons yang diterima peladen gerbang."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={502} statusMessage="Gerbang Salah" navLinks={Config.nav} />
    </Layout>
  );
}
