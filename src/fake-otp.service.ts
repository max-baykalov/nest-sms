import { UnauthorizedException } from "@nestjs/common";
import { OtpService } from "./otp.service";

export class FakeOtpService extends OtpService {
  constructor(
    private readonly otpService: OtpService,
    private readonly isFakePhone: (phone: string) => boolean,
    private readonly isFakeCode: (code: string) => boolean,
  ) {
    super();
  }

  async sendOtpCode(phone: string): Promise<void> {
    if (!this.isFakePhone(phone)) {
      await this.otpService.sendOtpCode(phone);
    }
  }

  async checkOtpCode(phone: string, code: string): Promise<void> {
    if (!this.isFakePhone(phone)) {
      await this.otpService.checkOtpCode(phone, code);
      return;
    }

    if (!this.isFakeCode(code)) {
      throw new UnauthorizedException('Invalid code!');
    }
  }
}
