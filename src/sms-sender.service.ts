export abstract class SmsSenderService {
  abstract sendOtpCode(phone: string, text: string): void;
}
