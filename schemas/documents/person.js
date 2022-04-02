import { isUniquePersonSlug } from '../lib/isUniquePersonSlug';
import { BsFillPersonFill } from 'react-icons/bs';

export default {
  icon: BsFillPersonFill,
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        isUnique: isUniquePersonSlug,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'body',
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
  ],
  orderings: [
    {
      title: 'name',
      name: 'Name',
      by: [{ field: 'name', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'name',
      subtitle: 'position',
    },
  },
};