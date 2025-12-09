import React from 'react';

export interface NavLink {
    name: string;
    value: string;
}

export interface ServiceData {
    title: string;
    icon: React.ReactElement;
    description: string;
    capabilities: string[];
    target: string;
}

export interface CaseStudyData {
    title: string;
    industry: string;
    problem: string;
    solution: string;
    outcome: string;
    tags: string[];
}

export interface BlogPostContent {
    type: 'h3' | 'p';
    text: string;
}

export interface BlogPostData {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    description: string;
    content: BlogPostContent[];
}

export interface NavigateFunction {
    (page: string): void;
}
