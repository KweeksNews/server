import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error403() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Terlarang - KweeksNews Network"
      description="Mohon maaf, halaman yang Anda minta tidak diperbolehkan untuk diakses."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={403} statusMessage="Terlarang" navLinks={Config.nav} />
    </Layout>
  );
}
