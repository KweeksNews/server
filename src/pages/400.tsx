import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error400() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Permintaan Salah - KweeksNews Network"
      description="Mohon maaf, permintaan yang Anda kirim memiliki kesalahan."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={400} statusMessage="Permintaan Salah" navLinks={Config.nav} />
    </Layout>
  );
}
