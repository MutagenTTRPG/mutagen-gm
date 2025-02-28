// src/data/loadTags.js
import tagData from './tags.json';
import Tag from '../models/Tag';

export const loadTags = () => {
  const tags = [];
  
  tagData.forEach(tagData => {
    const tag = new Tag(tagData);
    tags.push(tag);
  });

  return tags;
};
