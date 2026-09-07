// Generated from the latest formal Stable release.
(() => {
  const latestVersion = "v0.19.0";
  const apply = () => document.querySelectorAll('[data-latest-version]').forEach((node) => { node.textContent = latestVersion; });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply, { once:true });
  else apply();
  window.LYRASTAGE_LATEST_VERSION = latestVersion;
})();
