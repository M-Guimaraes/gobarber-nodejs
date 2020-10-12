import IParseMailTemplateDTO from '../dto/IParseMailTemplateDTO';

export default interface IMailTempplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
