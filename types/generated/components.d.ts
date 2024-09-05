import type { Struct, Schema } from '@strapi/strapi';

export interface ResumeComponentsSkills extends Struct.ComponentSchema {
  collectionName: 'components_resume_components_skills';
  info: {
    displayName: 'Skills';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface ResumeComponentsExperience extends Struct.ComponentSchema {
  collectionName: 'components_resume_components_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    startDate: Schema.Attribute.Date;
    endDate: Schema.Attribute.Date;
    workSummery: Schema.Attribute.Text;
  };
}

export interface ResumeComponentsEducation extends Struct.ComponentSchema {
  collectionName: 'components_resume_components_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'resume-components.skills': ResumeComponentsSkills;
      'resume-components.experience': ResumeComponentsExperience;
      'resume-components.education': ResumeComponentsEducation;
    }
  }
}
