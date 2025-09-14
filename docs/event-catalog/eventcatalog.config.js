import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const generateMarkdownForService = ({ service, markdown, document }) => {
  return `# ${service.name}

    ## Description
    ${document.info.description ? `${document.info.description}` : ""}

    ## Details
    ${markdown}
  `;
};
const generateMarkdownForMessage = ({ message, markdown, document }) => {
  return `# ${message.name}

    ## Description
    ${document.info.description ? `${document.info.description}` : ""}

    ## Details
    ${markdown}
  `;
};
const generateMarkdownForDomain = ({ domain, markdown }) => {
  return `# ${domain.name}

    ## Overview
    ${markdown}

    <Tiles>
      <Tile
        icon="UserGroupIcon"
        href="/docs/users/koneru9999"
        title="Contact the author"
        description="Any questions? Feel free to contact the owners"
      />
      <Tile
        icon="RectangleGroupIcon"
        href="/visualiser/domains/${frontmatter.id}/${frontmatter.version}"
        title="${frontmatter.services.length} services are in this domain"
        description="Explore the services in this domain"
      />
    </Tiles>

    ## Architecture Diagram
    <NodeGraph />
`;
};

/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */
export default {
  cId: '21803421-f734-4df0-b256-c38bb3d20690',
  title: "eHailing",
  tagline:
    "This internal platform provides a comprehensive view of our event-driven architecture across all systems. Use this portal to discover existing domains, explore services and their dependencies, and understand the message contracts that connect our infrastructure",
  organizationName: "eHailing",
  homepageLink: "https://github.com/RNRWaller/eWallet/",
  repositoryUrl: "https://github.com/RNRWaller/eWallet",
  editUrl: "https://github.com/RNRWaller/eWallet/edit/main/docs/event-catalog",
  trailingSlash: false,
  base: "/",
  mdxOptimize: true,
  mermaid: {
    iconPacks: ["logos"],
  },
  output: 'static',
  logo: {
    alt: "eHaling",
    src: "/logo.svg",
    text: "eHailing",
  },
  rss: {
    enabled: true,
    limit: 20,
  },
  docs: {
    sidebar: {
      type: "LIST_VIEW",
    },
  },
  sidebar: [
    {
      id: "/chat",
      visible: false,
    },
    {
      id: "/docs/custom",
      visible: false,
    },
  ],
  api: {
    fullCatalogAPIEnabled: true,
  },
  // generators: [
  //   [
  //     "@eventcatalog/generator-openapi",
  //     {
  //       services: [
  //         {
  //           path: path.join(__dirname, "openapi-files", "wallet-api.yml"),
  //           id: "Wallet Service",
  //           name: "Wallet Service",
  //           version: "1.0.0",
  //           generateMarkdown: generateMarkdownForService,
  //         },
  //       ],
  //       domain: {
  //         id: "wallet",
  //         name: "Wallet",
  //         version: "1.0.0",
  //         generateMarkdown: generateMarkdownForDomain,
  //       },
  //       sidebarBadgeType: "HTTP_METHOD",
  //       httpMethodsToMessages: {
  //         GET: "query",
  //         POST: "command",
  //         PUT: "command",
  //         DELETE: "command",
  //       },
  //     },
  //   ],
  // ],
  visualiser: {
    channels: {
      renderMode: "flat",
    },
  },
  environments: [
    {
      name: "Production",
      url: "https://ehailing.netlify.app/",
      description: "Production environment",
      shortName: "Prod",
    },
  ],
  llmsTxt: {
    enabled: true,
  },
};
