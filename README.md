# DelegateLab — Deterministic adversarial authorization cases

Open-source adversarial testing for Stellar delegated-account authorization. This repository owns the engine component.

Run `npm test` and `npm run demo`. Exports buildCorpus(policy), assess(corpus, observations) and modelRun(policy, options). Amounts are canonical decimal i128 strings; JavaScript floats are rejected. Unknown RPC failures must remain error observations.

Read [INTEGRATION.md](INTEGRATION.md) to run the connected workspace and [ROADMAP.md](ROADMAP.md) for the exact remaining scope. All five repositories: [engine](https://github.com/delegatelab/delegatelab-engine), [contracts](https://github.com/delegatelab/delegatelab-contracts), [backend](https://github.com/delegatelab/delegatelab-backend), [frontend](https://github.com/delegatelab/delegatelab-frontend), [fixtures](https://github.com/delegatelab/delegatelab-fixtures).

MIT licensed. Early fixture-focused testnet MVP, not a production wallet or security certification.
