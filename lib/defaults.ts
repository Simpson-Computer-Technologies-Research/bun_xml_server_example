import type { XMLDocument } from "./schemas";

/**
 * Default values for this app
 */
export const defaults = {
  // xml defaults
  xml: {
    doc: {
      /*
      Instead of an object for xml, we can also use functions:

      const root = create({ version: '1.0' })
        .ele('root', { att: 'val' })
          .ele('foo')
            .ele('bar').txt('foobar').up()
          .up()
          .ele('baz').up()
        .up();

      However this is much more verbose and harder to read.
      */
      root: {
        "@att": "val",
        foo: {
          bar: "foobar",
        },
        baz: {},
      },
    } as XMLDocument,
  },
};
