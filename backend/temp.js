import { EdenClient } from "@edenlabs/eden-sdk";
import dotenv from 'dotenv';

dotenv.config();

const eden = new EdenClient({
  apiKey: process.env.EDEN_API_KEY,
  apiSecret: process.env.EDEN_API_SECRET,
});

const config = {
  text_input: "An apple tree in a field",
};

async function main() {
  const urls = await eden.create({
    generatorName: "create",
    config: config
  });
  console.log(urls[0]);
}

main();
