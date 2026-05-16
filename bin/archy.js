#!/usr/bin/env node

import { exec, spawn } from "child_process";
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const latest_build_version = "1.0.1"

const command = args[0];
const flag = args[1];

if (command === "-start") {

    console.log("[Archy] Starting dev server on port 8000...");

    const server = spawn(
        "python3",
        ["-m", "http.server", "8000"],
        {
            stdio: "inherit"
        }
    );

    server.on("close", (code) => {
        console.log(`[Archy] Server exited with code ${code}`);
    });

}

if (command  == "-version") {
    console.log(`[Archy] version ${latest_build_version}`);
}

if (command == "-plugins") {
    try {
        const pluginsDir = path.join(process.cwd(), "plugins");

        if (!fs.existsSync(pluginsDir)) {
            console.log('[Archy] No plugins directory found at ./plugins/');
        } else {
            const entries = fs.readdirSync(pluginsDir, { withFileTypes: true });
            const pluginNames = entries
                .filter(e => e.isDirectory() || e.isFile())
                .map(e => e.name);

            if (pluginNames.length === 0) {
                console.log('[Archy] No plugins found in ./plugins/');
            } else {
                console.log('[Archy] Plugins:');
                pluginNames.forEach(n => console.log(` - ${n}`));
            }
        }
    } catch (err) {
        console.error('[Archy] Error reading plugins:', err.message || err);
    }
}

if (command == "help") {
    console.log("[Archy]: archy -start to start a server");
    console.log("[Archy]: archy -version to see current version");
    console.log("[Archy]: archy -plugins to see all plugins in ./plugins/");
    console.log("[Archy]: archy -commit to commit changes to git");
}

if (command == "-commit") {
    spawn("./scripts/commit.sh", [], { stdio: "inherit" });
}