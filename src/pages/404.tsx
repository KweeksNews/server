import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error404() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Tidak Ditemukan - KweeksNews Network"
      description="Mohon maaf, halaman yang Anda cari tidak ditemukan."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={404} statusMessage="Tidak Ditemukan" navLinks={Config.nav} />
    </Layout>
  );
}
