function makeItem(pageUrl, node) {
    let item = glib.DataItem.new();
    let tds = node.querySelectorAll('td');
    let link = tds[0].querySelector('a');
    item.link = pageUrl.href(link.attr('href'));
    item.title = link.text;
    let subtitle = `Rating:${tds[2].text.trim()}`;
    let type = tds[1].text.trim();
    if (type.length > 0) {
        subtitle += ` Type:${type}`;
    }
    item.subtitle = subtitle;
    return item;
}

module.exports = makeItem;