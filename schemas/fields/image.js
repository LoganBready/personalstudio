export default {
  name: 'mainImage',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'altDesc',
      title: 'Alternative Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
};