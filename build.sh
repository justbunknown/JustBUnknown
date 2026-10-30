#!/bin/bash

# JustBUnknown Application Deployment & Build Runner
# Enforces validation invariants before producing the distribution bundle.

set -e

# Define color outputs for terminal feedback
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}[1/4] Auditing local project runtime environment...${NC}"
if ! [ -x "$(command -v node)" ]; then
  echo 'Error: Node.js is required but not found in the host system path.' >&2
  exit 1
fi

# Ensure pristine dependency tree matches configuration requirements
if [ ! -d "node_modules" ]; then
  echo -e "${YELLOW}node_modules directory absent. Executing full lock-matched dependency retrieval...${NC}"
  npm install
fi

echo -e "${BLUE}[2/4] Executing static type ledger validation (TypeScript Compiler)...${NC}"
npm run lint || { echo 'TypeScript validation checks failed. Aborting build pass.'; exit 1; }

echo -e "${BLUE}[3/4] Purging obsolete local static target buffers...${NC}"
npm run clean || rm -rf dist

echo -e "${BLUE}[4/4] Executing asset packaging optimization pipeline via Vite...${NC}"
npm run build

echo -e "${GREEN}✓ Production-grade self-contained asset distribution compiled successfully inside /dist directory.${NC}"
