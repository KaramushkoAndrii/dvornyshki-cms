import type { Schema, Struct } from '@strapi/strapi';

export interface CardsAnimalCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_animal_cards';
  info: {
    displayName: 'Animal-card';
  };
  attributes: {
    age: Schema.Attribute.String;
    sex: Schema.Attribute.Enumeration<['male', 'female']>;
    title: Schema.Attribute.String;
  };
}

export interface ItemItem extends Struct.ComponentSchema {
  collectionName: 'components_item_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
  };
}

export interface ListsAdvice extends Struct.ComponentSchema {
  collectionName: 'components_lists_advice';
  info: {
    displayName: 'advice';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ListsContactForm extends Struct.ComponentSchema {
  collectionName: 'components_lists_contact_forms';
  info: {
    displayName: 'contactForm';
  };
  attributes: {
    key: Schema.Attribute.String;
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface ListsHelp extends Struct.ComponentSchema {
  collectionName: 'components_lists_helps';
  info: {
    displayName: 'Help';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ListsHelpListDetailed extends Struct.ComponentSchema {
  collectionName: 'components_lists_help_list_detaileds';
  info: {
    displayName: 'helpListDetailed';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    header: Schema.Attribute.String & Schema.Attribute.Required;
    linkContent: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'push'>;
    src: Schema.Attribute.String;
    subDescription: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['button', 'tel']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'button'>;
  };
}

export interface ListsOurAnimals extends Struct.ComponentSchema {
  collectionName: 'components_lists_our_animals';
  info: {
    displayName: 'ourAnimals';
  };
  attributes: {
    btnTitle: Schema.Attribute.String;
    slug: Schema.Attribute.Enumeration<['cats', 'dogs']>;
    title: Schema.Attribute.String;
  };
}

export interface StatisticsAboutStatistic extends Struct.ComponentSchema {
  collectionName: 'components_statistics_about_statistics';
  info: {
    displayName: 'about-statistic';
  };
  attributes: {
    count: Schema.Attribute.BigInteger;
    description: Schema.Attribute.String;
    symbol: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.animal-card': CardsAnimalCard;
      'item.item': ItemItem;
      'lists.advice': ListsAdvice;
      'lists.contact-form': ListsContactForm;
      'lists.help': ListsHelp;
      'lists.help-list-detailed': ListsHelpListDetailed;
      'lists.our-animals': ListsOurAnimals;
      'statistics.about-statistic': StatisticsAboutStatistic;
    }
  }
}
