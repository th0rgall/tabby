## 0.5.0

### Incompatible Changes:

- VSCode version requirement is now `≥ 1.82.0`.
- System proxy environment variables are now ignored, including `http_proxy`, `https_proxy`, `all_proxy` and `no_proxy`. Before this change, proxy environment variables are processed, but requests will fail due to lack of supporting for https over http proxy and socks proxy.

### Fixes:

- Fixed a bug that causes auto completion requests cannot be cancelled.

## 0.4.1

### Fixes:

- Updated expired links in the documentation.
- Migrated Tabby cloud authorization tokens and anonymous usage tracking id from the old data directory to the new one.

## 0.4.0

### Features:

- Relocated the user data directory from `$HOME/.tabby/agent` to `$HOME/.tabby-client/agent` to avoid conflicts with Tabby server data. Note that the old data will not be migrated automatically. Please update the config file manually if you have made changes in the old path.
- Added a template config file for Tabby client agent located at `$HOME/.tabby-client/agent/config.toml`.
- Improved code suggestion filtering by indentation context. Suggestions now prioritize completing the current line or logic block, preventing excessively long suggestions.
- Added adaptive completion debouncing for auto completion requests.

### Fixes:

- Resolved conflict with the auto completion widget. The Tabby inline completion will no longer be displayed when the auto completion widget is visible.

## 0.3.0

### Features:

- Added check to see if the editor inline suggestion is enabled. Notifies the user to enable it if it's not.
- Added timeout for auto completion requests. The default timeout is 5 seconds. Added statistics for completion response time and notifies the user if it is too slow.
- Supported setting HTTP request headers in `$HOME/.tabby/agent/config.toml`. The `Authorization` header can be used to set a token for self-hosted servers authorization.

## 0.2.1

### Fixes:

- Set keybindings for accepting inline completion default to VSCode-style, mark Tabby-Style as experimental.

## 0.1.2

### Features:

- Added Tabby extension walkthrough guides.
- Added Tabby-Style keybindings for accepting inline completion as an alternative to VSCode default keybindings.
- Supported reading user config from `$HOME/.tabby/agent/config.toml`, instead of `Developer Options` in extension settings.

### Fixes:

- Improved code suggestion filtering to avoid showing bad suggestions:
  - similar to suffix lines
  - containing repetitive patterns