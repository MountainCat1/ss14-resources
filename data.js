// All site content lives here. To add a server, copy one entry in `servers` and edit it.
//
// hub: a regular expression tested against "<server name> <address>" for every server on the
//      official hub (hub.spacestation14.com). Matching servers add up to the live player count.
//      Leave it out if the project runs no public server.
// groups: link lists shown on the card. Each link is [label, url] or [label, url, note].

window.SS14 = {
  featured: {
    name: "Mounty Station Helper",
    url: "https://ss14.fireball.games",
    server: "Funky Station",
    blurb:
      "Every chem, drink, food recipe, lathe print, cargo bounty, plant and map, read straight from the server's game files. " +
      "Plans chems from the dispenser up, ranks poisons and botany yields, calculates space law sentences, and lets you write shareable shift guides.",
    pages: ["Chems", "Poisons", "Drinks", "Food", "Lathes", "Weapons & armor", "Cargo bounties", "Space law", "Botany", "Maps", "Guides"],
  },

  general: [
    {
      title: "Get the game",
      links: [
        ["Space Station 14 on Steam", "https://store.steampowered.com/app/1255460/Space_Station_14/"],
        ["Standalone launcher", "https://spacestation14.com/about/nightlies/"],
        ["Official website", "https://spacestation14.com/"],
      ],
    },
    {
      title: "Start here",
      links: [
        ["Jobs and their difficulty", "https://wiki.spacestation14.com/wiki/Jobs", "Official wiki"],
        ["Guide to Medical", "https://wiki.spacestation14.com/wiki/Guide_to_Medical", "Official wiki"],
        ["Reagents (chemistry)", "https://wiki.spacestation14.com/wiki/Chemistry", "Official wiki"],
        ["Engineering", "https://wiki.spacestation14.com/wiki/Engineering", "Official wiki"],
      ],
    },
    {
      title: "Tools",
      links: [
        ["Mounty Station Helper", "https://ss14.fireball.games", "Chems, food, botany, maps and more"],
        ["SS14 Cookbook", "https://heurl.in/ss14/recipes", "Recipe browser, per fork"],
        ["Development docs", "https://docs.spacestation14.com/", "Engine, content, game design"],
      ],
    },
  ],

  servers: [
    {
      id: "wizden",
      name: "Wizard's Den (official)",
      blurb: "The official servers, run by the SS14 developers on the upstream codebase. Most forks share these mechanics, so the official wiki is useful almost everywhere.",
      tags: ["English", "Official", "Station"],
      hub: "spacestation14\\.com",
      groups: [
        {
          title: "Wiki & guides",
          links: [
            ["Official wiki", "https://wiki.spacestation14.com/wiki/Main_Page"],
            ["Jobs", "https://wiki.spacestation14.com/wiki/Jobs"],
            ["Guide to Medical", "https://wiki.spacestation14.com/wiki/Guide_to_Medical"],
            ["Chemist", "https://wiki.spacestation14.com/wiki/Chemist"],
            ["Reagents", "https://wiki.spacestation14.com/wiki/Chemistry"],
            ["Engineering", "https://wiki.spacestation14.com/wiki/Engineering"],
            ["Station Engineer", "https://wiki.spacestation14.com/wiki/Station_Engineer"],
            ["Atmospheric Technician", "https://wiki.spacestation14.com/wiki/Atmospheric_Technician"],
            ["Science", "https://wiki.spacestation14.com/wiki/Science"],
            ["Server rules", "https://wiki.spacestation14.com/wiki/Server_Rules"],
            ["Wizard's Den servers", "https://wiki.spacestation14.com/wiki/Wizard's_Den_servers"],
          ],
        },
        {
          title: "Community & source",
          links: [
            ["Discord", "https://discord.ss14.io/"],
            ["Forum", "https://forum.spacestation14.com/"],
            ["Docs", "https://docs.spacestation14.com/"],
            ["GitHub", "https://github.com/space-wizards/space-station-14"],
          ],
        },
      ],
    },
    {
      id: "starlight",
      name: "Starlight",
      blurb: "Medium-roleplay station servers with their own launcher and a large playerbase.",
      tags: ["English", "Station", "MRP"],
      hub: "starlight\\.network",
      groups: [
        {
          title: "Links",
          links: [
            ["Website", "https://starlight.network"],
            ["Discord", "https://discord.com/invite/HyDhPwAmUq"],
            ["Starlight launcher", "https://github.com/ss14Starlight/Starlight.Launcher"],
            ["Developer docs", "https://docs.starlight.network/s/d49865f5-b555-4803-b5d7-5c2fde54fbd9/doc/developer-guides-Hf0UsFaugc"],
            ["GitHub", "https://github.com/ss14Starlight/space-station-14"],
          ],
        },
      ],
    },
    {
      id: "rmc",
      name: "Rouny's Marine Corps (RMC-14)",
      blurb: "Marines versus xenonids, based on Colonial Marines from SS13. A different game mode from the usual station shift.",
      tags: ["English", "Marines", "MRP"],
      hub: "Rouny",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "https://wiki.rouny-ss14.com/"],
            ["Discord", "https://discord.gg/rouny"],
            ["GitHub", "https://github.com/RMC-14/RMC-14"],
          ],
        },
      ],
    },
    {
      id: "goob",
      name: "Goob Station",
      blurb: "Popular fork with lots of extra content and antagonists, plus several regional servers.",
      tags: ["English", "Station", "MRP"],
      hub: "goobstation\\.com",
      groups: [
        {
          title: "Docs & guides",
          links: [
            ["Docs site", "https://docs.goobstation.com/"],
            ["Antagonists", "https://docs.goobstation.com/en/space-station-14/round-flow/antagonists.html", "Work in progress"],
            ["Design principles", "https://docs.goobstation.com/en/space-station-14/core-design/design-principles.html"],
            ["Admin policy", "https://docs.goobstation.com/en/community/admin/goob-station-admin-policy.html"],
          ],
        },
        {
          title: "Community & source",
          links: [
            ["Website", "https://goobstation.com"],
            ["Discord", "https://discord.gg/goobstation"],
            ["Forum", "https://forums.goobstation.com/"],
            ["GitHub", "https://github.com/Goob-Station/Goob-Station"],
          ],
        },
      ],
    },
    {
      id: "deltav",
      name: "Delta-V",
      blurb: "Medium-roleplay fork continuing Nyanotrasen, with its own wiki.",
      tags: ["English", "Station", "MRP"],
      hub: "deltav\\.gay",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "https://wiki.deltav.gay/view/Main_Page"],
            ["Website", "https://deltav.gay/"],
            ["Discord", "https://discord.gg/deltav"],
            ["GitHub", "https://github.com/DeltaV-Station/Delta-v"],
          ],
        },
      ],
    },
    {
      id: "funky",
      name: "Funky Station",
      blurb: "Medium-roleplay fork. Home server of Mounty Station Helper, which reads its data straight from Funky's game files.",
      tags: ["English", "Station", "MRP"],
      hub: "funkystation\\.org",
      groups: [
        {
          title: "Guides & tools",
          links: [
            ["Mounty Station Helper", "https://ss14.fireball.games", "Chems, food, botany, maps, space law"],
            ["Map renders", "https://wiki.funkystation.org/index.php?title=Maps"],
            ["Docs", "https://docs.funkystation.org/"],
          ],
        },
        {
          title: "Community & source",
          links: [
            ["Discord", "https://discord.gg/5FqgaAA2qF"],
            ["GitHub (Forky Station)", "https://github.com/funky-station/forky-station"],
          ],
        },
      ],
    },
    {
      id: "frontier",
      name: "Frontier Station",
      blurb: "Sandbox-style sector: buy a ship, take jobs and trade instead of running one station.",
      tags: ["English", "Ships", "MRP"],
      hub: "frontierstation14\\.com",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "https://frontierstation.wiki.gg/"],
            ["Discord", "https://discord.gg/rKNHDAGPvd"],
            ["GitHub", "https://github.com/new-frontiers-14/frontier-station-14"],
          ],
        },
      ],
    },
    {
      id: "monolith",
      name: "Monolith",
      blurb: "Frontier-based fork with its own ships and sector.",
      tags: ["English", "Ships", "MRP"],
      hub: "Monolith",
      groups: [
        {
          title: "Links",
          links: [
            ["Discord", "https://discord.gg/mxY4h2JuUw"],
            ["GitHub", "https://github.com/Monolith-Station/Monolith"],
          ],
        },
      ],
    },
    {
      id: "floof",
      name: "Floof Station",
      blurb: "Einstein Engines-based fork with its own wiki and cookbook.",
      tags: ["English", "Station"],
      hub: "floof",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "https://wiki.floofstation.com/index.php/Main_Page"],
            ["Cookbook", "https://heurl.in/ss14/recipes?fork=floof"],
            ["Discord", "https://discord.com/invite/floofstation"],
            ["GitHub", "https://github.com/Floof-Station/Floof-Station"],
          ],
        },
      ],
    },
    {
      id: "harmony",
      name: "Harmony",
      blurb: "Station fork with its own wiki.",
      tags: ["English", "Station"],
      hub: "harmony",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "http://wiki.harmony14.com/"],
            ["GitHub", "https://github.com/ss14-harmony/ss14-harmony"],
          ],
        },
      ],
    },
    {
      id: "impstation",
      name: "Impstation",
      blurb: "Station fork with lots of custom content.",
      tags: ["English", "Station"],
      hub: "impstation",
      groups: [
        {
          title: "Links",
          links: [
            ["Website", "https://impstation.gay/"],
            ["GitHub", "https://github.com/impstation/imp-station-14"],
          ],
        },
      ],
    },
    {
      id: "einstein",
      name: "Einstein Engines",
      blurb: "Baystation-inspired hard fork that many servers build on. It runs no server of its own; it also ships the Space Station Multiverse launcher.",
      tags: ["English", "Codebase"],
      groups: [
        {
          title: "Links",
          links: [
            ["Website", "https://simplestation.org"],
            ["Discord", "https://discord.gg/X4QEXxUrsJ"],
            ["Space Station Multiverse (Steam)", "https://store.steampowered.com/app/2585480/Space_Station_Multiverse/"],
            ["GitHub", "https://github.com/Simple-Station/Einstein-Engines"],
          ],
        },
      ],
    },
    {
      id: "corvax",
      name: "Corvax",
      blurb: "The largest Russian-language community, with its own wiki and several servers.",
      tags: ["Russian", "Station"],
      hub: "station14\\.ru|corvaxforge",
      groups: [
        {
          title: "Links",
          links: [
            ["Wiki", "https://station14.ru/"],
            ["Discord", "https://discord.station14.ru"],
            ["GitHub", "https://github.com/space-syndicate/space-station-14"],
          ],
        },
      ],
    },
    {
      id: "spacestories",
      name: "Space Stories",
      blurb: "Russian-language community running Marine Corps servers.",
      tags: ["Russian", "Marines"],
      hub: "spacestories",
      groups: [
        {
          title: "Links",
          links: [
            ["Discord", "https://discord.gg/space-stories"],
            ["GitHub", "https://github.com/Space-Stories/space-stories-14"],
          ],
        },
      ],
    },
  ],
};
