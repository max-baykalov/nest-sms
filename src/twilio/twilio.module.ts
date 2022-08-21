import { DynamicModule, Module } from "@nestjs/common";
import { Twilio } from "twilio";
import { DefaultOtpService } from "../otp/default-otp.service";
import { DefaultSmsSenderService } from "../sms-sender/default-sms-sender.service";
import { OtpService } from "../otp/otp.service";
import { SmsSenderService } from "../sms-sender/sms-sender.service";
import { TwilioOptions } from "./types";

@Module({})
export class TwilioModule {
  static register(options: TwilioOptions): DynamicModule {
    const twilio = new Twilio(options.TWILIO_ACCOUNT_SID, options.TWILIO_AUTH_TOKEN);

    const providers = [
      {
        provide: OtpService,
        useValue: !options.OtpServiceFactory ? new DefaultOtpService() : options.OtpServiceFactory(twilio),
      },
      {
        provide: SmsSenderService,
        useValue: !options.SmsSenderServiceFactory ? new DefaultSmsSenderService() : options.SmsSenderServiceFactory(twilio),
      },
    ];

    return {
      module: TwilioModule,
      providers,
      exports: [OtpService, SmsSenderService],
    };
  }
}

