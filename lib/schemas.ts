import type { XMLBuilderCreateOptions } from "xmlbuilder2/lib/interfaces";
import { z } from "zod";

/**
 * This is a Zod document type for XMLBuilderCreateOptions
 *
 * There must exist a root key in the object!
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
      // doc is of type XMLBuilderCreateOptions which can be any object
      doc: z.instanceof(Object) as z.ZodType<XMLDocument>,
    },
  },
};
