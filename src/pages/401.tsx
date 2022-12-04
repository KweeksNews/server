import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error401() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Tidak Diperbolehkan - KweeksNews Network"
      description="Mohon maaf, halaman yang Anda minta tidak diperbolehkan untuk diakses."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={401} statusMessage="Tidak Diperbolehkan" navLinks={Config.nav} />
    </Layout>
  );
}
