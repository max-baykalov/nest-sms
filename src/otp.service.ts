export abstract class OtpService {
  abstract sendOtpCode(phone: string): Promise<void>;
  abstract checkOtpCode(phone: string, code: string): Promise<void>;
}
