module.exports = function mathProtect(md) {
  function scanDelims(str, pos) {
    let ch = str.charCodeAt(pos);
    if (ch !== 0x24 /* $ */) return null;
    let count = 1;
    while (str.charCodeAt(pos + count) === 0x24) count++;
    return count; // 1 for $, 2 for $$
  }

  function parseInlineMath(state, silent) {
    const start = state.pos;
    const delims = scanDelims(state.src, start);
    if (!delims || delims > 2) return false;
    const marker = delims; // 1 or 2
    const open = marker === 2 ? '$$' : '$';
    const close = open;
    let pos = start + marker;
    while (pos < state.src.length) {
      // allow escaping \$ inside math
      if (state.src.charCodeAt(pos) === 0x5C /* \\ */ && state.src.charCodeAt(pos + 1) === 0x24) {
        pos += 2;
        continue;
      }
      const found = state.src.substr(pos, marker) === close;
      if (found) {
        const content = state.src.slice(start + marker, pos);
        if (!silent) {
          const token = state.push(marker === 2 ? 'math_block' : 'math_inline', '', 0);
          token.content = content;
          token.markup = open;
          token.block = marker === 2;
        }
        state.pos = pos + marker;
        return true;
      }
      pos++;
    }
    return false;
  }

  md.inline.ruler.before('escape', 'math_protect', parseInlineMath);
  md.renderer.rules.math_inline = (tokens, idx) => `\\(${tokens[idx].content}\\)`;
  md.renderer.rules.math_block = (tokens, idx) => `<p>$$\n${tokens[idx].content}\n$$</p>`;
};