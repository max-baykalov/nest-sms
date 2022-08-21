export abstract class SmsSenderService {
  abstract sendSms(phone: string, text: string): void;
}
