import { registerAs } from "@nestjs/config";

export default registerAs('colas', () => ({ // 👈
    foo: 'bar', // 👈
  }));