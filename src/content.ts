let removeCount = 0;

function removeSections() {
  const triggerWords = ['cause', 'complication', 'outlook', 'why'];

  const headingsAndNavLinks = Array.from(document.querySelectorAll('h2, h3, nav a'));

  headingsAndNavLinks.forEach((headingOrNavLink) => {
    triggerWords.forEach((triggerWord) => {
      if (headingOrNavLink.textContent.toLowerCase().includes(triggerWord)) {
        headingOrNavLink.parentElement.remove();
        removeCount++;
      }
    });
  });
}

function removeRefs() {
  const triggerWords = [
    'cancer',
    'chemotherapy',
    'diabetes',
    'fatal',
    'mortality',
    'radiotherapy',
    'terminal',
    'tumor',
  ];

  const textElements = Array.from(document.querySelectorAll('article p, article li'));

  textElements.forEach((line) => {
    triggerWords.forEach((triggerWord) => {
      if (line.textContent.toLowerCase().includes(triggerWord)) {
        line.remove();
        removeCount++;
      }
    });
  });
}

function removeEmptyListHeadings() {
  const lists = Array.from(document.querySelectorAll('article ul'));

  lists.forEach((list) => {
    if (list.childElementCount === 0) {
      list.previousSibling.remove();
    }
  });
}

removeSections();
removeRefs();
removeEmptyListHeadings();

console.log('Loaded NHS Health Anxiety!');
console.log('Removing scary sections and references');
console.log(`Removed ${removeCount} items`);
