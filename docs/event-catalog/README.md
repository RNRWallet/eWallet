[![Netlify Status](https://api.netlify.com/api/v1/badges/ff82b0cb-bbb5-4d49-b326-e4792d673420/deploy-status)](https://app.netlify.com/projects/medals-bringer-5v/deploys)

# eHailing EventCatalog

EventCatalog is used to document and visualize the event-driven architecture of eHailing. This tool helps maintain a clear understanding of all domain events flowing through our microservices.

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)

## Getting Started

1. Run `yarn install` to install dependencies
2. Run `yarn run dev` to start the development server
3. Setup `License Key` in `.env` file. See `.env.example` for reference.

### Adding New Events

To document a new event:

1. Create a new `event-name.yml` file in the appropriate service directory
2. Define the event schema and metadata
3. Add example payloads demonstrating the event format
4. Run `yarn run generate` to update the documentation
