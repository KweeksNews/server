import { useRouter } from 'next/router';
import { Config } from '../config';
import { Layout } from '../components/core';
import { Content } from '../components/errors';

export default function Error504() {
  const { pathname } = useRouter();

  return (
    <Layout
      title="Waktu Habis Gerbang - KweeksNews Network"
      description="Mohon maaf, tidak ada respons yang diterima oleh peladen gerbang."
      url={Config.site.url + pathname}
      navLinks={Config.nav}
    >
      <Content statusCode={504} statusMessage="Waktu Habis Gerbang" navLinks={Config.nav} />
    </Layout>
  );
}
