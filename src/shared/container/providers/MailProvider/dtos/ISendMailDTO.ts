import IParseMailTemplateDTO from '../../MailTemplateProvider/dtos/IParseMailTemplateDTO';

interface IMailConatct {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailConatct;
  from?: IMailConatct;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
