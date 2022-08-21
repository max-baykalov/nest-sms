import { InternalServerErrorException } from '@nestjs/common';
import { Twilio } from "twilio";
import { SmsSenderService } from "../sms-sender/sms-sender.service";

export class TwilioSmsSenderService extends SmsSenderService {
  constructor(
    private readonly client: Twilio,
    private readonly SMS_PROVIDER: string,
  ) {
    super();
  }
  
  async sendSms(phone: string, text: string): Promise<void> {
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
