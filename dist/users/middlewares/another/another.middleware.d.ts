import { NestMiddleware } from '@nestjs/common';
export declare class AnotherMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
