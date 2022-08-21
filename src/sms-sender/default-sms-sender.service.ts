import { NotImplementedException } from "../not-implemented.exception";
import { SmsSenderService } from "./sms-sender.service"

export class DefaultSmsSenderService extends SmsSenderService  {
  sendSms(phone: string, text: string) {
    throw new NotImplementedException();
  }
}
