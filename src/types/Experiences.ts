export enum ExperienceType {
    education = 'education',
    work = 'work'
}

export interface IExperience {
    date: string;
    title: string;
    subtitle: string;
    description: string;
    type: ExperienceType;
}