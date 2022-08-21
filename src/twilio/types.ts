import { Twilio } from "twilio";
import { OtpService } from "../otp.service";
import { SmsSenderService } from "../sms-sender.service";

export declare type TwillioOptions = TwilioAuthOptions
  & TwilioOtpServiceFactory
  & TwilioSmsSenderServiceFactory
  & {
    readonly type: 'twilio',
  } 

export declare type TwilioAuthOptions = {
  readonly TWILIO_ACCOUNT_SID: string;
  readonly TWILIO_AUTH_TOKEN: string;
} 

export declare type TwilioOtpServiceFactory = {
  OtpServiceFactory: (twilio: Twilio) => OtpService;
}

export declare type TwilioSmsSenderServiceFactory = {
  SmsSenderServiceFactory: (twilio: Twilio) => SmsSenderService;
}
