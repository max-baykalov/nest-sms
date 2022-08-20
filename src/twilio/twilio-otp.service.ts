import { OtpService } from "../otp.service";

export class TwilioOtpService extends OtpService {

  async sendOtpCode(phone: string): Promise<void> {

  }

  async checkOtpCode(phone: string, code: string): Promise<void> {

  }
}
