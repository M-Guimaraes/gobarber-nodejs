import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsMailTemplateProvider from './implementtations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
