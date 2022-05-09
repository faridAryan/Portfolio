import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '1qei7d86',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skCQTagZkTs9CZ2uvti9OPZueFP8xZE2QCDH1t64fEYMgjh6AGezcMLARPkQPoBlFyprFzPL04TggYGY3HQfRSrMlMOXiNMBpgV83n7WkOpsPHE83iZnvapiJWq3diFeGwFeA7kgrxBVdiLsOUXM9fY8RYsUQnBx7h8cGayVlUBCBRqQoiqc',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
