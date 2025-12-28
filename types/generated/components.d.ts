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

export interface ItemLink extends Struct.ComponentSchema {
  collectionName: 'components_item_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ItemSocialItem extends Struct.ComponentSchema {
  collectionName: 'components_item_social_items';
  info: {
    displayName: 'socialItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    key: Schema.Attribute.String;
  };
}

export interface ListsAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_lists_aboutuses';
  info: {
    displayName: 'aboutUs';
  };
  attributes: {
    alt: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'img'>;
    img: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListsAccordionRules extends Struct.ComponentSchema {
  collectionName: 'components_lists_accordion_rules';
  info: {
    displayName: 'accordionItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ListsDonateItem extends Struct.ComponentSchema {
  collectionName: 'components_lists_donate_items';
  info: {
    displayName: 'donateItem';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    src: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface ListsListItemNews extends Struct.ComponentSchema {
  collectionName: 'components_lists_list_item_news';
  info: {
    displayName: 'texts';
  };
  attributes: {
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
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

export interface ListsRulesList extends Struct.ComponentSchema {
  collectionName: 'components_lists_rules_lists';
  info: {
    displayName: 'RulesList';
  };
  attributes: {
    accordionRuleItem: Schema.Attribute.Component<
      'lists.accordion-rules',
      true
    >;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
  };
}

export interface NewsItemsFigure extends Struct.ComponentSchema {
  collectionName: 'components_news_items_figures';
  info: {
    displayName: 'figure';
  };
  attributes: {
    img: Schema.Attribute.Media<'images', true>;
    text: Schema.Attribute.String;
  };
}

export interface NewsItemsFigureAndText extends Struct.ComponentSchema {
  collectionName: 'components_news_items_figure_and_texts';
  info: {
    displayName: 'figure-and-text';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images'>;
    imgPosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'right'>;
    text: Schema.Attribute.Blocks;
  };
}

export interface NewsItemsImgAndText extends Struct.ComponentSchema {
  collectionName: 'components_news_items_img_and_texts';
  info: {
    displayName: 'img-and-text';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images'>;
    imgPosition: Schema.Attribute.Enumeration<['left', 'right']>;
  };
}

export interface NewsItemsRichText extends Struct.ComponentSchema {
  collectionName: 'components_news_items_rich_texts';
  info: {
    displayName: 'richText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface NewsItemsSlider extends Struct.ComponentSchema {
  collectionName: 'components_news_items_sliders';
  info: {
    displayName: 'slider';
  };
  attributes: {
    img: Schema.Attribute.Media<'images', true>;
  };
}

export interface NewsItemsSliderAndText extends Struct.ComponentSchema {
  collectionName: 'components_news_items_slider_and_texts';
  info: {
    displayName: 'slider-and-text';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images', true>;
    sliderPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface NewsItemsTitle extends Struct.ComponentSchema {
  collectionName: 'components_news_items_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface NewsItemsVideo extends Struct.ComponentSchema {
  collectionName: 'components_news_items_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    video: Schema.Attribute.Media<'videos'>;
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
      'item.link': ItemLink;
      'item.social-item': ItemSocialItem;
      'lists.about-us': ListsAboutUs;
      'lists.accordion-rules': ListsAccordionRules;
      'lists.advice': ListsAdvice;
      'lists.contact-form': ListsContactForm;
      'lists.donate-item': ListsDonateItem;
      'lists.help': ListsHelp;
      'lists.help-list-detailed': ListsHelpListDetailed;
      'lists.list-item-news': ListsListItemNews;
      'lists.our-animals': ListsOurAnimals;
      'lists.rules-list': ListsRulesList;
      'news-items.figure': NewsItemsFigure;
      'news-items.figure-and-text': NewsItemsFigureAndText;
      'news-items.img-and-text': NewsItemsImgAndText;
      'news-items.rich-text': NewsItemsRichText;
      'news-items.slider': NewsItemsSlider;
      'news-items.slider-and-text': NewsItemsSliderAndText;
      'news-items.title': NewsItemsTitle;
      'news-items.video': NewsItemsVideo;
      'statistics.about-statistic': StatisticsAboutStatistic;
    }
  }
}
