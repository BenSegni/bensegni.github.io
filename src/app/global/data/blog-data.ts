import { Blog } from "../../blog/interface/blog";

export const blogData: Blog[] = [
  {
    id: 1,
    coverImage: '../../../assets/blog-content/images/skill-pill.png',
    title: 'Angular: Using Pipes to Render Images',
    date: new Date('March 03, 2024 03:24:00'),
    description: 'How to use pipes to render icons for each value inside an array.',
    content: '../../../assets/blog-content/image-pipe.html',
    routeUrl: 'angular-pipes-for-images',
    skills: ['Angular', 'HTML5', 'Typescript'],
  },
  {
    id: 2,
    coverImage: '../../../assets/blog-content/images/sass-mixin.png',
    title: 'SASS with Parameters',
    date: new Date('March 03, 2024 03:24:00'),
    description: 'A short example of using Parameters with SASS Mixins.',
    content: '../../../assets/blog-content/sass-params.html',
    routeUrl: 'sass-with-parameters',
    skills: ['HTML5','SASS']
  },
  {
    id: 3,
    coverImage: '../../../assets/blog-content/images/under-construction.png',
    title: 'Under Construction Guards',
    date: new Date('March 04, 2024 03:24:00'),
    description: 'An example of using guards to restrict user access during construction.',
    content: '../../../assets/blog-content/guards.html',
    routeUrl: 'under-construction-guards',
    skills: ['Angular', 'HTML5', 'Typescript']
  },
  {
    id: 4,
    coverImage: '../../../assets/blog-content/images/svg-template.png',
    title: 'Using SVG as Component Templates',
    date: new Date('March 05, 2024 03:24:00'),
    description: 'An example of how to use svg instead of html in angular components.',
    content: '../../../assets/blog-content/svg.html',
    routeUrl: 'using-svg-as-component-templates',
    skills: ['Angular', 'HTML5', 'Typescript']
  },
  {
    id: 5,
    coverImage: '../../../assets/blog-content/images/signals.png',
    title: 'Angular Signals',
    date: new Date('March 06, 2024 03:24:00'),
    description: 'An simple implementation of Angular Signals.',
    content: '../../../assets/blog-content/signals.html',
    routeUrl: 'angular-signals',
    skills: ['Angular', 'HTML5', 'Typescript']
  },
  {
    id: 6,
    coverImage: '../../../assets/blog-content/images/generics.png',
    title: 'Generic Interfaces',
    date: new Date('March 07, 2024 03:24:00'),
    description: 'Using interfaces for shared components which require different data types.',
    content: '../../../assets/blog-content/generic-interfaces.html',
    routeUrl: 'generic-interfaces',
    skills: ['Angular', 'HTML5', 'Typescript']
  }
]