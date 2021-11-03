// To install the extension, simply add the code below :
var s = document.createElement("script");
s.src = "https://cdn.jsdelivr.net/npm/@alixlahuec/zotero-roam@0.6";
s.id = "zotero-roam";
s.type = "text/javascript";
document.getElementsByTagName("body")[0].appendChild(s);

zoteroRoam_settings = {
    dataRequests: {
        apikey: "jixwoKFl8PO78s7VKgBi4rHQ",
        dataURI: "users/8190206/items",
        params: "limit=100"
    },
  	funcmap: {
      DEFAULT: "LisaMetadataTemplate"
    },
  	shortcuts: {
      'toggleSearchPanel': {'ω': true, 'altKey': true, 'metaKey': true}
    },
   	pageMenu: {
        defaults: ["addMetadata", "importNotes", "viewItemInfo", "pdfLinks", "citingPapers", "openZoteroLocal", "sciteBadge", "connectedPapers", "googleScholar"]
    },
  	autocomplete: {
        trigger: '@', // Show autocomplete menu when typing @
        format: 'pageref', // Insert the item as @citekey
        display: 'citekey' // Show autocomplete menu items as citekeys
    },
  	notes: {
      	use: 'text',
	    split_char: '\n',
        func: "highlightsParser"
    }
}
