// import http from "http"
// import fs from "fs/promises"
// const filereading = async (res, file, contentType) => {
//     try {
//         const data = await fs.readFile(file, 'utf8')
//         res.writeHead(200, { 'Content-Type': contentType })
//         res.end(data)
//     }
//     catch (err) {
//         res.writeHead(404, { 'Content-Type': "text/plain" })
//         res.end("404 page not found")
//     }
// }

// const loadLinkdata = async () => {
//     try {
//         const data = await fs.readFile("./links.json", 'utf8')
//         return JSON.parse(data)
//     } catch (error) {
//         if (error.code == "ENOENT") {
//             await fs.writeFile('links.json', JSON.stringify({}))
//             return {}
//         }
//         throw error
//     }
// }
// const saveFile = async (file, links) => {
//     await fs.writeFile(file, JSON.stringify(links));
// }
// const server = http.createServer(async (req, res) => {
//     if (req.method == 'GET') {
//         if (req.url == '/') {
//             return filereading(res, 'index.html', 'text/html')
//         }
//         else if (req.url == '/style.css') {
//             return filereading(res, 'style.css', 'text/css')
//         }
//         // res.end("welcome to home page")
//     }
   
//     if (req.method == "POST" && req.url == "/shortners") {
//         const links = await loadLinkdata()
//         console.log(links);

//         let body = ""
//         req.on("data", (chunk) => body += chunk)
//         req.on("end", async () => {
//             try {
//                 const { url, shortcode } = JSON.parse(body); // Parse the JSON string
//                 console.log(url, shortcode);

//                 if (!url) {
//                     res.writeHead(400, { "Content-Type": "text/plain" }); // 400 Bad Request
//                     return res.end("URL is required"); // Send a more helpful message
//                 }

//                 const finalshortcode = shortcode || crypto.randomBytes(4).toString("hex");

//                 if (links[finalshortcode]) {
//                     res.writeHead(409, { "Content-Type": "text/plain" }); // 409 Conflict
//                     return res.end("Short code already exists");
//                 }

//                 links[finalshortcode] = url;
//                 saveFile("./links.json", links)
//                 // Save the updated links.json, added pretty printing
//                 res.writeHead(201, { "Content-Type": "application/json" }); // 201 Created
//                 res.end(JSON.stringify({ shortUrl: `http://localhost:3001/${finalshortcode}` })); // Send back the shortened URL

//             } catch (error) {
//                 console.error("Error parsing JSON:", error);
//                 res.writeHead(400, { "Content-Type": "text/plain" }); // Bad request
//                 return res.end("Invalid JSON data");
//             }
//         })
//     }

// })

// server.listen(3001, (err) => {
//     if (err) throw err
//     else console.log("successfuly run the server on port number : 3001");

// })


import http from "http";
import fs from "fs/promises";
import crypto from "crypto"; // Fix 1: Import crypto module

const filereading = async (res, file, contentType) => {
    try {
        const data = await fs.readFile(file, "utf8");
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
};

const loadLinkdata = async () => {
    try {
        const data = await fs.readFile("./links.json", "utf8");
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile("./links.json", JSON.stringify({}));
            return {};
        }
        throw error;
    }
};

const saveFile = async (file, links) => {
    await fs.writeFile(file, JSON.stringify(links, null, 2)); // Fix 2: Properly format JSON for readability
};

const server = http.createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            return filereading(res, "index.html", "text/html");
        } else if (req.url === "/style.css") {
            return filereading(res, "style.css", "text/css");
        }

        // Fix 4: Handle redirection for short URLs
        const links = await loadLinkdata();
        const shortcode = req.url.slice(1); // Extract shortcode from URL
        if (links[shortcode]) {
            res.writeHead(302, { Location: links[shortcode] }); // 302 redirect to original URL
            return res.end();
        }

        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Short URL not found");
    }

    if (req.method === "POST" && req.url === "/shortners") {
        const links = await loadLinkdata();
        let body = "";

        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
            try {
                const { url, shortcode } = JSON.parse(body);
                if (!url) {
                    res.writeHead(400, { "Content-Type": "text/plain" });
                    return res.end("Error: URL is required");
                }

                let finalshortcode = shortcode || crypto.randomBytes(4).toString("hex");

                if (links[finalshortcode]) {
                    res.writeHead(409, { "Content-Type": "text/plain" });
                    return res.end("Error: Short code already exists");
                }

                links[finalshortcode] = url;
                await saveFile("./links.json", links); // Fix 3: Use 'await' to ensure data is saved before responding

                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(
                    JSON.stringify({ shortUrl: `http://localhost:3001/${finalshortcode}` })
                );
            } catch (error) {
                console.error("Error parsing JSON:", error);
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end("Invalid JSON data");
            }
        });
    }
});

server.listen(3001, (err) => {
    if (err) throw err;
    console.log("Server running on port 3001");
});
