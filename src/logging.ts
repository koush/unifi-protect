/**
 * Represents a logging device which can be used directly as a function (for INFO logging)
 * but also has dedicated logging functions for respective logging levels.
 */
export interface Logging {

    /* eslint-disable  @typescript-eslint/no-explicit-any */
    info(message: string, ...parameters: any[]): void;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    warn(message: string, ...parameters: any[]): void;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    error(message: string, ...parameters: any[]): void;
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    debug(message: string, ...parameters: any[]): void;

}
