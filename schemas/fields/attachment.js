export default {
  name: 'attachment',
  title: 'attachment',
  type: 'object',
  fields: [
    {
      name: 'fileLabel',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'file',
      title: 'File',
      type: 'file',
    },
  ],
};