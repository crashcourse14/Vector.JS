#!/usr/bin/env node

import { spawn } from "child_process";

const args = process.argv.slice(2);
const latest_build_version = "1.0.1"

const command = args[0];
const flag = args[1];

if (command === "start") {

    console.log("[Vector] Starting dev server on port 8000...");

    const server = spawn(
        "python3",
        ["-m", "http.server", "8000"],
        {
            stdio: "inherit"
        }
    );

    server.on("close", (code) => {
        console.log(`[Vector] Server exited with code ${code}`);
    });

}

if (command  == "-version") {
    console.log(`[Vector] version ${latest_build_version}`);
}