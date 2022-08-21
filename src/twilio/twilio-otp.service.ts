import { UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { Twilio } from "twilio";
import { OtpService } from "../otp/otp.service";

export class TwilioOtpService extends OtpService {
  constructor(
    private readonly client: Twilio,
    private readonly TWILIO_AUTH_SERVICE: string,
  ) {
    super();
  }

  async sendOtpCode(phone: string): Promise<void> {
    try {
      await this.client.verify
        .services(this.TWILIO_AUTH_SERVICE)
        .verifications
        .create({ to: phone, channel: 'sms' });

    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException('Can`t send verification code');
    }
  }

  async checkOtpCode(phone: string, code: string): Promise<void> {
    try {
      const verificationResponse = await this.client.verify
        .services(this.TWILIO_AUTH_SERVICE)
        .verificationChecks.create({
          to: phone,
          code: code,
        });

      if (!verificationResponse.valid) {
        throw new Error('Verification response is not valid!');
      }
    } catch (e) {
      throw new UnauthorizedException('Error during verification');
    }
  }
}
