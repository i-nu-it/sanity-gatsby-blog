export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ef0b8230810d76b79b5b74e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-165ap33t',
                  apiId: '7ca5b8c3-cc36-4c5e-8f78-4ad5ddc93519'
                },
                {
                  buildHookId: '5ef0b823af873413f8c21168',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-srd691c9',
                  apiId: '48c6c933-c962-4240-8642-56ceddede3db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/i-nu-it/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-srd691c9.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
