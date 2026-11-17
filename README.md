# SS14 Resources

A static GitHub Pages site that collects wikis, guides, tools and community links for
Space Station 14, sorted by server. Each server card shows its live player count from the
official hub (`hub.spacestation14.com/api/servers`), and the list sorts by who's busiest right now.

No build step: plain HTML, CSS and JavaScript.

## Files

- `index.html`: page layout
- `data.js`: **all content**: the featured tool, the "for every server" links, and one entry per server
- `app.js`: rendering, search, tag filter, live hub counts
- `style.css`: styles, light and dark themes

## Adding or editing a server

Copy an entry in `servers` in `data.js` and change it:

```js
{
  id: "myserver",
  name: "My Server",
  blurb: "One sentence about it.",
  tags: ["English", "Station", "MRP"],
  hub: "myserver\\.org",          // regex matched against hub server name + address
  groups: [
    { title: "Links", links: [["Wiki", "https://..."], ["Discord", "https://...", "optional note"]] },
  ],
}
```

Servers on the hub with players that match no card show up under "Also busy right now",
which is a handy list of what to add next.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder to it.
2. In the repository, open **Settings → Pages**, set **Source** to "Deploy from a branch",
   and pick `main` and `/ (root)`.
3. The site goes live at `https://<user>.github.io/<repo>/`.
