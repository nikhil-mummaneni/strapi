import type { Schema, Struct } from '@strapi/strapi';

export interface DemoComponent1 extends Struct.ComponentSchema {
  collectionName: 'components_demo_component_1s';
  info: {
    displayName: 'Component 1';
    icon: 'eye';
  };
  attributes: {
    Admin: Schema.Attribute.Boolean;
    Description: Schema.Attribute.Blocks;
    Email: Schema.Attribute.Email;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Title: Schema.Attribute.String;
  };
}

export interface DemoComponent2 extends Struct.ComponentSchema {
  collectionName: 'components_demo_component2s';
  info: {
    displayName: 'Component2';
    icon: 'clock';
  };
  attributes: {
    Admin: Schema.Attribute.Boolean;
    Date: Schema.Attribute.Date;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface DemoDynamic extends Struct.ComponentSchema {
  collectionName: 'components_demo_dynamics';
  info: {
    displayName: 'Dynamic';
  };
  attributes: {
    Description: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'demo.component-1': DemoComponent1;
      'demo.component2': DemoComponent2;
      'demo.dynamic': DemoDynamic;
    }
  }
}
