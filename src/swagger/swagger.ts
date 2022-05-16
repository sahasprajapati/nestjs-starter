import { AuthModule } from '@/modules/auth/auth.module';
import { INestApplication } from '@nestjs/common';
import { addSwaggerPage, SwaggerPages } from '@utils/swagger.util';

const title = 'Deerhold Food System';

// Pages to be displayed
const pages: SwaggerPages[] = [
  {
    modules: [AuthModule],
    title: 'Auth',
    path: 'auth',
    description: 'Auth page',
  },
  //   {
  //     modules: [AuthModule, TestModule],
  //     title: 'Test',
  //     path: 'test',
  //     description: 'Auth page',
  //   },
  //   {
  //     modules: [DogsModule, AuthModule],
  //     title: 'Cats',
  //     path: 'cats',
  //     description: 'Cat page',
  //   },
  {
    modules: [],
    title: 'Api',
    path: '',
    description: 'Food System for Deerhold Nepal Pvt. Ltd.',
    explorer: true,
  },
];

const setupSwagger = (app: INestApplication) => {
  pages.map((page) => {
    addSwaggerPage(
      app,
      page.path,
      {
        title: `${title} (${page.title})`,
        description: page.description,
        explorer: !!page.explorer,
      },
      page.modules,
    );
  });
};
export { setupSwagger };
