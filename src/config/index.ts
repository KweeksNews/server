export const Config = {
  site: {
    url: `https://${process.env.NEXT_PUBLIC_HOSTNAME}`,
    title: `Server ${process.env.NEXT_PUBLIC_SERVERNAME} - KweeksNews Network`,
    description: `Server ${process.env.NEXT_PUBLIC_SERVERNAME} KweeksNews Network.`,
    image: `https://${process.env.NEXT_PUBLIC_HOSTNAME}/assets/img/kweekshook-square.png`,
    twitter: '@kweeksnews',
  },
  nav: [
    {
      name: 'Network',
      url: 'https://network.kweeksnews.com/',
    },
    {
      name: 'Status',
      url: 'https://status.kweeksnews.com/',
    },
  ],
};
