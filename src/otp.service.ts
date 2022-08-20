export abstract class OtpService {
  abstract sendOtpCode(phone: string): void;
  abstract checkOtpCode(phone: string, code: string): void;
}
