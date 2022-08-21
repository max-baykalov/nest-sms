import { Twilio } from "twilio";
import { OtpService } from "../otp.service";
import { SmsSenderService } from "../sms-sender.service";

export declare type TwilioOptions = TwilioAuthOptions
  & Partial<TwilioOtpServiceFactory>
  & Partial<TwilioSmsSenderServiceFactory>

declare type TwilioAuthOptions = {
  readonly TWILIO_ACCOUNT_SID: string;
  readonly TWILIO_AUTH_TOKEN: string;
} 

declare type TwilioOtpServiceFactory = {
  OtpServiceFactory: (twilio: Twilio) => OtpService;
}

declare type TwilioSmsSenderServiceFactory = {
  SmsSenderServiceFactory: (twilio: Twilio) => SmsSenderService;
}
