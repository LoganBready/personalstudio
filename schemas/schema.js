// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import home from './singletons/home';
import person from './documents/person';
import siteSettings from './singletons/siteSettings';

//  fields
import body from './fields/body';
import rte from './fields/rte';
import image from './fields/image';
import attachment from './fields/attachment';

// objects

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    // document types
    home,
    person,
    siteSettings,
    //field types
    body,
    rte,
    image,
    attachment,
    // object types
  ]),
});