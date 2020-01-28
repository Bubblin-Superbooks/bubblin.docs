import * as path from 'path'
import externalLinks from 'remark-external-links'

const PUBLIC = path.resolve(__dirname, 'public')
const SRC = path.resolve(__dirname, 'src')

export default {
  title: 'Bubblin Superbooks',
  description: 'Documentation for Bubblin and the Superbook Format.',
  indexHtml: 'public/index.html',
  theme: 'src/theme/index',
  typescript: true,
  propsParser: false,
  mdPlugins: [externalLinks],
  ignore: ['site-map.md', 'readme.md', 'src/theme/**'],
  public: './public',
  htmlContext: {
    favicon: '/public/images/favicon-32x32.png',
  },
  menu: [
    {
      name: 'Basics',
      menu: [
        'Introduction',
        'Getting Started'
      ],
    },
    {
      name: 'References',
      menu: [
        'SEO',
      ],
    },
  ],
  onCreateWebpackChain: config => {
    config.resolve.alias
      .set('@fonts', `${PUBLIC}/fonts`)
      .set('@images', `${PUBLIC}/images`)
      .set('@components', `${SRC}/theme/components`)
      .set('@styles', `${SRC}/theme/styles`)

    return config
  },
}
