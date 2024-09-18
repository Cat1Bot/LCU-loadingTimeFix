# LCU-loadingTimeFix
Fixes the issue in patch 14.18 where the League client takes abnomally long time to load. For whatever dumb reason, Riot decided to hang the client loading until the publishing content is fully loaded, this means the client will take 2-3 times longer to load. This plugin fixes this by setting `/lol-lock-and-load/v1/should-wait-for-home-hubs` and `/lol-lock-and-load/v1/should-show-progress-bar-text` to `false` in the client configuration.
# How to install
First make sure you have Pengu Loader installed. Pengu loader is a javascript plugin loader the the League Client frontend, think of it like BetterDiscord or Vencord. After installing Pengu Loader, open the app (you may need to accept UAC prompt) then go the Plugins tab and click "Open folder", paste **LCUloadingfix.js** in there. To initialize the plugin, you can either restart the client or open devtools (F12/Ctrl+Shift+i) and refresh the client by pressing Crtl+r.
# Coming Soon
This plugin is part of a ultimate League Client debloatter plugin im currently working on. If you want to contact me, you can join Pengu Loader Discord server or my Discord handle is: c4t_bot
