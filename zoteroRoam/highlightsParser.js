window.highlightsParser = function(notes){
  // Step 1
  let blocks = notes.flat(1);
  // Step 2

  blocks = blocks.map(b => {
    return !b.includes("Extracted Annotations") ? ("[[>]] " + b) : b;
  });
  // Step 3
  return blocks.map(b => zoteroRoam.utils.parseNoteBlock(b)).filter(b => b.trim());
}
