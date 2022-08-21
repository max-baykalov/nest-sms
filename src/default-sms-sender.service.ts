import { SmsSenderService } from "./sms-sender.service"

export class DefaultSmsSenderService extends SmsSenderService  {
  sendSms(phone: string, text: string) {
    throw new Error('Not Implemented! Checke a factory in your module config');
  }
}
