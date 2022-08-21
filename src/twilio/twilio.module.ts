import { DynamicModule, Module } from "@nestjs/common";
import { Twilio } from "twilio";
import { OtpService } from "../otp.service";
import { SmsSenderService } from "../sms-sender.service";
import { TwilioOptions } from "./types";

@Module({})
export class TwilioModule {
  static register(options: TwilioOptions): DynamicModule {
    const twilio = new Twilio(options.TWILIO_ACCOUNT_SID, options.TWILIO_AUTH_TOKEN);

    return {
      module: TwilioModule,
      providers: [
        {
          provide: Twilio,
          useValue: twilio,
        },
        {
          provide: OtpService,
          useFactory: options.OtpServiceFactory,
          inject: [Twilio],
        },
        {
          provide: SmsSenderService,
          useFactory: options.SmsSenderServiceFactory,
          inject: [Twilio],
        }
      ],
      exports: [OtpService, SmsSenderService],
    };
  }
}

