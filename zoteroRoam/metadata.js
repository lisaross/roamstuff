window.LisaMetadataTemplate = function(item){
  let metadata = [];

  let metadataParentBlock = {string: "[[@" + item.key + "]]", children: []};

  // Adding the item's data to metadataParentBlock.children
  // Get title
  if (item.data.title) {
      metadataParentBlock.children.push("Title:: " + item.data.title);
  }

  // Get Authors
  if (item.data.creators.length > 0) {
      let creatorsList = item.data.creators.map(function (creator) {
          let nameTag = "[[" + [creator.firstName, creator.lastName].filter(Boolean).join(" ") + "]]";
          if (creator.creatorType != "author") {
              nameTag = nameTag + " (" + creator.creatorType + ")"
          }
          return nameTag;
      })
      metadataParentBlock.children.push("Author(s):: " + creatorsList.join(", "));
  }

  // Year
  if (item.data.date) {
      let date = new Date(item.data.date);
      metadataParentBlock.children.push("Year:: [[" + date.getFullYear() + "]]");
  }

  // Get publication (journal, or book, or website, ...)
  if (item.data.publicationTitle) {
      metadataParentBlock.children.push("Publication:: " + "[[" + item.data.publicationTitle + "]]");
  } else if (item.data.bookTitle) {
      metadataParentBlock.children.push("Publication:: (Book) [[" + item.data.bookTitle + "]]");
  }

  // Get Date Added
  if (item.data.dateAdded) {
      metadataParentBlock.children.push(`Date Added:: ${zoteroRoam.utils.makeDNP(item.data.dateAdded, {brackets: true})}`);
  }

  // Get Abstract
  if (item.data.abstractNote) {
      metadataParentBlock.children.push({string: "Abstract:: ", children: [`${item.data.abstractNote}`]});
  }

  // Source Status
  metadataParentBlock.children.push('Source Status:: [[Source Active]]');

  // Tags
  if (item.data.tags.length > 0) {
      metadataParentBlock.children.push(`Tags:: ${zoteroRoam.formatting.getTags(item)}`)
  };

  // Zotero links : local & web links to the item, PDF link
  let links = `Zotero links:: ${zoteroRoam.formatting.getLocalLink(item)}, ${zoteroRoam.formatting.getWebLink(item)}`;
  let children = zoteroRoam.formatting.getItemChildren(item, {pdf_as: "links"});
  if(children.pdfItems){
      links += `, ${children.pdfItems.join(", ")}`;
  }
  metadataParentBlock.children.push(links);

  // Get URL
  if (item.data.url) {
      metadataParentBlock.children.push(`URL:: [${item.data.url}](${item.data.url})`);
  }

  // Divider
  metadataParentBlock.children.push("---");

  // Now we add metadataParentBlock as the only element of the metadata array
  metadata.push(metadataParentBlock);

  return metadata;
}
