import { emojiDictionary } from './emoji-dictionary';

// @Types
import { NodePath, PluginObj } from '@babel/core';
import { CallExpression } from '@babel/types';

const translateEmojiToJS = (): PluginObj => {
  return {
    visitor: {
      CallExpression(path: NodePath<CallExpression>) {
        const { callee } = path.node;
        if (
          callee &&
          callee.type === 'Identifier' &&
          Object.values(emojiDictionary).includes(callee.name!)
        ) {
          const emojiKey = Object.keys(emojiDictionary).find(
            (key) => emojiDictionary[key] === callee.name,
          )!;
          // Replace the callee name with the JavaScript equivalent
          callee.name = emojiDictionary[emojiKey];
        }
      },
    },
  };
};

export default translateEmojiToJS;
