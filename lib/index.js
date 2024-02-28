import { emojiDictionary } from './emoji-dictionary';

// @Types

export default (() => {
  return {
    visitor: {
      CallExpression(path) {
        const {
          callee
        } = path.node;
        if (callee && callee.type === 'Identifier' && Object.values(emojiDictionary).includes(callee.name)) {
          const emojiKey = Object.keys(emojiDictionary).find(key => emojiDictionary[key] === callee.name);
          // Replace the callee name with the JavaScript equivalent
          callee.name = emojiDictionary[emojiKey];
        }
      }
    }
  };
});