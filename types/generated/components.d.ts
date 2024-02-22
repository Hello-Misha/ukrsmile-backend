import type { Schema, Attribute } from '@strapi/strapi';

export interface MetaMetaTitle extends Schema.Component {
  collectionName: 'components_meta_meta_titles';
  info: {
    displayName: 'metaData';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.String & Attribute.Required;
  };
}

export interface ProjectPageReferences extends Schema.Component {
  collectionName: 'components_project_page_references';
  info: {
    displayName: 'references';
    icon: 'heart';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.String;
    reference: Attribute.Text;
    href: Attribute.String;
  };
}

export interface ProjectPageResults extends Schema.Component {
  collectionName: 'components_project_page_results';
  info: {
    displayName: 'results';
    icon: 'gift';
  };
  attributes: {
    number: Attribute.Integer;
    description: Attribute.String;
  };
}

export interface ProjectPageUsefulLinks extends Schema.Component {
  collectionName: 'components_project_page_useful_links';
  info: {
    displayName: 'usefulLinks';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'meta.meta-title': MetaMetaTitle;
      'project-page.references': ProjectPageReferences;
      'project-page.results': ProjectPageResults;
      'project-page.useful-links': ProjectPageUsefulLinks;
    }
  }
}
