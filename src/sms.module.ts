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
    const registered = smsModule.register(options);

    
    return {
      module: SmsModule,
      imports: [
        smsModule.register(options)
      ],
      providers: registered.providers,
      exports: [OtpService, SmsSenderService],
    };
  }

  static getCurrentModule({ type }: Pick<SmsOptions, 'type'>) {
    switch (type) {
      case 'twilio': return TwilioModule;
      default: throw new InternalServerErrorException('Invalid provider type');
    }
  }
}
