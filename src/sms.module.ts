import { DynamicModule, InternalServerErrorException, Module } from "@nestjs/common";
import { OtpService } from "./otp.service";
import { SmsSenderService } from "./sms-sender.service";
import { TwillioOptions } from "./twilio";
import { TwilioModule } from "./twilio/twilio.module";

export declare type SmsOptions = TwillioOptions;

@Module({})
export class SmsModule {
  static register(options: SmsOptions): DynamicModule {
    const smsModule = this.getCurrentModule(options);
    
    return {
      module: SmsModule,
      imports: [
        smsModule.register(options)
      ],
      exports: [OtpService, SmsSenderService],
    };
  }

  static getCurrentModule(options: SmsOptions) {
    switch (options.type) {
      case 'twilio': return TwilioModule;
      default: throw new InternalServerErrorException('Invalid provider type');
    }
  }
}
