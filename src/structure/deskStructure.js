import S from '@sanity/desk-tool/structure-builder';
// icons
import { BsPersonCircle } from 'react-icons/bs';
import { FaEdit, FaFileAlt, FaHome } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';

// prettier-ignore
const hiddenDocs = (listItem) => ![
  'home',
  'media.tag',
  'person',
  'siteSettings'
].includes(listItem.getId());

// prettier-ignore
export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(IoSettingsSharp)
        .child(
          S.document()
            .title('Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      
      S.listItem()
        .title('Edit Singletons')
        .icon(FaEdit)
        .child(
          S.list()
            .title('Singletons')
            .items([
              S.listItem()
                .title('Home')
                .icon(FaHome)
                .child(
                  S.document()
                    .title('Home')
                    .schemaType('home')
                    .documentId('home')
                ),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Staff')
        .icon(BsPersonCircle)
        .schemaType('person')
        .child(S.documentTypeList('person').title('Staff'),),
      ...S.documentTypeListItems().filter(hiddenDocs)
    ])