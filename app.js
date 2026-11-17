(function () {
  "use strict";

  const HUB_URL = "https://hub.spacestation14.com/api/servers";
  const REFRESH_MS = 2 * 60 * 1000;
  const data = window.SS14;

  const state = { query: "", tag: "All", sort: "players", hub: null };
  const $ = (id) => document.getElementById(id);

  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else node.setAttribute(k, v);
    }
    for (const c of children.flat()) {
      if (c == null || c === false) continue;
      node.append(c instanceof Node ? c : document.createTextNode(String(c)));
    }
    return node;
  }

  function link(label, url, note) {
    return el("li", null,
      el("a", { href: url, target: "_blank", rel: "noopener" }, label),
      note ? el("span", { class: "note" }, note) : null);
  }

  // ---- featured + general -------------------------------------------------

  function renderFeatured() {
    const f = data.featured;
    $("featured").append(
      el("div", { class: "featured-body" },
        el("p", { class: "eyebrow" }, "Featured tool · built for " + f.server),
        el("h2", null, el("a", { href: f.url, target: "_blank", rel: "noopener" }, f.name)),
        el("p", null, f.blurb),
        el("ul", { class: "pills" }, f.pages.map((p) => el("li", null, p)))),
      el("a", { class: "button", href: f.url, target: "_blank", rel: "noopener" }, "Open ss14.fireball.games"));
  }

  function renderGeneral() {
    $("general").append(...data.general.map((g) =>
      el("div", { class: "panel" },
        el("h3", null, g.title),
        el("ul", { class: "links" }, g.links.map((l) => link(...l))))));
  }

  // ---- hub ----------------------------------------------------------------

  function hubStats(server) {
    if (!state.hub || !server.hub) return null;
    const re = new RegExp(server.hub, "i");
    const hits = state.hub.filter((s) => re.test(s.label));
    return { players: hits.reduce((n, s) => n + s.players, 0), servers: hits.sort((a, b) => b.players - a.players) };
  }

  async function loadHub() {
    try {
      const res = await fetch(HUB_URL, { cache: "no-store" });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const list = await res.json();
      state.hub = list.map((s) => {
        const d = s.statusData || {};
        const name = d.name || s.address;
        return { name, address: s.address, label: name + " " + s.address, players: d.players || 0 };
      });
      const total = state.hub.reduce((n, s) => n + s.players, 0);
      const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      $("hub-status").textContent = `${total.toLocaleString()} players on ${state.hub.length} hub servers · updated ${time}`;
    } catch (err) {
      if (!state.hub) {
        $("hub-status").textContent = "Live player counts are unavailable right now.";
        state.sort = "name";
        $("sort").value = "name";
      }
    }
    renderServers();
    renderOthers();
  }

  // ---- servers --------------------------------------------------------------

  function allTags() {
    const set = new Set();
    data.servers.forEach((s) => s.tags.forEach((t) => set.add(t)));
    return ["All", ...[...set].sort()];
  }

  function renderTags() {
    const box = $("tags");
    box.replaceChildren(...allTags().map((t) =>
      el("button", { type: "button", class: "tag", "aria-pressed": String(t === state.tag) }, t)));
  }

  function haystack(s) {
    return [s.name, s.blurb, s.tags.join(" "), ...s.groups.flatMap((g) => [g.title, ...g.links.map((l) => l.join(" "))])]
      .join(" ").toLowerCase();
  }

  function card(s, stats) {
    const badge = stats
      ? el("span", { class: "live" + (stats.players ? "" : " off"), title: "Players online across this community's hub servers" },
          el("span", { class: "dot", "aria-hidden": "true" }),
          stats.players.toLocaleString() + " online")
      : null;

    const hubList = stats && stats.servers.length
      ? el("details", { class: "hublist" },
          el("summary", null, stats.servers.length + (stats.servers.length === 1 ? " server" : " servers") + " on the hub"),
          el("ul", null, stats.servers.map((h) => el("li", null, el("span", null, h.name), el("b", null, h.players)))))
      : null;

    return el("article", { class: "card", id: s.id },
      el("header", null,
        el("h3", null, s.name),
        badge),
      el("p", { class: "blurb" }, s.blurb),
      el("ul", { class: "pills small" }, s.tags.map((t) => el("li", null, t))),
      s.groups.map((g) => el("div", { class: "group" },
        el("h4", null, g.title),
        el("ul", { class: "links" }, g.links.map((l) => link(...l))))),
      hubList);
  }

  function renderServers() {
    const q = state.query.trim().toLowerCase();
    let list = data.servers
      .filter((s) => state.tag === "All" || s.tags.includes(state.tag))
      .filter((s) => !q || q.split(/\s+/).every((w) => haystack(s).includes(w)))
      .map((s) => ({ s, stats: hubStats(s) }));

    if (state.sort === "players" && state.hub) {
      // Official first is not assumed: sort purely by live players, then name.
      list.sort((a, b) => ((b.stats && b.stats.players) || 0) - ((a.stats && a.stats.players) || 0) || a.s.name.localeCompare(b.s.name));
    } else {
      list.sort((a, b) => a.s.name.localeCompare(b.s.name));
    }

    $("servers").replaceChildren(...list.map(({ s, stats }) => card(s, stats)));
    $("empty").hidden = list.length > 0;
  }

  function renderOthers() {
    if (!state.hub) return;
    const res = data.servers.filter((s) => s.hub).map((s) => new RegExp(s.hub, "i"));
    const others = state.hub
      .filter((h) => h.players > 0 && !res.some((re) => re.test(h.label)))
      .sort((a, b) => b.players - a.players)
      .slice(0, 12);
    $("others-wrap").hidden = others.length === 0;
    $("others").replaceChildren(...others.map((h) => el("li", null, el("span", null, h.name), el("b", null, h.players))));
  }

  // ---- wiring ---------------------------------------------------------------

  $("search").addEventListener("input", (e) => { state.query = e.target.value; renderServers(); });
  $("sort").addEventListener("change", (e) => { state.sort = e.target.value; renderServers(); });
  $("tags").addEventListener("click", (e) => {
    const b = e.target.closest("button.tag");
    if (!b) return;
    state.tag = b.textContent;
    renderTags();
    renderServers();
  });

  renderFeatured();
  renderGeneral();
  renderTags();
  renderServers();
  loadHub();
  setInterval(loadHub, REFRESH_MS);
})();
