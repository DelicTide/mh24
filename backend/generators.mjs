import { EdenClient } from "@edenlabs/eden-sdk";
import dotenv from 'dotenv';

dotenv.config();

const eden = new EdenClient({
  apiKey: process.env.EDEN_API_KEY,
  apiSecret: process.env.EDEN_API_SECRET,
});

const generators = await eden.generators.list();
console.log(generators);

main();
