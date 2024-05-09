import { StyleDefinition } from './style-definition.model';

export type ElementMap = Map<HTMLElement, BPStyleDefinisionMap>;

export type BPStyleDefinisionMap = Map<string, StyleDefinition[]>;

export type ElementClassMap = Map<HTMLElement, BPClassesMap>;

export type BPClassesMap = Map<string, string[]>;
