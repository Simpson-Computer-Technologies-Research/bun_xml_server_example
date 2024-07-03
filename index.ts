/**
 * This app uses bun (https://bun.sh)
 *
 * Bun is much, much faster than node.js and Deno!
 *
 * We'll build a simple xml builder with xmlbuilder2 and allow for users to interact
 * with it using http requests.
 *
 * Bun has its own built in http server, so we'll use that.
 */
import { create } from "xmlbuilder2";
import { schemas } from "./lib/schemas";

/**
 * This is the main entry point for the app
 *
 * We'll create a simple http server that returns an xml document
 */
const server = Bun.serve({
  port: 3000,
  async fetch() {
    try {
      const docObject = {
        root: {
          "@att": "val",
          foo: {
            bar: "foobar",
          },
          baz: {},
        },
      };

      // parse the default xml document
      const parsed = schemas.xml.doc.parse(docObject);
      if (!parsed) {
        throw new Error("Failed to parse the default xml document");
      }

      // create the xml document
      const doc = create({ version: "1.0", encoding: "UTF-8" }).ele(parsed);
      const xmlString = doc.end({ prettyPrint: true });

      return new Response(xmlString, {
        headers: {
          "Content-Type": "application/xml",
        },
      });
    } catch (e: any) {
      const message = e.message || "An error occurred";

      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  },
});

console.log(`Listening on http://localhost:${server.port}`);
