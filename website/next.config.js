import nextMdx from '@next/mdx';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const withMDX = nextMdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    providerImportSource: '@mdx-js/react',
  },
});

const mdxConfig = withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'tsx', 'ts'],
  trailingSlash: true,
});

export default mdxConfig;
