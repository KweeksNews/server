import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  statusCode: number;
  statusMessage: string;
  navLinks?: {
    name: string;
    url: string;
  }[];
};

export function Content({ statusCode, statusMessage, navLinks }: Props) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft == 0) {
        clearTimeout(timer);
        window.location.replace('/');
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);
  });

  return (
    <section className="min-h-screen max-w-5xl flex flex-col justify-center items-center mx-auto md:flex-row">
      <div className="md:flex-1 text-center">
        <Image
          className="mx-auto"
          src={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/assets/images/kweeksnews-network.svg`}
          alt="KweeksNews Network"
          title="KweeksNews Network"
          width={260.122}
          height={45}
        />

        <p className="text-base text-white mt-5">
          <b>{statusCode}.</b> {statusMessage}.
        </p>
        <p className="text-base text-white mt-5">
          Kembali ke beranda dalam <b>{timeLeft} detik</b>.
        </p>

        <nav className="hidden mx-auto mt-12 md:flex md:justify-center">
          <ul className="flex text-center">
            {navLinks &&
              navLinks.map(({ name, url }, i) => (
                <li key={i} className="mx-3">
                  <a className="button" target="_blank" href={url} rel="noreferrer">
                    {name}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      <div className="md:flex-1">
        <div className="flex h-[350px] max-w-md items-center mx-auto mt-28 md:mt-0">
          <Image
            src={`https://${process.env.NEXT_PUBLIC_HOSTNAME}/assets/images/lost.svg`}
            alt="Lost"
            width={885.20079}
            height={708.31655}
            priority
          />
        </div>
      </div>
    </section>
  );
}
