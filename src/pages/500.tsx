import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error500() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Kesalahan Peladen - KweeksNews Network"
      description="Mohon maaf, terjadi kesalahan pada peladen."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={500} statusMessage="Kesalahan Peladen" navLinks={Config.nav} />
    </Layout>
  );
}
