/// <reference types="node" />
import { CookieSerializeOptions } from 'cookie';
import { IncomingMessage, OutgoingMessage } from 'http';
import { Configuration } from '..';
declare module 'http' {
    interface IncomingMessage {
        visitor: Required<Configuration>['request']['visitor'];
    }
}
interface HandlerRequest extends Partial<Pick<IncomingMessage, 'headers' | 'visitor'>> {
    once?(event: string | symbol, listener: (...args: any[]) => void): any;
}
declare type HandlerResponse = Partial<Pick<OutgoingMessage, 'getHeader' | 'setHeader'>>;
interface Handler {
    /**
     * Express middleware for seamless integration with the Relevance Module.
     * @param request Incoming HTTP request.
     * @param response Outgoing HTTP response.
     * @param next
     */
    (request: HandlerRequest, response: HandlerResponse, next?: () => void): void;
}
interface Options extends CookieSerializeOptions {
    name?: string;
}
interface HandlerWithOptions extends Handler {
    /**
     * Customizes Express middleware for the Relevance Module integration.
     * @see https://www.npmjs.com/package/cookie#options
     * @param options Options for the cookie serializer.
     * @return Customed middlware.
     */
    withOptions(options?: Options): Handler;
}
declare const relevance: HandlerWithOptions;
export default relevance;
