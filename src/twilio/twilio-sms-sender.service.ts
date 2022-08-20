import { InternalServerErrorException } from '@nestjs/common';
import { Twilio } from "twilio";
import { SmsSenderService } from "../sms-sender.service";

export abstract class TwilioSmsSenderService extends SmsSenderService {
  constructor(
    private readonly client: Twilio,
    private readonly SMS_PROVIDER: string,
  ) {
    super();
  }
  
  async sendOtpCode(phone: string, text: string): Promise<void> {
    try {
      await this.client.messages.create({
        body: text,
        messagingServiceSid: this.SMS_PROVIDER,
        to: phone,
      });
    } catch (e) {
      throw new InternalServerErrorException('Can`t send sms');
    }
  }
}
