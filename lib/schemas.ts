import type { XMLBuilderCreateOptions } from "xmlbuilder2/lib/interfaces";
import { z } from "zod";

/**
 * This is a Zod document type for XMLBuilderCreateOptions
 *
 * There must exist a root key in the object!
 *
 * This interface, in combination with: `z.instanceof(Object) as z.ZodType<XMLDocument>`
 * (found below) is a good way to validate that the object is of type XMLDocument instead
 * of manually creating a zod object with each key from the interface/type.
 */
export interface XMLDocument extends XMLBuilderCreateOptions {
  root: Record<string, unknown>;
}

/**
 * Zod schemas for this app
 */
export const schemas = {
  // schemas for http requests
  http: {
    // schema for xml http request
    xml: {
      doc: z.instanceof(Object) as z.ZodType<XMLDocument>,
    },
  },
};
