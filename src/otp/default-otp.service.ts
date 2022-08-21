import { NotImplementedException } from "../not-implemented.exception";
import { OtpService } from "./otp.service";

export class DefaultOtpService extends OtpService {
  sendOtpCode(phone: string): Promise<void> {
    throw new NotImplementedException();
  }

  checkOtpCode(phone: string, code: string): Promise<void> {
    throw new NotImplementedException();
  }
}
