import { Blog } from "../../blog/interface/blog";

export const blogData: Blog[] = [
  {
    id: 1,
    coverImage: '../../../assets/img/github_ui_nav.webp',
    title: 'Angular: Using Pipes to Render Images',
    date: new Date('March 03, 2024 03:24:00'),
    description: 'How to use pipes to render icons for each value inside an array.',
    content: '../../../assets/blog-content/image-pipe.html',
    routeUrl: 'angular-pipes-for-images',
    keywords: ['Angular', 'Typescript']
  },
  {
    id: 2,
    coverImage: '../../../assets/blog-content/images/sass-mixin.svg',
    title: 'SASS with Parameters',
    date: new Date('March 03, 2024 03:24:00'),
    description: 'A short example of using Parameters with SASS Mixins.',
    content: '../../../assets/blog-content/sass-params.html',
    routeUrl: 'sass-with-parameters',
    keywords: ['SASS']
  },
]