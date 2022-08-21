export class NotImplementedException extends Error {
  constructor() {
    super('Not Implemented! Checke a factory in your module config');
  }
}
