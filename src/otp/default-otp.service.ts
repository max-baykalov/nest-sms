import { OtpService } from "./otp.service";

export class DefaultOtpService extends OtpService {
  sendOtpCode(phone: string): Promise<void> {
    throw new Error('Not Implemented! Checke a factory in your module config');
  }

  checkOtpCode(phone: string, code: string): Promise<void> {
    throw new Error('Not Implemented! Checke a factory in your module config');
  }
}
