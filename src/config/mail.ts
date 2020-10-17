interface IMailConfig {
  driver: 'ethereal' | 'ses';
  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  default: {
    from: {
      email: 'email configurando no provedor de envio de email',
      name: 'Nome que aparecerá como remetente',
    },
  },
} as IMailConfig;
