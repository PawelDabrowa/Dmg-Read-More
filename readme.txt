=== Dmg Read More ===
Contributors:      Pawel Dabrowa
Tags:              block
Tested up to:      6.1
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

# Dmg Read More Block

This is a custom WordPress block for displaying a "Read More" link to other posts.

## Description

A Gutenberg Block that allows editors to search for and then choose a published post to insert into the editor as a stylized anchor link.

### Features

- **Search and Select Posts**: Editors can search for posts in the `InspectorControls` using a search string. Recent posts are shown by default.
- **Paginated Results**: The search results are paginated.
- **Specific Post ID Search**: Support for searching a specific post ID.
- **Stylized Anchor Link**: The anchor text is the post title and the anchor href is the post permalink. The anchor is output within a paragraph element with a CSS class of `dmg-read-more` added to it. The anchor is prepended with the words `Read More:`.
- **Dynamic Updates**: Choosing a new post updates the anchor link shown in the editor.

## Development

To get started with development, clone the repository and install the dependencies:

```bash
git clone https://github.com/paweldabrowa/dmg-read-more.git
cd dmg-read-more
npm install
